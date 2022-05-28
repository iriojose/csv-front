import axios from 'axios';

const methods = {
    get: "GET",
    post: "POST",
    delete: "DELETE",
    put: "PUT",
    patch: "PATCH",
};

 function fetchDataAndProceed(url, method, data, opts = {}) {
    return new Promise((resolve, reject) => {
        axios({
            method,
            url,
            params: method === 'GET' ? data : {},
            data: method !== 'GET' ? data : {},
            baseURL: 'http://localhost:8000',
            ...opts,
        }).then((response) => {
            if (response.status === 422 || response.status === 400) {
                return reject(response);
            } else {
                return resolve(response.data);
            }
        }).catch(err => {
            console.log("rejected!!", err.response || err);
            return reject(err);
        });
    });
}

export const getAllCSV = (filename = '') => {
    if(filename.length > 0) {
        return fetchDataAndProceed(`/api/files/data?filename=${filename}`, methods.get);
    } 
    return fetchDataAndProceed('/api/files/data', methods.get);
};

export const getCSVList = () => {
    return fetchDataAndProceed('/api/files/list', methods.get);
};