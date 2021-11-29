import axios from 'axios'

const ADMIN_URL = 'http://localhost:8080/admins'

class AdminServices {
  getAdmin () {
    return axios.get(ADMIN_URL)
  }

  getAdminById () {
    return axios.get(ADMIN_URL)
  }
}
export default new AdminServices()
