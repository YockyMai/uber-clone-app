import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from "react-redux";
import {createStore} from "@reduxjs/toolkit";

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Text>Данил лqох</Text>
                <StatusBar style="auto"/>
            </View>
        </Provider>
    );
}

const store = createStore({
})

createStore(store);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
