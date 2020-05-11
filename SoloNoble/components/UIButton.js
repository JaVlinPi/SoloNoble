import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import BasicButton from "./BasicButton";

const BUTTON_DEPTH = 3;

class UIButton extends React.Component {

    constructor() {
        super();
    }

    render() {
        var buttonStyle = {...styles.button,...this.props.style};
        var underStyle = {
            ...buttonStyle,
            position:'absolute',
            backgroundColor:'#666666',
            borderColor: '#444444',
            top:BUTTON_DEPTH,
            // borderWidth: 6,
            width: buttonStyle.width+1,
            // width: buttonStyle.width+2,
            borderWidth: 1.5,
            left: -0.4,
        };
        return <View>
                <View style={underStyle}/>
                <TouchableHighlight
                        onPress={this.props.onPress}
                        style={buttonStyle}>
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableHighlight>
        </View>
        return <TouchableHighlight
                    onPress={this.props.onPress}
                    style={{...styles.button,...this.props.style}}>
            <Text style={styles.text}>{this.props.text}</Text>
        </TouchableHighlight>;
        return <BasicButton
                    {...this.props}
                    style={{...styles.button,...this.props.style,height:this.props.style.height+BUTTON_DEPTH}}
                    textStyle={styles.text}
                />
    }

}

const styles = StyleSheet.create({
    button: {
        margin: 5,
        padding: 4,
        borderColor: '#888888',
        borderWidth: 1,
        backgroundColor: '#aaaaaa',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 100,
        // borderBottomWidth: BUTTON_DEPTH,
        // paddingBottom: BUTTON_DEPTH,
        // borderBottomRightRadius: 12,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'black',
        textShadowOffset: {width: -0.5, height: -0.5},
        textShadowRadius: 1,
    }
});

export default UIButton;