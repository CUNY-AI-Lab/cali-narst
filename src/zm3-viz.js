'use strict';
(function () {
  var slide = document.querySelector('section[data-slide="zach-talk-3"]');
  if (!slide) return;
  var figure = slide.querySelector('figure.stage');
  if (!figure) return;
  figure.removeAttribute('aria-hidden');
  figure.style.position = figure.style.position || 'relative';
  var canvas = document.createElement('canvas');
  canvas.id = 'zm3-canvas';
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;';
  figure.appendChild(canvas);

  var HR = '232,200,159';
  var BG = '#080b10';

  // Tool pictograms — each described as a sequence of primitive strokes
  // (paths in a canonical 20x20 box, centered at origin). Strokes are
  // {type, ...} where type ∈ line|circle|arc|poly.
  // All strokes render at 1px hairline.
  var TOOLS = [
    { // wrench
      strokes: [
        { t: 'line', x1: -8, y1: 6, x2: 4, y2: -6 },
        { t: 'circle', x: 6, y: -8, r: 3 },
        { t: 'line', x1: -8, y1: 6, x2: -10, y2: 8 },
        { t: 'line', x1: -10, y1: 8, x2: -6, y2: 10 }
      ]
    },
    { // hammer
      strokes: [
        { t: 'poly', pts: [[-8, -6], [4, -6], [4, -2], [-8, -2]] },
        { t: 'line', x1: -2, y1: -2, x2: -2, y2: 10 }
      ]
    },
    { // screwdriver
      strokes: [
        { t: 'line', x1: -8, y1: -8, x2: -2, y2: -2 },
        { t: 'line', x1: -2, y1: -2, x2: 8, y2: 8 },
        { t: 'poly', pts: [[-8, -8], [-10, -6], [-6, -10]] }
      ]
    },
    { // ruler
      strokes: [
        { t: 'poly', pts: [[-10, -3], [10, -3], [10, 3], [-10, 3]] },
        { t: 'line', x1: -6, y1: -3, x2: -6, y2: 0 },
        { t: 'line', x1: -2, y1: -3, x2: -2, y2: 0 },
        { t: 'line', x1: 2, y1: -3, x2: 2, y2: 0 },
        { t: 'line', x1: 6, y1: -3, x2: 6, y2: 0 }
      ]
    },
    { // compass (drawing compass)
      strokes: [
        { t: 'line', x1: 0, y1: -9, x2: -7, y2: 8 },
        { t: 'line', x1: 0, y1: -9, x2: 7, y2: 8 },
        { t: 'circle', x: 0, y: -9, r: 1.2 },
        { t: 'arc', x: 0, y: 2, r: 8, a1: 0.35, a2: Math.PI - 0.35 }
      ]
    },
    { // caliper
      strokes: [
        { t: 'line', x1: -10, y1: -2, x2: 10, y2: -2 },
        { t: 'line', x1: -10, y1: -2, x2: -10, y2: 6 },
        { t: 'line', x1: 0, y1: -2, x2: 0, y2: 6 },
        { t: 'line', x1: -10, y1: 2, x2: 0, y2: 2 }
      ]
    },
    { // clamp
      strokes: [
        { t: 'line', x1: -6, y1: -8, x2: -6, y2: 8 },
        { t: 'line', x1: 6, y1: -8, x2: 6, y2: 8 },
        { t: 'line', x1: -6, y1: 0, x2: 6, y2: 0 },
        { t: 'line', x1: 6, y1: 6, x2: 10, y2: 6 },
        { t: 'line', x1: 10, y1: 6, x2: 10, y2: -6 }
      ]
    },
    { // soldering iron
      strokes: [
        { t: 'poly', pts: [[-10, 2], [4, 2], [4, -2], [-10, -2]] },
        { t: 'line', x1: 4, y1: 0, x2: 10, y2: -6 },
        { t: 'line', x1: -10, y1: 0, x2: -12, y2: 0 }
      ]
    },
    { // pencil
      strokes: [
        { t: 'line', x1: -8, y1: 8, x2: 6, y2: -6 },
        { t: 'line', x1: 6, y1: -6, x2: 9, y2: -3 },
        { t: 'line', x1: 9, y1: -3, x2: 8, y2: 8 },
        { t: 'line', x1: -8, y1: 8, x2: 8, y2: 8 }
      ]
    },
    { // clipboard
      strokes: [
        { t: 'poly', pts: [[-6, -8], [6, -8], [6, 10], [-6, 10]] },
        { t: 'line', x1: -2, y1: -9, x2: 2, y2: -9 },
        { t: 'line', x1: -3, y1: -2, x2: 3, y2: -2 },
        { t: 'line', x1: -3, y1: 2, x2: 3, y2: 2 },
        { t: 'line', x1: -3, y1: 6, x2: 3, y2: 6 }
      ]
    },
    { // saw-blade
      strokes: [
        { t: 'circle', x: 0, y: 0, r: 8 },
        { t: 'circle', x: 0, y: 0, r: 2 },
        { t: 'line', x1: 0, y1: -8, x2: 1, y2: -10 },
        { t: 'line', x1: 1, y1: -10, x2: 2, y2: -8 },
        { t: 'line', x1: 6, y1: -5, x2: 8, y2: -6 },
        { t: 'line', x1: 8, y1: -6, x2: 7, y2: -4 },
        { t: 'line', x1: 8, y1: 4, x2: 10, y2: 3 },
        { t: 'line', x1: 10, y1: 3, x2: 8, y2: 6 }
      ]
    },
    { // magnet (horseshoe)
      strokes: [
        { t: 'arc', x: 0, y: 0, r: 8, a1: Math.PI, a2: Math.PI * 2 },
        { t: 'line', x1: -8, y1: 0, x2: -8, y2: 6 },
        { t: 'line', x1: 8, y1: 0, x2: 8, y2: 6 },
        { t: 'line', x1: -8, y1: 6, x2: -4, y2: 6 },
        { t: 'line', x1: 8, y1: 6, x2: 4, y2: 6 },
        { t: 'line', x1: -4, y1: 0, x2: -4, y2: 6 },
        { t: 'line', x1: 4, y1: 0, x2: 4, y2: 6 }
      ]
    }
  ];

  var ctx, W, H, dpr, raf, frame = 0, running = false;
  var tools = [];          // runtime tool instances
  var assembly = null;     // current composite assembly (or null)
  var assemblyTimer = 0;
  var ASSEMBLY_EVERY = 340; // frames
  var drag = null;

  function seed() {
    tools = [];
    var N = TOOLS.length;
    for (var i = 0; i < N; i++) {
      tools.push({
        def:    TOOLS[i],
        x:      W * (0.15 + Math.random() * 0.7),
        y:      H * (0.15 + Math.random() * 0.7),
        rot:    (Math.random() - 0.5) * Math.PI,
        scale:  Math.min(W, H) * (0.06 + Math.random() * 0.02),
        vx:     (Math.random() - 0.5) * 0.25,
        vy:     (Math.random() - 0.5) * 0.25,
        vr:     (Math.random() - 0.5) * 0.004,
        phase:  Math.random() * Math.PI * 2,
        // assembly target (when engaged)
        tx: 0, ty: 0, trot: 0, tscale: 0, inAssembly: false
      });
    }
    assembly = null;
    assemblyTimer = 200;
  }

  function reset() {
    dpr = window.devicePixelRatio || 1;
    W   = canvas.clientWidth;
    H   = canvas.clientHeight;
    if (!W || !H) return false;
    canvas.width  = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    seed();
    return true;
  }

  function drawTool(t, alpha) {
    ctx.save();
    ctx.translate(t.x, t.y);
    ctx.rotate(t.rot);
    var s = t.scale / 10; // pictograms drawn in 20x20 box; scale factor
    ctx.scale(s, s);
    ctx.strokeStyle = 'rgba(' + HR + ',' + alpha + ')';
    ctx.lineWidth = 1 / s;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    var strokes = t.def.strokes;
    for (var i = 0; i < strokes.length; i++) {
      var sk = strokes[i];
      ctx.beginPath();
      if (sk.t === 'line') {
        ctx.moveTo(sk.x1, sk.y1);
        ctx.lineTo(sk.x2, sk.y2);
      } else if (sk.t === 'circle') {
        ctx.arc(sk.x, sk.y, sk.r, 0, Math.PI * 2);
      } else if (sk.t === 'arc') {
        ctx.arc(sk.x, sk.y, sk.r, sk.a1, sk.a2);
      } else if (sk.t === 'poly') {
        for (var p = 0; p < sk.pts.length; p++) {
          if (p === 0) ctx.moveTo(sk.pts[p][0], sk.pts[p][1]);
          else ctx.lineTo(sk.pts[p][0], sk.pts[p][1]);
        }
        ctx.closePath();
      }
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawWorkbench() {
    ctx.save();
    ctx.strokeStyle = 'rgba(' + HR + ',0.06)';
    ctx.lineWidth = 1;
    var step = 48;
    for (var x = step; x < W; x += step) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (var y = step; y < H; y += step) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
    ctx.restore();
  }

  function startAssembly() {
    // pick 4-6 tools (excluding currently dragged)
    var pool = tools.filter(function (t) { return t !== drag; });
    pool.sort(function () { return Math.random() - 0.5; });
    var n = 4 + Math.floor(Math.random() * 3);
    var chosen = pool.slice(0, n);
    var cx = W * (0.3 + Math.random() * 0.4);
    var cy = H * (0.3 + Math.random() * 0.4);
    var R  = Math.min(W, H) * 0.14;
    for (var i = 0; i < chosen.length; i++) {
      var angle = (i / chosen.length) * Math.PI * 2 + Math.random() * 0.3;
      var r     = R * (0.4 + Math.random() * 0.6);
      chosen[i].tx     = cx + Math.cos(angle) * r;
      chosen[i].ty     = cy + Math.sin(angle) * r;
      chosen[i].trot   = angle + Math.PI / 2 + (Math.random() - 0.5) * 0.4;
      chosen[i].tscale = chosen[i].scale * (0.9 + Math.random() * 0.25);
      chosen[i].inAssembly = true;
    }
    assembly = { members: chosen, age: 0, holdDone: false };
  }

  function endAssembly() {
    if (!assembly) return;
    for (var i = 0; i < assembly.members.length; i++) {
      var t = assembly.members[i];
      t.inAssembly = false;
      t.vx = (Math.random() - 0.5) * 0.4;
      t.vy = (Math.random() - 0.5) * 0.4;
      t.vr = (Math.random() - 0.5) * 0.006;
    }
    assembly = null;
  }

  function updateTool(t) {
    if (t === drag) return; // drag handled by pointer
    if (t.inAssembly && assembly) {
      // ease to target
      t.x   += (t.tx - t.x) * 0.06;
      t.y   += (t.ty - t.y) * 0.06;
      // shortest-angle rotate
      var dr = t.trot - t.rot;
      while (dr > Math.PI) dr -= Math.PI * 2;
      while (dr < -Math.PI) dr += Math.PI * 2;
      t.rot += dr * 0.08;
    } else {
      t.x += t.vx;
      t.y += t.vy;
      t.rot += t.vr;
      // gentle wobble
      t.phase += 0.02;
      t.vx += Math.cos(t.phase) * 0.004;
      t.vy += Math.sin(t.phase * 1.1) * 0.004;
      t.vx *= 0.985;
      t.vy *= 0.985;
      // soft bounds
      var m = 30;
      if (t.x < m) t.vx += 0.04;
      if (t.x > W - m) t.vx -= 0.04;
      if (t.y < m) t.vy += 0.04;
      if (t.y > H - m) t.vy -= 0.04;
    }
  }

  function draw() {
    if (!ctx || !W || !H) return;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = BG;
    ctx.fillRect(0, 0, W, H);

    drawWorkbench();

    // Assembly timing
    if (!assembly) {
      assemblyTimer -= 1;
      if (assemblyTimer <= 0) {
        startAssembly();
      }
    } else {
      assembly.age += 1;
      if (!assembly.holdDone && assembly.age > 110) assembly.holdDone = true;
      if (assembly.age > 190) {
        endAssembly();
        assemblyTimer = ASSEMBLY_EVERY;
      }
    }

    // Faint hairline between assembly members (implies composite silhouette)
    if (assembly) {
      ctx.save();
      ctx.strokeStyle = 'rgba(' + HR + ',0.14)';
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 4]);
      ctx.beginPath();
      for (var i = 0; i < assembly.members.length; i++) {
        var m = assembly.members[i];
        if (i === 0) ctx.moveTo(m.x, m.y);
        else ctx.lineTo(m.x, m.y);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }

    for (var i = 0; i < tools.length; i++) {
      updateTool(tools[i]);
      var a = 0.6;
      if (tools[i].inAssembly) a = 0.85;
      if (tools[i] === drag) a = 1.0;
      drawTool(tools[i], a);
    }

    frame++;
  }

  function loop() { if (!running) return; draw(); raf = requestAnimationFrame(loop); }

  function start() {
    if (running) return;
    if (!reset()) return;
    running = true;
    loop();
  }

  function stop() { running = false; cancelAnimationFrame(raf); }

  function hitTest(mx, my) {
    var best = null, bestD = Infinity;
    for (var i = 0; i < tools.length; i++) {
      var t  = tools[i];
      var dx = mx - t.x, dy = my - t.y;
      var d  = Math.sqrt(dx * dx + dy * dy);
      if (d < t.scale * 1.3 && d < bestD) { best = t; bestD = d; }
    }
    return best;
  }

  canvas.addEventListener('pointerdown', function (e) {
    var r = canvas.getBoundingClientRect();
    var hit = hitTest(e.clientX - r.left, e.clientY - r.top);
    if (hit) {
      drag = hit;
      hit.inAssembly = false;
      canvas.setPointerCapture(e.pointerId);
    }
  });
  canvas.addEventListener('pointermove', function (e) {
    if (!drag) return;
    var r = canvas.getBoundingClientRect();
    drag.x = e.clientX - r.left;
    drag.y = e.clientY - r.top;
  });
  canvas.addEventListener('pointerup', function (e) {
    if (drag) {
      drag.vx = 0; drag.vy = 0;
      drag = null;
      try { canvas.releasePointerCapture(e.pointerId); } catch (_) {}
    }
  });
  canvas.addEventListener('pointercancel', function () { drag = null; });

  canvas.__deckResize = function () {
    var was = running; stop(); if (was) start();
  };

  var section = canvas.closest('section.slide');
  if (section) {
    new IntersectionObserver(function (entries) {
      entries[0].isIntersecting ? start() : stop();
    }, { threshold: 0.2 }).observe(section);
  }

  var rto;
  window.addEventListener('resize', function () {
    clearTimeout(rto);
    rto = setTimeout(function () { var was = running; stop(); if (was) start(); }, 150);
  });
}());
