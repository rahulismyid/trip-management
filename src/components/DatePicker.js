import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Platform, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function DatePickerComponent() {
    const date = new Date();
    const [dateStr, setDate] = useState(date.toString().substr(0, 15));
    const [timeStr, setTime] = useState(date.toString().substr(16, 9));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        console.log('object', event, selectedDate)
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View style={{ marginTop: 80 }}>
            <TextInput style={styles.input} value={dateStr} onFocus={showDatepicker} placeholder="Date" />
            <TextInput style={styles.input} value={timeStr} onFocus={showTimepicker} placeholder="Time" />
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
});