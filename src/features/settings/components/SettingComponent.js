import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SettingComponent = () => (
    <View style={styles.container}>
        <Text>Test Stack</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SettingComponent;