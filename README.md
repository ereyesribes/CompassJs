
# CompassJs

I needed a compass that I could use on an interface I was working on.
I found no such compass. So I made my own: CompassJs


## So how do I use it

Include compass.js and jQuery.

Create an element to contain your compass

```
  <div id = "myCompass"></div>
```

Instantiate CompassJs

```
  var myCompass = new CompassJs(selector);
```

"selector" must be a valid CSS selector, in the case of the previous element, #myCompass
That's is, that creates a compass with the hand pointing north, and a default size of 300x300 pixels.

To change the size:
```
  myCompass.setSize(width, height)
```

To rotate the hand:
```
  myCompass.rotate(degrees);
```

To make it point to a certain point:
```
  myCompass.pointTo(direction);
```

Direction being one of the following options(case insensitive): n/north, ne/northeast, nw/northwest, s/south, se/southeast, sw/southwest, e/east, w/west.

## Reach me

If you find this useful, reach me! You could contribute, or tell me what you miss in this Compass!

## Buy me a coffee

If you appreciate CompassJs, please consider donating, it would be much appreciated!

<a href='https://pledgie.com/campaigns/33347'><img alt='Click here to lend your support to: CompassJs and make a donation at pledgie.com !' src='https://pledgie.com/campaigns/33347.png?skin_name=chrome' border='0' ></a>
