#!/usr/bin/env bash
# Start the portfolio local server and open it in your browser.

ROOT="$(cd "$(dirname "$0")" && pwd)"
PORT=5501
URL="http://127.0.0.1:${PORT}"

cd "$ROOT/vanilla" || exit 1

LISTENER_PID="$(lsof -ti tcp:"$PORT" -sTCP:LISTEN 2>/dev/null | head -n 1)"

if [ -n "$LISTENER_PID" ]; then
  if ps -p "$LISTENER_PID" -o args= 2>/dev/null | grep -q "http.server"; then
    echo "Server already running on $URL"
  else
    echo "Error: port $PORT is already in use by another application:"
    ps -p "$LISTENER_PID" -o pid=,args=
    echo "Stop that process or change PORT in start.sh, then re-run."
    exit 1
  fi
else
  echo "Starting server at $URL ..."
  python3 -m http.server "$PORT" >/dev/null 2>&1 &
  sleep 1
fi

if command -v xdg-open >/dev/null 2>&1; then
  xdg-open "$URL"
elif command -v gnome-open >/dev/null 2>&1; then
  gnome-open "$URL"
else
  echo "Open this URL in your browser: $URL"
fi

echo "Press Ctrl+C in this terminal to stop (or run: pkill -f 'http.server $PORT')"
