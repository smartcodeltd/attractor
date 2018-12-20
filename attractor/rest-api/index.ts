import * as express from 'express';

import { AttractorApp } from '../core';
import { router } from './router';

export const requestHandler = express()
    .use(express.json())
    .use('/api', router(express.Router(), new AttractorApp()));
