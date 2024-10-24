import React from "react";
import {Text, StyleSheet, View} from "react-native";
import { StatusBar } from 'expo-status-bar';
import Styles from './Style';
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";

export default function Home () {
    return (
        <View style={Styles.appContainer}>

            <View style={Styles.logoContainer}>
            <BatLogo />
            </View>

            <View style={Styles.inputContainer}>
                <BatButton />
            </View>

        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="light" />
        </View>
    )
}