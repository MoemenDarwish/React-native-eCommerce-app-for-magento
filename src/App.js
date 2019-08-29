import React, { Component } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import MainApp from './MainApp'
import Store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={Store.store}>
        <PersistGate loading={null} persistor={Store.persistor}>

          <MainApp />
        </PersistGate>

      </Provider>
    )
  }
}
