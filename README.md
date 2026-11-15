# ASTRA institutional site

A standalone, public-facing presentation for the independent ASTRA mission-learning concept, created for NASA Space Apps Challenge judges and prospective education partners. NASA does not endorse this project.

## Run locally

No build or dependencies are required. From this directory, run `python3 -m http.server 8000 --directory dist`, then open `http://localhost:8000`. Deploy the contents of `dist/` to a static host. The site has no account, forms, uploads, analytics, or external runtime dependencies.

The linked [playable mission trainer](https://astra-mission-trainer.andrevictorandrade.chatgpt.site) and its [source repository](https://github.com/andrecodexvictor/astra-junior-astronaut-mission-trainer) are separate from this presentation. The resource-choice interaction on this site is an illustration, not a scientific simulation. Production vision artwork shows concepts, not necessarily shipped features.

## Assets and license

The site code is MIT licensed; see LICENSE. The images in `dist/assets/` are optimized WebP derivatives of AI-generated production-vision art from the mission trainer repository, under `docs/art/production-vision/`: `09-partner-lunar-journey.png`, `11-playful-tasks-dialogue.png`, `15-short-dialogue-voice.png`, and `17-resource-care-alert.png`. The original artwork includes a NASA graphic; it is part of the original concept art and does not imply NASA endorsement. MIT applies to the site code, not a grant of rights to third-party marks or the artwork. Consult the source project's asset notes and applicable rights before reuse.
