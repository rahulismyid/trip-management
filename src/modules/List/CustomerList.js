import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { createFilter } from 'react-native-search-filter';
import jsonData from "../../mockData/nameList.json";
import CardView from "../../components/CardView";


const KEYS_TO_FILTERS = ['cust_name', 'mobile',];

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }
    handleString(str) {
        return str.toString().substr(0, 1);
    }
    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }
    compare = (a, b) => {
        if (a.cust_name < b.cust_name) {
            return -1;
        }
        if (a.cust_name > b.cust_name) {
            return 1;
        }
        return 0;
    }
    render() {
        const filteredData = jsonData.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS)).sort(this.compare);
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.searchBox}
                    placeholder={'Search'}
                    onChangeText={(term) => { this.searchUpdated(term) }}
                />
                <ScrollView>
                    {filteredData.map(item => {
                        return (
                            <TouchableOpacity style={styles.separator} key={item.id} onPress={() => pressHandler(item.id)}>
                                <CardView style={styles.viewContainer}>
                                    <View style={styles.rowFlexContainer}>
                                        <Text style={styles.initialLetter}></Text>
                                        <Text style={styles.initialTextLetter}>{this.handleString(item.cust_name)}</Text>
                                    </View>
                                    <View style={styles.rowFlexContainer}>
                                        <Text style={styles.custName} >{item.cust_name}</Text>
                                    </View>
                                    <View style={styles.rowFlexContainer}>
                                        <Text style={styles.label}>Car:</Text>
                                        <Text style={styles.marginStyle}>{item.car}</Text>
                                    </View>
                                    <View style={styles.rowFlexContainer}>
                                        <Text style={styles.label}>Date &amp; Time:</Text>
                                        <Text style={styles.marginStyle}>{item.dateTime}</Text>
                                    </View>
                                    <View style={styles.rowFlexContainer}>
                                        <Text style={styles.label}>Mobile:</Text>
                                        <Text style={styles.marginStyle}>{item.mobile}</Text>
                                    </View>
                                    <View style={styles.rowFlexContainer}>
                                        <View style={styles.rowFlexContainer}>
                                            <Text style={styles.label}>From:</Text>
                                            <Text style={styles.marginStyle}>{item.from}</Text>
                                        </View>
                                        <View style={styles.rowFlexContainer}>
                                            <Text style={styles.label}>To</Text>
                                            <Text style={styles.marginStyle}>{item.to}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.rowFlexContainer}>
                                        <Text style={styles.label}>Type:</Text>
                                        <Text style={styles.marginStyle}>{item.tripType}</Text>
                                    </View>
                                </CardView>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create(
    {
        initialTextLetter: {
            flex: 1,
            position: 'absolute',
            alignItems: 'center',
            elevation: 2,
            top: 10,
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
        searchBox: {
            marginHorizontal: 20,
            borderRadius: 5,
            marginBottom: 10,
            paddingHorizontal: 8,
            paddingVertical: 6,
            marginTop: 20,
            borderWidth: 1,
            borderColor: '#ccc',
            fontSize: 18
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
        /****************/

        viewContainer: {
            flex: 1,
            paddingTop: 30,
        },
        separator: {
            borderColor: '#ccc',
            marginVertical: 5,
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
    }
);
