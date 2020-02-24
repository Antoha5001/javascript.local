function getJson(value) {
    const promise = axios.get(`https://httpbin.org/get?name=${value}`);
    return promise.then( (data) => {
        return data.data;
    });
}