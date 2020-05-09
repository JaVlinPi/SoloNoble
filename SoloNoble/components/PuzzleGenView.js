import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, Button } from "react-native";
import Array2D from "../com/Array2D";
import TileMap from "./TileMap";
import Board from "./Board";
import BasicButton from "./BasicButton";
import PieceData from "../com/model/PieceData";

class PuzzleGenView extends React.Component {

    constructor() {
        super();

        console.log(':::::::::::::::::::::::::::::');
        console.log(':::::::::::::::::::::::::::::');

        this.onRestart = this.onRestart.bind(this);
        this.onReset = this.onReset.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onOutput = this.onOutput.bind(this);
        this.gotoLevels = this.gotoLevels.bind(this);
        this.addTurn = this.addTurn.bind(this);
        this.minusTurn = this.minusTurn.bind(this);
        this.toggleLastPiece = this.toggleLastPiece.bind(this);
        this.toggleLastTile = this.toggleLastTile.bind(this);
        this.toggleDeadTiles = this.toggleDeadTiles.bind(this);

        this.curLvlData = {};
        
        var tileMap = new Array2D();
        // var pieceMap = new Array2D();

        this.state = {
            x: 200,
            y: 100,
            tileMap: tileMap,
            // pieceMap: pieceMap,
            pieceMap: PieceData.getArray2D(),
            moveNum: 2,
            keepSmall: true,
            showLastPiece: true,
            showLastTile: true,
            showDeadTiles: true,
        }

        this.createLevel();
    }

    createLevel() {
        console.log(':::::::::::::::::::::::::::::');
        console.log(':::::::::::::::::::::::::::::');
        var boardWidth = Math.max(3,(Math.sqrt(this.state.moveNum)+2)*0.9);
        var boardHeight = Math.max(3,(Math.sqrt(this.state.moveNum)+2)*1);
        console.log('boardWidth:',boardWidth);
        console.log('boardHeight:',boardHeight);
        // creact noble
        var noble = this.state.showLastPiece ? 2 : 1;
        var endSpace = this.state.showLastTile ? 2 : 1;
        this.addPiece(0,0,endSpace,noble);

        // generate moves
        // var moveNum = 6;
        for ( var i = 0; i < this.state.moveNum; i++ ) {
            if ( !this.createMove() ) {
                this.onReset();
                return;
            }
        }

        if ( !this.state.showDeadTiles ) {
            this.fillDeadTiles();
        }

        // var piecesStr = PieceData.toString();
        // console.log('piecesStr:',piecesStr);
        // var boardStr = this.state.tileMap.toString();
        // console.log('boardStr:',boardStr);

        this.curLvlData.piecesStartStr = PieceData.toString();
        this.curLvlData.boardStartStr = this.state.tileMap.toString();
    }

    addPiece(x,y,boardValue,pieceValue) {
        console.log('addPiece('+x+','+y+','+boardValue+','+pieceValue+')');
        PieceData.create(x,y,pieceValue);
        this.state.tileMap.set(x,y,boardValue);
    }

    createMove() {
        // console.log(' > createMove()');
        var pieces = PieceData.getPieces();
        var foundMove = false;
        // console.log('pieces:',pieces);
        var dirX, dirY;
        // var keepSmallSize = Math.max(3,Math.sqrt(this.state.moveNum*1.5+10));
        var boardWidth = Math.max(3,(Math.sqrt(this.state.moveNum)+2)*0.9);
        var boardHeight = Math.max(3,(Math.sqrt(this.state.moveNum)+2)*1);
        // console.log('boardWidth:',boardWidth);
        // console.log('boardHeight:',boardHeight);
        var tries = 0;
        while ( !foundMove ) {
            if ( tries > 20 ) {
                return false;
            }
            tries++;
            var piece = pieces[Math.floor(pieces.length*Math.random())];
            if ( Math.random() > 0.5 ) {
                dirX = Math.round(Math.random())*2-1;
                dirY = 0;
            }
            else {
                dirY = Math.round(Math.random())*2-1;
                dirX = 0;
            }
            if ( this.state.keepSmall ) {
                // this.state.tileMap.output();
                // console.log('x:',(piece.x+dirX*2));
                // console.log('y:',(piece.y+dirY*2));
                var newX = piece.x+dirX*2;
                var startX = Math.min(newX,this.state.tileMap.startX);
                var endX = Math.max(newX,this.state.tileMap.endX);
                var newWidth = endX - startX + 1;
                // console.log('newX:',newX);
                // console.log('startX:',startX);
                // console.log('endX:',endX);
                // console.log(' - newWidth:',newWidth);
                if ( newWidth > boardWidth ) {
                    continue;
                }
                var newY = piece.y+dirY*2;
                var startY = Math.min(newY,this.state.tileMap.startY);
                var endY = Math.max(newY,this.state.tileMap.endY);
                var newHeight = endY - startY + 1;
                // console.log('newY:',newY);
                // console.log('startY:',startY);
                // console.log('endY:',endY);
                // console.log(' - newHeight:',newHeight);
                if ( newHeight > boardHeight ) {
                    continue;
                }
            }
            if ( this.state.pieceMap.get(piece.x+dirX,piece.y+dirY) != null ) {
                continue;
            }
            if ( this.state.pieceMap.get(piece.x+dirX*2,piece.y+dirY*2) != null ) {
                continue;
            }
            foundMove = true;
        }
        // console.log('piece:',piece);
        // console.log('piece.moveTo:',piece.moveTo);
        if ( this.state.tileMap.get(piece.x+dirX,piece.y+dirY) == null ) {
            this.state.tileMap.set(piece.x+dirX,piece.y+dirY,1);
        }
        if ( this.state.tileMap.get(piece.x+dirX*2,piece.y+dirY*2) == null ) {
            this.state.tileMap.set(piece.x+dirX*2,piece.y+dirY*2,1);
        }
        PieceData.create(piece.x+dirX,piece.y+dirY,1);
        piece.moveTo(piece.x+dirX*2,piece.y+dirY*2);
        // piece.moveTo(piece.x,piece.y+1);

        // console.log('----------------------');
        return true;
    }

