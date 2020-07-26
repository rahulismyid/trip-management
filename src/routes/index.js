import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import Home from "../modules/Forms/index";
import ReviewDetails from "../modules/review/reviewDetails";
import Header from "../shared/header";


const screens = {
    Home: {
        screen: Home,
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: "Review Screen",
        }
    }
};


const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#ccc' }
    }
});

export default createAppContainer(HomeStack);
;
