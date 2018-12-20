import { AttractorApp, CartesianCoordinate } from '../core';
import * as express from 'express';

/**
 *
 * Express documentation:
 * - https://expressjs.com/en/api.html
 *
 * @param api - an instance of the Express server
 * @param app - an entry point to business logic
 */
export function router(api: express.Router, app: AttractorApp): express.Router {

    api.use(express.json());

    api.get('/announcements', (req: express.Request, res: express.Response) => {

        // convert url query string, such as /api/announcements?x=0&y=0 to a domain object
        const coordinate = new CartesianCoordinate(req.query.x, req.query.y);

        // delegate the business logic to AttractorApp
        res.send(app.announcementsFor(coordinate));
    });

    // todo: add other routes if needed

    return api;
}
