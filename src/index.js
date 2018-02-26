const chalk = require('chalk')
const fs = require('fs')
const npm = require('npm')
const Package = require('./package')

const die = (message) => console.error(chalk.bold.red(message))
const warn = (message) => console.warn(chalk.yellow(message))

fs.readFile('package.json', 'utf-8', function(error, contents) {

    let packages = []
    let peerInstallOptions = {}

    if (contents === undefined) {
        return die('There doesn\'t seem to be a package.json here')
    }

    let packageContents = new Package(contents)

    if (! packageContents.isValid()) {
        return die('Invalid package.json contents')
    }

    if (packageContents.hasPeerDependencies()) {
        let peerDependencies = packageContents.peerDependencies

        Object.keys(peerDependencies).map(function(key) {
            packages.push(`${key}@${peerDependencies[key]}`)
        })

        peerInstallOptions = packageContents.peerInstallOptions
    } else {
        warn('This package doesn\'t seem to have any peerDependencies defined in package.json')
    }

    peerInstallOptions['save'] = false
    npm.load(peerInstallOptions, function() {
        
        // Scan for peerDependency problems caused by sub-dependencies
        npm.commands.ls([], true, function (error, data, lite) {
            lite.problems.map(function(problem) {
                let keyMatch = problem.match(/peer dep missing: ([^,]+)/)

                if (keyMatch && keyMatch[1] && packages.indexOf(keyMatch[1]) === -1) {
                    packages.push(keyMatch[1])
                }
            })

            npm.commands.install(packages)
        })

    })
})
