#!/usr/bin/env node
'use strict'

const fs = require('fs')
const npm = require('npm')

fs.readFile('package.json', 'utf-8', function(error, contents) {
    if (contents === null) {
        throw new Error('There doesn\'t seem to be a package.json here')
    }

    let packageConfig = JSON.parse(contents)
    let peerDependencies = packageConfig.peerDependencies || []

    let packages = Object.keys(peerDependencies).map(function(key) {
        return `${key}@${peerDependencies[key]}`
    })

    if (packages.length < 1) {
        throw new Error('This package doesn\'t seem to have any peerDependencies')
    }

    npm.load(function() {
        npm.commands.install(packages)
    })
})
