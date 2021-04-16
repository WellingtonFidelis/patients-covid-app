import express, { response, Router } from 'express';

import { createPatient, deletePatient, getPatientById, getPatients, retrievePatient } from '../controllers/patients.js'

const router = express.Router();

router.get('/', getPatients);

router.post('/', createPatient);

router.get('/:id', getPatientById);

router.delete('/:id', deletePatient);

router.patch('/:id', retrievePatient);

export default router;