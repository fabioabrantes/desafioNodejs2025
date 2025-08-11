import crypto from "node:crypto";
import fastify from "fastify";

const server = fastify({
  logger: true,
});

server.post("/courses", (request, reply) => {
  const courseId = crypto.randomUUID();
  return { courseId };
});

server.listen({ port: 3333 }).then(() => {
  console.log("http: server running");
});
