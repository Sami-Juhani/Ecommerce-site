require("dotenv").config({ path: ".env" });
const express = require("express");
const https = require("https");
const fs = require("fs");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");
const categoryRoutes = require("./routes/categories");
const cors = require("cors");
const customMiddleware = require("./middleware/customMiddleware");
const swagger_options = require("./utils/swaggerOptions");
const connectDB = require("./config/db");
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

// App
const app = express();
const port = process.env.PORT || 4000;
const host = process.env.NODE_ENV === "production" ? "0.0.0.0" : "localhost";
const swaggerDocs = swaggerJsDoc(swagger_options);
connectDB();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(customMiddleware.requestLogger);

// Routes
app.use("/api/user", userRoutes);

app.use("/api/products", productRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/categories", categoryRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(customMiddleware.unknownEndpoint);

app.use(customMiddleware.errorHandler);

https
  .createServer(
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(4000, '0.0.0.0', () => {
    console.log("server is running at 0.0.0.0:4000");
  });
