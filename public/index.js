import NxOfflineSw from '@feizheng/next-offline-sw';
import ReactGithubCorner from '@feizheng/react-github-corner';
import ReactSwUpdateTips from '@feizheng/react-sw-update-tips';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDetails from '../src/main';
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
