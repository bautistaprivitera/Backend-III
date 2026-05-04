import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Adoption API",
      version: "1.0.0"
    }
  },
  apis: ["./src/routes/*.js"]
};

export default swaggerJSDoc(options);