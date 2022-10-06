import { DataTypes } from "sequelize";
import sequelize from "../../sequelize";

const handler = (req, res) => {
    
  if (req.method === "POST") {
    console.log(req.body);
    return res.status(200).json({ message: "Welcome" });
  }
  return res.status(400).json({ error: "Not found" });
};
export default handler;
