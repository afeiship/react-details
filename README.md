# react-details
> Details for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-details
```

## properties
| Name      | Type   | Required | Default | Description                                                          |
| --------- | ------ | -------- | ------- | -------------------------------------------------------------------- |
| className | string | false    | -       | The extended className for component.                                |
| value     | bool   | false    | -       | The changed value.                                                   |
| onChange  | func   | false    | noop    | The change handler.                                                  |
| summary   | any    | false    | -       | The summary content.                                                 |
| disabled  | bool   | false    | -       | When present, it specifies that the details should be disabled.      |
| arrow     | bool   | false    | true    | When present, it specifies that the summary arrow should be display. |


## usage
1. import css
  ```scss
  @import "~@jswork/react-details/dist/style.css";

  // or use sass
  @import "~@jswork/react-details/dist/style.scss";

  // customize your styles:
  $react-details-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactDetails from '@jswork/react-details';
  import './assets/style.scss';

  class App extends React.Component {
    state = { value: true };

    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-details">
          <p className="p-3 bg-gray-200 mb-2">value: {this.state.value + ''}</p>
          <ReactDetails
            value={true}
            arrow={false}
            summary="道可道，非常道"
            onChange={(e) => {
              this.setState({ value: e.target.value });
            }}>
            道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。
            故常无欲，以观其妙，常有欲，以观其徼。
            此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。
          </ReactDetails>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

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

[version-image]: https://img.shields.io/npm/v/@jswork/react-details
[version-url]: https://npmjs.org/package/@jswork/react-details

[license-image]: https://img.shields.io/npm/l/@jswork/react-details
[license-url]: https://github.com/afeiship/react-details/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-details
[size-url]: https://github.com/afeiship/react-details/blob/master/dist/react-details.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-details
[download-url]: https://www.npmjs.com/package/@jswork/react-details
