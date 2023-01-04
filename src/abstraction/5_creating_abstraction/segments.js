import { makeDecartPoint, getX, getY } from './points.js';

const makeSegment = (beginPoint, endPoint) => ({ beginPoint, endPoint });

const getBeginPoint = (segment) => segment.beginPoint;

const getEndPoint = (segment) => segment.endPoint;

const getMidpointOfSegment = (segment) => {
  const beginPoint = getBeginPoint(segment);
  const endPoint = getEndPoint(segment);

  const x = (getX(beginPoint) + getX(endPoint)) / 2;
  const y = (getY(beginPoint) + getY(endPoint)) / 2;

  return makeDecartPoint(x, y);
};

export {
  makeSegment, getMidpointOfSegment, getEndPoint, getBeginPoint,
};
