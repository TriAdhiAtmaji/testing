import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ButtonOpacity, CustomTextInput, AlertModal } from '../../../components';
import { Field } from 'redux-form';

const RegisterComponent = ({ handleSubmit, navigation, onRegister }) => {

    const onClickRegister = value => {
        onRegister(value).then(res => {
            if (res) {
                AlertModal("Success", "Berhasil Register")
                navigation.navigate('login')
            } else {
                AlertModal("Failed", "Gagal Register")
            }
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.images}>
                    <Image width={1} height={1} source={require('../../../assets/images/register-logo.png')} />
                    <View style={{ marginTop: "15%", width: "100%", alignItems: 'center' }}>
                        <Field name="fullname" label="Nama Lengkap" component={CustomTextInput} />
                        <Field name="username" label="Username" component={CustomTextInput} />
                        <Field name="email" label="Email" component={CustomTextInput} />
                        <Field name="password" label="Password" isPassword={true} component={CustomTextInput} />
                        <ButtonOpacity label="REGISTER" onPress={handleSubmit(onClickRegister)} />
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

export default RegisterComponent;
