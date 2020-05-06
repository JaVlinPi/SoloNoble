import React, { useRef } from "react";
import { View, StyleSheet, TouchableHighlight, Animated, TouchableWithoutFeedback, Easing } from "react-native";
import { TILE_SIZE, PIECE_MOVE_DURATION } from "../constants";
import Marble from '../svg/Marble';
import BoardTile from "../svg/BoardTile";
import PearlGold from "../svg/Pieces/PearlGold";
import PearlBlue from "../svg/Pieces/PearlBlue";
// import Animation from '../com/controller/Animation';

class PieceView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            movePos: null,
        }

        this.onSelect = this.onSelect.bind(this);

        this.fadeAnim = new Animated.Value(1);
        this.posAnim = new Animated.ValueXY({x:props.x*TILE_SIZE,y:props.y*TILE_SIZE});
        this.zAnim = new Animated.Value(0);
        this.bounce = this.zAnim.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 1.5, 1]
        });
        // console.log('fadeAnim:',this.fadeAnim);
        // console.log('posAnim:',this.posAnim);
        // var fadeAnim = useRef(new Animated.Value(0)).current;  // Initial value for opacity: 0
            
    }

    componentDidUpdate(prevProps) {
        if ( prevProps.x != this.props.x || prevProps.y != this.props.y ) {
            this.posAnim.setValue({x:this.props.x*TILE_SIZE,y:this.props.y*TILE_SIZE});
        }
        if ( prevProps.movePos == undefined && this.props.movePos ) {
            // console.log(' - PieceView.componentDidUpdate(prevProps,prevState)');
            // console.log('prevProps:',prevProps);
            // console.log('this.props:',this.props);
            Animated.timing(
                this.posAnim,
                {
                    toValue: {
                        x:this.props.movePos.x*TILE_SIZE,
                        y:this.props.movePos.y*TILE_SIZE
                    },
                    duration: PIECE_MOVE_DURATION,
                    // easing: Easing.inOut(Easing.exp), // good
                    easing: Easing.inOut(Easing.cubic), // better
                }
            ).start();
            this.zAnim.setValue(0);
            Animated.timing(
                this.zAnim,
                {
                    toValue: 1,
                    duration: PIECE_MOVE_DURATION,
                    // easing: Easing.inOut(Easing.cubic),
                    easing: Easing.inOut((t)=>{return Math.sqrt(t)}),
                }
            ).start();
        }
    }

    onSelect() {
        if ( this.props.onSelect ) this.props.onSelect(this.props.piece);
    }

    render() {
        // console.log(' - this.props.isSelected:',this.props.isSelected);
        // var posStyle = {
        //     left: this.props.x*TILE_SIZE,
        //     top: this.props.y*TILE_SIZE,
        // };
        var posStyle = {
            left: this.posAnim.x,
            top: this.posAnim.y,
            // opacity: this.bounce,
            transform: [{ scale: this.bounce }],
        };
        // var style = [styles.tile,posStyle];
        // console.log('this.props.piece:',this.props.piece);
        // console.log('this.props.piece.value:',this.props.piece.value);

        // need to replace this with way to show different piece types
        // if ( styles['color'+this.props.piece.value] ) {
        //     style.push(styles['color'+this.props.piece.value]);
        // }
        var symbol = <PearlBlue/>;
        if ( this.props.piece.value == 2 ) {
            symbol = <PearlGold/>;
        }
        
        return <Animated.View
                    style={{
                        ...this.props.style,
                        ...styles.tile,
                        ...posStyle,
                    }}
                >
                    <TouchableWithoutFeedback style={[]} onPress={this.onSelect}>
                        <View>
                            { this.props.isSelected ?
                                <View style={styles.sel}/>
                            : null }
                            {symbol}
                        </View>
                    </TouchableWithoutFeedback>
                </Animated.View>
                
        return <TouchableHighlight style={style} onPress={this.onSelect}>
                    <View>
                        { this.props.isSelected ?
                            <View style={styles.sel}/>
                        : null }
                        <Marble/>
                    </View>
                </TouchableHighlight>;
    }

}

const borderSelSize = 6;

const styles = StyleSheet.create({
    tile: {
        position: 'absolute',
        // borderColor: 'blue',
        // borderWidth: 10,
        width: TILE_SIZE*0.8,
        height: TILE_SIZE*0.8,
        margin: TILE_SIZE*0.1,
        // backgroundColor: 'white',
        borderRadius: TILE_SIZE,

    },
    sel: {
        position: 'absolute',
        borderColor: 'orange',
        borderWidth: borderSelSize,
        width: TILE_SIZE*0.8+borderSelSize*2,
        height: TILE_SIZE*0.8+borderSelSize*2,
        // margin: TILE_SIZE*0.1,
        // backgroundColor: 'white',
        borderRadius: TILE_SIZE,
        top: -borderSelSize,
        left: -borderSelSize,
    },
    color1: {
        backgroundColor: 'turquoise',
    },
    color2: {
        backgroundColor: 'crimson',
    }
});

export default PieceView;