<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Novo paciente</h3>
      </div>
      <div class="card-boby">
        <form v-on:submit.prevent="handleSubmitForm()">
          <!-- row for first name and second name -->
          <div class="row mt-2 ml-2 mr-2">
            <div class="col col-sm-3 col-md-6 col-lg-6">
              <div class="form-group">
                <label for="inputFirstName" class="font-weight-bold"
                  >Primeiro nome</label
                >
                <input
                  type="text"
                  class="form-control"
                  name="inputFirstName"
                  id="inputFirstName"
                  v-model="patient.firstName"
                  placeholder=""
                  required="true"
                />
              </div>
            </div>
            <div class="col col-sm-3 col-md-6 col-lg-6">
              <div class="form-group">
                <label for="inputLastName" class="font-weight-bold"
                  >Sobrenome</label
                >
                <input
                  type="text"
                  class="form-control"
                  name="inputLastName"
                  id="inputLastName"
                  v-model="patient.lastName"
                  placeholder=""
                  required="true"
                />
              </div>
            </div>
          </div>
          <!-- row for birth date and result test -->
          <div class="row ml-2 mr-2">
            <div class="col col-sm-3 col-md-6 col-lg-6">
              <div class="form-group">
                <label for="inputBirthDate" class="font-weight-bold"
                  >Data de nascimento</label
                >
                <input
                  type="date"
                  class="form-control"
                  name="inputBirthDate"
                  id="inputBirthDate"
                  v-model="patient.birthDate"
                  placeholder=""
                  required="true"
                />
              </div>
            </div>
            <div class="col col-sm-3 col-md-6 col-lg-6">
              <div class="form-group">
                <label for="inputBirthDate" class="font-weight-bold"
                  >Resultado do teste</label
                >
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inputRadioTest"
                    id="inputRadioTestPositivo"
                    v-model="patient.testResult"
                    value="positivo"
                    required="true"
                  />
                  <label class="form-check-label" for="inputRadioTestPositivo"
                    >Positivo</label
                  >
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inputRadioTest"
                    id="inputRadioTestNegativo"
                    v-model="patient.testResult"
                    value="negativo"
                    required="true"
                  />
                  <label class="form-check-label" for="inputRadioTestNegativo"
                    >Negativo</label
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- button to save -->
          <div class="row ml-2 mr-2 mt-3">
            <div
              class="form-group col-sm-3 col-md-6 mx-auto"
              v-on:click="submitNewPatient"
            >
              <button type="submit" class="btn btn-success btn-block">
                Salvar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./CreatePatient.js"></script>

<style src="" scoped></style>
