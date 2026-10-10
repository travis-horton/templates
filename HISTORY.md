# templates — what changed, in plain words

Newest first. Entries before the first one here are still to be written (the backfill).

## October 2026

**templates #7: security updates and a self-writing history** · [PR #7](https://github.com/travis-horton/templates/pull/7) · merged 26.1010.1150 · v1.0.0
- **Security updates for the example server** · merged 26.1010.1150
  Behind the scenes: the example web server's building blocks (the web framework and the live-messaging library) were moved to versions that fix their known security problems, gathered from three waiting automatic update requests into one. The server still starts and serves its page the same way.
- **History tool** · merged 26.1010.1150
  Behind the scenes: added the tool that writes a plain-language entry into this project's history file every time a change is accepted.
