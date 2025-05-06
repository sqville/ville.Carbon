#!/bin/bash

# Install dependencies
npx sass ./source/scss/myapp.scss ./source/resource/myapp/css/myapp.css \
 --load-path=node_modules \
 --style compressed

# Build the project
echo "Cleaning..."
npx qx clean
echo "Cleaning done."

# Start the application
npx qx serve