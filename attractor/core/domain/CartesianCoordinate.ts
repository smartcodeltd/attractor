/**
 * In this exercise we'll use a Cartesian coordinate instead of much more complicated GPS one.
 * To simplify matters further please assume that "x" and "y" are always integers.
 *
 * @link https://en.wikipedia.org/wiki/Cartesian_coordinate_system
 */
export class CartesianCoordinate {
  constructor(
    public readonly x: number,
    public readonly y: number,
  ) {
  }

  distanceFrom(another: CartesianCoordinate) {
    // todo: actually calculate the distance from another coordinate
    // e.g. return Math.abs(this.x - another.x);

    throw new Error('Implement me');
  }
}
