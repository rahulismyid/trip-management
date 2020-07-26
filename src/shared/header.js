import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";


export default function header({ navigation, title }) {

    const openMenu = () => {
        navigation.openDrawer();
    };

    return (
        <ImageBackground source={require('../assets/images/game_bg.png')} style={styles.header}>
            <MaterialIcons style={styles.icon} onPress={() => openMenu()} name="menu" />
            <View style={styles.headerTitle}>
                <Image style={styles.headerImage} source={require('../assets/images/heart_logo.png')} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
};


const styles = StyleSheet.create({
    header: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        left: '1%',
        fontSize: 22
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    },
    headerTitle: {
        flexDirection: 'row'
    }
});
