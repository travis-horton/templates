# templates — what changed, in plain words

Newest first, back to the project's first day.

## October 2026

**templates #13: the change log keeper, refreshed (current checkout step)** · [PR #13](https://github.com/travis-horton/templates/pull/13) · merged 26.1017.1358 · v1.0.6
- Behind the scenes: the automatic job that writes this change log now uses version 7 of GitHub's checkout step instead of version 4, and passes what it saves to GitHub as a list rather than one long line of text. The entries it writes, their version numbers and their tags are the same as before.

**templates #12: Dependabot's updates merge themselves** · [PR #12](https://github.com/travis-horton/templates/pull/12) · merged 26.1016.1117 · v1.0.5
- Behind the scenes: a new automatic job merges each library update from Dependabot as soon as it opens, then asks the change-log job to record it, so the updates keep landing without anyone clicking merge.

**templates #10: Bump debug and socket.io in /simpleServer** · [PR #10](https://github.com/travis-horton/templates/pull/10) · merged 26.1016.0956 · v1.0.4
- Behind the scenes: an automatic dependency update — "Bump debug and socket.io in /simpleServer".

**templates #9: Bump cookie and socket.io in /simpleServer** · [PR #9](https://github.com/travis-horton/templates/pull/9) · merged 26.1016.0956 · v1.0.3
- Behind the scenes: an automatic dependency update — "Bump cookie and socket.io in /simpleServer".

**templates #11: the change log catches up on entries it missed** · [PR #11](https://github.com/travis-horton/templates/pull/11) · merged 26.1015.0728 · v1.0.2
- Behind the scenes: the robot that writes this file after each change now also writes in any earlier finished change it missed, oldest first, with a "recorded late" note when it is more than an hour late. If GitHub won't answer one of its lookups, it skips only that one, records the newest change anyway, and fills the gap on a later run.

**templates #8: the project's past, written down** · [PR #8](https://github.com/travis-horton/templates/pull/8) · merged 26.1010.1210 · v1.0.1
- Behind the scenes: the history file now covers every change from the project's first day (20.0214), not only those since 26.1010, numbered 0.1.0 through v0.1.1 so today's entry stays 1.0.0.

**templates #7: security updates and a self-writing history** · [PR #7](https://github.com/travis-horton/templates/pull/7) · merged 26.1010.1150 · v1.0.0
- **Security updates for the example server** · merged 26.1010.1150
  Behind the scenes: the example web server's building blocks (the web framework and the live-messaging library) were moved to versions that fix their known security problems, gathered from three waiting automatic update requests into one. The server still starts and serves its page the same way.
- **History tool** · merged 26.1010.1150
  Behind the scenes: added the tool that writes a plain-language entry into this project's history file every time a change is accepted.

## February 2020

**Test-runner mentions removed** · [commit](https://github.com/travis-horton/templates/commit/2e090d4) · merged 20.0214.1951 · v0.1.1
- Behind the scenes: the README no longer says the templates will support Jest (a tool for running automatic tests), and the starter list of files for git to ignore stopped naming Jest's settings file. Nothing else changed.

**The templates begin** · [commit](https://github.com/travis-horton/templates/commit/d3bc0f9) · merged 20.0214.1507 · v0.1.0
- **[Starter files](https://github.com/travis-horton/templates/commit/d3bc0f9)** · merged 20.0214.1507
  New: three starting points to copy into a new project: a blank web page, a starter list of files git should leave out (installed libraries, settings files, logs, private settings), and a starter web server that serves a page on the standard web port.
- **[Example server](https://github.com/travis-horton/templates/commit/d3bc0f9)** · merged 20.0214.1507
  New: a complete tiny example project, "simple syrup": a web server that serves one page with a "click me" button, which pops up "you clicked the button".
- **[Canvas sketchpad](https://github.com/travis-horton/templates/commit/d3bc0f9)** · merged 20.0214.1507
  New: a script to paste into a browser's developer console that adds a 640 by 480 drawing canvas to the page, with helpers to fill it with one color and to draw a flat grid, single points and a 3-D grid. As written, only the fill helper works: the others look for the canvas under a different name, and the 3-D grid is marked as not working yet.
