import axios from "axios";

function findAll() {
    return axios.get("http://localhost:1337/api/tasks?populate=*").then((res) => res.data);
}

function findOne(id) {
    return axios.get(`http://localhost:1337/api/tasks/${id}?populate=*`).then((res) => res.data);
}

function deleteOne(id) {
    return axios.delete(`http://localhost:1337/api/tasks/${id}?populate=*`).then((res) => res.data);
}

function editOne(id) {
    return axios.put(`http://localhost:1337/api/tasks/${id}?populate=*`);
}

function createOne(datas) {
    return axios.post(`http://localhost:1337/api/tasks`, datas);
}

function getSteps() {
    return axios.get("http://localhost:1337/api/steps").then((res) => res.data);
}

function getTags() {
    return axios.get("http://localhost:1337/api/tags").then((res) => res.data);
}

export default {
    findAll,
    findOne,
    deleteOne,
    editOne,
    createOne,
    getSteps,
    getTags,
};
