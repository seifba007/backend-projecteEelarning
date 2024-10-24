const Sequelize = require("sequelize")
const db = require("../config/database")
const userModel = require("./user")
const user = userModel(db, Sequelize)

// define relationships
