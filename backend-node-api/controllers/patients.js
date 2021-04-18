import express from 'express';
import { v4 as uuidv4 } from 'uuid';

import fs from 'fs';

const jsonFile = 'patients.json';

//let patients = JSON.parse(data);

const calculateAge = (birthDate) => {
  const ageDifference = Date.now() - new Date(birthDate).getTime();
  const age = Math.abs(new Date(ageDifference).getUTCFullYear() - 1970);

  return age;
}

const savePatient = (data) => {
  fs.writeFileSync(jsonFile, JSON.stringify(data, null, 2), (error) => {
    if (error) console.log(error);

    console.log('Completed');
  });
}

const getPatientData = () => {
  const jsonData = fs.readFileSync(jsonFile);
  return JSON.parse(jsonData)
}

export const getPatients = (request, response) => {
  //console.log(patients);
  const patients = getPatientData();
  response.send(patients);
};

export const createPatient = (request, response) => {
  //console.log('Post Route reached');
  //console.log(request.body);
  const newPatient = request.body;

  const patients = getPatientData();

  const age = calculateAge(newPatient.birthDate);

  patients.push({ ...newPatient, id: uuidv4(), age });

  savePatient(patients);

  response.send(`Paciente ${newPatient.firstName} ${newPatient.lastName}, cadastrado com sucesso.`);

};

export const getPatientById = (request, response) => {
  const { id } = request.params;

  const patients = getPatientData();

  const foundUser = patients.find((patient) => {
    return patient.id === id;
  });

  response.send(foundUser);

};

export const deletePatient = (request, response) => {
  const { id, fisrtName } = request.params;

  const patients = getPatientData();

  const patientToDelete = patients.filter((patient) => {
    return patient.id !== id;
  });

  savePatient(patientToDelete);

  response.send(`Paciente ${id} foi removido com sucesso.`);
}

export const retrievePatient = (request, response) => {
  const { id } = request.params;

  const existentPatients = getPatientData();

  const findExist = existentPatients.find((patient) => { return patient.id === id; });
  if (!findExist) {
    return response.status(409).send({ error: true, msg: 'Paciente não existe' });
  }

  const patientSelectedIndex = existentPatients.findIndex((patient) => {
    return patient.id === id;
  });

  const {
    firstName: currentFirstName,
    lastName: currentLastName,
    birthDate: currentBirthDate,
    testResult: currentTestResult
  } = existentPatients[patientSelectedIndex];

  const newPatientUpdated = {
    firstName: request.body['firstName'] ? request.body['firstName'] : currentFirstName,
    lastName: request.body['lastName'] ? request.body['lastName'] : currentLastName,
    birthDate: request.body['birthDate'] ? request.body['birthDate'] : currentBirthDate,
    testResult: request.body['testResult'] ? request.body['testResult'] : currentTestResult,
    id: id,
    age: calculateAge(request.body['birthDate'] ? request.body['birthDate'] : currentBirthDate)
  }

  existentPatients[patientSelectedIndex] = newPatientUpdated;

  savePatient(existentPatients);

  response.send(`Dados do paciente ${newPatientUpdated.firstName} alterado com sucesso.`)

}