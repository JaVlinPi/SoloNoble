import React from "react";
import { Animated, Easing } from "react-native";

class PosAnim extends React.Component {

    constructor(props) {
        super(props);

        this.posAnim = new Animated.ValueXY({
            y: props.fromY,
            x: props.fromX,
        });
        
    }

    componentDidMount() {
        Animated.timing(
            this.posAnim,
            {
                toValue: {
                    y: this.props.toY,
                    x: this.props.toX,
                },
                duration: this.props.duration || 1000,
                // easing: Easing.out(Easing.linear),
                // easing: Easing.inOut(Easing.exp), // good
                // easing: Easing.inOut(Easing.cubic), // better
                // easing: Easing.inOut((t)=>{return t*t}),
            }
        ).start();
    }

    render() {
        var posStyle = {
            top: this.posAnim.y,
            left: this.posAnim.x,
        };

        return <Animated.View style={{...this.props.style,...posStyle}}>
                    {this.props.children}
                </Animated.View>;
    }

}

export default PosAnim;