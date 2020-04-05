import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from "react-native";
import Array2D from "../com/Array2D";
import TileMap from "./TileMap";
import Board from "./Board";
import PieceData from "../com/model/PieceData";

class GameView extends React.Component {

    constructor() {
        super();

        console.log(':::::::::::::::::::::::::::::');
        console.log(':::::::::::::::::::::::::::::');

        // var tileMap = new Array2D();
        // tileMap.set(0,0,1);
        // tileMap.set(1,0,1);
        // tileMap.set(1,2,1);
        // tileMap.set(1,-1,1);
        // tileMap.set(-1,0,1);
        // tileMap.set(-1,2,1);
        // tileMap.set(-1,-1,1);
        // tileMap.set(2,0,1);
        // tileMap.set(2,2,1);
        // tileMap.set(-1,3,1);
        // tileMap.set(2,-1,1);
        // tileMap.set(2,-1,1);
        // tileMap.set(2,-4,1);
        // tileMap.set(4,-1,1);
        
        var tileMap = new Array2D();
        // var pieceMap = new Array2D();

        tileMap.output();

        this.state = {
            x: 200,
            y: 100,
            tileMap: tileMap,
            // pieceMap: pieceMap,
            pieceMap: PieceData.getArray2D(),
        }

        this.createLevel();
    }

    createLevel() {
        // creact noble
        this.addPiece(0,0,2);

        // generate moves
        var moveNum = 6;
        for ( var i = 0; i < moveNum; i++ ) {
            this.createMove();
        }
    }

    addPiece(x,y,value) {
        PieceData.create(x,y,value);
        this.state.tileMap.set(x,y,value);
    }

    createMove() {
        console.log(' > createMove()');
        var pieces = PieceData.getPieces();
        var foundMove = false;
        console.log('pieces:',pieces);
        var dirX, dirY;
        while ( !foundMove ) {
            var piece = pieces[Math.floor(pieces.length*Math.random())];
            if ( Math.random() > 0.5 ) {
                dirX = Math.round(Math.random())*2-1;
                dirY = 0;
            }
            else {
                dirY = Math.round(Math.random())*2-1;
                dirX = 0;
            }
            if ( this.state.pieceMap.get(piece.x+dirX,piece.y+dirY) != null ) {
                continue;
            }
            if ( this.state.pieceMap.get(piece.x+dirX*2,piece.y+dirY*2) != null ) {
                continue;
            }
            foundMove = true;
        }
        console.log('piece:',piece);
        console.log('piece.moveTo:',piece.moveTo);
        if ( this.state.tileMap.get(piece.x+dirX,piece.y+dirY) == null ) {
            this.state.tileMap.set(piece.x+dirX,piece.y+dirY,1);
        }
        if ( this.state.tileMap.get(piece.x+dirX*2,piece.y+dirY*2) == null ) {
            this.state.tileMap.set(piece.x+dirX*2,piece.y+dirY*2,1);
        }
        PieceData.create(piece.x+dirX,piece.y+dirY,1);
        piece.moveTo(piece.x+dirX*2,piece.y+dirY*2);
        // piece.moveTo(piece.x,piece.y+1);
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
                    <Board board={this.state.tileMap} pieces={this.state.pieceMap}/>
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