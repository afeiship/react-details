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
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | object | false    | null    | The changed value.                    |
| onChange  | func   | false    | noop    | The change handler.                   |


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
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-details">
          <ReactDetails className="mb-5 has-text-white" />
          <button className="button is-primary is-fullwidth">Start~</button>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

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
