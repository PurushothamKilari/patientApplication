import axios from 'axios'

const PATIENT_API_BASE_URL = 'http://localhost:8080/patient/'
const GETAllPATIENT = 'http://localhost:8080/patients/'

class PatientServices {
  // async getPatient() {
  // return axios.get(Get_All_Patient);
  // }
  getPatients () {
    return axios.get(GETAllPATIENT)
  }

  async getPatient (Id) {
    return axios.get(PATIENT_API_BASE_URL + Id)
  }

  deletePatient (patientId) {
    // const response = await axios.delete(Patient_API_BASE_URL +` ${patientId}`)
    return axios.delete(PATIENT_API_BASE_URL + patientId)
  }

  createPatient (requestData) {
    return axios.post(PATIENT_API_BASE_URL, requestData)
  }

  updatePatient (patientId, requestData) {
    return axios.put(PATIENT_API_BASE_URL + patientId, requestData)
  }
}

export default new PatientServices()
