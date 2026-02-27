// Custom reusable middleware
import logger from "./logger.js";

// Take token from Auth header and assign it to token field of request object
const tokenExtractor = (request, response, next) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.startsWith("Bearer ")) {
    request.token = authorization.replace("Bearer ", ""); // keep only the token
  } else {
    request.token = null;
  }
  next();
};

const requestLogger = (request, response, next) => {
  logger.info("Method:", request.method);
  logger.info("Path:", request.path);
  logger.info("Body:", request.body);
  logger.info("---");
  next();
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknow endpoint" });
};

// Centralized error handler for DB, validation, and auth errors
const errorHandler = (err, req, res, next) => {
  if (err.name === "CastError") {
    return res.status(400).send({ error: "malformatted id" });
  } else if (err.name === "ValidationError") {
    return res.status(400).json({ error: err.message });
  } else if (err.name === "MongoServerError" && err.message.includes("E11000 duplicate key error")) {
    return res.status(400) .json({ error: "expected `username` to be unique" });
  } else if (err.name === "JsonWebTokenError") {
    return res.status(401).json({ error: "token invalid" });
  } else if (err.name === "TokenExpiredError") {
    return res.status(401).json({ error: "token expired" });
  }
  next(err);
};

export default {
  tokenExtractor,
  requestLogger,
  unknownEndpoint,
  errorHandler,
};
