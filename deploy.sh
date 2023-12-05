#!/bin/bash

# Clone the Git repository
git clone https://github.com/digpatel123/Blog_App_Front_JWT

# Install Angular dependencies
npm install

# Build the Angular application
ng build --prod

# Copy built files to Hostinger deployment directory
cp -r dist/* /
