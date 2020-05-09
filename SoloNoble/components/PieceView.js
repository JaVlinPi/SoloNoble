import React from "react";
import { View, StyleSheet, Animated, TouchableWithoutFeedback, Easing } from "react-native";
import { PIECE_MOVE_DURATION } from "../constants";
import PearlGold from "../svg/Pieces/PearlGold";
import PearlBlue from "../svg/Pieces/PearlBlue";

class PieceView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            movePos: null,
        }

        this.onSelect = this.onSelect.bind(this);

        this.posAnim = new Animated.ValueXY({x:props.x*props.size,y:props.y*props.size});
        this.zAnim = new Animated.Value(0);
        this.bounce = this.zAnim.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 1.5, 1]
        });
        
    }

    componentDidUpdate(prevProps) {
        if ( prevProps.x != this.props.x || prevProps.y != this.props.y ) {
            this.posAnim.setValue({x:this.props.x*this.props.size,y:this.props.y*this.props.size});
        }
        if ( prevProps.movePos == undefined && this.props.movePos ) {
            // console.log(' - PieceView.componentDidUpdate(prevProps,prevState)');
            // console.log('prevProps:',prevProps);
            // console.log('this.props:',this.props);
            Animated.timing(
                this.posAnim,
                {
                    toValue: {
                        x:this.props.movePos.x*this.props.size,
                        y:this.props.movePos.y*this.props.size
                    },
                    duration: PIECE_MOVE_DURATION,
                    // easing: Easing.inOut(Easing.exp), // good
                    // easing: Easing.inOut(Easing.cubic), // better
                    easing: Easing.inOut((t)=>{return t*t}),
                }
            ).start();
            this.zAnim.setValue(0);
            Animated.timing(
                this.zAnim,
                {
                    toValue: 1,
                    duration: PIECE_MOVE_DURATION,
                    // easing: Easing.inOut(Easing.cubic),
                    // easing: Easing.inOut((t)=>{return Math.sqrt(t)}),
                    easing: Easing.inOut((t)=>{return (Math.sqrt(t)+t)/2}),
                }
            ).start();
        }
    }

    onSelect() {
        if ( this.props.onSelect ) this.props.onSelect(this.props.piece);
    }

    render() {
        var symbol = <PearlBlue/>;
        if ( this.props.piece == 2 || this.props.piece.value == 2 ) {
            symbol = <PearlGold/>;
        }

        if ( this.props.levelsView ) {
            var posStyle = {
                left: this.props.x*this.props.size,
                top: this.props.y*this.props.size,
                width: this.props.size*0.8,
                height: this.props.size*0.8,
                margin: this.props.size*0.1,
            };
            return <View style={{
                            ...this.props.style,
                            ...styles.tile,
                            ...posStyle,
                        }}>
                        {symbol}
                    </View>
        }

        var posStyle = {
            left: this.posAnim.x,
            top: this.posAnim.y,
            transform: [{ scale: this.bounce }],
            zIndex: this.props.isSelected ? 100 : 1,
            width: this.props.size*0.8,
            height: this.props.size*0.8,
            margin: this.props.size*0.1,
        };
        
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
                                <View style={{
                                    ...styles.sel,
                                    width: this.props.size*0.8+borderSelSize*2,
                                    height: this.props.size*0.8+borderSelSize*2,
                                    borderRadius: this.props.size,
                                }}/>
                            : null }
                            {symbol}
                        </View>
                    </TouchableWithoutFeedback>
                </Animated.View>;
    }

}

const borderSelSize = 6;

const styles = StyleSheet.create({
    tile: {
        position: 'absolute',
        // borderColor: 'blue',
        // borderWidth: 10,
        // width: this.props.size*0.8,
        // height: this.props.size*0.8,
        // margin: this.props.size*0.1,
        // backgroundColor: 'white',
        // borderRadius: this.props.size,

    },
    sel: {
        position: 'absolute',
        borderColor: 'orange',
        borderWidth: borderSelSize,
        // width: this.props.size*0.8+borderSelSize*2,
        // height: this.props.size*0.8+borderSelSize*2,
        // borderRadius: this.props.size,
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