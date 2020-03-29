import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Tile from './Tile';
import { TILE_SIZE } from "../constants";

class TileMap extends React.Component {

    constructor() {
        super();

        this.getTileMap = this.getTileMap.bind(this);
    }

    getTileMap() {
        console.log('TileMap.getTileMap()');
        console.log('this.props.map:',this.props.map);
        var map = this.props.map;
        var tiles = [];
        var tile;
        for ( var x = map.startX; x <= map.endX; x++ ) {
            for ( var y = map.startY; y <= map.endY; y++ ) {
                console.log('check tile '+x+','+y);
                tile = map.get(x,y);
                if ( tile ) tiles.push(this.createTile(x,y,tile));
            }
        }
        return tiles;
    }

    createTile(x,y,value) {
        console.log('createTile('+x+','+y+','+value+')');
        return <Tile x={x} y={y}/>;
    }

    render() {
        var map = this.props.map;
        return <View style={[styles.tile]}>
            <Text>This is the game view</Text>
            {this.getTileMap()}
        </View>;
    }

}

const styles = StyleSheet.create({
    tile: {
        borderColor: 'black',
        borderWidth: 1,
        overflow: 'visible',
    }
});

export default TileMap;