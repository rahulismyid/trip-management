import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Sandbox = (params) => {
    return (
        <View style={styles.container}>
            <Text style={styles.box1}>One</Text>
            <Text style={styles.box2}>Two</Text>
            {/* <Text style={styles.box3}>Three</Text>
            <Text style={styles.box4}>Four</Text> */}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingTop: 80,
        backgroundColor: '#333',
    },
    box1: {
        flex: 1,
        backgroundColor: 'violet',
        padding: 10
    },
    box2: {
        flex: 1,
        backgroundColor: 'gold',
        padding: 20
    },
    box3: {
        flex: 1,
        backgroundColor: 'skyblue',
        padding: 30
    },
    box4: {
        flex: 1,
        backgroundColor: 'red',
        padding: 40
    },
});

export default Sandbox;