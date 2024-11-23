onmessage = function (e){
    let data = e.data;
    let result = parseInt(data.first) * parseInt(data.second);
    this.postMessage(result);
}