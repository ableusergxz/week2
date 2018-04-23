var homeData = require("./data/data.json");
var mockApi = {
    '/api/get_data_data':homeData
}

module.exports = function(url){
    return mockApi[url];
}