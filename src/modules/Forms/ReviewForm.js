import React from 'react';
import { TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from "../../assets/styles/global";

const ReviewForm = () => (
    <Formik
        initialValues={{ title: '', rating: '' }}
        onSubmit={(values) => {
            console.log('values', values)
        }}
    >
        {(props) => (
            <>
                <TextInput
                    style={globalStyles.input}
                    placeholder="Review Title"
                    onChangeText={props.handleChange('title')}
                    value={props.values.title}
                />
                <TextInput
                    style={globalStyles.input}
                    placeholder="Rating"
                    onChangeText={props.handleChange('rating')}
                    value={props.values.rating}
                />
                <Button
                    title="Submit"
                    color="maroon"
                    onPress={props.handleSubmit}
                />
            </>
        )}
    </Formik>
);

export default ReviewForm;