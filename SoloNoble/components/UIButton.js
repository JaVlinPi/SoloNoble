import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import BasicButton from "./BasicButton";

class UIButton extends React.Component {

    constructor() {
        super();
    }

    render() {
        return <BasicButton {...this.props}/>
    }

}

const styles = StyleSheet.create({
    button: {
        margin: 5,
        padding: 4,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
});

export default UIButton;