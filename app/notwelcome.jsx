import {Button, StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import {useRouter} from "expo-router";
import ScreenWrapper from "../components/ScreenWrapper";
import BackButton from "../components/BackButton";

const Notwelcome = () => {
    const router = useRouter();
    const [counter, setCounter] = useState(1);
    const isOdd = counter % 2 !== 0;
    return (
        <ScreenWrapper>
            <BackButton router={router}/>

            <View style={styles.container}>
                <Text style={styles.text}>Counter: {counter}</Text>
                <Text style={styles.text}>{isOdd ? 'Odd' : 'Even'}</Text>
                <Button title="+" onPress={() => setCounter(counter + 1)} />
            </View>
        </ScreenWrapper>
    )
}
export default Notwelcome
const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    text: {
        fontSize: 24, margin: 10
    }
})
