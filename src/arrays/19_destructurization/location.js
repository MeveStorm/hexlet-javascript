/* eslint-disable import/prefer-default-export */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1;
  const ys = y2 - y1;

  return Math.sqrt(xs ** 2 + ys ** 2);
};

const getTheNearestLocation = (locations, point) => {
  if (locations.length === 0) return null;

  let distance;
  let [, resultLocation] = locations;
  const [[, firstPoint]] = locations;

  let minDistance = getDistance(firstPoint, point);

  for (const location of locations) {
    const [, pointLocation] = location;
    distance = getDistance(pointLocation, point);
    if (minDistance > distance) {
      minDistance = distance;
      resultLocation = location;
    }
  }
  return resultLocation;
};

export { getTheNearestLocation };
