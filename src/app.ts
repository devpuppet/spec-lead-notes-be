import { json } from 'body-parser';
import express from 'express';

import unitRoutes from './routes/unit';

const app = express();

app.use(json());

app.use('/units', unitRoutes);

app.listen(3000);