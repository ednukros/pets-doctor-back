import { Sequelize } from "sequelize";

//pasar a .env 
const sequelize = new Sequelize('pet_doctor', 'root', '1234', {
    host: 'localhost',
    dialect: "mysql"
  });

  export default sequelize;