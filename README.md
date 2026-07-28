# Storyboard Video Workflow

Make longer AI videos by building them like a director: one short controlled
shot at a time.

Instead of asking an AI video model for one long video, you:

1. Write a simple creative brief.
2. Collect references.
3. Break the video into short shots.
4. Generate the first and last frame of each shot.
5. Generate video between those locked frames.
6. Stitch the clips together.

That is the whole method.

## Who This Is For

Use this for:

- Product videos
- SaaS videos
- Character/story videos
- Fun cinematic videos
- Ads, demos, launches, tutorials, reels

You do not need to understand filmmaking. The repo tells you what to do next.

## Start Here

### Fastest Setup In Claude Code

Say:

```text
Set up this repo for an absolute beginner. Run the environment setup, show me
where my project's folders are, and help me start the creative brief.
```

Claude Code should run:

```bash
tools/setup-environment.sh
```

That creates:

```text
projects/my-first-video/    a blank project for your own video
```

Open this guide after setup:

```text
projects/START_HERE_AFTER_SETUP.md
```

More detail: [docs/claude-code-newbie-setup.md](docs/claude-code-newbie-setup.md)

### Create A New Project

Run:

```bash
tools/create-project.sh my-video-name
```

Then open:

```text
projects/my-video-name/
```

If you do not want to use the terminal, copy the folder:

```text
templates/project-template/
```

Then rename the copy to your project name.

### Save Progress To GitHub

After Claude Code generates useful files, ask:

```text
Commit and push this project progress to GitHub.
```

Claude Code can run:

```bash
tools/save-to-github.sh "Save storyboard project progress"
```

## The One Rule

Every step has three folders:

```text
attempts/      rough drafts go here
approved/      locked files go here
disapproved/   rejected files go here
```

Only build the next step from files in `approved/`.

That is how you stop the project from becoming chaos.

## Copy This Into Your LLM

After you create a project folder, paste this into ChatGPT, Claude, Codex, or
any LLM:

```text
I am making a storyboard-style AI video.

Use this workflow:
1. Creative brief
2. References
3. Shot list
4. Image prompts
5. Storyboard frames
6. Video prompts
7. Transition videos
8. Stitching
9. Final output

Ask me what kind of video I want:
- Product video
- SaaS video
- Character/story video
- Fun cinematic video

Then ask me for the references we need.

Before starting, ask:
Do you want approval at every step, or should I use autopilot and only stop if something is risky or unclear?

At every step:
- Put drafts in attempts/
- Put approved files in approved/
- Put rejected files in disapproved/
- Ask me to approve or revise before moving on

Start by helping me write the creative brief.
```

## What A Finished Project Looks Like

```text
my-video/
  01-creative-brief/
    approved/
      brief.md
  02-references/
    approved/
      product-photo.png
      logo.png
  03-shot-list/
    approved/
      shot-list.md
  04-image-prompts/
    approved/
      frame-prompts.md
  05-storyboard-frames/
    approved/
      frames/
      shots/
  06-video-prompts/
    approved/
      shot-01.md
      shot-02.md
  07-transition-videos/
    approved/
      shot-01.mp4
      shot-02.mp4
  08-stitching/
    approved/
      seam-review.jpg
      stitching-notes.md
  09-final-output/
    final-video.mp4
```

## Important Beginner Tips

- Do not generate video first. Generate storyboard frames first.
- Do not approve frames that look "almost right." They will get worse in
  video.
- If a face, logo, product, or prop matters, use a reference image.
- Keep rejected versions. They show you what to avoid.
- Short clips are easier to control than long clips.
- The final video is the result of many small approvals.

## Helpful Files

- [Workflow](docs/workflow.md)
- [Approval Gates](docs/approval-gates.md)
- [Reference Types](docs/reference-types.md)
- [Stitching Notes](docs/stitching-notes.md)
- [LLM Start Prompt](templates/prompt-cards/llm-start-here.md)

## Tools You Can Use

This repo is tool-agnostic.

You can use:

- GPT image models
- Nano Banana or other image generators
- Seedance, Kling, Runway, Pika, Veo, or other video generators
- Any LLM for prompt writing
- `ffmpeg` for stitching

The tool matters less than the process.

Brief -> References -> Frames -> Prompts -> Transitions -> Stitch -> Final.

---

This workflow is adapted from
[Samin12/ai-storyboard-video-starter](https://github.com/Samin12/ai-storyboard-video-starter).

## Other Scripts

`qt-vision.js` is a standalone modal-wizard script for a website and is
unrelated to the storyboard video workflow above.
