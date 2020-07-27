import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import Home from "../components/Homescreen";
import AddNewTrip from "../components/AddNewTrip";
import TripList from "../components/TripList";
import DisplayDetails from "../components/DisplayDetails";
import {
    HEADER_COLOR,
    HEADER_ADDNEW_SCREEN_TITLE,
    HEADER_HOME_SCREEN_TITLE,
    HEADER_TRIPLIST_SCREEN_TITLE,
    HEADER_DISPLAYDETAILS_SCREEN_TITLE
} from "../common/constants";

const screens = {
    home: {
        screen: Home,
        navigationOptions: {
            title: HEADER_HOME_SCREEN_TITLE,
        }
    },
    add: {
        screen: AddNewTrip,
        navigationOptions: {
            title: HEADER_ADDNEW_SCREEN_TITLE,
        }
    },
    triplist: {
        screen: TripList,
        navigationOptions: {
            title: HEADER_TRIPLIST_SCREEN_TITLE,
        }
    },
    displaydetails: {
        screen: DisplayDetails,
        navigationOptions: {
            title: HEADER_DISPLAYDETAILS_SCREEN_TITLE,
        }
    }
};


const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: HEADER_COLOR }
    }
});

export default createAppContainer(HomeStack);