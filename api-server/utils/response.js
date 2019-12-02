class Response {
    constructor(){
        this.Data = null;
        this.IsError = true;
        this.Errors = [];
    }
}

Response.prototype.addDetail = function (msg) {
    this.Errors.push(msg);
}

Response.prototype.success = function (data) {
    this.IsError = false;
    this.Data = data;
}

module.exports = Response;