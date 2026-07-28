# Final Video v1 — Notes & Known Limitations

This is **not a formally approved final cut** — it's the best available
assembly of everything generated so far, exported so the limitations are
visible end-to-end rather than described in the abstract. Nothing here
should be posted as-is.

15.6s, 1080x1920 (9:16), H.264, **silent**.

## What it gets right
- Matches the creative brief's format (9:16, ~15s, cinematic pacing).
- Shot order matches your latest direction: wireframe → CNC → rotating
  textured chair → room reveal.
- Wireframe and CNC shots fill the frame edge-to-edge, no size jump
  between cuts.

## Limitations, in order of how much they'd bother a viewer

1. **No sound at all.** No music bed, no VO, no CTA card. This alone
   makes it unpostable — an IG ad with dead silence reads as broken, not
   intentional.
2. **Opening shot isn't a real turntable.** ~3.4s of a near-static
   SketchUp wireframe angle, not the full 360° rotation you asked for.
   That footage doesn't exist yet — this is the clearest single gap.
3. **Two shots are letterboxed** (black bars top/bottom): the rotating
   textured-chair turntable and the closing room reveal. Both are
   landscape source material; filling 9:16 without cropping the chair
   out at some angles needs an AI reframe pass (costs credits, not yet
   spent).
4. **No color/lighting continuity pass.** The brief calls for consistent
   warm, reverent lighting throughout. Right now you're cutting between
   real footage, a flat-grey wireframe render, a flat-grey product
   render, and two warmly-lit generated shots — the lighting mood
   visibly resets at each cut rather than building.
5. **Red guide-line cleanup is imperfect.** I removed a stray SketchUp
   axis line baked into the wireframe footage; it's clean on most
   frames but leaves a faint dashed remnant on a few frames where it
   crosses the model.
6. **No "follow for more" closing beat.** The brief asks for one; this
   cut just ends on the room reveal.
7. **Pacing is unrefined** — cut lengths (3.4s / 4s / 3.1s / 5s) were
   set by what source footage was clean and available, not by rhythm or
   music timing, since there's no music yet to cut to.

## What "actually finished" would take from here
- New footage: a real 360° wireframe turntable (generate or re-export
  from SketchUp) and, likely, reframed 9:16 versions of the two
  letterboxed shots.
- A music bed or VO, timed to the final cut.
- A grading pass so all five source types (real footage, two flat
  renders, two generated cinematic clips) read as one world.
- A closing "follow for more" card/beat.
- A final approval pass through `08-stitching` before re-exporting here.
