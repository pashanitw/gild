import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';

import ComposeMessageContainer from './containers/ComposeMessageContainer';
import MessageListContainer from './containers/MessageListContainer';

export default function () {
  return <Router>
    <Scene key='root' hideNavBar>
      <Scene key='composeMessageScreen'
             component={ComposeMessageContainer}
             initial/>
      <Scene key='messageListScreen'
             component={MessageListContainer}/>
    </Scene>
  </Router>
}