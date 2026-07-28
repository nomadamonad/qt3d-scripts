# Claude Code Newbie Setup

This guide is for the flow where you ask Claude Code to set up your storyboard
video project.

## Copy-Paste Prompt

```text
Set up this repo for an absolute beginner:

1. Run the environment setup.
2. Show me where my project's folders are.
3. Start by helping me write the creative brief.
```

## What Claude Code Should Run

```bash
tools/setup-environment.sh
```

That creates:

```text
projects/my-first-video/
projects/START_HERE_AFTER_SETUP.md
```

## Where To Start

Open:

```text
projects/my-first-video/01-creative-brief/
```

Work through the steps in order:

```text
01-creative-brief/
02-references/
03-shot-list/
04-image-prompts/
05-storyboard-frames/
06-video-prompts/
07-transition-videos/
08-stitching/
09-final-output/
```

Every step has `attempts/`, `approved/`, and `disapproved/` folders. Only
build the next step from files in `approved/`.

## Saving Back To GitHub

After you have generated useful project files and want to upload progress:

```bash
tools/save-to-github.sh "Save storyboard project progress"
```

This stages the project work and final outputs, commits them, and pushes the
current branch.
