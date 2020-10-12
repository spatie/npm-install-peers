# NPM Install Peers

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![npm](https://img.shields.io/npm/dt/npm-install-peers.svg?style=flat-square)](https://www.npmjs.com/package/npm-install-peers)

CLI command to install npm peerDependencies. This can be useful when developing modules.

Consider the following dependencies:

```json
{
    "dependencies": {
        "react-router": "4.2.0"
    },
    "devDependencies": {},
    "peerDependencies": {
        "moment": "2.21.0"
    },
}
```

If you run this `npm-install-peers` command, `moment` will be installed because it's a **direct** peer dependency of your project. You'll still get a warning that `react-router` is missing a `react` peer dependency. You'll still need to install `react` yourself, this command **only installs direct peer dependencies**.

You probably don't need this package! It's generally a better idea to have your `peerDependencies` contents as `devDependencies` too.

## Support us

[<img src="https://github-ads.s3.eu-central-1.amazonaws.com/npm-install-peers.jpg?t=1" width="419px" />](https://spatie.be/github-ad-click/npm-install-peers)

We invest a lot of resources into creating [best in class open source packages](https://spatie.be/open-source). You can support us by [buying one of our paid products](https://spatie.be/open-source/support-us).

We highly appreciate you sending us a postcard from your hometown, mentioning which of our package(s) you are using. You'll find our address on [our contact page](https://spatie.be/about-us). We publish all received postcards on [our virtual postcard wall](https://spatie.be/open-source/postcards).

## Postcardware

You're free to use this package (it's [MIT-licensed](LICENSE.md)), but if it makes it to your production environment you are required to send us a postcard from your hometown, mentioning which of our package(s) you are using.

Our address is: Spatie, Kruikstraat 22, 2018 Antwerp, Belgium.

The best postcards will get published on the open source page on our website.

## Installation

```bash
npm install -g npm-install-peers
```

## Usage

```bash
npm-install-peers
```

This will read out your `package.json` file and install all of its peerDependencies. There are no other options.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security

If you discover any security related issues, please email [freek@spatie.be](mailto:freek@spatie.be) instead of using the issue tracker.

## Credits

- [Sebastian De Deyne](https://github.com/sebastiandedeyne)
- [All Contributors](../../contributors)

## About Spatie

Spatie is a webdesign agency in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
