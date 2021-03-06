import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import patientsRoutes from './routes/patients.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/patients', patientsRoutes);

app.get('/', (request, response) => {
  response.send('Hello from homepage.');
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
