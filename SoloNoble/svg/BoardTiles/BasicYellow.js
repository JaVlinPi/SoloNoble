import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
  Symbol,
  Rect,
  Use,
} from "react-native-svg"

function BasicYellow(props) {
  return (
    <Svg viewBox="0 0 102 102" {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={43.36}
          y1={-0.32}
          x2={58.71}
          y2={102.77}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#fff" stopOpacity={0.6} />
          <Stop offset={0.12} stopColor="#d9d9d9" stopOpacity={0.4} />
          <Stop offset={0.24} stopColor="#b9b9b8" stopOpacity={0.23} />
          <Stop offset={0.35} stopColor="#a2a2a1" stopOpacity={0.1} />
          <Stop offset={0.44} stopColor="#949493" stopOpacity={0.03} />
          <Stop offset={0.5} stopColor="#8f8f8e" stopOpacity={0} />
          <Stop offset={0.97} stopColor="#111" stopOpacity={0.35} />
          <Stop offset={1} stopOpacity={0.4} />
        </LinearGradient>
        <LinearGradient
          id="prefix__c"
          x1={68.71}
          y1={99.67}
          x2={33.29}
          y2={2.33}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopOpacity={0.5} />
          <Stop offset={0.03} stopColor="#1d1d1d" stopOpacity={0.45} />
          <Stop offset={0.12} stopColor="#555" stopOpacity={0.37} />
          <Stop offset={0.21} stopColor="#767676" stopOpacity={0.32} />
          <Stop offset={0.32} stopColor="#818181" stopOpacity={0.3} />
          <Stop offset={0.46} stopColor="#a4a4a4" stopOpacity={0.36} />
          <Stop offset={0.69} stopColor="#d6d6d6" stopOpacity={0.43} />
          <Stop offset={0.88} stopColor="#f4f4f4" stopOpacity={0.48} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.5} />
        </LinearGradient>
        <RadialGradient
          id="prefix__b"
          cx={-655.06}
          cy={-549.67}
          fx={-603.969}
          fy={-496.711}
          r={82.19}
          gradientTransform="matrix(.92 -.04 .05 1.18 696.85 704.43)"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.77} stopColor="#fff" stopOpacity={0} />
          <Stop offset={0.86} stopColor="#fff" stopOpacity={0.21} />
          <Stop offset={0.95} stopColor="#fff" stopOpacity={0.42} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.5} />
        </RadialGradient>
        <Symbol id="prefix__d" data-name="BoardTile" viewBox="0 0 102 102">
          <Rect
            x={1}
            y={1}
            width={100}
            height={100}
            rx={12.38}
            strokeMiterlimit={10}
            strokeWidth={2}
            fill="#f0ff5d"
            stroke="#656a00"
          />
          <Rect
            x={1}
            y={1}
            width={100}
            height={100}
            rx={12.38}
            fill="url(#prefix__a)"
          />
          <Rect
            x={9}
            y={9}
            width={84}
            height={84}
            rx={10.81}
            fill="url(#prefix__b)"
            stroke="url(#prefix__c)"
            strokeMiterlimit={10}
            strokeWidth={2}
          />
        </Symbol>
      </Defs>
      <Use
        width={102}
        height={102}
        xlinkHref="#prefix__d"
        data-name="Layer 2"
      />
    </Svg>
  )
}

export default BasicYellow
