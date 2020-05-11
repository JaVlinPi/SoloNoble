import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, Button } from "react-native";
import Array2D from "../../com/Array2D";
import TileMap from "../TileMap";
import Board from "../Board";
import BasicButton from "../BasicButton";
import PieceData from "../../com/model/PieceData";
import { LEVEL_DATA } from "../../data/Levels";
import UIButton from "../UIButton";

const MENU_BTN_SIZE = 40;

class GameScreen extends React.Component {

    constructor(props) {
        super(props);

        console.log(':::::::::::::::::::::::::::::');
        console.log(':::::::::::::::::::::::::::::');

        this.onRestart = this.onRestart.bind(this);
        this.onBodyLayout = this.onBodyLayout.bind(this);
        this.onInnerBodyLayout = this.onInnerBodyLayout.bind(this);
        this.onMoveComplete = this.onMoveComplete.bind(this);

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
            levelGroup: levelGroup,
            levelNum: levelIndex+1,
            hasNoble: levelData.hasNoble,
            hasLastTile: levelData.hasLastTile,
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

    showMenu() {
        console.log('showMenu()');
    }

    onBodyLayout(e) {
        console.log('onBodyLayout(e)');
        // console.log('e.nativeEvent:',e.nativeEvent);
        console.log('e.nativeEvent.layout.height:',e.nativeEvent.layout.height);
        this.setState({
            bodyHeight: e.nativeEvent.layout.height,
        });
    }

    onInnerBodyLayout(e) {
        console.log('onInnerBodyLayout(e)');
        // console.log('e.nativeEvent:',e.nativeEvent);
        console.log('e.nativeEvent.layout.height:',e.nativeEvent.layout.height);
        this.setState({
            innerHeight: e.nativeEvent.layout.height,
        });
    }

    onMoveComplete() {
        console.log('onMoveComplete()');
        // check if win
        console.log('PieceData.getLength():',PieceData.getLength());
        console.log('PieceData.getPieces():',PieceData.getPieces());
        // if ( PieceData.getLength() == 1 ) {
        //     var lastPiece = PieceData.getPieces()[0];
        //     console.log('lastPiece:',lastPiece);
        //     if ( this.state.hasNoble ) {
        //         // check if last piece is noble

        //     }
        //     else {
        //         if ( this.state.hasLastTile ) {

        //         }
        //         else {
        //             // win
        //         }
        //     }
        // }
    }

    render() {
        // return null;
        // console.log('this.state:',this.state);
        var innerScrollStyles = [
            styles.scroll,
            // { borderColor:'blue' },
        ];
        if ( this.state.innerHeight <= this.state.bodyHeight ) {
            innerScrollStyles.push({height:this.state.bodyHeight});
        }
        return <View style={[styles.main]}>
            <View style={styles.header}>
                <View>
                    <Text style={[
                        styles.headerText,
                        styles.headerText1,
                    ]}>
                        {this.state.levelGroup.toUpperCase()}
                    </Text>
                    <Text style={[
                        styles.headerText,
                        styles.headerText2,
                    ]}>
                        {'LEVEL '+this.state.levelNum}
                    </Text>
                </View>
                <UIButton
                    text={'☰'}
                    onPress={this.showMenu}
                    style={{width: MENU_BTN_SIZE, height: MENU_BTN_SIZE}}
                />
            </View>
            <ScrollView
                nestedScrollEnabled
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                onLayout={this.onBodyLayout}
            >
                <ScrollView
                    nestedScrollEnabled
                    style={innerScrollStyles}
                    contentContainerStyle={styles.scrollContent}
                    horizontal
                    onLayout={this.onInnerBodyLayout}
                >
                    <Board
                        board={this.state.tileMap}
                        pieces={this.state.pieceMap}
                        disable={this.state.isDisabled}
                        onMoveComplete={this.onMoveComplete}
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
        // borderWidth: 1,
        overflow: 'visible',
        position: 'relative',
        backgroundColor: '#eeeeee',
    },
    header: {
        padding: 10,
        backgroundColor: '#999999',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#888888',
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 1,
    },
    headerText1: {
        fontSize: 24,
    },
    headerText2: {
        fontSize: 18,
    },
    board: {
        // width: 100,
        // height: 100,
    },
    scroll: {
        // width: '100%',
        // height: '100%',
        borderColor: 'green',
        // borderWidth: 2,
        // overflow: 'visible',
        // position: 'relative'
    },
    scrollContent: {
        minWidth: '100%',
        // minHeight: '100%',
        borderColor: 'yellow',
        // borderWidth: 1,
        // overflow: 'visible',
        // position: 'relative'
        justifyContent: 'center',
        alignItems: 'center',
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