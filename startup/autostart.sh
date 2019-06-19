#!/usr/bin/env bash

if [ "$(uname -s)" == "Darwin" ]; then
  cp ./potd.plist ~/Library/LaunchAgents
elif [ "$(uname -s)" == "Linux" ]; then
  cp ./potd.desktop ~/.config/autostart
fi
