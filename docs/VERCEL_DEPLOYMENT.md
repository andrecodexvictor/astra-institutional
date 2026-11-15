# Deploy the institutional site to Vercel

This is a buildless static HTML/CSS/JavaScript project. `dist/index.html` is the entrypoint, and all runtime assets are already versioned. It does not need npm install or a frontend build command.

`vercel.json` explicitly selects no framework, disables installation and building, and publishes `dist/`. Without an output directory override, Vercel's Other preset may serve the repository root, which has no index.html. A successful deployment status alone therefore does not verify that the landing page is served.

Import `andrecodexvictor/astra-institutional` and use:

| Setting | Value |
| --- | --- |
| Root Directory | `./` (repository root) |
| Framework Preset | Other |
| Build Command | Empty; no build |
| Install Command | Empty; no dependencies |
| Output Directory | `dist` (also declared in vercel.json) |
| Environment variables | None |

If the existing project used `dist` as its Root Directory, set Root Directory back to the repository root so Vercel reads the root vercel.json; otherwise it may interpret the output path relative to the wrong directory. Deploy the latest main commit. The GitHub integration can trigger this automatically when connected; review the deployment URL rather than relying solely on a success badge.

The public Site hosted by Sites is independent and uses `.openai/hosting.json`. This configuration does not change that identity or the owner-selected Vercel game-demo URL.

References: https://vercel.com/docs/builds/configure-a-build and https://vercel.com/docs/project-configuration/vercel-json .
