import fastify from "fastify";

import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import scalarAPIReference from "@scalar/fastify-api-reference"; /* uma alternativa aoswagger-ui com interface mais bonita */

import {
  validatorCompiler,
  serializerCompiler,
  type ZodTypeProvider,
  jsonSchemaTransform,
} from "fastify-type-provider-zod";
import { createCourseRoute } from "./routes/create-course";
import { getCourseByIdRoute } from "./routes/get-course-by-id";
import { getCoursesRoute } from "./routes/get-courses";

const server = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname",
      },
    },
  },
}).withTypeProvider<ZodTypeProvider>();

if (process.env.NODE_ENV === "development") {
  server.register(fastifySwagger, {
    openapi: {
      /* Define informações básicas da API (título e versão) usando o padrão OpenAPI */
      info: {
        title: "Desafio Node.js",
        version: "1.0.0",
      },
    },
    transform:
      jsonSchemaTransform /* Aplica uma função de transformação (jsonSchemaTransform) para converter os schemas que você definiu nas rotas para o formato que o Swagger entende. */,
  });

  /*     server.register(fastifySwaggerUi, {
    routePrefix: "/docs",
  }); */
  server.register(scalarAPIReference, {
    routePrefix: "/docs",
    configuration: {
      theme: "bluePlanet",
    },
  });
}

server.setValidatorCompiler(
  validatorCompiler
); /* Define como os dados de entrada são validados */
server.setSerializerCompiler(
  serializerCompiler
); /* Define como os dados de saída são serializados */

server.register(createCourseRoute);
server.register(getCourseByIdRoute);
server.register(getCoursesRoute);

export { server };

/* https://github.com/rocketseat-education/desafio-api-nodejs */
