# Amiga E Docs — Site

The re-documented **Amiga E** programming language: the beginner's guide,
language reference, stdlib, v40 modules, third-party tooling and community
material, rebuilt as a modern static site.

> The Amiga E language and its v40 modules are the work of
> **[Wouter van Oortmerssen](https://strlen.com/)**, used with his kind
> permission. Thank you, Wouter!

## What this repo is

This is the **built site only** — plain static HTML/CSS/JS, no build step.
It is generated and published from a private research repo; please don't
open PRs against the HTML directly, as it will be overwritten on the next
publish.

It is consumed as a git submodule by the
[Amiga E Web IDE](https://github.com/gin0115/Amiga-E-Web-IDE), where it
serves as the built-in help guide.

## Viewing locally

Serve the repo root with any static web server:

```sh
python3 -m http.server 8123 --bind 127.0.0.1
# open http://127.0.0.1:8123/
```
