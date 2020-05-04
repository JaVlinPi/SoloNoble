import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { TILE_SIZE } from "../constants";
import BoardTile from "../svg/BoardTile";
import BasicWhite from "../svg/BoardTiles/BasicWhite";
import BasicYellow from "../svg/BoardTiles/BasicYellow";

class Tile extends React.Component {

    constructor() {
        super();

        this.onSelect = this.onSelect.bind(this);
    }

    onSelect() {
        this.props.onSelect({
            x: this.props.x,
            y: this.props.y,
        });
    }

    render() {
        var posStyle = {
            left: this.props.x*TILE_SIZE,
            top: this.props.y*TILE_SIZE,
        };
        var style = [styles.tile,posStyle];
        var symbol = <BasicWhite/>;
        if ( this.props.value == 2 ) {
            symbol = <BasicYellow/>
        }
        // if ( styles['color'+this.props.value] ) {
        //     style.push(styles['color'+this.props.value]);
        // }
        if ( this.props.canSelect ) {
            // style.push(styles.selStyle);
            return <TouchableHighlight style={style} onPress={this.onSelect}>
                <View>
                    {symbol}
                    <View style={[styles.tile,styles.selStyle]}/>
                </View>
            </TouchableHighlight>;
        }
        return <View style={style}>
            {symbol}
        </View>;
    }

}

const styles = StyleSheet.create({
    tile: {
        position: 'absolute',
        // borderColor: 'black',
        // borderWidth: 1,
        width: TILE_SIZE,
        height: TILE_SIZE,
        // backgroundColor: 'white',

    },
    selStyle: {
        borderColor: 'blue',
        borderWidth: 10,
        borderRadius: TILE_SIZE,
        width: TILE_SIZE*0.8,
        height: TILE_SIZE*0.8,
        margin: TILE_SIZE*0.1,
        opacity: 0.4,
    },
    color2: {
        backgroundColor: 'yellow',
    }
});

export default Tile;