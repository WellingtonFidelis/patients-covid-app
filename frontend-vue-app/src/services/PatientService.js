import Api from "./Api";

export default {
  async createPatient(patient) {
    try {
      const response = await Api().post("", patient);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log("Error when try add new patient. ", error);
    }
  },
  async getPatients() {
    try {
      const response = await Api().get("");
      const data = await response.data;
      return data;
    } catch (error) {
      console.log("Error when get list of patients. ", error);
    }
  },
  async getPatientById(id) {
    try {
      const response = await Api().get(`/${id}`);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log("Error when try get patient. ", error);
    }
  },
  async retrievePatient(id) {
    try {
      const response = await Api().get(`/${id}`);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log("Error when try update patient. ", error);
    }
  },
  async deletePatient(id) {
    try {
      const response = await Api().get(`/${id}`);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log("Error when try delete patient. ", error);
    }
  },
};
