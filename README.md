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
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | bool   | false    | -       | The changed value.                    |
| onChange  | func   | false    | noop    | The change handler.                   |
| summary   | any    | false    | -       | The changed value.                    |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-details/dist/style.scss";

  // customize your styles:
  $react-details-options: ()
  ```
2. import js
  ```js
  import NxOfflineSw from '@feizheng/next-offline-sw';
  import ReactGithubCorner from '@feizheng/react-github-corner';
  import ReactSwUpdateTips from '@feizheng/react-sw-update-tips';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactDetails from '@feizheng/react-details';
  import './assets/style.scss';

  class App extends React.Component {
    state = { hasUpdate: false, value: true };

    componentDidMount() {
      NxOfflineSw.install({
        onUpdateReady: () => {
          this.setState({ hasUpdate: true });
        }
      });
    }

    render() {
      return (
        <div className="p-3 app-container">
          <p className="p-3 bg-gray-200 mb-2">value: {this.state.value + ''}</p>
          <ReactDetails
            value={true}
            summary="道可道，非常道"
            onChange={(e) => {
              this.setState({ value: e.target.value });
            }}>
            道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。
            故常无欲，以观其妙，常有欲，以观其徼。
            此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。
          </ReactDetails>
          <ReactSwUpdateTips value={this.state.hasUpdate} />
          <ReactGithubCorner value="https://github.com/afeiship/react-details" />
        </div>
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

[version-image]: https://img.shields.io/npm/v/@feizheng/react-details
[version-url]: https://npmjs.org/package/@feizheng/react-details

[license-image]: https://img.shields.io/npm/l/@feizheng/react-details
[license-url]: https://github.com/afeiship/react-details/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/react-details
[size-url]: https://github.com/afeiship/react-details/blob/master/dist/react-details.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/react-details
[download-url]: https://www.npmjs.com/package/@feizheng/react-details
