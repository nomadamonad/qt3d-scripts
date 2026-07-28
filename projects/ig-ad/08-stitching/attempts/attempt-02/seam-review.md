# Stitch Draft 02 — Seam Review

Reordered per your feedback: wireframe → CNC → rotating rendered chair →
room. Also swapped shot 02's source: instead of the two short clips cut
from `five-scene-sequence-v1.mp4`, it's now the real
`Elephant_Chair_D5_Textured_360.mp4` from `02-references/product/` — an
actual continuous rotating turntable of the finished textured chair
(3.1s), which is a better match for "rotating rendered chair" than a
static front-on reveal.

## New shot order

| Order | Shot | Source | Framing | Duration |
|---|---|---|---|---|
| 1 | 01 – wireframe turntable | `five-scene-sequence-v1.mp4`, 0.0–3.4s, red SketchUp axis-guide line removed | crop-to-fill 9:16, edge-to-edge | 3.4s |
| 2 | 03 – CNC routing (generated) | `shot-04-cnc-routing.mp4` | crop-to-fill 9:16, edge-to-edge | 4.04s |
| 3 | 02 – rotating textured chair | `Elephant_Chair_D5_Textured_360.mp4` | letterboxed (see below) | 3.13s |
| 4 | 04/05 – closing room reveal | `shot-04-05-06-continuous.mp4` | letterboxed, kept 16:9 | 5.04s |

Total: ~15.6s.

## On "frame size changes"

I dug into why draft 01 felt inconsistent: it wasn't really the black
bars, it was that the wireframe/reveal shots were pillarboxed (chair
shrunk to fit, grey bars on the sides) while the CNC and closing shots
filled the frame or only had thin bars — so the subject visibly changed
scale cut to cut.

Fixed for shots 01 and 03: both now use **crop-to-fill** — scaled to
cover the full 1080x1920 canvas and center-cropped, so the chair fills
the frame edge-to-edge like the others, no pillarbox. I checked the
wireframe crop against the chair's actual silhouette first — it only
trims a little empty space at the very edges, not the chair itself.

Shot 02 (the product 360 spin) and shot 4/5 (closing room) are still
**letterboxed** — both are landscape sources, and I checked: at some
points in the 360 rotation the chair swings wide enough (e.g. a
dramatic low-angle frame where the legs cross diagonally) that a 9:16
crop would clip it. Cropping those safely without cutting the chair
would need a per-frame reframe (the Higgsfield reframe tool, ~28.5
credits) — same tradeoff as the closing shot. Flagging it rather than
guessing you want to spend the credits.

## On the full 360° wireframe request

I checked both `five-scene-sequence-v1.mp4` and `-v2.mp4` frame by
frame: neither actually contains a full 360° turntable. Both have the
same ~3.4s of near-static camera holding roughly one angle before the
model dissolves into the textured version — there's no additional
rotation footage to pull from in either file. Also confirmed: a faint
red diagonal line was baked into both source videos (a SketchUp axis
guide left on during export) — I removed it via frame-by-frame inpainting
in this draft. It comes out clean on most frames; a few frames where the
line crosses directly over the model still show a faint dashed
remnant — full pixel-perfect cleanup on every frame would take more
manual work per frame.

**Getting an actual full 360° rotation of the wireframe needs new
footage** — I can't extend or fabricate rotation that isn't in the
source. Options: (a) generate a new clean 360° wireframe turntable via
Higgsfield (would spend credits, can confirm cost first), or (b) if you
have the SketchUp file open, export a proper 360° turntable render
yourself and drop it into `02-references/` for me to use. Let me know
which you'd prefer — this draft still uses the partial ~3.4s clip as a
placeholder.

Approval gate: **does this feel like one continuous video?**
