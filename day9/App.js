/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {color} from "./src/style";

const App= () => {
  const{basicText}=styles;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView style={{flexDirection:"row",justifyContent:'space-around',alignItems:"stretch",backgroundColor:"#000000",height:200}}>
        <Text style={[basicText,{backgroundColor:"#ffffff",flex:1}]}>Sample</Text>
        <Text style={[basicText,{backgroundColor:"red",flex:1}]}>Text</Text>

      </SafeAreaView> */}
      <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"stretch",height:200}}>
        <Text style={{flex:1,backgroundColor:"green",textAlign:"center"}}>ABM</Text>
        <Text style={{backgroundColor:"red",flex:2,textAlign:"center"}}>ARS</Text>
        <Text style={{flex:1,backgroundColor:"green",textAlign:"center"}}>RIFAT</Text>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  basicText:{fontSize:30,color:color.green},
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
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
  },
});

export default App;
