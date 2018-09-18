const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&lang=es&appid=9f39867012b9237815ec03fff3c30260`);
    return resp.data.main.temp;
};

module.exports = {
    getClima
}