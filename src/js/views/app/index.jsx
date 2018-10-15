import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';

import LazyLoading from '../../common/components/LazyLoading/LazyLoading'
import { actions as appActions } from '../../redux/modules/app';
import { appSelector } from '../../redux/selectors/appSelector';
import { AppWithError } from '../../common/components/App';
import { ErrorBoundary } from '../../common/components/Utilities';

require('../../../style/index.css');

const LazyApp = Loadable({
  loader: () => import('../../common/components/App/App'),
  loading: LazyLoading,
})

const mapStateToProps = state => ({
  app: appSelector(state),
});

const mapDispatchToProps = {
  ...appActions,
};

@connect(mapStateToProps, mapDispatchToProps)
class AppView extends Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.getAwesomeCode();
  }

  render() {
    return (
      <Fragment>
        <LazyApp {...this.props} />
        <ErrorBoundary>
          <AppWithError {...this.props} />
        </ErrorBoundary>
      </Fragment>
    )
  }
}

export default AppView;
