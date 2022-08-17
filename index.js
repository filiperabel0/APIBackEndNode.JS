import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./src/routes/routes.js";

// dir da sua pasta
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// seta o view engine da página
app.set("view engine", "ejs")
app.set("views", "src/views")

// atribui dir padrao da pasta public
app.use(express.static(__dirname + "/public"))
app.use(expressEjsLayouts)
app.use(express.json())
app.use(routes)

app.listen(port, () => {console.log(`http://localhost:${port}`)})