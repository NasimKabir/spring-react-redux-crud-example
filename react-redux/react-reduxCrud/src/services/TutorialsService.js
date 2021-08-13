import httpClient from '../services/http-Common';

const getAll = () => {
  return httpClient.get("/tutorials");
};

const create = tutorial => {
  return httpClient.post("/tutorials", tutorial);
};


const TutorialsService = {
  getAll,
  create
}

export default TutorialsService;