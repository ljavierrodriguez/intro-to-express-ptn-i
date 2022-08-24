const testMiddleware = (request, response, next) => {
    console.log(request.params);
    next();
}

module.exports = testMiddleware;