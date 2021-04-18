<template>
  <div class="container">
    <div class="text-center mb-3">
      <h3>Lista de pacientes</h3>
    </div>
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th class="text-center">Nome</th>
            <th class="text-center">Sobrenome</th>
            <th class="text-center">Data Nascimento</th>
            <th class="text-center">Idade</th>
            <th class="text-center">Resultado</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="patient in patients" :key="patient.id">
            <td>{{ patient.firstName }}</td>
            <td>{{ patient.lastName }}</td>
            <td>{{ patient.birthDate }}</td>
            <td>{{ patient.age }}</td>
            <td>{{ patient.testResult }}</td>
            <td>
              <router-link
                :to="{ name: 'update', params: { id: patient.id } }"
                class="btn btn-primary btn-sm"
                >Editar</router-link
              >
            </td>
            <td>
              <button
                v-on:click="removePatient(patient.id)"
                class="btn btn-danger btn-sm"
              >
                Excluir
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script src="./ListPatient.js"></script>

<style src="" scoped></style>
