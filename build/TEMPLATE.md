# react-details
> Details for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/react-details
```

## update
```shell
npm update @feizheng/react-details
```

## properties
__GENERATE_DOCS__

## usage
1. import css
  ```scss
  @import "~@feizheng/react-details/dist/style.scss";

  // customize your styles:
  $react-details-options: ()
  ```
2. import js
  ```js
__GENERATE_DAPP__
  ```

## animation
```css
/* remove arrow */
&::-webkit-details-marker {
  // display: none;
}


/* add animation */
&[open] summary ~ * {
  animation: open 0.5s ease-in-out;
}

@keyframes open {
  0% {
    opacity: 0;
    margin-left: -5px;
  }
  100% {
    opacity: 1;
    margin-left: 0px;
  }
}
```

## documentation
- https://afeiship.github.io/react-details/


## license
Code released under [the MIT license](https://github.com/afeiship/react-details/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/react-details
[version-url]: https://npmjs.org/package/@feizheng/react-details

[license-image]: https://img.shields.io/npm/l/@feizheng/react-details
[license-url]: https://github.com/afeiship/react-details/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/react-details
[size-url]: https://github.com/afeiship/react-details/blob/master/dist/react-details.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/react-details
[download-url]: https://www.npmjs.com/package/@feizheng/react-details
