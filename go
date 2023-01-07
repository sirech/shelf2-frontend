#!/bin/bash

set -e
set -o nounset
set -o pipefail

SCRIPT_DIR=$(cd "$(dirname "$0")" ; pwd -P)

_npm() {
  if [ -z "${CI:-}" ] ; then
    n exec auto npm "$@"
  else
    npm "$@"
  fi
}

goal_linter-js() {
  _npm run linter:js
}

goal_linter-css() {
  _npm run linter:css
}

goal_test-js() {
  _npm test
}

goal_run() {
  _npm run start
}

goal_build() {
  _npm run build
}

goal_all() {
  goal_linter-js
  goal_linter-css
  CI=t goal_test-js
  goal_build
}

TARGET=${1:-}

if [ -n "${TARGET}" ] && type -t "goal_$TARGET" &>/dev/null; then
  "goal_$TARGET" "${@:2}"
else
  echo "usage: $0 <goal>

  goal:

  linter-js                -- Run the linter for js files
  linter-css               -- Run the linter for css files

  test-js                  -- Run unit tests

  run                      -- Run the development server

  build                    -- Build the bundle

  all                      -- Run all checks
"
  exit 1
fi
