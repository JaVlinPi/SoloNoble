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

function BasicWhite(props) {
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
          <Stop offset={0.01} stopColor="#090909" stopOpacity={0.51} />
          <Stop offset={0.06} stopColor="#343434" stopOpacity={0.58} />
          <Stop offset={0.12} stopColor="#565656" stopOpacity={0.63} />
          <Stop offset={0.18} stopColor="#6e6e6e" stopOpacity={0.67} />
          <Stop offset={0.24} stopColor="#7c7c7c" stopOpacity={0.69} />
          <Stop offset={0.32} stopColor="#818181" stopOpacity={0.7} />
          <Stop offset={0.37} stopColor="#8e8e8e" stopOpacity={0.73} />
          <Stop offset={0.52} stopColor="#b6b6b6" stopOpacity={0.83} />
          <Stop offset={0.67} stopColor="#d6d6d6" stopOpacity={0.9} />
          <Stop offset={0.8} stopColor="#ececec" stopOpacity={0.96} />
          <Stop offset={0.92} stopColor="#fafafa" stopOpacity={0.99} />
          <Stop offset={1} stopColor="#fff" />
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
            fill="#e6e6e6"
            stroke="#828282"
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

export default BasicWhite
