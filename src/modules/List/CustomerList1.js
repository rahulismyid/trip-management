import React, { useEffect } from 'react';
import { TextInput, View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import CardView from "../../components/CardView";
import SearchInput, { createFilter } from 'react-native-search-filter';
import jData from "../../mockData/nameList.json";
const KEYS_TO_FILTERS = ['cust_name', 'dateTime', 'mobile', 'from', 'to'];

let jsonData = jData;

export default function CustomerList() {
    useEffect(() => {
        jsonData.sort(compare);
    }, []);

    const handleString = str => {
        return str.toString().substr(0, 1);
    };

    const compare = (a, b) => {
        if (a.cust_name < b.cust_name) {
            return -1;
        }
        if (a.cust_name > b.cust_name) {
            return 1;
        }
        return 0;
    }

    const pressHandler = id => {
        console.label(id);
    };

    let filteredData = jsonData;
    const searchHandler = (text) => {
        filteredData = filteredData.filter(createFilter(text, KEYS_TO_FILTERS));
    }

    return (
        <View style={styles.viewContainer}>
            {/* <SearchInput
                onChangeText={(text) => { searchHandler(text) }}
                style={styles.searchInput}
                placeholder="Type a message to search"
            /> */}
            <TextInput
                style={styles.searchBox}
                placeholder={'Search'}
                onChangeText={(text) => { searchHandler(text) }}
            />
            <ScrollView>
                {filteredData.map(item => {
                    return (
                        <TouchableOpacity onPress={() => alert(item.cust_name)} key={item.id}>
                            <View>
                                <Text>{item.cust_name}</Text>
                                <Text>{item.cust_name}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    );
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
