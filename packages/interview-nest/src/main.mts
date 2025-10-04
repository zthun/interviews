import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import helmet from "helmet";
import { ZInterviewModule } from "./app/app.mjs";

(async function () {
  const app = await NestFactory.create(ZInterviewModule);
  app.setGlobalPrefix("api");

  const config = new DocumentBuilder()
    .setTitle("Interview API")
    .setDescription("Sample API for Interview Demonstrations")
    .setVersion("1.0")
    .build();

  const document = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api/docs", app, document);

  app.use(helmet());

  await app.listen(3000);
})();
