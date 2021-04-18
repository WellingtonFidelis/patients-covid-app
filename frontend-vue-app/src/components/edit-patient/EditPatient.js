import PatientService from "../../services/PatientService";

export default {
  data() {
    return {
      patient: {},
    };
  },
  mounted() {
    this.gettingPatientById();
  },
  methods: {
    submitUpdateFormPatient() {},
    async gettingPatientById() {
      const id = this.$router.currentRoute._value.params.id;
      const response = await PatientService.getPatientById(id);
      this.patient = { ...response };
    },
    async updatedPatient() {
      await PatientService.retrievePatient({
        id: this.$router.currentRoute._value.params.id,
      });
    },
  },
};
