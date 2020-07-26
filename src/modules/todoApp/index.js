import React, { useState } from 'react';
import { StyleSheet, Alert, View, FlatList, TouchableWithoutFeedback, Keyboard } from "react-native";
import Header from "./Header";
import TodoItem from "../todoApp/TodoItem";
import AddTodo from "../todoApp/AddTodo";

const index = () => {
    const [todos, setTodos] = useState([
        { text: 'Fish', key: 1 },
        { text: 'Market', key: 2 },
        { text: 'Bazaar', key: 3 }
    ]);

    const pressHandler = key => {
        setTodos((prevState) => {
            return prevState.filter(item => item.key != key);
        });
    };

    const submitHandler = (text) => {
        if (text.length > 3) {
            setTodos((prevState) => {
                return [
                    { text: text, key: Math.random().toString() },
                    ...prevState
                ]
            });
        } else {
            Alert.alert("Oops!", "Enter more than 3 chars", [
                { text: 'Got It', onPress: () => console.log('Got IT!') }
            ])
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <AddTodo submitHandler={submitHandler} />
                    <View style={styles.list}>
                        <FlatList
                            data={todos}
                            keyExtractor={(item) => item.key.toString()}
                            renderItem={({ item }) => (
                                <TodoItem item={item} pressHandler={pressHandler} />
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        padding: 40,
        backgroundColor: '#eee',
        flex: 1,
    },
    list: {
        flex: 1,
        marginTop: 20,
        padding: 20,
        backgroundColor: 'yellow'
    }
});

export default index;