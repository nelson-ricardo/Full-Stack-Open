import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {

    return axios.get(baseUrl).then(response => {
        return response.data
    });
}

const create = (newContact) => {
    return axios.post(baseUrl, newContact).then(response => {
        return response.data
    });
}

const delContact = (id) => {
    return axios.delete(`${baseUrl}/${id}`).then(response => {
        return response.data
    })
}

const updateNumber = (id, newContact) => {
    return axios.put(`${baseUrl}/${id}`, newContact).then(response => {
        console.log(response)
        return response.data
    })
}

const contactServices = {
    getAll,
    create,
    delContact,
    updateNumber
}

export default contactServices