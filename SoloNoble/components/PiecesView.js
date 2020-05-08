import React from "react";
import { View, StyleSheet } from "react-native";
import { TILE_SIZE, BOARD_PADDING } from "../constants";
import PieceView from "./PieceView";

class PiecesView extends React.Component {

    constructor() {
        super();

        this.getPieces = this.getPieces.bind(this);
    }

    getPieces() {
        var map = this.props.map;
        var tiles = [];
        var tile;
        for ( var x = map.startX; x <= map.endX; x++ ) {
            for ( var y = map.startY; y <= map.endY; y++ ) {
                tile = map.get(x,y);
                if ( tile ) tiles.push(this.createPiece(x,y,tile));
            }
        }
        return tiles;
    }

    createPiece(x,y,piece) {
        var isSeleted = this.props.selected == piece;
        if ( isSeleted && this.props.movePos ) {
            return <PieceView
                        x={x} y={y}
                        piece={piece}
                        onSelect={this.props.onSelect}
                        isSelected={isSeleted}
                        movePos={this.props.movePos}
                    />;
        }
        return <PieceView x={x} y={y} piece={piece} onSelect={this.props.onSelect} isSelected={isSeleted}/>;
    }

    render() {
        var map = this.props.map;
        var style = {
            marginLeft: map.startX*TILE_SIZE*-1+BOARD_PADDING,
            marginTop: map.startY*TILE_SIZE*-1+BOARD_PADDING,
            width: (map.endX-map.startX+1)*TILE_SIZE+4+(BOARD_PADDING*2),
            height: (map.endY-map.startY+1)*TILE_SIZE+4+(BOARD_PADDING*2),
        }
        return <View style={[styles.tile,style,this.props.style]}>
            {this.getPieces()}
        </View>;
    }

}

const styles = StyleSheet.create({
    tile: {
        // borderColor: 'purple',
        // borderWidth: 1,
        overflow: 'visible',
        position: 'absolute',
        // backgroundColor: 'grey',
    },
});

export default PiecesView;