import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TILE_SIZE } from "../constants";

class Piece extends React.Component {

    constructor() {
        super();
    }

    render() {
        var posStyle = {
            left: this.props.x*TILE_SIZE,
            top: this.props.y*TILE_SIZE,
        };
        return <View style={[styles.tile,posStyle]}/>;
    }

}

const styles = StyleSheet.create({
    tile: {
        position: 'absolute',
        borderColor: 'black',
        borderWidth: 10,
        width: TILE_SIZE*0.8,
        height: TILE_SIZE*0.8,
        margin: TILE_SIZE*0.1,
        backgroundColor: 'white',
        borderRadius: TILE_SIZE,

    }
});

export default Piece;