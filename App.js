import React, { Component } from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';


import AppNavigator from './src/navigation';

import {store, persistor} from './src/redux';
import ErrorBoundary from './src/shared/ErrorBoundary';
import SplashScreen from "react-native-splash-screen";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => SplashScreen.hide() , 2000);
  }

  render() {
    return (
      <Provider store={store}>
        <ErrorBoundary navigationRef={this.state.navigationRef}>
          <PersistGate loading={null} persistor={persistor}>
              <AppNavigator onGetNavigationRef={ref => this.setState({navigationRef: ref})} />
          </PersistGate>
        </ErrorBoundary>
      </Provider>
    );
  }
}

export default App;
