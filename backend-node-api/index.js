import express from 'express';
import bodyParser from 'body-parser';

import patientsRoutes from './routes/patients.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/patients', patientsRoutes);

app.get('/', (request, response) => {
  response.send('Hello from homepage.');
});

app.listen(PORT, () => console.log(`Server running on port: http://127.0.0.1:${PORT}`));
