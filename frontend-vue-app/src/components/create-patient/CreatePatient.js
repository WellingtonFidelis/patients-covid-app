import PatientService from "@/services/PatientService";

export default {
  components: {
    //name: "CreatePatientComponent",
  },
  data() {
    return {
      patient: {
        firstName: null,
        lastName: null,
        birthDate: null,
        testResult: null,
      },
      isSubmited: false,
    };
  },
  methods: {
    verifyTestResult() {
      if (!this.patient.testResult) {
        return (this.isSubmited = false);
      }
      return (this.isSubmited = true);
    },
    handleSubmitForm() {
      console.log("Criando paciente.");
    },
    async submitNewPatient() {
      try {
        if (this.verifyTestResult()) {
          await PatientService.createPatient(this.patient);
          alert("Paciente cadastrado com sucesso!");
          this.$router.push({
            name: "list",
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
