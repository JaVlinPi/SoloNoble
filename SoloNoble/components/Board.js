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
        var board = this.props.board;

        var style = {
            paddingLeft: board.startX*TILE_SIZE*-1,
            paddingTop: board.startY*TILE_SIZE*-1,
            width: (board.endX-board.startX+1)*TILE_SIZE+4,
            height: (board.endY-board.startY+1)*TILE_SIZE+4,
        }
        console.log(' ---- style:',style);

        return <View style={[styles.tile,style,this.props.style]}>
            <TileMap map={this.props.board}/>
            <Pieces map={this.props.pieces}/>
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