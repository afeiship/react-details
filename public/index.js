import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDetails from '../src/main';
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
