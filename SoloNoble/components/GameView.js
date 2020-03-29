import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from "react-native";
import Array2D from "../com/Array2D";
import TileMap from "./TileMap";
import Board from "./Board";

class GameView extends React.Component {

    constructor() {
        super();

        var tileMap = new Array2D();
        tileMap.set(0,0,1);
        tileMap.set(1,0,1);
        tileMap.set(1,2,1);
        tileMap.set(1,-1,1);
        tileMap.set(-1,0,1);
        tileMap.set(-1,2,1);
        tileMap.set(-1,-1,1);
        tileMap.set(2,0,1);
        tileMap.set(2,2,1);
        tileMap.set(-1,3,1);
        tileMap.set(2,-1,1);
        tileMap.set(2,-1,1);
        tileMap.set(2,-4,1);
        tileMap.set(4,-1,1);

        tileMap.output();

        this.state = {
            x: 200,
            y: 100,
            tileMap: tileMap,
        }
    }

    onScroll(e) {
        // console.log('onScroll(e)');
        // console.log('e:',e);

    }

    render() {
        console.log('this.state:',this.state);
        var boardStyle = {
            // left: this.state.x,
            // top: this.state.y,
        };
        return <View style={[styles.main]}>
            <Text>This is the game view</Text>
            <ScrollView nestedScrollEnabled style={styles.scroll} onScroll={this.onScroll}>
                <ScrollView nestedScrollEnabled style={styles.scroll} onScroll={this.onScroll} horizontal>
                    <Board map={this.state.tileMap}/>
                </ScrollView>
            </ScrollView>
        </View>;
    }

}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        borderColor: 'red',
        borderWidth: 1,
        overflow: 'visible',
        position: 'relative'
    },
    board: {
        // width: 100,
        // height: 100,
    },
    scroll: {
        // width: '100%',
        // height: '100%',
        // borderColor: 'green',
        // borderWidth: 1,
        // overflow: 'visible',
        // position: 'relative'
    }
});

export default GameView;