    fillDeadTiles() {
        var map = this.state.tileMap;
        for ( var x = map.startX; x <= map.endX; x++ ) {
            for ( var y = map.startY; y <= map.endY; y++ ) {
                // find seletable tiles
                tile = map.get(x,y);
                if ( tile == null ) {
                    map.set(x,y,1);
                }
            }
        }
    }

    onScroll(e) {
        // console.log('onScroll(e)');
        // console.log('e:',e);

    }

    onReset() {
        // console.log('onReset');
        PieceData.clear();
        this.state.tileMap.clear();
        this.createLevel();
        Board.clearSelection();
        // this.forceUpdate();
    }

    onRestart() {
        console.log('onRestart');
        PieceData.clear();
        PieceData.loadFromString(this.curLvlData.piecesStartStr);
        this.state.tileMap.clear();
        this.state.tileMap.loadString(this.curLvlData.boardStartStr);
        Board.clearSelection();
        // this.forceUpdate();
    }

    onSave() {
        console.log('onSave');
        this.props.showPopup(
            <View>
                <Text>Enter Level Name:</Text>
                <TextInput
                    // style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                />
                <BasicButton text="Save" onPress={this.saveLevel} />
            </View>
        );
    }

    saveLevel(name) {
        
    }

    onOutput() {
        console.log('onOutput()');
        console.log('this.state.tileMap.toString():',this.state.tileMap.toString());
        console.log('PieceData.toString():',PieceData.toString());
    }

    gotoLevels() {
        this.props.navigation.navigate('Levels');
    }


    addTurn() {
        this.setState({
            moveNum: this.state.moveNum+1,
        });
    }

    minusTurn() {
        this.setState({
            moveNum: this.state.moveNum-1,
        });
    }

    toggleLastPiece() {
        this.setState({
            showLastPiece: !this.state.showLastPiece,
        })
    }

    toggleLastTile() {
        this.setState({
            showLastTile: !this.state.showLastTile,
        })
    }

    toggleDeadTiles() {
        this.setState({
            showDeadTiles: !this.state.showDeadTiles,
        })
    }

    render() {
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
            <View style={styles.row}>
                <Text>{'Show last piece: '}</Text>
                <BasicButton
                    style={styles.mediumBtn}
                    text={this.state.showLastPiece ? 'On' : 'Off'}
                    onPress={this.toggleLastPiece}
                />
            </View>
            <View style={styles.row}>
                <Text>{'Show last tile: '}</Text>
                <BasicButton
                    style={styles.mediumBtn}
                    text={this.state.showLastTile ? 'On' : 'Off'}
                    onPress={this.toggleLastTile}
                />
            </View>
            <View style={styles.row}>
                <Text>{'Show dead tiles: '}</Text>
                <BasicButton
                    style={styles.mediumBtn}
                    text={this.state.showDeadTiles ? 'On' : 'Off'}
                    onPress={this.toggleDeadTiles}
                />
            </View>
            <View style={styles.row}>
                <Text>{'Pieces: '+(this.state.moveNum+1)}</Text>
                <BasicButton
                    style={styles.smallBtn}
                    text="-"
                    onPress={this.minusTurn}
                />
                <BasicButton
                    style={styles.smallBtn}
                    text="+"
                    onPress={this.addTurn}
                />
            </View>
            <View style={styles.row}>
                <BasicButton text="Regen" style={styles.button} onPress={this.onReset}/>
                <BasicButton text="Restart" style={styles.button} onPress={this.onRestart}/>
                {/* <BasicButton text="Save" style={styles.button} onPress={this.onSave}/> */}
                <BasicButton text="Output" style={styles.button} onPress={this.onOutput}/>
                <BasicButton text="Levels" style={styles.button} onPress={this.gotoLevels}/>
            </View>
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

export default PuzzleGenView;