import React from 'react';
import {
    View, Text,
    ScrollView,
    StyleSheet
} from 'react-native';

const ListCommponent = ({ list }) => {
    return (
        <ScrollView>
            {list ?
                list.map(item => {
                    return (
                        <View style={styles.viewContainer} key={item.id}>
                            <Text style={styles.item}>{item.first_name}</Text>
                        </View>
                    );
                })
                :
                null
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create(
    {
        viewContainer: {
            flex: 0,
            paddingTop: 40,
            paddingHorizontal: 20,
            alignItems: 'center'
        },
        item: {
            backgroundColor: '#eee',
            width: '100%',
            textAlign: 'center',
            paddingVertical: 5,
            borderRadius: 4,
            fontSize: 20
        }
    }
);

export default ListCommponent;