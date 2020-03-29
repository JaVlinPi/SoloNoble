import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TileMap from "./TileMap";
import { TILE_SIZE } from "../constants";
import Pieces from "./Pieces";

class Board extends React.Component {

    constructor() {
        super();
    }

    render() {
        var map = this.props.map;

        var style = {
            paddingLeft: map.startX*TILE_SIZE*-1,
            paddingTop: map.startY*TILE_SIZE*-1,
            width: (map.endX-map.startX+1)*TILE_SIZE+4,
            height: (map.endY-map.startY+1)*TILE_SIZE+4,
        }
        console.log(' ---- style:',style);

        return <View style={[styles.tile,style,this.props.style]}>
            <TileMap map={this.props.map}/>
            <Pieces map={this.props.map}/>
        </View>;
    }

}

const styles = StyleSheet.create({
    tile: {
        borderColor: 'green',
        borderWidth: 1,
        overflow: 'visible',
        position: 'relative',
        backgroundColor: 'grey',
        margin: 10,
    }
});

export default Board;