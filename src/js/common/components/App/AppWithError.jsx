import React, { PureComponent } from 'react';

import './App.css';

class AppWithError extends PureComponent {
  render() {
    const { app } = this.props;
    const result = app && app.result ? app.result : null;

    if (result && result.size && result.size > 0) {
      return (
        <div className="appOutput">
          <h1>This should catch by ErrorBoundary</h1>
          {result.something_not_existed.get('something_not_existed')}
        </div>
      );
    }
    return <div />;
  }
}

export default AppWithError;
