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

## Build & development

Run `grunt serve` for preview and and `grunt build` for deployment.

### Project build adjustments

In order for Grunt to properly copy over resources from the video folder and external dependencies, `Gruntfile.js` was modified.

## Author

- Email: glenn@47ronin.com
- Twitter: https://twitter.com/gbatuyong
- GitHub: https://github.com/47ronin
