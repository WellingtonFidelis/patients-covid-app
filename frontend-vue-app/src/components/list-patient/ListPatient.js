import PatientService from "../../services/PatientService";

export default {
  data() {
    return {
      patients: [],
    };
  },
  mounted() {
    this.listAllPatients();
  },
  methods: {
    async listAllPatients() {
      const response = await PatientService.getPatients();
      this.patients = response;
    },
    async removePatient(id) {
      console.log(id);
      const isConfirmed = confirm("Tem certeza?");
      if (isConfirmed) {
        await PatientService.deletePatient(id);
        this.listAllPatients();
      }
    },
  },
};
