import express from "express"
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getComoanyById, getCompany, registerCompany, updateCompany } from "../controllers/company.controller.js";

const router = express.Router();

router.route("/register").post(isAuthenticated,registerCompany);
router.route("/get").get(isAuthenticated,getCompany);
router.route("/get/:id").get(isAuthenticated,getComoanyById);
router.route("/update/:id").put(isAuthenticated,updateCompany);
export default router;
// For profile update it is make sure that only alreay register person is allow to update the profile so for authentication we use middlewares
