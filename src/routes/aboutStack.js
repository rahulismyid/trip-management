import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import About from "../modules/review/about";
import Header from "../shared/header";

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="About Screen" />
            }
        },
    }
};


const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#ccc' }
    }
});

export default AboutStack;
