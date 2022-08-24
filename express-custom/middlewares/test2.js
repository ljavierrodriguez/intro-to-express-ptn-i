const testMiddleware2 = (request, response, next) => {
    console.log("Pasando por el Middleware 2");
    next();
}

module.exports = testMiddleware2;