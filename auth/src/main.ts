import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
import { EasyconfigService } from 'nestjs-easyconfig';
import { Logger, PinoLogger } from 'nestjs-pino';

import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const innerLogger = new PinoLogger({
    useExisting: true,
    pinoHttp: {
      level: process.env.NODE_ENV !== 'production' ? 'trace' : 'info',
      prettyPrint: process.env.NODE_ENV !== 'production'
    }
  });

  try {
    let appConfigs = {};

    if (process.env.NODE_ENV === 'production') {
      appConfigs = { logger: false };
    }

    const app = await NestFactory.create<NestExpressApplication>(AppModule, appConfigs);
    const config = app.get(EasyconfigService);
    const logger = app.get(Logger);

    const options = new DocumentBuilder()
      .setTitle(config.get('SWAGGER_TITLE'))
      .setDescription(config.get('SWAGGER_DESCRIPTION'))
      .setVersion(config.get('APP_VERSION'))
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(`${config.get('API_DEFAULT_PREFIX')}${config.get('SWAGGER_PREFIX')}`, app, document, {
      customSiteTitle: config.get('SWAGGER_TITLE')
    });

    app.use(bodyParser.json());

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
        validateCustomDecorators: true
      })
    );
    app.useLogger(logger);

    await app.listen(config.get('API_DEFAULT_PORT'), () => {
      const swaggerDocsURL = `${config.get('API_DEFAULT_PORT')}${config.get('API_DEFAULT_PREFIX')}${config.get('SWAGGER_PREFIX')}`;

      logger.log(`Server started!`);
      logger.log(`Swagger docs: http://localhost:${swaggerDocsURL}`);
    });
  } catch (error) {
    innerLogger.warn(error);
  }

  process.on('uncaughtException', (error: Record<string, unknown>) => {
    innerLogger.warn(error);
    process.exit(1);
  });

  process.on('unhandledRejection', (error: Record<string, unknown>) => {
    innerLogger.warn(error);
    process.exit(1);
  });
}

bootstrap().catch((error: Record<string, string>) => error.message);
