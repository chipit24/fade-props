FadeProps [![Build Status](https://travis-ci.org/chipit24/fade-props.svg?branch=master)](https://travis-ci.org/chipit24/fade-props)
=========

A ReactJS component that seamlessly fades between the props it is provided; it fades one child out, removes it, then fades the next child in. `fade-props` uses CSS animations and doesn't rely on `react-addons-css-transition-group` or `react-addons-transition-group`.

![fade-props animation](https://s11.postimg.io/pvga62kir/fade_props.gif)

#### Installation

```js
npm i -S fade-props
```

#### Usage

Import the component:
```js
import FadeProps from 'fade-props';
```
Place your child component inside `FadeProps`:
```jsx
<FadeProps>{childComponent}</FadeProps>
```
Now, when the child component changes, it will animate (fade) to the other component, or fade out if the child component was removed.

The `FadeProps` component accepts an `animationLength` prop which you can set to control the length of the fade animation; the default value is `200`. The total transition time will be twice this if fading between two components (for fading one component out, and fading the next component in).

#### Running the demo

Clone the repository and `cd` into it, run `npm i` to install all dependencies, then run `npm start` to start the webpack dev server. Visit `http://localhost:8080` in your browser to view the demo.

Any contributions and feedback are welcome.
