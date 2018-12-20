import 'jest';

import * as express from 'express';
import * as request from 'supertest';
import { router } from './router';
import { AttractorApp } from '../core';

describe('REST API', () => {

    // Documentation:
    // - https://github.com/visionmedia/supertest

    it(`returns no announcements if there are none`, () => {
        const api = express().use('/api', router(express.Router(), new AttractorApp()));

        return request(api).get('/api/announcements?x=0&y=0').expect(200, []);
    });
});
