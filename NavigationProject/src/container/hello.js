import React from 'react';
import {
    SafeAreaView,View,
    Text,
} from 'react-native';

class Hello extends React.Component{
    static navigationOptions = {
        title: 'E-ShoP',
      };
      render(){
          return(
              <>
<StatusBar barStyle="dark-content" />
        <SafeAreaView></SafeAreaView>
           <View>
               <Text>Hello</Text>
           </View>
             </>
          );
      }
}
export default Hello;