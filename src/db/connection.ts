import { Sequelize } from "sequelize";

const sequelize = new Sequelize('pet_doctor', 'root', '1234', {
    host: 'localhost',
    dialect: "mysql"
  });

  export default sequelize;