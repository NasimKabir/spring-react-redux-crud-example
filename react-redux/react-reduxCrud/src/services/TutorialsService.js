import httpClient from '../services/http-Common';

const create = tutorial => {
  return httpClient.post("/tutorials", tutorial);
};

const getAll = () => {
  return httpClient.get("/tutorials");
};

const get = id => {
  return httpClient.get(`/tutorials/${id}`);
};

const TutorialsService = {
  getAll,
  create,
  get
}

export default TutorialsService;