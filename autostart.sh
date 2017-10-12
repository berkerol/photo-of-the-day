#!/usr/bin/env bash

if [ "$(uname -s)" == "Darwin" ]; then
  sudo cp potd.plist ~/Library/LaunchAgents
elif [ "$(uname -s)" == "Linux" ]; then
  sudo cp potd.desktop ~/.config/autostart
fi
