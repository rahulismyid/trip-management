import React, { useState } from 'react';
import { Text, View, Button, FlatList, TouchableOpacity, Modal } from 'react-native'
import { globalStyles } from "../../assets/styles/global.js";
import Card from "../../shared/card";
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from "../Forms/ReviewForm";

const index = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const [review, setReview] = useState(
        [{
            "id": 1,
            "title": "VP Marketing",
            "rating": "1445",
            "body": "xscqwqdwqdefrqfrfrfsd"
        }, {
            "id": 2,
            "title": "Product Engineer",
            "rating": "3089",
            "body": "cewfewwwwwwwwwwwwwwww"
        }, {
            "id": 3,
            "title": "Product Engineer",
            "rating": "88902",
            "body": "!@#$%^&*()"
        }, {
            "id": 4,
            "title": "Teacher",
            "rating": "16244",
            "body": "1.00"
        }, {
            "id": 5,
            "title": "Sales Representative",
            "rating": "78",
            "body": "jdopahvjkavbhflbvs"
        }]
    );

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType="slide">
                <View style={globalStyles.modal}>
                    <MaterialIcons
                        name="close"
                        size={24}
                        onPress={() => setModalOpen(false)}
                    />
                    <Text>kdlnflzbnfjbnl</Text>
                    <ReviewForm />
                </View>
            </Modal>

            <MaterialIcons
                name="add"
                size={24}
                onPress={() => setModalOpen(true)}
            />


            <FlatList
                data={review}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default index;