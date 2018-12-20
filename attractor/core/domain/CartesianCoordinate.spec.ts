import 'jest';
import { CartesianCoordinate } from './CartesianCoordinate';

describe('CartesianCoordinate', () => {

    describe('distance', () => {

        it('should equal 0 for a coordinate in the same location', () => {
            const coordinate = new CartesianCoordinate(0, 0);

            expect(coordinate.distanceFrom(coordinate)).toEqual(0);
        });
    });
});
