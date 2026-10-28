# Random-Quote

A small web page that displays a random quote (fetched from `https://api.quotable.io/random`).

## Running

```sh
npm start   # or: node server.js
```

The app is served at http://localhost:3000 (override the port with the `PORT` env var).

## Health check

`GET /health` returns `200` with:

```json
{"status":"ok","uptime":12,"timestamp":"2026-01-01T00:00:00.000Z"}
```

`uptime` is in seconds. This only reports that the server process is up; it does not check the quotes API.
