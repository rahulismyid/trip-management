import React, { useEffect } from 'react';
import { TextInput, Button, View, StyleSheet, Platform } from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from "../../assets/styles/global";
import DatePickerComponent from "../../components/DatePicker";
import axios from "axios";
import * as yup from "yup";

const ReviewSchema = yup.object({
    car: yup.string().required(),
    mobile: yup.number().required()
});

const ReviewForm = () => {

    const fieldsObj = {
        car: '',
        dateTime: '',
        custName: '',
        mobile: '',
        from: '',
        to: '',
        perKmPrice: '',
        startReading: '',
        endReading: '',
        bhata: '',
        toll: '',
        rtoCharges: '',
        fines: ''
    };

    const handleOnSubmit = (values) => {
        console.log('inside submit', values);
    };

    useEffect(() => {
    }, []);

    const validate = (values) => {
        console.log('inside validate');
        return false;
    };

    return (
        <Formik
            initialValues={fieldsObj}
            onSubmit={handleOnSubmit}
            validate={(values) => validate(values)}
        >
            {({ values, handleChange, handleSubmit }) => (
                <>
                    <View style={[styles.container, styles.topContainer]}>
                        <TextInput
                            style={styles.box}
                            placeholder={'Car'}
                            onChangeText={handleChange('car')}
                            value={values.title}
                        />
                        <TextInput
                            style={styles.box}
                            placeholder="Date & Time"
                            onChangeText={handleChange('dateTime')}
                            value={values.rating}
                        />
                    </View>
                    <View style={styles.container}>
                        <TextInput
                            style={styles.box}
                            placeholder={'Customer Name'}
                            onChangeText={handleChange('custName')}
                            value={values.title}
                        />
                        <TextInput
                            style={styles.box}
                            placeholder="Mobile"
                            onChangeText={handleChange('mobile')}
                            value={values.rating}
                        />
                    </View>

                    <View style={styles.container}>
                        <TextInput
                            style={styles.box}
                            placeholder={'From'}
                            onChangeText={handleChange('from')}
                            value={values.title}
                        />
                        <TextInput
                            style={styles.box}
                            placeholder="To"
                            onChangeText={handleChange('to')}
                            value={values.rating}
                        />
                    </View>

                    <View style={styles.container}>
                        <TextInput
                            style={styles.box}
                            placeholder={'Rate/km'}
                            onChangeText={handleChange('perKmPrice')}
                            value={values.title}
                        />
                        <TextInput
                            style={styles.box}
                            placeholder="Start Reading"
                            onChangeText={handleChange('startReading')}
                            value={values.rating}
                        />
                        <TextInput
                            style={styles.box}
                            placeholder="Start Reading"
                            onChangeText={handleChange('endReading')}
                            value={values.rating}
                        />
                    </View>

                    <View style={styles.container}>
                        <TextInput
                            style={styles.box}
                            placeholder={'Bhata'}
                            onChangeText={handleChange('bhata')}
                            value={values.title}
                        />
                        <TextInput
                            style={styles.box}
                            placeholder="Toll"
                            onChangeText={handleChange('toll')}
                            value={values.rating}
                        />
                    </View>
                    <View style={styles.container}>
                        <TextInput
                            style={styles.box}
                            placeholder={'Rto Charges'}
                            onChangeText={handleChange('rtoCharges')}
                            value={values.title}
                        />
                        <TextInput
                            style={styles.box}
                            placeholder="Fines"
                            onChangeText={handleChange('fines')}
                            value={values.rating}
                        />
                    </View>
                    <View style={styles.container}>
                        <Button
                            style={styles.buttons}
                            title="Submit"
                            color="coral"
                            onPress={handleSubmit}
                        />
                    </View>
                </>
            )}
        </Formik>
    )
};

const styles = StyleSheet.create({
    buttons: {
        width: '80px',
        marginHorizontal: 10,
    },
    topContainer: {
        paddingTop: 50,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingTop: 0,
    },
    box: {
        flex: 1,
        marginHorizontal: 10,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        // borderRightWidth: 1,
        // borderRightColor: '#ddd',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
});


export default ReviewForm;