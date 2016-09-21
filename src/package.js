class Package {
    constructor(contents) {
        try {
            this.contents = JSON.parse(contents)
        } catch (error) {
            this.contents = null
        }
    }

    isValid() {
        return this.contents !== null
    }

    hasPeerDependencies() {
        return this.contents.peerDependencies !== undefined
    }

    get peerDependencies() {
        return this.contents.peerDependencies || []
    }
}

module.exports = Package
