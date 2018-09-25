---
title: React Native ART and D3
slug: react-native-art-and-d3
date: 2016-08-05T03:59:27.372Z
tags:
- react
- react-native
- react-native-art
- d3
- javascript
---

*This is a follow up to my previous article about [my experiences using React Native](/blog/react-native/)*

*I gave a talk on this topic which [you can watch](/blog/react-native-art-presentation/)*

The most powerful feature of React Native is that it lets you write your native application using React and JavaScript. React is certainly powerful as it greatly simplifies the mental model required when constructing your UI. However what's even more powerful is the ability to use JavaScript. There's a huge ecosystem of JavaScript packages available. There's a package for almost anything that you might need for your web application. And thanks to React Native almost all of them can be used in your mobile application.

One of the most powerful JavaScript package available for graphing is [d3.js](https://d3js.org/). It is battle tested and robust, and the de facto library to use to create a graph on your website.  To get a feeling for how expressive you can be with d3 just [check out its example gallery](https://github.com/d3/d3/wiki/Gallery). I'm always in awe at some of the things you can create with the simple primitives that d3 provides.

For a project I worked on I had to create graphs in a React Native application. To achieve this goal I used D3 within React Native. In this article I'm going to introduce you to how to create D3 graphs in a React Native application.

This article is also based on a talk I gave for [Crater Remote Conference](http://conf.crater.io/). The [slides are accessible here](https://speakerdeck.com/hswolff/react-native-and-d3js) and I will link to the video as soon as it's available.

This article assumes you are already familiar with React Native. If you're not please [read the tutorial on React Native's webpage](http://facebook.github.io/react-native/docs/tutorial.html) to get up to speed.

There's a few pre-requisites I need to explain before I can get to how to integrate D3 into React Native. Bear with me as I provide some helpful background information before we delve into the meat of things.


# D3

Hopefully if you're reading this you have a vague understanding of what D3 is, and what it can do. In brief D3 provides primitive functions that let you easily convert data into graphs. It [provides a suite of modules](https://github.com/d3/d3/blob/master/API.md) that you can use to construct the graphs you want to build.

For our purposes we're going to focus on two modules, [d3-scale](https://github.com/d3/d3-scale) and [d3-shape](https://github.com/d3/d3-shape). These are the only two modules we need to learn to create a graph in our React Native application.


## d3-scale

Scales are the building blocks for every graph you'll ever create. They are the glue that let you take data of any shape and size and convert it into a graph.

d3-scales provides a few different scale types, but for now we're going to focus just on continuous scales.

As [explained in the documentation](https://github.com/d3/d3-scale#continuous-scales):

> Continuous scales map a continuous, quantitative input domain to a continuous output range.
> Given a value from the domain, returns the corresponding value from the range.

So let's say we wanted to map an array of test scores to a graph. The test scores are between 0-100 and we want to graph the height of each test score on our screen, which has a height of 640 pixels.

To graph that with d3-scale we create a continuous linear scale:

```javascript
// Create a new linear scale instance, which we'll use as your y-scale.
const y = d3.scaleLinear()
    // Set our domain, which is our input data, which is our test scores,
    // which can be between 0 and 100.
    .domain([0, 100])
    // Set our range, which is our output data, which is the height of our
    // screen, which is 640 pixels.
    .range([0, 640]);

// Now if we want to know how high a test score of 50 is on our screen
// we pass the value from our domain and get our range of 320.
y(50); // 320
// Same thing here with 80.
y(80); // 512
```

There's a variant of linear scales that we're also going to use called [time scales](https://github.com/d3/d3-scale#time-scales).

> Time scales are a variant of linear scales that have a temporal domain: domain values are coerced to dates rather than numbers

Meaning, that instead of just using numbers for our domain we're going to use dates. This is useful when trying to show how data changes over time.

```javascript
// Create our x-scale.
const x = d3.scaleTime()
    // Our domain is now a week of time.
    .domain([new Date(2000, 0, 1), new Date(2000, 0, 8)])
    // That we're going to show on our screen which is also 640 pixels wide.
    .range([0, 640]);

// We can then get the x position for the second day of the week.
x(new Date(2000, 0, 2)); // 91.42857142857142
// And the seventh day!
x(new Date(2000, 0, 7)); // 548.5714285714286
```

## d3-shape

The d3-shape module "provides a variety of shape generators for your convenience" which you use to actually draw your data to a graph. For now d3-shape can render to either SVG or Canvas. For our use case we're going to focus on the SVG rendering capabilities.
- [d3-shape](https://github.com/d3/d3-shape)

The only shape we're going to use is the line generator which is "used to compute the [d attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d) of an [SVG path](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) element"

So let's say we wanted to graph the weather forecast for a week. After we create our x and y-scales we can then use the line generator to create the d attribute for the SVG Path element:

```javascript
// Our array of data we're graphing.
const data = [
  {date: new Date(2000, 1, 1), value: 83.24},
  {date: new Date(2000, 1, 2), value: 85.35},
  {date: new Date(2000, 1, 3), value: 98.84},
  {date: new Date(2000, 1, 4), value: 79.92},
  {date: new Date(2000, 1, 5), value: 83.80},
  {date: new Date(2000, 1, 6), value: 88.47},
  {date: new Date(2000, 1, 7), value: 94.47},
  …
];

// Create our line generator.
const line = d3.line()
  // For every x value create the x accessor,
  // which uses our x scale function.
  .x(function(d) { return x(d.date); })
  // Make our y accessor.
  .y(function(d) { return y(d.value); });

// Given the data create the d path value!
line(data);
// M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80
```

The x and y accessor's that we use are [discussed more in-depth on the documentation](https://github.com/d3/d3-shape#line_x), however the point of them is that D3 uses those functions to compute where to plot every data point on the graph.


# How does D3 work with React Native?

React Native has a library called [React Native ART](https://github.com/facebook/react-native/tree/master/Libraries/ART) which can render SVG shapes and paths. By using D3 to create the `d` attribute and giving that to React Native ART we can render any graph that is produced by D3.

React Native ART is derived from [React ART](https://github.com/reactjs/react-art). React ART provides a React components that can be used to control the [ART](https://github.com/sebmarkbage/art) library.

> ART is a retained mode vector drawing API

So that means that instead of having to write an SVG image by hand like so:

```html
<svg>
  <g>
    <rect width="100" height="100" x="10" y="10" fill="blue" />
  </g>
</svg>
```

You can use ART's API.

```javascript
const art = ART.Surface(1000, 600);

const group = ART.Group().inject(art);

const blue = ART.Rectangle(100, 100);
  .move(10, 10)
  .fill('blue')
  .inject(group);
```

> React ART is a JavaScript library for drawing vector graphics using React.
> It provides declarative and reactive bindings to the ART library.

With React ART you can write your ART commands as React components.

```javascript
function ReactART() {
  return (
    <Surface width={1000} height={600}>
      <Group>
        <Rectangle width={100} height={100} x={10} y={10} fill="blue" />
      </Group>
    </Surface>
  )
}
```

Then with React Native ART you can do the same but in your React Native application.

```javascript
import React from 'react';
import {
  ART,
  View,
} from 'react-native';
const {
  Surface,
  Group,
  Shape,
} = ART;

function ReactNativeART() {
  return (
    <View>
      <Surface width={500} height={500}>
        <Group x={100} y={0}>
          <Shape
            d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
            stroke="#000"
            strokeWidth={1}
        </Group>
      </Surface>
    </View>
  )
}
```

React Native ART is not included by default in React Native. Most applications don't need to render SVG shapes, so the React Native team felt it was better to exclude it by default, saving file size of your application.

Before you can use React Native ART you need to link the native library. React Native's website has a [guide on how to link libraries](http://facebook.github.io/react-native/docs/linking-libraries-ios.html).

You can also follow this [excellent guide on getting started with React Native ART](http://browniefed.com/blog/getting-react-art-running-on-react-native/).


# Example Application

To help show off what we can make with React Native and D3 I created an example application called [BetterWeather](https://github.com/hswolff/BetterWeather). It's hosted on my GitHub account. Each commit is composed so you can read them from start to finish and see what was done to get to the next iteration of the application. I strongly encourage you to read through the source code as its well documented and meant for reading.

BetterWeather is a simple weather forecast application. It graphs the upcoming week of weather. It also animates between the temperature min and max for the next week. It uses the [Forecast.io](https://developer.forecast.io/) API as its data source.

# Code

There's two sides to creating a D3 graph in a React Native application.

The first is using React Native ART.

[After you've linked the native code for React Native ART](http://facebook.github.io/react-native/docs/linking-libraries-ios.html) you can start to use it in your code:

```javascript
// Snippet based on https://github.com/hswolff/BetterWeather/blob/master/js/weather/WeatherGraph.js
import React, {
  Component,
} from 'react';
import {
  ART,
} from 'react-native';

const {
  Group,
  Shape,
  Surface,
} = ART;

class WeatherGraph extends Component {
  render() {
    return (
      <Surface width={200} height={100}>
        <Group x={0} y={0}>
          <Shape
            d={this.props.linePath}
            stroke="#000"
            strokeWidth={1}
          />
        </Group>
      </Surface>
    );
  }
}

// Used via:
// <WeatherGraph lineGraph={...} />
```

This uses the React Native ART components to render to the screen. It should look just like any other React components and that's because it is. This creates an ART `<Surface />`, which we can think of as the `<svg />` tag, which houses the `<Group />` which is akin to an SVG's `<g />` element, which finally houses the `<Shape />` component which is akin to an SVG's `<path />` element. The `<Shape />`'s `d={}` attribute is just like the `<path />` [d attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).

This is where the second side comes in - D3.

We're going to use D3 to create the value that will go inside the `d={}` attribute.

```javascript
// Snippet based on https://github.com/hswolff/BetterWeather/blob/master/js/weather/graph-utils.js
import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as d3Array from 'd3-array';
const d3 = {
  scale,
  shape,
};

export function createLineGraph({
  // This is the data that we get from the API.
  data,
  width,
  height,
}) {
  // Get last item in the array.
  const lastDatum = data[data.length - 1];

  // Create our x-scale.
  const scaleX = createScaleX(
    data[0].time,
    lastDatum.time,
    width
  );

  // Collect all y values.
  const allYValues = data.reduce((all, datum) => {
    all.push(datum.temperatureMax);
    return all;
  }, []);

  // Get the min and max y value.
  const extentY = d3Array.extent(allYValues);

  // Create our y-scale.
  const scaleY = createScaleY(extentY[0], extentY[1], height);

  // Use the d3-shape line generator to create the `d={}` attribute value.
  const lineShape = d3.shape.line()
    // For every x and y-point in our line shape we are given an item from our
    // array which we pass through our scale function so we map the domain value
    // to the range value.
    .x((d) => scaleX(d.time))
    .y((d) => scaleY(d.temperatureMax));

  return {
    // Pass in our array of data to our line generator to produce the `d={}`
    // attribute value that will go into our `<Shape />` component.
    path: lineShape(data),
  };
}

// Used via:
// const dAttribute = createLineGraph({
//   data, // From API.
//   width: 200,
//   height: 100,
// });
// <WeatherGraph lineGraph={dAttribute} />
```

So what you see here is us using D3 to create our x and y scales so we can map our data from its domain (the original values) to the range which we want to output it (our app screen).

We then use the line generator to create the `d={}` attribute that we need for our `<Shape />` component.

From there the React Native ART component has enough information to render the shape in our app!

What you saw above was an abridged version of the [work that was done in this commit in the BetterWeather repo](https://github.com/hswolff/BetterWeather/commit/a05e3ae87929f94e5564732cf2c352b0bee576a7). To see a more rich example I strongly encourage you to check out that commit and leave any comments you may have so I can address any confusions directly.

# Axis

The next step you should take to make a richer graph is to add axis. This does not require any special React Native ART knowledge as you can create graphs using regular React Native `<View />` and `<Text />` components. The main trick is to leverage D3 so you have enough information to lay out your components correctly.

```javascript
// Extend what is returned from createLineGraph
export function createLineGraph() {
  // ... previous content omitted.
  return {
    ticks: data.map((datum) => {
      const time = datum.time;
      const value = datum.temperatureMax;

      return {
        x: scaleX(time),
        y: scaleY(value),
        datum,
      };
    }),
  };
}

// Extend our WeatherGraph component.
// Within its render() function:
class WeatherGraph extends Component {
  render() {
    return (
      // ...previous content omitted.
      <View key={'ticksX'}>
        {this.props.ticks.map((tick, index) => {
          const tickStyles = {};
          tickStyles.left = tick.x;

          return (
            <Text key={index} style={[styles.tickLabelX, tickStyles]}>
              {new Date(tick.datum.time * 1000)}
            </Text>
          );
        })}
      </View>

      <View key={'ticksY'}>
        {this.props.ticks.map((tick, index) => {
          const value = tick.datum.temperatureMax;

          const tickStyles = {};
          tickStyles.left = tick.x;
          tickStyles.top = tick.y;

          return (
            <View key={index} style={[styles.tickLabelY, tickStyles]}>
              <Text style={styles.tickLabelYText}>
                {value}&deg;
              </Text>
            </View>
          );
        })}
      </View>
    )
  }
}
```

After getting the x and y values for every position of the line we just use `position: absolute` to layout the `<View />` components for our axis!

[For the full implementation example please consult the commit on the BetterWeather repo.](https://github.com/hswolff/BetterWeather/commit/07a5e42a15923eb17472102b993938aa5fe573e3)

# Animate

The only thing cooler than creating graphs in our React Native application is animating them.

The main trick to animating graphs is to use the ART library's `Morph` module. The `Morph` module allows you to [tween](https://en.wikipedia.org/wiki/Inbetweening) from one `d={}` attribute value to another. It handles all the tricky calculations required to create the shapes that exist in-between one path and another.

We then use a standard `requestAnimationFrame` loop along with `this.setState` to render our animations.

```javascript
import Morph from 'art/morph/path';

// Extending WeatherGraph some more...
class WeatherGraph extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      const nextLinePath = createLineGraph({
        data: nextProps.data,
        width: 200,
        height: 100,
      });

      this.setState({
        // Create the ART Morph.Tween instance.
        linePath: Morph.Tween(
          this.previousGraph,
          nextLinePath,
        ),
      }, () => {
        // Kick off our animations!
        this.animate();
      });
    }
  }

  animate(start) {
    this.animating = requestAnimationFrame((timestamp) => {
      if (!start) {
        start = timestamp;
      }

      // Get the delta on how far long in our animation we are.
      const delta = (timestamp - start) / AnimationDurationMs;

      // If we're above 1 then our animation should be complete.
      if (delta > 1) {
        this.animating = null;
        // Just to be safe set our final value to the new graph path.
        this.setState({
          linePath: this.previousGraph.path,
        });

        // Stop our animation loop.
        return;
      }

      // Tween the SVG path value according to what delta we're currently at.
      this.state.linePath.tween(delta);

      // Update our state with the new tween value and then jump back into
      // this loop.
      this.setState(this.state, () => {
        this.animate(start);
      });
    });
  }
}
```

Here we calculate the nextLinePath when we see that our data changes. We then use the `Morph` module to create the beginning of our tween, and then begin our requestAnimationFrame loop to animate each point in our tween animation.

[I strongly encourage you to check out the full commit on the BetterWeather repo to see the full implementation](https://github.com/hswolff/BetterWeather/commit/6a51bce269c58f14f59e6f00dd362ce281a2b19f).

Also I strongly encourage you to [read this excellent blog post on using the Morph module](http://browniefed.com/blog/react-native-morphing-svg-paths-with-react-art/). It's where I took my original inspiration from.

# Wrapping Up

Hopefully by this point you should know a lot more than you did before you read this blog post.

Using D3 with React Native opens up a world of opportunities for what you can do with your React Native applications. D3 is so powerful and flexible that the possibilities of what you can create are far to great for me to even imagine.

I'm very curious to see what people come up with and how they manage to use these two technologies. Please leave a reply with any cool examples you may find, and please let me know if anything I explained above was not clear.

Thanks so much for reading!
