import 'jest';
import { AttractorApp } from './index';
import { CartesianCoordinate } from './domain';

describe('AttractorApp', () => {

    it('should present no announcements if there are no attractors', () => {
        const app = new AttractorApp();

        const announcements = app.announcementsFor(new CartesianCoordinate(0, 0));

        expect(announcements).toHaveLength(0);
    });
});
