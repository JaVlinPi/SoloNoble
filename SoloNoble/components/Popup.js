import React from "react";
import { View, StyleSheet } from "react-native";

class Popup extends React.Component {

    constructor() {
        super();
    }

    render() {
        return <View style={styles.fade}>
                    <View style={{...styles.body,...this.props.style}}>
                        <View style={{...styles.bodyInner,...this.props.innerStyle}}>
                            {this.props.children}
                        </View>
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
        elevation: 6,
    },
    body: {
        backgroundColor: '#cccccc',
        borderColor: '#555555',
        borderWidth: 1,
        borderRadius: 14,
        padding: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
    },
    bodyInner: {
        backgroundColor: 'white',
        borderColor: '#999999',
        borderWidth: 3,
        borderRadius: 10,
        padding: 10,
    }
});

export default Popup;