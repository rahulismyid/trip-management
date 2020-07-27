import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from "../components/CardView";

const review = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Card>
                <View style={styles.rowFlexContainer}>
                    <Text style={styles.label}>Date:</Text>
                    <Text style={styles.text}>{navigation.getParam('dateTime')}</Text>
                </View>
                <View style={styles.rowFlexContainer}>
                    <Text style={styles.label}>Car:</Text>
                    <Text style={styles.text}>{navigation.getParam('car')}</Text>
                </View>
                <View style={styles.rowFlexContainer}>
                    <Text style={styles.label}>Customer:</Text>
                    <Text style={styles.text}>{navigation.getParam('cust_name')}</Text>
                </View>
                <View style={styles.rowFlexContainer}>
                    <Text style={styles.label}>Mobile:</Text>
                    <Text style={styles.text}>{navigation.getParam('mobile')}</Text>
                </View>
                <View style={styles.rowFlexContainer}>
                    <View style={styles.rowFlexContainer}>
                        <Text style={styles.label}>From:</Text>
                        <Text style={styles.text}>{navigation.getParam('from')}</Text>
                    </View>
                    <View style={styles.rowFlexContainer}>
                        <Text style={styles.label}>To:</Text>
                        <Text style={styles.text}>{navigation.getParam('to')}</Text>
                    </View>
                </View>
                <View style={styles.rowFlexContainer}>
                    <Text style={styles.label}>Rate/km:</Text>
                    <Text style={styles.text}>{navigation.getParam('perKmPrice')}</Text>
                </View>
                <View style={styles.rowFlexContainer}>
                    <Text style={styles.label}>Start Reading:</Text>
                    <Text style={styles.text}>{navigation.getParam('startReading')}</Text>
                </View>
                <View style={styles.rowFlexContainer}>
                    <Text style={styles.label}>End Reading:</Text>
                    <Text style={styles.text}>{navigation.getParam('endReading')}</Text>
                </View>
                <View style={styles.lineContainer}>
                    <View style={styles.horizontalLine} />
                </View>
                <View style={styles.rowFlexContainer}>
                    <Text style={styles.label}>Bhata:</Text>
                    <Text style={styles.text}>{navigation.getParam('bhata')}</Text>
                </View>
                <View style={styles.rowFlexContainer}>
                    <Text style={styles.label}>Toll:</Text>
                    <Text style={styles.text}>{navigation.getParam('toll')}</Text>
                </View>
                <View style={styles.rowFlexContainer}>
                    <Text style={styles.label}>Rto Charges:</Text>
                    <Text style={styles.text}>{navigation.getParam('rtoCharges')}</Text>
                </View>
                <View style={styles.rowFlexContainer}>
                    <Text style={styles.label}>Taxes and Fines:</Text>
                    <Text style={styles.text}>{navigation.getParam('fines')}</Text>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10
    },
    horizontalLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc'
    },
    container: {
        padding: 24,
    },
    rowFlexContainer: {
        flexDirection: 'row',
        marginVertical: 2
    },
    text: {
        color: 'coral',
        fontSize: 15
    },
    label: {
        marginHorizontal: 5,
        color: '#736d63',
        textDecorationLine: 'underline',
        fontSize: 15
    },
});


export default review;