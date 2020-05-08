
const getAngleFromPoints = (sx, sy, ex, ey) => {
    var dy = sy - ey;
    var dx = sx - ex;
    var theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    //if (theta < 0) theta = 360 + theta; // range [0, 360)
    return theta;
}

const getVectorFromAngle = (angle, length) => {
    length = typeof length !== 'undefined' ? length : 1;
    angle = angle * Math.PI / 180; // if you're using degrees instead of radians
    return [length * Math.cos(angle), length * Math.sin(angle)]
}

const getVectorFromPoints = (sx, sy, ex, ey, length) => {
    return getVectorFromAngle(getAngleFromPoints(sx, sy, ex, ey),length)
}

const getDistanceFromPoints = (sx, sy, ex, ey) => {
    var a = sx - ex;
    var b = sy - ey;

    return Math.sqrt( a*a + b*b );
}

const MathUtil = {
    getAngleFromPoints: getAngleFromPoints,
    getVectorFromAngle: getVectorFromAngle,
    getVectorFromPoints: getVectorFromPoints,
    getDistanceFromPoints: getDistanceFromPoints,
}

export default MathUtil;