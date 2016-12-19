import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid,View,Text } from 'react-native'

export default class MessageListContainer extends Component{
  render(){
    alert("my render")
    return <View style={{flex:1}}>
      <Text>message list container</Text>
    </View>
  }
}