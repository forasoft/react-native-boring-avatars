import React from 'react';
import { getNumber, getRandomColor } from '../utilities';
import Svg, { Mask, Rect, G, Path, Circle } from 'react-native-svg';
const SIZE = 90;
const COLORS = 5;

function generateColors(colors, name) {
  const numFromName = getNumber(name);
  const range = colors && colors.length;
  const colorsShuffle = Array.from({
    length: COLORS
  }, (_, i) => getRandomColor(numFromName + (i + 1), colors, range));
  const iconColors = [];
  iconColors[0] = colorsShuffle[0];
  iconColors[1] = colorsShuffle[1];
  iconColors[2] = colorsShuffle[1];
  iconColors[3] = colorsShuffle[2];
  iconColors[4] = colorsShuffle[2];
  iconColors[5] = colorsShuffle[3];
  iconColors[6] = colorsShuffle[3];
  iconColors[7] = colorsShuffle[0];
  iconColors[8] = colorsShuffle[4];
  return iconColors;
}

const AvatarRing = props => {
  const cellColors = generateColors(props.colors, props.name);
  return /*#__PURE__*/React.createElement(Svg, {
    viewBox: '0 0 ' + SIZE + ' ' + SIZE,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    width: props.size,
    height: props.size
  }, /*#__PURE__*/React.createElement(Mask, {
    id: "mask__ring",
    maskUnits: "userSpaceOnUse",
    x: 0,
    y: 0,
    width: SIZE,
    height: SIZE
  }, /*#__PURE__*/React.createElement(Rect, {
    width: SIZE,
    height: SIZE,
    rx: props.square ? undefined : SIZE * 2,
    fill: "white"
  })), /*#__PURE__*/React.createElement(G, {
    mask: "url(#mask__ring)"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M0 0h90v45H0z",
    fill: cellColors[0]
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M0 45h90v45H0z",
    fill: cellColors[1]
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M83 45a38 38 0 00-76 0h76z",
    fill: cellColors[2]
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M83 45a38 38 0 01-76 0h76z",
    fill: cellColors[3]
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M77 45a32 32 0 10-64 0h64z",
    fill: cellColors[4]
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M77 45a32 32 0 11-64 0h64z",
    fill: cellColors[5]
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M71 45a26 26 0 00-52 0h52z",
    fill: cellColors[6]
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M71 45a26 26 0 01-52 0h52z",
    fill: cellColors[7]
  }), /*#__PURE__*/React.createElement(Circle, {
    cx: 45,
    cy: 45,
    r: 23,
    fill: cellColors[8]
  })));
};

export default AvatarRing;
//# sourceMappingURL=avatar-ring.js.map