# Shot Map — ig-ad (draft)

Narrative arc: digital design → CNC fabrication → finished cultural art
piece, ending on the reveal in its intended setting.

| Shot | Beat | Source | Notes |
|---|---|---|---|
| 01 | SketchUp modeling montage — building the chair | Real screen recording | Timelapse/sped-up feel; establishes "designed, not just built" |
| 02 | Finished, no-texture model — 360° turntable | Real SketchUp screen recording or rendered turntable | First clean look at the full silhouette: elephant heads, tusks, legs |
| 03 | VCarve — adding elephant inlays, textures, design elements | Real screen recording | Shows the carving/inlay detail being defined digitally before cutting |
| 04 | Shopbot CNC routing the seat-back panel | Real camera footage of the machine cutting | Needs a physical camera on/near the CNC — see question below |
| 05 | Finished chair reveal in the mancave lounge | Photo/render composite | Hero shot; the payoff. Also where "follow for more" beat can land |

## Continuity Locks
- Same wood grain/finish across shots 02–05
- Same elephant-head geometry and tusk shape (from the .skp model) across
  02, 03, 05
- Zebra-hide seat cushion visible and consistent from shot 02 onward
- Same warm, reverent lighting style once we leave the screen-recording
  shots (03 onward, physical footage)

## What's Different From The Default Workflow
Shots 01–03 are screen recordings of your actual software, not AI-generated
video — there's no "first frame / last frame" to lock, so `04-image-prompts`
and `06-video-prompts` mostly apply to shots 04–05 (and only where AI
generation is actually needed, e.g. compositing the chair into the lounge).

## Resolved
1. Shot 04 (CNC routing the seat back): **no real footage exists** — this
   shot needs to be AI-generated/simulated. Will need an image prompt (CNC
   router mid-cut on the seat-back panel, bit spinning, chips/dust, elephant
   inlay pattern emerging) and a video prompt for the cutting motion.
2. Shot 05 (finished chair in the mancave lounge): the lounge is a
   **3D-rendered environment** (the whiskey-bar/chess-table render) — the
   finished chair needs to be digitally composited/AI-placed into it, using
   the real chair renders/photos as the identity reference so it matches
   shots 02–04.

## Approval Question
Does this shot order match what you want, or should shots be added,
combined, or reordered before we lock it?
