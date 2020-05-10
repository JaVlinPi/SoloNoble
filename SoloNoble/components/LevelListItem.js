import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import Board from "./Board";
import Array2D from "../com/Array2D";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

class LevelListItem extends React.Component {

    constructor() {
        super();

        this.onSelect = this.onSelect.bind(this);
    }

    onSelect() {
        console.log('LevelListItem.onSelect()')
        console.log('this.props.data:',this.props.data);
        this.props.navigation.navigate('Game', {
            levelGroup: this.props.data.levelGroup,
            levelIndex: this.props.data.levelIndex,
        });
    }

    render() {
        var boardArray = new Array2D();
        boardArray.loadString(this.props.data.board);
        var pieceArray = new Array2D();
        pieceArray.loadString(this.props.data.pieces);
        return <TouchableWithoutFeedback style={styles.main} onPress={this.onSelect}>
            <Board
                style={{maxWidth:'100%'}}
                board={boardArray}
                pieces={pieceArray}
                levelsView
            />
        </TouchableWithoutFeedback>;
    }

}

const styles = StyleSheet.create({
    main: {
        borderWidth: 1,
        maxWidth: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LevelListItem;