# Approval Log

Project: ig-ad (Instagram product ad)

Control mode:

- [x] Approval at every step
- [ ] Autopilot

## Decisions

| Step | Artifact | Approved? | Notes |
|---|---|---:|---|
| Creative brief | elephant-chair-creative-brief.md | Yes | Cinematic/reverent, 9:16 ~15s, follow-for-more CTA |
| References | in progress | | Real chair photo, VCarve screenshot, 6 real room-space views, QT3D logo, source .skp/.crv/videos filed under 02-references/ |
| Shot list | shot-map.md | Yes | 6 shots: SketchUp montage -> untextured turntable -> VCarve inlay -> CNC cut (needs generation) -> lounge reveal -> courtyard reveal (both need compositing) |
| Image prompts | shot04-shot05-shot06-image-prompts.md | Yes | CNC-cut frame + lounge reveal frame + courtyard reveal frame, using real chair photo and real room renders |
| Storyboard frames | | | Shots 05 & 06 done via direct video generation (see Transition videos row) — merged with that step rather than separate stills. Shot 04 CNC still (`still-image.md`) generated and used as the video start-frame. |
| Video prompts | | | Folded into the Transition videos generations below (motion prompts included directly) |
| Transition videos | shot-04-cnc-routing.md, shot-04-05-06-continuous.md | Yes | Shot 04 (CNC) via Kling 3.0 Turbo image-to-video. Original shot-05-lounge.md/shot-06-courtyard.md (Seedance 2.0) are superseded — their files were never available to download. Replaced by one continuous Kling 3.0 start/end-frame shot moving from the elephant-chair-swap bar/chess-table still (v14, 14 iterations to get scale/tusks/rug/floor right) into a matching courtyard-angle chair-swap still. The standalone closing zoom/pan clip was dropped as redundant with this continuous shot |
| Stitching | | | |
| Final output | | | |
