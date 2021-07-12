import React, { useEffect } from 'react';
import { AsyncStorage, Image, StyleSheet, Text, View } from 'react-native';
import { ButtonOpacity } from '../../../components';

const WelcomeComponent = ({ navigation }) => {

    const toLogin = () => {
        navigation.navigate('login')
    }
    const toRegister = () => {
        navigation.navigate('register')
    }
    useEffect(() => {
        AsyncStorage.getItem('key') && navigation.navigate('tab')      
    })
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.images}>
                    <Image width={1} height={1} source={require('../../../assets/images/midwife-login.png')} />
                    <Text style={styles.text}>Selamat Datang Di Midwife Assistant</Text>
                    <View style={{ marginTop: "15%", width: "100%", alignItems: 'center' }}>
                        <Text style={styles.text2}>Silakan pilih login</Text>
                        <Text style={styles.text2}>jika anda sudah memiliki akun</Text>
                        <ButtonOpacity label="LOGIN" onPress={toLogin} />
                        <Text style={styles.text2}>atau</Text>
                        <Text style={styles.text2}>pilih register jika anda belum memiliki akun</Text>
                        <ButtonOpacity label="REGISTER" onPress={toRegister} />
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
    },
    text: {
        marginTop: 20,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontFamily: "Roboto"
    },
    text2: {
        color: "#A8A6A6",
        fontFamily: "Roboto",
        fontSize: 12
    }
});

export default WelcomeComponent;
