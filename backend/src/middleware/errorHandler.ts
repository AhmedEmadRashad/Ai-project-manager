// errorHandler.ts

// Error handling middleware for Express.js applications

function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
}

module.exports = errorHandler;
