import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Symbol,
  Rect,
  G,
  Use,
} from "react-native-svg"

function BoardTile(props) {
  return (
    <Svg viewBox="0 0 101 101" {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={5.5}
          y1={50.5}
          x2={95.5}
          y2={50.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={1} stopOpacity={0.5} />
        </LinearGradient>
        <Symbol id="prefix__b" data-name="BoardTile" viewBox="0 0 101 101">
          <Rect
            x={0.5}
            y={0.5}
            width={100}
            height={100}
            rx={12.38}
            strokeMiterlimit={10}
            fill="#59b5ff"
            stroke="#007dff"
          />
          <Rect
            x={5.5}
            y={5.5}
            width={90}
            height={90}
            rx={10.81}
            stroke="#3685ff"
            fill="url(#prefix__a)"
            strokeMiterlimit={10}
          />
        </Symbol>
      </Defs>
      <G data-name="Layer 2">
        <Use
          width={101}
          height={101}
          xlinkHref="#prefix__b"
          data-name="Layer 1"
        />
      </G>
    </Svg>
  )
}

export default BoardTile
