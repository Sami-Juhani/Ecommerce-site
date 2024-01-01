require("dotenv").config({ path: ".env"});
const https = require("https");
const fs = require("fs");
const express = require("express");
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
const host = process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost';
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

// app.listen(port, "0.0.0.0", () => {
//   console.log(`Server is running on 0.0.0.0:${port}`);
// });

https
  .createServer(
		// Provide the private and public key to the server by reading each
		// file's content with the readFileSync() method.
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(4000, "0.0.0.0", () => {
    console.log("serever is runing at 0.0.0.0:4000");
  });
