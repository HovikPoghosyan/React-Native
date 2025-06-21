import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Logo = (props) => (
  <Svg
    width="200px"
    height="70px"
    viewBox="5.3 4.5 12 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M15 4.5H9V8.5H15V4.5Z" fill="#000000" />
    <Path d="M4 10.5H9V14.5H15V10.5H20V19.5H4V10.5Z" fill="#000000" />
  </Svg>
);

export default Logo;