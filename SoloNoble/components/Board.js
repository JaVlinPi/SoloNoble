import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TileMap from "./TileMap";
import { TILE_SIZE } from "../constants";
import Pieces from "./Pieces";

var _instance;

class Board extends React.Component {

    static clearSelection() {
        _instance.setState({
            selected: null,
        })
    }

    constructor() {
        super();
        _instance = this;


        this.state = {
            selected: null,
        }

        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(piece) {
        this.setState({
            selected: piece,
        })
    }

    onTileSelect(tile) {
        console.log('onTileSelect(tile)');
        console.log('tile:',tile);
    }

    render() {
        console.log('################### Board.render()');
        var board = this.props.board;

        var style = {
            paddingLeft: board.startX*TILE_SIZE*-1,
            paddingTop: board.startY*TILE_SIZE*-1,
            width: (board.endX-board.startX+1)*TILE_SIZE+20,
            height: (board.endY-board.startY+1)*TILE_SIZE+20,
        }
        // console.log(' ---- style:',style);

        return <View style={[styles.tile,style,this.props.style]}>
            <TileMap
                map={this.props.board}
                onSelect={this.onTileSelect}
                selected={this.state.selected}
            />
            <Pieces
                map={this.props.pieces}
                onSelect={this.onSelect}
                selected={this.state.selected}
            />
        </View>;
    }

}

const styles = StyleSheet.create({
    tile: {
        borderColor: 'green',
        borderWidth: 10,
        overflow: 'visible',
        position: 'relative',
        backgroundColor: 'grey',
        margin: 20,
    }
});

export default Board;