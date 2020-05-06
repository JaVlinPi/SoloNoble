import * as React from "react"
import Svg, { RadialGradient, Stop, Path } from "react-native-svg"

function PearlGold(props) {
  return (
    <Svg viewBox="0 0 80 80" {...props}>
      <RadialGradient
        id="prefix__a"
        cx={-46.931}
        cy={124.047}
        r={39.782}
        gradientTransform="matrix(1.5041 .01516 .01137 -1.1275 96.555 168.381)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#fff" />
        <Stop offset={0.345} stopColor="#fff" />
        <Stop offset={0.505} stopColor="#dfb85b" />
        <Stop offset={0.639} stopColor="#e6b42f" />
        <Stop offset={0.752} stopColor="#e4b247" />
        <Stop offset={1} stopColor="#ece462" />
      </RadialGradient>
      <Path
        d="M80.2 39.5c0 21.8-17.7 39.4-39.4 39.4S1.4 61.3 1.4 39.5 19 .1 40.8.1s39.4 17.6 39.4 39.4z"
        fill="url(#prefix__a)"
      />
      <RadialGradient
        id="prefix__b"
        cx={-127.607}
        cy={264.857}
        r={35.63}
        gradientTransform="matrix(1.262 0 0 -1.2741 201.524 377.72)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#fabd40" stopOpacity={0} />
        <Stop offset={0.718} stopColor="#ffb857" stopOpacity={0.157} />
        <Stop offset={0.824} stopColor="#edb674" />
        <Stop offset={0.865} stopColor="#eda830" />
        <Stop offset={1} stopColor="#dba832" />
        <Stop offset={1} stopColor="#f4a800" />
      </RadialGradient>
      <Path
        d="M80 40.3c.1 21.8-17.4 39.7-39.3 39.8C18.9 80.2 1.1 62.6.9 40.8v-.5C.8 18.4 18.4.6 40.2.5 62.1.3 79.9 17.9 80 39.7v.6z"
        fill="url(#prefix__b)"
        stroke="#c47418"
        strokeMiterlimit={10}
      />
    </Svg>
  )
}

export default PearlGold
