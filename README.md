# weatherview

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Features

Weatherview creates resolution-independent weather conditions suitable for high definition monitors or televisions. The default presets work best with 16:9 aspect ratio displays, and specifically target 720p, 1080p, 4K, and 8K systems. Weather condition data is gathered at runtime using the [Forecast.io](http://forecast.io/) JSON API. [Weather Icons](https://github.com/erikflowers/weather-icons) CSS-transform usage was modified to point a wind-direction icon in a full 360-degree range. Wind speed is displayed using the Beaufort scale.

## Dependencies

- [The Dark Sky Forecast API](https://developer.forecast.io/)
- [Weather Icons](https://github.com/erikflowers/weather-icons)
- [Animate.css](https://github.com/daneden/animate.css)
- [Moment](https://github.com/moment/moment)

## Technology stack

- AngularJS
- Twitter Bootstrap

## Installation

Clone or fork this repository and ensure the following tools are available:
- [Node Package Manager](https://www.npmjs.com/) (NPM)
- [Grunt](http://gruntjs.com/)
- [Bower](http://bower.io/)

Run `npm install` then `bower install`. Grab some coffee :coffee: …this could take a while.

The logo and background video can be customized by replacing `images/logo.png`, `images/posterimage.jpg` (which should typically be the first frame of the background video), and `videos/bg-video.mp4`.

An API key from [Forecast.io](https://developer.forecast.io/) is required to draw in the live JSON data. Replace the value `FORECAST_API_KEY` in `main.js`.

## Build & development

Run `grunt serve` for preview, make customizations **only** in the `app/` folder, and `grunt build` to build a release candidate. Deploy the `dist/` directory.

### Project build adjustments

In order for Grunt to properly copy over resources from the video folder and external dependencies, `Gruntfile.js` was modified.

## Author

- Email: glenn@47ronin.com
- Twitter: https://twitter.com/gbatuyong
- GitHub: https://github.com/47ronin

## Credits

- Weather icon artwork by [Lucas Bischoff](https://www.twitter.com/artill)
