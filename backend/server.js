require("dotenv").config();
const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const userRoutes = require("./routes/user");
const productRouters = require("./routes/products");
const orderRouters = require("./routes/orders");
const cors = require("cors");
const customMiddleware = require("./middleware/customMiddleware");
const swagger_options = require("./utils/swaggerOptions");
const connectDB = require("./config/db");
const corsOptions = {
  origin: "*", // or specify the specific origins that are allowed
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

// App
const app = express();
const port = process.env.PORT || 4000;
const swaggerDocs = swaggerJsDoc(swagger_options);
connectDB();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(customMiddleware.requestLogger);

// Routes
app.use("/api/user", userRoutes);

app.use("/products", productRouters);

app.use("/api/orders", orderRouters);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(customMiddleware.unknownEndpoint);

app.use(customMiddleware.errorHandler);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});
