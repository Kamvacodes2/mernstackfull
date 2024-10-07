import express from "express";
import cors from "cors";
import movies from "./api/movies.route.js";
const app = express();
const corsOptions = {
  origin: "https://mernstackfull-front-end.vercel.app", // Allow only your frontend
  optionsSuccessStatus: 200, // For legacy browser support
};
// Apply CORS middleware with options
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/v1/movies", movies);
app.use("*", (req, res) => {
  res.status(404).json({ error: "not found" });
});
export default app;
