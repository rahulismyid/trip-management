import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'
import Card from "../../shared/card";

const review = ({ navigation }) => {
    const pressHandler = () => {
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Image source={require('../../assets/images/heart_logo.png')} height="10" width="02" />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,

    }
});


export default review;