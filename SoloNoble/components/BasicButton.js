import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

class BasicButton extends React.Component {

    constructor() {
        super();
    }

    render() {
        return <TouchableHighlight
                    onPress={this.props.onPress}
                    style={{...styles.button,...this.props.style}}>
            <Text>{this.props.text}</Text>
        </TouchableHighlight>;
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

export default BasicButton;