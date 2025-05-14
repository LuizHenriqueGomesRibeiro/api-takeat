const { Router } = require("express");
const buyer = require("./controllers/buyer");

const routes = Router();

routes.get("/health", buyer.getAllOrders);

module.exports = routes;