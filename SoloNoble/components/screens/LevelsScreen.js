import React from "react";
import { View, Text, StyleSheet } from "react-native";

class LevelsScreen extends React.Component {

    constructor() {
        super();
    }

    render() {
        return <View style={[styles.main]}>
                <Text>{'Levels Screen'}</Text>
        </View>;
    }

}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        borderColor: 'red',
        borderWidth: 1,
        overflow: 'visible',
        position: 'relative'
    },
});

export default LevelsScreen;