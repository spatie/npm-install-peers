const chalk = require('chalk')
const fs = require('fs')
const npm = require('npm')
const Package = require('./package')

const die = (message) => console.error(chalk.bold.red(message))
const warn = (message) => console.warn(chalk.yellow(message))

fs.readFile('package.json', 'utf-8', function(error, contents) {

    if (contents === undefined) {
        return die('There doesn\'t seem to be a package.json here')
    }

    let packageContents = new Package(contents)

    if (! packageContents.isValid()) {
        return die('Invalid package.json contents')
    }

    if (! packageContents.hasPeerDependencies()) {
        return warn('This package doesn\'t seem to have any peerDependencies')
    }

    let peerDependencies = packageContents.peerDependencies

    let packages = Object.keys(peerDependencies).map(function(key) {
        return `${key}@${peerDependencies[key]}`
    })

    let peerInstallOptions=packageContents.peerInstallOptions

    peerInstallOptions['save'] = false;
    npm.load(peerInstallOptions, function() {
        npm.commands.install(packages)
    })
})
