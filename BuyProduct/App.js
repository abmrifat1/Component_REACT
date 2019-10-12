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
  StatusBar,Icon,Image,TextInput,TouchableOpacity,FlatList
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import img_iphone from './src/img/iphone.jpg';
import img_mi from './src/img/mi.jpeg';
//import shoppingItems from "./src/components/shoppingItems";


const App=() => {

  const shoppingItems = [
    {
      img: img_iphone,
      name: 'iphone',
      quantity: 2,
      price: 80000,
    },
    {
      img: img_mi,
      name: 'mi',
      quantity: 5,
      price: 90000,
    },
  ];
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <View style={styles.parentContent}>
    
           <View style={styles.mainContent}>
             <View style={styles.cartContent}>
             <Text style={styles.cartContentText}>My Cart</Text>
               <Text style={styles.cartContentText}>$53.97</Text>
             </View>
             <View style={styles.itemContent}>
               <View style={{flex:1,padding:15}}><Text style={{fontSize:15}}>04 Items</Text></View>
               <View style={{flex:1,flexDirection:"row",justifyContent:"space-around",padding:10,alignItems:"center",}}>
                 <Text style={styles.circle1}></Text>
                 <Text style={{fontSize:10}}>Organic</Text>
                 <Text style={styles.circle2}></Text>
                 <Text style={{fontSize:10}}>Local</Text>
                 <Text style={styles.circle3}></Text>
                 <Text style={{fontSize:10}}>Speciality</Text>
               </View>
             </View>
             <View style={styles.listContent}>
                <View style={styles.img}>
                <Image
                    source={img_iphone}
                    style={{width: 50, height: 50,padding:40}}
                  />
                </View>
                <View style={styles.itemDetails}>  
                  <View style={styles.itemName}>
                   <Text style={{fontSize:18,padding:10}}>Celery Stalk</Text>
                  </View>
                  <View style={styles.itemInfo}>
                     <View>
                       <Text style={{fontSize:10}}>UOM</Text>
                       <Text>CASE</Text>
                     </View>
                     <View>
                       <Text style={{fontSize:10}}>PACK SIZE</Text>
                       <Text>36CT</Text>
                     </View>
                     <View>
                       <Text style={{fontSize:10}}>QUANTITY</Text>
                       <Text>2</Text>
                     </View>
                     <View>
                       <Text style={{fontSize:10}}>PER UNIT</Text>
                       <Text>$8.99</Text>
                     </View>
                     <View>
                       <Text style={{fontSize:10}}>TOTAT</Text>
                       <Text>$17.98</Text>
                     </View>
                  </View>
                </View>
                <View style={styles.itemType}>
                  <Text style={styles.circle2}></Text>
                </View>
             </View>
           </View>
           <View style={styles.commentContent}>
             <TextInput placeholder="Enter Order level notes here" style={styles.inputStyle}></TextInput>
           </View>
           <View style={styles.confirmContent}>
           <TouchableOpacity
            style={{
              
              backgroundColor: '#EDE31C',
              alignSelf: 'center',
              borderRadius:30,
              padding:10,
              paddingLeft:60,
              paddingRight:60,  
              justifyContent:"center",
              marginTop:40,
            }}>
            <Text style={{fontSize:15}}>CONFIRM ORDER</Text>
          </TouchableOpacity>
           </View>

        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  parentContent: {
   // flexDirection:"column",
   // margin:15,
},
mainContent:{
 height:"60%",
},
commentContent:{
  height:"20%",
},
confirmContent:{
  height:"20%",
},
listContent:{
  flexDirection:"row"
},
itemInfo:{
  flexDirection:"row",
  justifyContent:"space-around",
  
},
inputStyle: {
  color: 'black',
  width: '95%',
  height:'100%',
  borderColor: '#DDDD',
  borderWidth: 1,
  margin:10,
  justifyContent: "flex-start"
},
img:{
  flex:2,
},
itemDetails:{
  flex:10,
},
itemType:{
  flex:1,
  paddingTop:10,
},
cartContent: {
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor:"#45BF68",
    padding:15,
},
cartContentText:{
  color:"#FCFCFC",
  fontSize:18,
},
itemContent:{
  flexDirection:"row",
  justifyContent:"space-between",
},
circle1:{
  height:10,
  width:10,
  backgroundColor:"#73421A",
  borderRadius:50,
  marginLeft:7,
},
circle2:{
  height:10,
  width:10,
  backgroundColor:"#145727",
  borderRadius:50,
  marginLeft:7,
},
circle3:{
  height:10,
  width:10,
  backgroundColor:"#C45A08",
  borderRadius:50,
  marginLeft:7,
},
});

export default App;
