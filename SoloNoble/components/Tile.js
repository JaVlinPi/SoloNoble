import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { TILE_SIZE } from "../constants";

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
        if ( styles['color'+this.props.value] ) {
            style.push(styles['color'+this.props.value]);
        }
        if ( this.props.canSelect ) {
            style.push(styles.selStyle);
            return <TouchableHighlight style={style} onPress={this.onSelect}>
                <View/>
            </TouchableHighlight>;
        }
        return <View style={style}/>;
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

    },
    selStyle: {
        borderColor: 'blue',
        borderWidth: 10,
    },
    color2: {
        backgroundColor: 'yellow',
    }
});

export default Tile;