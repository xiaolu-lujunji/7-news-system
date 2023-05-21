"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const path_1 = require("path");
const app_module_1 = require("./app.module");
config_1.ConfigModule.forRoot({
    envFilePath: [
        (0, path_1.resolve)(__dirname, '../../../.env.development'),
        (0, path_1.resolve)(__dirname, '../../../.env.production'),
    ],
});
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'http://localhost:5173',
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map