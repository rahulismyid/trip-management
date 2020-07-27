import React, { PureComponent } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CardView from "../components/CardView";

class DetailsJSX extends PureComponent {
    constructor(props) {
        super(props);
    }
    handleString(str) {
        return str
            ? str.toString().substr(0, 1)
            : "";
    }
    render() {
        return (
            <CardView style={styles.viewContainer}>
                <View style={styles.rowFlexContainer}>
                    <Text style={styles.initialLetter}></Text>
                    <Text style={styles.initialTextLetter}>{this.handleString(this.props.item.cust_name)}</Text>
                </View>
                <View style={styles.rowFlexContainer}>
                    <Text style={styles.custName} >{this.props.item.cust_name}</Text>
                </View>
                <View style={styles.rowFlexContainer}>
                    <Text style={styles.label}>Car:</Text>
                    <Text style={styles.marginStyle}>{this.props.item.car}</Text>
                </View>
                <View style={styles.rowFlexContainer}>
                    <Text style={styles.label}>Date &amp; Time:</Text>
                    <Text style={styles.marginStyle}>{this.props.item.dateTime}</Text>
                </View>
                <View style={styles.rowFlexContainer}>
                    <Text style={styles.label}>Mobile:</Text>
                    <Text style={styles.marginStyle}>{this.props.item.mobile}</Text>
                </View>
                <View style={styles.rowFlexContainer}>
                    <View style={styles.rowFlexContainer}>
                        <Text style={styles.label}>From:</Text>
                        <Text style={styles.marginStyle}>{this.props.item.from}</Text>
                    </View>
                    <View style={styles.rowFlexContainer}>
                        <Text style={styles.label}>To</Text>
                        <Text style={styles.marginStyle}>{this.props.item.to}</Text>
                    </View>
                </View>
                <View style={styles.rowFlexContainer}>
                    <Text style={styles.label}>Type:</Text>
                    <Text style={styles.marginStyle}>{this.props.item.tripType}</Text>
                </View>
            </CardView>
        )
    }
}

const styles = StyleSheet.create({
    initialTextLetter: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        elevation: 2,
        top: 20,
        left: 15,
        color: 'white'
    },
    initialLetter: {
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'flex-start',
        width: 40,
        height: 40,
        borderRadius: 50,
        marginBottom: 20,
        marginRight: 10,
        backgroundColor: '#333',
    },
    label: {
        marginHorizontal: 5,
        color: '#736d63',
        textDecorationLine: 'underline'
    },
    custName: {
        color: "purple",
        marginHorizontal: 5,
        fontSize: 21
    },
    marginStyle: {
        marginHorizontal: 5,
    },
    rowFlexContainer: {
        flexDirection: 'row'
    },
    item: {
        backgroundColor: '#eee',
        height: 50,
        paddingVertical: 13,
        textAlignVertical: 'center',
        borderRadius: 4,
        fontSize: 12,
        marginHorizontal: '1%'
    }
})


export default DetailsJSX;