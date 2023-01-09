import { getX, getY } from './points.js';

const makeRectangle = (point, width, height) => ({ point, width, height });

const getStartPoint = (rectangle) => rectangle.point;

const getWidth = (rectangle) => rectangle.width;

const getHeight = (rectangle) => rectangle.height;

const containsOrigin = (rectangle) => {
  const startPoint = getStartPoint(rectangle);
  const x = getX(startPoint);
  const y = getY(startPoint);

  if (x === 0 || y === 0) return false;
  const width = getWidth(rectangle);
  const height = getHeight(rectangle);

  return (x + width) > 0 && (y - height) < 0;
};

export { makeRectangle, containsOrigin };
