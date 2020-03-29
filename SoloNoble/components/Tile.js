import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TILE_SIZE } from "../constants";

class Tile extends React.Component {

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
        borderWidth: 1,
        width: TILE_SIZE,
        height: TILE_SIZE,
        backgroundColor: 'white',

    }
});

export default Tile;