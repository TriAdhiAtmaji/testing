import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonOpacity = ({ label, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={{ color: "#FFFFFF" }}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FFA1A1",
        alignItems: 'center',
        borderRadius: 25,
        height: 33,
        justifyContent: 'center',
        color: "white",
        marginTop: 5,
        marginBottom: 10,
        width: "60%"
    }
});

export default ButtonOpacity