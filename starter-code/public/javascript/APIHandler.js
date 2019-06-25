var baseUrl = "http://localhost:8000";

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${baseUrl}/characters`);
  }

  getOneRegister(id) {
    return axios.get(`${baseUrl}/characters/${id}`);
  }

  createOneRegister(name, occupation, weapon, cartoon) {
    return axios.post(`${baseUrl}/characters`, {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    });
  }

  updateOneRegister(name, occupation, weapon, cartoon) {
    return axios.patch(`${baseUrl}/characters/${id}`, {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    });
  }

  deleteOneRegister(id) {
    return axios.delete(`${baseUrl}/characters/${id}`);
  }
}
