import {StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import {useRouter} from 'expo-router'
import ScreenWrapper from "@/components/ScreenWrapper";
import {hp, wp} from "@/helpers/common";
import Jbutton from "../components/Jbutton";


const index = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    return (
        <ScreenWrapper bg="white">
            <View style={styles.container}>
                <Jbutton title={'Welcome'} onPress={() => router.push('./welcome')} loading={loading}
                         buttonStyle={{marginHorizontal: wp(3)}} />
                <Jbutton title={'Not Welcome'} onPress={() => router.push('./notwelcome')} loading={false} buttonStyle={{marginHorizontal: wp(3)}}/>
            </View>
        </ScreenWrapper>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        gap: 30,
        flex: 1,
        paddingHorizontal: wp(4),
        justifyContent: 'center',
    },
})
