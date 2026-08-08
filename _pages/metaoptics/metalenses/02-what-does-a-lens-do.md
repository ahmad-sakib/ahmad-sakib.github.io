---
title: "What Does a Lens Do?"
layout: single
permalink: /metaoptics/metalenses/what-does-a-lens-do/
author_profile: false
sidebar:
  nav: "metalenses"
---

A lens does one simple but powerful thing: it changes the shape of a light wavefront so the light converges or diverges. Fundamentally, this happens through phase: different parts of the wave accumulate different phase delays as they pass through the lens.

For a concave lens, the edges are thinner than the center. Light that goes through the edge experiences a smaller phase accumulation, while light through the thicker center accumulates more phase. This variation in phase across the lens changes a flat incoming wavefront into a curved one.

That change in wavefront shape is what makes the lens focus. In the case of a concave lens, the wavefront becomes more diverging, as if the light came from a virtual focus behind the lens. The thickness profile of the lens is what sets the phase differences: small phase delay at the edge, large phase delay at the center.

So while lens geometry and thickness are important, the real physical player is the phase shift. The optical path through the lens determines how much phase each ray picks up, and the phase profile across the aperture controls whether the light is focused, spread out, or redirected.

In short:
- A lens changes the wavefront shape.
- A concave lens does this by giving the center more phase delay than the edge.
- Thickness controls the phase accumulation.
- Fundamentally, phase is the main thing that makes focusing possible.

<div class="interactive-figure-wrapper">
  <div class="interactive-figure-card wavefront-interactive">
    <div class="wavefront-visual-grid">
      <svg class="wavefront-visual" viewBox="0 0 680 340" aria-label="Interactive wavefront diagram" role="img">
        <defs>
          <linearGradient id="lens-gradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stop-color="#dfe8ff" />
            <stop offset="50%" stop-color="#8aa3ff" />
            <stop offset="100%" stop-color="#dfe8ff" />
          </linearGradient>
        </defs>

        <rect x="280" y="40" width="120" height="260" rx="60" fill="url(#lens-gradient)" opacity="0.88" />
        <path d="M280,40 C320,40 320,300 280,300" fill="rgba(138, 163, 255, 0.12)" />
        <path d="M400,40 C360,40 360,300 400,300" fill="rgba(138, 163, 255, 0.12)" />

        <g id="incoming-wavefronts" stroke="#3558d4" stroke-width="2" fill="none">
          <path d="M20,70 H260" />
          <path d="M20,110 H260" />
          <path d="M20,150 H260" />
          <path d="M20,190 H260" />
          <path d="M20,230 H260" />
          <path d="M20,270 H260" />
        </g>

        <g id="transmitted-wavefronts" stroke="#ff7a00" stroke-width="2" fill="none"></g>

        <line x1="280" y1="20" x2="280" y2="320" stroke="#999" stroke-width="1.5" stroke-dasharray="4 4" />
        <text x="40" y="30" font-size="14" fill="#333">Incoming plane wave</text>
        <text x="430" y="30" font-size="14" fill="#333">After concave lens</text>
        <text x="270" y="335" font-size="13" fill="#555">Lens plane</text>
      </svg>

      <div class="wavefront-controls">
        <label for="phase-strength">Center phase delay</label>
        <input id="phase-strength" type="range" min="0" max="1" step="0.01" value="0.70" />
        <p>Move the slider to see how a larger center delay bends the transmitted wavefront more strongly.</p>
        <div class="phase-legend">
          <span class="legend-swatch edge"></span> small phase at edge
          <span class="legend-swatch center"></span> large phase at center
        </div>
      </div>
    </div>

    <div class="interactive-figure-caption">
      The concave lens is thinner at the edge and thicker at the center, so the center accumulates more optical phase. That uneven phase delay turns a flat wavefront into a curved, diverging wavefront.
    </div>
  </div>
</div>

<script>
(function() {
  var svg = document.querySelector('.wavefront-visual');
  if (!svg) return;
  var output = svg.querySelector('#transmitted-wavefronts');
  var slider = document.getElementById('phase-strength');
  var lines = [70,110,150,190,230,270];
  var midY = 170;
  var lensX = 280;
  var outputX = 520;

  function drawWavefronts(value) {
    output.innerHTML = '';
    var strength = Math.max(0, Math.min(1, value));

    lines.forEach(function(y) {
      var gaussian = Math.exp(-Math.pow((y - midY) / 70, 2));
      var offset = strength * 50 * gaussian;
      var controlY1 = y - offset * 0.7;
      var controlY2 = y + offset * 0.7;
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      var d = 'M' + lensX + ',' + y +
              ' C' + (lensX + 90) + ',' + controlY1 +
              ' ' + (outputX - 90) + ',' + controlY2 +
              ' ' + outputX + ',' + (y + offset);
      path.setAttribute('d', d);
      output.appendChild(path);
    });
  }

  slider.addEventListener('input', function() {
    drawWavefronts(parseFloat(slider.value));
  });

  drawWavefronts(parseFloat(slider.value));
}());
</script>
