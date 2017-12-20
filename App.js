/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './app/Components/header';
import AlbumList from './app/Components/AlbumList';


export default class App extends Component<{}> {
  render() {
    return (
      <View style = { {flex: 1} }>
          <Header headerText={'Albums'}/>
             <AlbumList/>
      </View>
    );
  }
}


/*
const App = () => {
    <View>
        <Header headerText={'Albums'}/>
    </View>
};

export default App;
*/