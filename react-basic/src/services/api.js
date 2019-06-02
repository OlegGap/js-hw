import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export const addNote = item => {
  return axios.post("/notes", item).then(res => res.data);
};

export const getAllNotes = () => {
  return axios.get("/notes").then(res => res.data);
};
export const updateNote = note => {
  return axios.post(`/notes/${note.id}`, note).then(res => res.data);
};
export const deleteNote = id => {
    console.log(id);
  return axios
    .delete(`/notes/${id}`)
    .then(res => (res.status === 200 ? id : null));
};
