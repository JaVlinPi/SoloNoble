import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, Button } from "react-native";
import Array2D from "../../com/Array2D";
import TileMap from "../TileMap";
import Board from "../Board";
import BasicButton from "../BasicButton";
import PieceData from "../../com/model/PieceData";
import { LEVEL_DATA } from "../../data/Levels";

class GameScreen extends React.Component {

    constructor(props) {
        super(props);

        console.log(':::::::::::::::::::::::::::::');
        console.log(':::::::::::::::::::::::::::::');

        this.onRestart = this.onRestart.bind(this);

        console.log('props.route.params:',props.route.params);
        var levelGroup = props.route.params.levelGroup;
        var levelIndex = props.route.params.levelIndex;

        var levelData = LEVEL_DATA[levelGroup][levelIndex];
        console.log('levelData:',levelData);

        this.curLvlData = {
            boardStartStr: levelData.board,
            piecesStartStr: levelData.pieces,
        };
        
        var tileMap = new Array2D();
        tileMap.loadString(levelData.board);
        PieceData.clear();
        PieceData.loadFromString(levelData.pieces);

        this.state = {
            tileMap: tileMap,
            pieceMap: PieceData.getArray2D(),
        }

        this.onRestart();
    }

    onRestart() {
        console.log('onRestart');
        PieceData.clear();
        PieceData.loadFromString(this.curLvlData.piecesStartStr);
        this.state.tileMap.clear();
        this.state.tileMap.loadString(this.curLvlData.boardStartStr);
        Board.clearSelection();
    }

    render() {
        // return null;
        // console.log('this.state:',this.state);
        return <View style={[styles.main]}>
            <ScrollView nestedScrollEnabled style={styles.scroll} onScroll={this.onScroll}>
                <ScrollView nestedScrollEnabled style={styles.scroll} onScroll={this.onScroll} horizontal>
                    <Board
                        board={this.state.tileMap}
                        pieces={this.state.pieceMap}
                    />
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
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
    },
    button: {
        width: 100,
    },
    smallBtn: {
        width: 30,
    },
    mediumBtn: {
        width: 60,
    }
});

export default GameScreen;