import express from 'express';
import path from 'path';

import listen from './util/listen';

const app = express();
app.set('view engine','pug');
app.set('views', path.resolve(__dirname, 'templates'));
app.set('query parser', 'simple');

listen(app);
