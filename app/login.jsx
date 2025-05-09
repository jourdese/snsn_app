import {Alert, Pressable, StatusBar, StyleSheet, Text, TextInput, View} from 'react-native'
import React, {useRef, useState} from 'react'
import Icon from "../assets/icons";
import {theme} from "../constants/theme";
import ScreenWrapper from "../components/ScreenWrapper";
import BackButton from "../components/BackButton";
import {useRouter} from "expo-router";
import Button from "../components/Button";
import {wp, hp} from "../helpers/common";
import Input from "../components/Input";

const Login = () => {
    const router = useRouter();
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [loading, setLoading] = useState(false);
    const onSubmit = async ()=> {
        if(!emailRef.current || !passwordRef.current) {
            Alert.alert('Login Failed', 'Please fill out the fields.', 'error');
            return;
        }
    }

    return (
        <ScreenWrapper bg="white">
            <StatusBar barStyle="light-content"/>
            <View style={styles.container}>
                <BackButton router={router}/>
                {/* welcome */}
                <View>
                    <Text style={styles.welcomeText}>Hey,</Text>
                    <Text style={styles.welcomeText}>Welcome Back</Text>
                </View>

                {/* form */}
                <View style={styles.form}>
                    <Text style={{fontSize: hp(1.5), color: theme.colors.text}}>
                        Please login to continue
                    </Text>
                    <Input icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
                           placeholder='Enter your email'
                           onChangeText={value=>emailRef.current=value}
                    />
                    <Input icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
                           placeholder='Enter your password'
                           secureTextEntry
                           onChangeText={value=>emailRef.current=value}
                    />
                    <Text style={styles.forgotPassword}>
                        Forgot your password?
                    </Text>
                    <Button title={'Login'} onPress={onSubmit} loading={loading}/>
                </View>

            {/* footer */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Don&apos;t have an account?
                    </Text>
                    <Pressable onPress={()=>router.push("./signup")}>
                        <Text style={[styles.footerText, {color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold}]}>Sign up</Text>
                    </Pressable>
                </View>
            </View>
        </ScreenWrapper>
    )
}
export default Login
const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 45,
        paddingHorizontal: wp(5),
    },
    welcomeText: {
        fontSize: hp(4),
        fontWeight: theme.fonts.bold,
        color: theme.colors.text,
    },
    form: {
        gap: 25,
    },
    forgotPassword: {
        textAlign: 'right',
        fontWeight: theme.fonts.semibold,
        color: theme.colors.text,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    footerText: {
        textAlign: 'center',
        color: theme.colors.text,
        fontSize: hp(1.6),
    }
});
