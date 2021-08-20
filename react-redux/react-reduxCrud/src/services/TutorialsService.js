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

const deleteTutorial = id => {
  return httpClient.delete(`/tutorials/${id}`);
};
const updateTutorial=(id,tutorial)=>{
  return httpClient.put(`/tutorials/${id}`,tutorial);
}
const TutorialsService = {
  getAll,
  create,
  get,
  deleteTutorial,
  updateTutorial
}

export default TutorialsService;