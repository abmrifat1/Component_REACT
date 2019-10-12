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
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App=()=> {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.parentContent}>
           <View style={styles.mainContent}>
             <View style={styles.cartContent}>
               <Text>My Cart</Text>
               <Text>$53.97</Text>
             </View>
             <View style={styles.itemContent}>
               <View style={{flex:1}}><Text>04 Items</Text></View>
               <View style={{flex:1,flexDirection:"row",justifyContent:"space-around"}}>
                 <Text>Organic</Text>
                 <Text>Local</Text>
                 <Text>Speciality</Text>
               </View>
             </View>
             <View style={styles.listContent}>
                <View style={styles.img}>
                  <Text>image</Text>
                </View>
                <View style={styles.itemDetails}>
                  <View style={styles.itemName}>
                   
                  </View>
                  <View style={styles.itemInfo}>

                  </View>
                </View>
                <View style={styles.itemType}>
                  <Text>type</Text>
                </View>
             </View>
           </View>
           <View style={styles.commentContent}></View>
           <View style={styles.confirmContent}></View>

        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  parentContent: {
      flexDirection:"column",
      margin:15,
  },
  listContent:{
    flexDirection:"row"
  },
  img:{
    flex:2,
  },
  itemDetails:{
    flex:10,
  },
  itemType:{
    flex:1,
  },
  cartContent: {
      flexDirection:"row",
      justifyContent:"space-between"
  },
  itemContent:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  
});

export default App;
