import * as express from 'express';
import { join } from 'path';
import * as favicon from 'serve-favicon';
import { json, urlencoded } from 'body-parser';
import * as morgan from 'morgan';

import { photoRouter } from './routes/photo';

const app: express.Application = express();
//app.disable('x-powered-by');

//app.use(favicon(join(__dirname, '../public', 'favicon.ico')));
//app.use(express.static(join(__dirname, '../public')));

app.use(json());
app.use(urlencoded({ extended: true }));

// api routes
app.use('/api/photos', morgan('combined'), photoRouter);

app.use(express.static(join(__dirname, '../client')));

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {

    app.use('/node_modules', express.static(join(__dirname, '../node_modules')));
    app.use(express.static(join(__dirname, '../tools')));

    app.use(function(err, req: express.Request, res: express.Response, next: express.NextFunction) {
        res.status(err.status || 500);
        res.json({
            error: err,
            message: err.message
        });
    });
}

// catch all unmatched and forward angular client index
app.use(function(req: express.Request, res: express.Response, next) {
    res.sendFile('client/index.html', { root: '.' });
});

// production error handler
// no stacktrace leaked to user
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});

export { app }