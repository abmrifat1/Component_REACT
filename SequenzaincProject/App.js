

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  ImageBackground,
  StatusBar,ScrollView
} from 'react-native';
import MainBg from './src/img/main-bg.jpg';
import logo from './src/img/logo.png';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-material-cards';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <ScrollView>
          <ImageBackground source={MainBg} style={styles.bodyBg}>
            <View style={styles.mainDiv}>
              <Card>
                <CardImage source={logo} style={styles.logoBg} />

                <CardContent style={{marginTop: -100}} />
                <TextInput
                  placeholder="Username"
                  underlineColorAndroid="#111212"
                  style={styles.inputBox}></TextInput>
                <TextInput
                  placeholder="Password"
                  underlineColorAndroid="#111212"
                  style={styles.inputBox}></TextInput>
                <CardAction>
                  <CardButton
                    style={styles.buttonBg}
                    onPress={() => {}}
                    title="Sign In"
                    color="white"
                  />
                </CardAction>
                <Text style={styles.footer}>
                  Forgot your password? Click here to reset.
                </Text>
              </Card>
            </View>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
   bodyBg: {
    width: '100%',
    height: '100%',
    marginBottom:120,
  },
  mainDiv: {
    height: '60%',
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '35%',
    padding: 15,
  },
  inputBox: {
    borderRadius: 4,
    margin: 5,
    paddingLeft: 15,
    paddingRight: '70%',
    marginLeft:12,
  },
  buttonBg: {
    backgroundColor: '#7D162E',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginLeft:15,
  },

  logoBg: {
    alignSelf:'center',
    marginTop: 10,
    // marginLeft: 30,
    marginBottom: '30%',
    backgroundColor: '#EFEDF2',
    width:'83%',
  },
  footer: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingBottom: 20,
    fontSize: 15,
    marginLeft:5,
  },
});

export default App;