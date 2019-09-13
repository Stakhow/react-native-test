/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// https://api.unsplash.com/photos/?client_id=ad4d0a93403b182ffa03cd3e4def3b52ca9799d3d957acd92a313b430c73c074



import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createStore, applyMiddleware,  } from "redux";
import {Provider} from "react-redux";
import initialState from './initial-state.js';
import reducer from './reducers'
import thunk from 'redux-thunk';
import ListPhotos from "./components/list-photos/list-photos";


const store = createStore(reducer, initialState, applyMiddleware(thunk));

store.subscribe(()=>{
	console.log("store.subscribe", store.getState());
});


const App = () => {
	
console.log('App works');

	
  return (
	  <Provider store={store}>
      <Fragment>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
	          <ListPhotos />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
	  </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: "#d2d2d2",
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  }
});

export default App;
