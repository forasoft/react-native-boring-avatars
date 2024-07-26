import React from 'react';
import { getNumber, getUnit, getBoolean, getRandomColor, getContrast } from '../utilities';
import Svg, { Mask, Rect, G, Path } from 'react-native-svg';
const SIZE = 36;

function generateData(name, colors) {
  const numFromName = getNumber(name);
  const range = colors && colors.length;
  const wrapperColor = getRandomColor(numFromName, colors, range);
  const preTranslateX = getUnit(numFromName, 10, 1);
  const wrapperTranslateX = preTranslateX < 5 ? preTranslateX + SIZE / 9 : preTranslateX;
  const preTranslateY = getUnit(numFromName, 10, 2);
  const wrapperTranslateY = preTranslateY < 5 ? preTranslateY + SIZE / 9 : preTranslateY;
  const data = {
    wrapperColor: wrapperColor,
    faceColor: getContrast(wrapperColor),
    backgroundColor: getRandomColor(numFromName + 13, colors, range),
    wrapperTranslateX: wrapperTranslateX,
    wrapperTranslateY: wrapperTranslateY,
    wrapperRotate: getUnit(numFromName, 360),
    wrapperScale: 1 + getUnit(numFromName, SIZE / 12) / 10,
    isMouthOpen: getBoolean(numFromName, 2),
    isCircle: getBoolean(numFromName, 1),
    eyeSpread: getUnit(numFromName, 5),
    mouthSpread: getUnit(numFromName, 3),
    faceRotate: getUnit(numFromName, 10, 3),
    faceTranslateX: wrapperTranslateX > SIZE / 6 ? wrapperTranslateX / 2 : getUnit(numFromName, 8, 1),
    faceTranslateY: wrapperTranslateY > SIZE / 6 ? wrapperTranslateY / 2 : getUnit(numFromName, 7, 2)
  };
  return data;
}

const AvatarBeam = props => {
  const data = generateData(props.name, props.colors);
  return /*#__PURE__*/React.createElement(Svg, {
    viewBox: '0 0 ' + SIZE + ' ' + SIZE,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    width: props.size,
    height: props.size
  }, /*#__PURE__*/React.createElement(Mask, {
    id: "mask__beam",
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
    mask: "url(#mask__beam)"
  }, /*#__PURE__*/React.createElement(Rect, {
    width: SIZE,
    height: SIZE,
    fill: data.backgroundColor
  }), /*#__PURE__*/React.createElement(Rect, {
    x: "0",
    y: "0",
    width: SIZE,
    height: SIZE,
    transform: 'translate(' + data.wrapperTranslateX + ' ' + data.wrapperTranslateY + ') rotate(' + data.wrapperRotate + ' ' + SIZE / 2 + ' ' + SIZE / 2 + ') scale(' + data.wrapperScale + ')',
    fill: data.wrapperColor,
    rx: data.isCircle ? SIZE : SIZE / 6
  }), /*#__PURE__*/React.createElement(G, {
    transform: 'translate(' + data.faceTranslateX + ' ' + data.faceTranslateY + ') rotate(' + data.faceRotate + ' ' + SIZE / 2 + ' ' + SIZE / 2 + ')'
  }, data.isMouthOpen ? /*#__PURE__*/React.createElement(Path, {
    d: 'M15 ' + (19 + data.mouthSpread) + 'c2 1 4 1 6 0',
    stroke: data.faceColor,
    fill: "none",
    strokeLinecap: "round"
  }) : /*#__PURE__*/React.createElement(Path, {
    d: 'M13,' + (19 + data.mouthSpread) + ' a1,0.75 0 0,0 10,0',
    fill: data.faceColor
  }), /*#__PURE__*/React.createElement(Rect, {
    x: 14 - data.eyeSpread,
    y: 14,
    width: 1.5,
    height: 2,
    rx: 1,
    stroke: "none",
    fill: data.faceColor
  }), /*#__PURE__*/React.createElement(Rect, {
    x: 20 + data.eyeSpread,
    y: 14,
    width: 1.5,
    height: 2,
    rx: 1,
    stroke: "none",
    fill: data.faceColor
  }))));
};

export default AvatarBeam;
//# sourceMappingURL=avatar-beam.js.map