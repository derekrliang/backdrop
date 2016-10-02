import { Router, Request, Response, NextFunction } from 'express';

const photoRouter: Router = Router();

photoRouter.get('/', function (request: Request, response: Response, next: NextFunction) {
    const photos: String[] = ['photo1', 'photo2'];

    response.json(photos);
});

export { photoRouter }