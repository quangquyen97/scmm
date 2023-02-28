const { Sequelize } = require('sequelize');
import config from "../config/config";

const sequelize = new Sequelize("d6mrhp6mi6n39f", "zyqqtsrshwkjvi", "0c00f7b3f384b455ef1971b788671fab7dd85415e5f0edd3378baec7d35d351f", {
  host: "ec2-44-195-100-240.compute-1.amazonaws.com",
  dialect: "postgres",
  port: "5432",
  logging:false,
  dialectOptions: {
    ssl:{
      require:true,
      rejectUnauthorized:false
    }
    }
});

export default sequelize;