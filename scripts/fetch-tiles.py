#!/usr/bin/env python3
"""
Fetch CartoDB dark basemap tiles for the CUNY-campus map slide (LW5) and
cache them under vendor/tiles/{layer}/{z}/{x}/{y}.png so the deck runs offline.

Re-run from the cali-narst/ repo root:
    python3 scripts/fetch-tiles.py
"""
from __future__ import annotations
import math
import sys
import time
import urllib.request
from pathlib import Path

LAYERS = ("dark_nolabels", "dark_only_labels")
SUBDOMAINS = ("a", "b", "c", "d")
ZOOMS = range(9, 14)
BBOX = (40.48, -74.30, 40.93, -73.68)  # (min_lat, min_lon, max_lat, max_lon) — NYC + CUNY outliers
PAD = 1
ROOT = Path(__file__).resolve().parent.parent / "vendor" / "tiles"
UA = "Mozilla/5.0 cali-narst offline cache"


def deg2num(lat_deg: float, lon_deg: float, zoom: int) -> tuple[int, int]:
    lat_rad = math.radians(lat_deg)
    n = 2.0 ** zoom
    x = int((lon_deg + 180.0) / 360.0 * n)
    y = int((1.0 - math.log(math.tan(lat_rad) + 1 / math.cos(lat_rad)) / math.pi) / 2.0 * n)
    return x, y


def tile_range(zoom: int) -> tuple[range, range]:
    min_lat, min_lon, max_lat, max_lon = BBOX
    x0, y1 = deg2num(min_lat, min_lon, zoom)
    x1, y0 = deg2num(max_lat, max_lon, zoom)
    xs = range(max(0, min(x0, x1) - PAD), min(2 ** zoom, max(x0, x1) + PAD + 1))
    ys = range(max(0, min(y0, y1) - PAD), min(2 ** zoom, max(y0, y1) + PAD + 1))
    return xs, ys


def fetch(layer: str, z: int, x: int, y: int, sub_idx: int = 0) -> bool:
    target = ROOT / layer / str(z) / str(x) / f"{y}.png"
    if target.exists() and target.stat().st_size > 0:
        return False
    sub = SUBDOMAINS[sub_idx % len(SUBDOMAINS)]
    url = f"https://{sub}.basemaps.cartocdn.com/{layer}/{z}/{x}/{y}.png"
    target.parent.mkdir(parents=True, exist_ok=True)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=15) as r:
            target.write_bytes(r.read())
        return True
    except Exception as exc:
        sys.stderr.write(f"{url}: {exc}\n")
        return False


def main() -> int:
    total_new = 0
    total_seen = 0
    for z in ZOOMS:
        xs, ys = tile_range(z)
        for i, x in enumerate(xs):
            for j, y in enumerate(ys):
                for layer in LAYERS:
                    total_seen += 1
                    if fetch(layer, z, x, y, i + j):
                        total_new += 1
                        if total_new % 40 == 0:
                            time.sleep(0.15)
    total_bytes = sum(p.stat().st_size for p in ROOT.rglob("*.png"))
    print(f"tiles: checked {total_seen}, fetched {total_new}, on-disk {total_bytes/1024:.0f} KB")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
