import PatientService from "../../services/PatientService";

export default {
  data() {
    return {
      patient: {
        firstName: null,
        lastName: null,
        birthDate: null,
        testResult: null,
      },
    };
  },
  mounted() {
    this.gettingPatientById();
  },
  methods: {
    submitUpdateFormPatient() {
      console.log("Atualizando paciente.");
    },
    async gettingPatientById() {
      const id = this.$router.currentRoute._value.params.id;
      const response = await PatientService.getPatientById(id);
      this.patient = { ...response };
    },
    async updatedPatient() {
      await PatientService.retrievePatient(this.patient);
      alert("Dados do paciente atualizados com sucesso!");
      this.$router.push({
        name: "list",
      });
    },
  },
};
