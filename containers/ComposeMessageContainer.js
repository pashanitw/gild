import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid,View,Text } from 'react-native'
import {connect} from 'react-redux';

class ComposeMessageContainer extends Component{
  render(){
    return <View style={{flex:1}}>
      <Text>{this.props.title}</Text>
    </View>
  }
}
const mapStateToProps = (state)=>{
  console.log('state is',state)
  return {
    title:state.message.title
  }
}

export default connect(mapStateToProps,null)(ComposeMessageContainer)

