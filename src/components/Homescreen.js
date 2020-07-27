import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const Homescreen = ({ navigation }) => {
    const handleRoute = (route) => {
        navigation.navigate(route);
    };

    return (
        <>
            <View style={styles.container}>
                <Button onPress={() => { handleRoute('add') }} style={styles.button1} title="Add new trip" />
                <Button onPress={() => { handleRoute('triplist') }} style={styles.button2} title="Check my trips" />
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        position: 'relative',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    button1: {
        flex: 1,
        bottom: 50,
        backgroundColor: 'violet',
        padding: 20
    },
    button2: {
        flex: 1,
        position: 'absolute',
        backgroundColor: 'gold',
        padding: 20
    },
})


export default Homescreen;