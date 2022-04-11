#!/bin/bash

INSTANCE_NAME=$1

usage() {
  echo "Usage: $0 <instance_name>"
  exit 1
}

# use node script so that it works on every OS
# we could have used "sed" but it has some differences over platforms
node init.cjs $INSTANCE_NAME 2>&1

# node can't remove the file it has been called with so do it here
# rm is standard and works cross platform
rm init.cjs
rm init.sh
