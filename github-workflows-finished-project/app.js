import express from 'express';
import bodyParser from 'body-parser';

import eventsRoutes from './routes/events.js';

const app = express();

app.use(bodyParser.json());
app.use(eventsRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
