/* eslint-disable strict */

'use strict';

/**
 * Difference between two angles.
 *
 * @param {*} angle1 first.
 * @param {*} angle2 second.
 * @returns
 */
const diffAngle = (angle1, angle2) => {
  const diff = Math.abs(angle2 - angle1);
  let result = diff;
  if (diff > 180) {
    result = 360 - diff;
  }
  return result;
};

export default diffAngle;
