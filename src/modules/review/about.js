import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

const about = () => {
    return (
        <View style={styles.container}>
            <Text>
                About
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,

    }
});


export default about;