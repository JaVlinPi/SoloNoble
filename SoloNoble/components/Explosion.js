import React from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";
import { TILE_SIZE, STAR_BURST_DURATION } from "../constants";
import Star from "../svg/Star";
import MathUtil from "../com/utils/MathUtil";
import PosAnim from "./PosAnim";
// import Animation from '../com/controller/Animation';

const NUM_STARS = 6;
const STAR_SIZE = TILE_SIZE*0.4;
const STAR_MOVE = TILE_SIZE*0.65;

class Explosion extends React.Component {

    constructor(props) {
        super(props);

        this.getStars = this.getStars.bind(this);
    }

    getStars() {
        console.log(' -------- getStars()');
        var stars = [];
        for ( var i = 0; i < NUM_STARS; i++ ) {
            var r = Math.round(Math.random()*360);
            var angle = i * (360/NUM_STARS) + ( Math.random() * 20);
            console.log('angle:',angle);
            var g = MathUtil.getVectorFromAngle(angle);
            // stars.push(
            //         <Star style={styles.star}/>
            // );
            var offset = Math.random()*0.4+0.8;
            // var size = STAR_SIZE+(Math.random()*20-10);
            var size = STAR_SIZE*offset;
            stars.push(
                <PosAnim
                    fromY = {0}
                    fromX = {0}
                    toY = {g[1]*STAR_MOVE*offset}
                    toX = {g[0]*STAR_MOVE*offset}
                    duration={STAR_BURST_DURATION}
                    // easing = {Easing.out}
                >
                    <Star style={{
                        ...styles.star,
                        transform: [{ rotate: r+'deg' }],
                        width: size,
                        height: size,
                    }}/>
                </PosAnim>
            );
        }
        // console.log('stars:',stars);
        return stars;
    }

    render() {
        var posStyle = {
            // position: 'absolute',
            // left: ( this.props.x + 0.5 + this.posAnim._value ) * TILE_SIZE - (STAR_SIZE/2),
            left: ( this.props.x + 0.5 ) * TILE_SIZE - (STAR_SIZE/2),
            // left: this.posAnim,
            top: ( this.props.y + 0.5 ) * TILE_SIZE - (STAR_SIZE/2),
            // transform: [{ scale: this.bounce }],
            zIndex: 200,
        };

        return <View style={posStyle}>
                    {this.getStars()}
                </View>;
    }

}

const styles = StyleSheet.create({
    star: {
        position: 'absolute',
        // borderColor: 'blue',
        // borderWidth: 10,
        width: STAR_SIZE,
        height: STAR_SIZE,
    },
    test: {
        // position: 'absolute',
        borderColor: 'blue',
        borderWidth: 10,
        width: STAR_SIZE,
        height: STAR_SIZE,
    },
    test2: {
        // position: 'absolute',
        borderColor: 'red',
        borderWidth: 10,
        width: STAR_SIZE,
        height: STAR_SIZE,
    },
});

export default Explosion;