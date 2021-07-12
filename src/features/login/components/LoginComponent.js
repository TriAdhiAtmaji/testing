import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Field } from 'redux-form';
import { ButtonOpacity, CustomTextInput } from '../../../components';

const LoginComponent = ({ onLogin, handleSubmit, navigation }) => {
    const onClickLogin = value => {
        onLogin(value.username, value.password).then(res => {
            console.log("value res ", res);
            return res && navigation.navigate('tab')
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.images}>
                    <Image width={1} height={1} source={require('../../../assets/images/login-logo.png')} />
                    <View style={{ marginTop: "15%", width: "100%", alignItems: 'center' }}>
                        <Field name="username" label="Username" component={CustomTextInput} />
                        <Field name="password" label="Password" isPassword={true} component={CustomTextInput} />
                        <ButtonOpacity label="LOGIN" onPress={handleSubmit(onClickLogin)} />
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#FFFFFF",
    },
    content: {
        marginTop: "25%",
        height: "100%",
    },
    images: {
        alignItems: 'center',
        top: "10%",
    }
});

export default LoginComponent;
