var degtorad = Math.PI / 180; // Degree-to-Radian conversion

function getBaseRotationMatrix(alpha: number, beta: number, gamma: number) {
  let _a = alpha * degtorad;
  let _b = beta * degtorad;
  let _g = gamma * degtorad;

  let sinA = Math.sin(_a);
  let cosA = Math.cos(_a);
  let sinB = Math.sin(_b);
  let cosB = Math.cos(_b);
  let sinG = Math.sin(_g);
  let cosG = Math.cos(_g);

  //
  // XYZ-ordered rotation matrix construction.
  //

  var m11 = cosG * cosA;
  var m12 = -cosG * sinA;
  var m13 = sinG;
  var m21 = sinB * sinG * cosA + cosB * sinA;
  var m22 = -sinB * sinG * sinA + cosB * cosA;
  var m23 = -sinB * cosG;
  var m31 = -cosB * sinG * cosA + sinB * sinA;
  var m32 = cosB * sinG * sinA + sinB * cosA;
  var m33 = cosB * cosG;

  return [m11, m12, m13, m21, m22, m23, m31, m32, m33];
}

export default getBaseRotationMatrix;
