import { Router, Request, Response, NextFunction } from 'express';
import * as request from 'request';
import { IncomingMessage } from 'http';

let config = require('../server.json');

const photoRouter: Router = Router();

photoRouter.get('/:photoId', getPhoto);
photoRouter.get('/', getPopularPhotos);

function getPhoto(req: Request, res: Response, next: NextFunction) {
    const photoId = req.params.photoId;

    const options = {
        url: `https://api.500px.com/v1/photos/${photoId}?&consumer_key=${config.consumerKey}`,
        json: true
    };

    request.get(options, function (error: any, response: IncomingMessage, body: any) {
        res.json(body.photo);
    });
};

function getPopularPhotos(req: Request, res: Response, next: NextFunction) {
    const options = {
        url: `https://api.500px.com/v1/photos?feature=popular&consumer_key=${config.consumerKey}`,
        json: true
    };

    request.get(options, function (error: any, response: IncomingMessage, body: any) {
        res.json(body.photos);
    });
};

export { photoRouter }