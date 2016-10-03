import { Router, Request, Response, NextFunction } from 'express';
import * as request from 'request';
import { IncomingMessage } from 'http';

let config = require('../server.json');

const photoRouter: Router = Router();

photoRouter.get('/', function (req: Request, res: Response, next: NextFunction) {
    const options = {
        url: `https://api.500px.com/v1/photos?feature=popular&consumer_key=${config.consumerKey}`,
        method: 'GET',
        json: true
    };

    request.get(options, function (error: any, response: IncomingMessage, body: any) {
        res.json(body.photos);
    });
});

export { photoRouter }