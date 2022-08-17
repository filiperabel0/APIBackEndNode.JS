import { Router } from "express";
import reqdata from "../controllers/controller.js";

const routes = Router();
routes.get("/", async (req, res) => {
  const data = await reqdata();
  console.log(data)
  res.render("layout", { questions: data });
});

export default routes;
