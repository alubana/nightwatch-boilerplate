#!/bin/bash

# this script is to kill both dev server and mock server

eval "lsof -n -i4TCP:8088 | grep LISTEN | awk '{ print $2 }' | xargs kill"
eval "lsof -n -i4TCP:3000 | grep LISTEN | awk '{ print $2 }' | xargs kill"
