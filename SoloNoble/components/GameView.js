import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Array2D from "../com/Array2D";
import TileMap from "./TileMap";

class GameView extends React.Component {

    constructor() {
        super();

        var tileMap = new Array2D();
        tileMap.set(0,0,1);
        tileMap.set(1,0,1);
        tileMap.set(1,2,1);

        tileMap.output();

        this.state = {
            tileMap: tileMap,
        }
    }

    render() {
        return <View style={[styles.tile]}>
            <Text>This is the game view</Text>
            <TileMap map={this.state.tileMap}/>
        </View>;
    }

}

const styles = StyleSheet.create({
    tile: {
        width: '100%',
        height: '100%',
        borderColor: 'red',
        borderWidth: 1,
        overflow: 'visible',
    }
});

export default GameView;