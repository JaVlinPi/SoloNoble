import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { TILE_SIZE } from "../constants";

class Popup extends React.Component {

    constructor() {
        super();
    }

    render() {
        return <View style={styles.fade}>
                    <View style={styles.body}>
                        {this.props.children}
                    </View>
            </View>;
    }

}

const styles = StyleSheet.create({
    fade: {
        position: 'absolute',
        backgroundColor: '#000000AA',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 1,
        padding: 10,
    }
});

export default Popup;