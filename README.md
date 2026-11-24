# compliance-check fork probe

A test repo for preset-ai/compliance-check v1.4.0. Pull requests from a fork
can't read repository secrets, so the Action should run the generic checks
only, say so in the log, and not fail for the missing credential.

This repo holds no secrets. The design system id in the workflow is a
placeholder: the fork path never contacts the gateway, which is what this
probe checks.

To run it: fork this repo, change `src/Probe.tsx`, and open a pull request
against `main`.
