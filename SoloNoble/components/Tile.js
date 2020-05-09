import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import {  } from "../constants";
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
            left: this.props.x*this.props.size,
            top: this.props.y*this.props.size,
        };
        var style = [
            styles.tile,
            { width: this.props.size, height: this.props.size},
            posStyle,
        ];
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
                    <View style={[
                        styles.tile,
                        { 
                            borderRadius: this.props.size,
                            width: this.props.size*0.8,
                            height: this.props.size*0.8,
                            margin: this.props.size*0.1,
                        },
                        styles.selStyle
                    ]}/>
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
        // width: this.props.size,
        // height: this.props.size,
        // backgroundColor: 'white',

    },
    selStyle: {
        borderColor: 'blue',
        borderWidth: 10,
        // borderRadius: this.props.size,
        // width: this.props.size*0.8,
        // height: this.props.size*0.8,
        // margin: this.props.size*0.1,
        // opacity: 0.4,
    },
    color2: {
        backgroundColor: 'yellow',
    }
});

export default Tile;