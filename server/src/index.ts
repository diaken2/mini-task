
import express from 'express'
import routes from "./routes/api.routes.js"
const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", routes)

const PORT = process.env.PORT || 8888
app.listen(PORT, () => {
    console.log("Server has been launched on PORT:", PORT)
}) 
