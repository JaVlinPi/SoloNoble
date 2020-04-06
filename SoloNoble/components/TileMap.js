import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Tile from './Tile';
import { TILE_SIZE } from "../constants";
import PieceData from "../com/model/PieceData";

class TileMap extends React.Component {

    constructor() {
        super();

        this.state = {
            style: {
                // width: 1300,
                // height: 1300,
            },
        }

        this.getTileMap = this.getTileMap.bind(this);
        this.createTile = this.createTile.bind(this);
    }

    getTileMap() {
        // console.log('TileMap.getTileMap()');
        // console.log('this.props.map:',this.props.map);
        var map = this.props.map;
        var tiles = [];
        var tile, canSelect, isEmpty;
        var sel = this.props.selected;
        console.log('sel:',sel);
        for ( var x = map.startX; x <= map.endX; x++ ) {
            for ( var y = map.startY; y <= map.endY; y++ ) {
                // find seletable tiles
                tile = map.get(x,y);
                if ( tile ) {
                    console.log('check tile '+x+','+y);
                    canSelect = false;
                    if ( sel ) {
                        // console.log('PieceData.getArray2D().get(x,y):',PieceData.getArray2D().get(x,y));
                        isEmpty = PieceData.getArray2D().get(x,y) == null;
                        console.log('isEmpty:',isEmpty);
                        if ( isEmpty ) {
                            if ( sel.x == x ) {
                                if ( sel.y == y+2 ) {
                                    canSelect = PieceData.getArray2D().get(x,y+1) != null;
                                }
                                else if ( sel.y == y-2 ) {
                                    canSelect = PieceData.getArray2D().get(x,y-1) != null;
                                }
                            }
                            if ( sel.y == y ) {
                                if ( sel.x == x+2 ) {
                                    canSelect = PieceData.getArray2D().get(x+1,y) != null;
                                }
                                else if ( sel.x == x-2 ) {
                                    canSelect = PieceData.getArray2D().get(x-1,y) != null;
                                }
                            }
                        }
                    }
                    console.log('? canSelect tile '+canSelect);
                    tiles.push(this.createTile(x,y,tile,canSelect));
                }
            }
        }
        return tiles;
    }

    createTile(x,y,value,canSelect) {
        // console.log('createTile('+x+','+y+','+value+')');
        if ( canSelect ) {
            return <Tile x={x} y={y} value={value} canSelect onSelect={this.props.onSelect}/>;
        }
        return <Tile x={x} y={y} value={value}/>;
    }

    render() {
        var map = this.props.map;
        return <View style={[styles.tile,this.state.style,this.props.style]}>
            {this.getTileMap()}
        </View>;
    }

}

const styles = StyleSheet.create({
    tile: {
        // borderColor: 'orange',
        // borderWidth: 1,
        overflow: 'visible',
        position: 'relative',
        // backgroundColor: 'grey',
    }
});

export default TileMap;