# Image Prompts — Shots 04 & 05 (draft)

Shots 01–03 are real screen recordings (no image prompts needed — see
`02-references/product/` for the source videos). Shots 04 and 05 are the
only beats needing generated/composited imagery.

## Shot 04 — Shopbot CNC Routing The Seat Back

Revised again per the actual VCarve screenshot
(`VCarve_ElephantChair_SeatBack_ToolpathScreenshot.png`). This is not a
silhouette cutout — it's a **V-carve line engraving** (V-bit, 45deg/0.75",
hatch fill) on a flat panel, job dimensions exactly **35" wide x 50" tall x
2" deep**. The design, top to bottom:
- Two large elephant ears framing a detailed elephant face (eyes, wrinkles,
  fine linework)
- Tusks/trunk curling down each side
- A diamond-lattice geometric pattern filling the center "torso" panel
- A Tree of Life medallion centered within that lattice
- Elephant feet with toe/nail detail at the very bottom edge
- A small blank rectangular cutout low in the panel (hardware/plaque area)

### Frame: First
```text
A Shopbot CNC router mid-engraving on a large flat wood panel, 35 inches
wide by 50 inches tall by 2 inches thick, clamped flat on the machine bed
and filling most of the frame. A V-bit is tracing fine, shallow engraved
lines into the wood surface — this is delicate line engraving, not deep
pocket cutting. So far only the upper portion is engraved: the two large
elephant ears and the detailed elephant face (eyes, wrinkles) are visible
as fine carved linework at the top of the panel. The tusks, the diamond-
lattice torso pattern, the Tree of Life medallion, and the elephant feet
lower on the panel are not yet engraved — that area is still smooth, blank
wood. Fine dust sits along the finished lines. Three-quarter overhead angle
showing the whole tall panel on the CNC bed, workshop background softly
out of focus, practical shop lighting, slightly cool and neutral.

Reference: VCarve_ElephantChair_SeatBack_ToolpathScreenshot.png (exact
design and layout), Elephant_ChairV1.crv toolpath, African_Chair.skp model
geometry.

Continuity lock: same wood species and tone as the finished chair; the
engraved linework (ears, face, tusks, lattice, tree-of-life medallion,
feet) must match the reference screenshot's layout and proportions exactly.

Negative prompt: no deep silhouette cutout, no small/scrap-sized wood
piece, no missing lattice/tree-of-life/feet detail, no cartoonish or
toy-like machine, no unrelated branding, no color mismatch with the final
chair's walnut tone.
```

### Frame: Last
```text
Same setup, same 35"x50"x2" panel filling most of the frame, later in the
job. The full engraving is now nearly complete top to bottom: elephant
ears and face, tusks curling down each side, the diamond-lattice torso
pattern with the Tree of Life medallion centered in it, and the elephant
feet with toe detail at the bottom edge are all clearly visible as fine
engraved linework. Fine dust along the completed lines. V-bit making its
final pass near the feet detail at the bottom. Same camera angle and
lighting as the first frame so the shot reads as one continuous pass.

Reference and continuity lock: same as first frame — full engraved design
matching the VCarve screenshot exactly, top to bottom.
```

Approval question: Does this match the actual VCarve design and job
dimensions now, or is there anything else to adjust before regenerating?

## Shot 05 — Finished Chair Reveal In The Mancave Lounge

### Frame: Single hero frame (static or subtle push-in)
```text
The finished elephant-head chair — walnut-toned wood, white carved tusks,
zebra-hide seat cushion — placed in a blended mancave lounge: wide-plank
ebony flooring, a stone wet bar with a granite countertop and backlit glass
liquor shelving, a round brass coffee table with a chess set, folding glass
doors open to a small enclosed bonsai courtyard in the background. Framed
wall art includes a monkey-with-a-cigar painting. Camera holds on the chair as the clear foreground subject; warm,
directional, reverent lighting matching the creative brief's cinematic
tone. Optional subtle slow push-in for the video version.

Reference: real chair photos/renders (02-references/product/), the
blended-environment description (02-references/environment/reference-plan.md),
and the Elephant_Chair_D5_Textured_360.mp4 turntable for texture/angle
consistency.

Continuity lock: chair must exactly match its appearance from shots 02–04
(wood grain, elephant geometry, tusk shape, zebra cushion) — this is the
payoff shot, so drift here is the most noticeable.

Negative prompt: no mismatched wood tone or texture vs. earlier shots, no
extra unapproved furniture crowding the frame, no illegible or distracting
text overlays (aside from a possible simple "follow for more" end card).
```

Approval question: Does this reveal shot match what you pictured, or should
the framing/lighting/composition change before we generate storyboard
frames?
