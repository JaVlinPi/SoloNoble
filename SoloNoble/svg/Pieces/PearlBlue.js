import * as React from "react"
import Svg, { RadialGradient, Stop, Path } from "react-native-svg"

function PearlBlue(props) {
  return (
    <Svg viewBox="0 0 80 80" {...props}>
      <RadialGradient
        id="prefix__a"
        cx={-46.955}
        cy={123.937}
        r={39.782}
        gradientTransform="matrix(1.5041 .01516 .01137 -1.1275 96.555 168.381)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#fff" />
        <Stop offset={0.345} stopColor="#fff" />
        <Stop offset={0.505} stopColor="#5b98df" />
        <Stop offset={0.639} stopColor="#1b6cd5" />
        <Stop offset={0.752} stopColor="#2769b0" />
        <Stop offset={1} stopColor="#6288ec" />
      </RadialGradient>
      <Path
        d="M80.2 39.6C80.2 61.4 62.5 79 40.8 79S1.3 61.4 1.3 39.6 19 .2 40.8.2s39.4 17.7 39.4 39.4z"
        fill="url(#prefix__a)"
      />
      <RadialGradient
        id="prefix__b"
        cx={-127.637}
        cy={264.76}
        r={35.63}
        gradientTransform="matrix(1.262 0 0 -1.2741 201.524 377.72)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#409afa" stopOpacity={0} />
        <Stop offset={0.718} stopColor="#57baff" stopOpacity={0.16} />
        <Stop offset={0.824} stopColor="#74bfed" />
        <Stop offset={0.865} stopColor="#3094ed" />
        <Stop offset={0.999} stopColor="#3281db" />
        <Stop offset={1} stopColor="#0075f4" />
      </RadialGradient>
      <Path
        d="M80 40.4c.1 21.8-17.4 39.7-39.3 39.8C18.9 80.3 1 62.8.9 40.9v-.5C.8 18.6 18.3.7 40.2.6 62 .4 79.8 18 80 39.9v.5z"
        fill="url(#prefix__b)"
      />
    </Svg>
  )
}

export default PearlBlue
