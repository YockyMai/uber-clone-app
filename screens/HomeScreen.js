import React from 'react';
import {SafeAreaView, Image, View, StyleSheet, Text} from 'react-native';
import NavOptions from "../component/NavOptions";


export default function HomeScreen({ text }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerView}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                    }}
                />
                <NavOptions/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: 'rgb(255,255,255)'
    },
    containerView: {
        margin: 20,
    },
    logo: {
        height: 100,
        width: 100,
        resizeMode: 'contain'
    }
});
