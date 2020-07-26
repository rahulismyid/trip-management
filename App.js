import React, { Component, useState } from 'react';
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { StyleSheet } from 'react-native';
import { } from 'react-native-sqlite-storage';

import Homescreen from "./src/components/Homescreen";
import Navigator from "./src/routes/";
import TodoApp from "./src/modules/todoApp";
import Forms from "./src/modules/Forms";
import Sandbox from "./src/components/Sandbox";
// import CustomerList from "./src/modules/List/CustomerList";
import CustomerList from "./src/modules/List/CustomerList";

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./src/assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./src/assets/fonts/Nunito-Bold.ttf')
});



const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Navigator />
      // <Homescreen />
      // <TodoApp />
      // <>
      //   <Forms />
      //   <Sandbox />
      //   <CustomerList />
      // </>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;