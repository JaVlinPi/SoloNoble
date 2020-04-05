import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TILE_SIZE } from "../constants";

class PieceView extends React.Component {

    constructor() {
        super();
    }

    render() {
        var posStyle = {
            left: this.props.x*TILE_SIZE,
            top: this.props.y*TILE_SIZE,
        };
        var style = [styles.tile,posStyle];
        // console.log('this.props.piece:',this.props.piece);
        // console.log('this.props.piece.value:',this.props.piece.value);
        if ( styles['color'+this.props.piece.value] ) {
            style.push(styles['color'+this.props.piece.value]);
        }
        return <View style={style}/>;
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

    },
    color2: {
        backgroundColor: 'red',
    }
});

export default PieceView;