# banglejs-2-rainbow-face #

a simple clock face with numbers 1...12 in "rainbow" colors for analog clocks on a Bangle.js 2

This module draws a face with the numbers 1-12 (optionally surrounded by dots for every minute) with a "rainbow"-like color gradient for an analog clock running on a [Bangle.js 2](https://www.espruino.com/Bangle.js2).

## Usage ##

Within a clock implementation, the module may be used as follows:

```
let ClockFace = require('https://raw.githubusercontent.com/rozek/banglejs-2-rainbow-face/main/ClockFace.js');
```

Whenever needed, the module's exported `draw` method will then be invoked as follows:

```
ClockFace.draw(Settings, CenterX, CenterY, outerRadius);
```

`Settings.withDots` controls whether surrounding dots are drawn or not: if set to `true`, they are drawn otherwise not.

## License ##

[MIT License](LICENSE.md)
