import React, { useEffect } from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';

const HomeComponent = ({ navigation }) => {
    useEffect(() => {
        !AsyncStorage.getItem('key') && navigation.navigate('welcome')
    })
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    }
});

export default HomeComponent;
