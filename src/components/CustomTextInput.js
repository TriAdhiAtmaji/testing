import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const CustomTextInput = ({ label, isPassword = false, callback, input, ...field }) => {
    return (
        <View style={styles.content}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                {...input}
                onChange={e => { input.onChange(e); callback && callback(); }}
                secureTextEntry={isPassword} />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        borderBottomColor: "#C4C4C4",
        borderBottomWidth: 1,
        width: "60%",
        marginBottom: 10
    },
    label: {
        width: "100%",
        color: "#A8A6A6"
    },
    input: {
        width: "100%"
    }
})

export default CustomTextInput