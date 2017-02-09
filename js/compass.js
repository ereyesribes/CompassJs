/**
 * CompassJs
 *
 * Copyright Javier Reyes Ribes 2017
 * Released under the MIT license
 */

var CompassJs = function(selector) {
  var jQCompass = $(selector);

  jQCompass.css({
    "width": '300px',
    "height": '300px',

    "background-image": 'url("./img/compass.png")',
    "background-size": '100% 100%',
    "background-repeat": 'no-repeat',

    "overflow": 'hidden'
  });

  var jQHand = $('<div>');

  jQHand.css({
    "width": '200px',
    "height": '200px',

    "position": 'relative',
    "top": '50%',
    "left": '50%',
    "margin-top": '-100px',
    "margin-left": '-100px',

    "background-image": 'url("./img/hand.png")',
    "background-size": '100% 100%',
    "background-repeat": 'no-repeat',

    "-webkit-transition": '-webkit-transform 1s',
    "-moz-transition": '-moz-transform 1s',
    "-ms-transition": '-ms-transition 1s',
    "-o-transition": '-o-transition 1s',
    "transition": 'transform 1s'
  });

  jQCompass.append(jQHand);


  // Instance methods
  this.setSize = function(width, height) {
    jQCompass.css({
      "width": width + 'px',
      "height": height + 'px'
    });

    jQHand.css({
      "width": (width * 2/3) + 'px',
      "height": (height * 2/3) + 'px',

      "margin-top": (height * (-1/3)) + 'px',
      "margin-left": (width * (-1/3)) + 'px'
    });
  }

  this.rotate = function (degrees) {
    jQHand.css({
      "-ms-transform": 'rotate(' + degrees + 'deg)',
      "-webkit-transform": 'rotate(' + degrees + 'deg)',
      "transform": 'rotate(' + degrees + 'deg)'
    });
  }

  this.pointTo = function(direction) {
    direction = direction.toLowerCase();

    var directions = {
      "n": 0,
      "ne": 45,
      "nw": 315,

      "s": 180,
      "se": 135,
      "sw": 225,

      "e": 90,
      "w": 270,


      "north": 0,
      "northeast": 45,
      "northwest": 315,

      "south": 180,
      "southeast": 135,
      "southwest": 225,

      "east": 90,
      "west": 270,
    };

    var
      directionDeg = directions[direction],
      directionIsValid = (directionDeg !== undefined);

    if (directionIsValid) {
      this.rotate(directionDeg);
    } else {
      try {
        console.error('Invalid direction "' + direction + '", directions supported: n/north, nw/northwest, ne/northeast, s/south, sw/southwest, se/southeast, w/west, e/east.')
      } catch(e) {}
    }
  }
}
