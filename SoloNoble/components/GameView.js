import React from "react";
import { View, Text } from "react-native";
import Array2D from "../com/Array2D";

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
        return <View>
            <Text>This is the game view</Text>
        </View>;
    }

}

export default GameView;