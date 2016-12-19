import React, {Component} from 'react'
import {ScrollView, Image, BackAndroid, View, Text} from 'react-native'
import Routes from './Routes'
import store from './store'
import {Provider} from 'react-redux'

export default class App extends Component {
  render() {
    return <View style={{flex:1}}>
      <Provider store={store}>
        <Routes/>
      </Provider>
    </View>
  }
}