import { Global, Module } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import dbConfig from './db-config';

@Global() // Marca este módulo como global para que sus exportaciones estén disponibles en toda la aplicación.
@Module({
    imports: [
        MongooseModule.forRootAsync({
            useFactory: (configService: ConfigType<typeof dbConfig>) => {
                const { db, env } = configService;
                const uriDb = env === 'local' ? `${db.connection}${db.host}/${db.name}`
                : `mongodb+srv://${db.user}:${db.password}@cluster0.mongodb.com:${db.name}?retryWrites=true&w=majority`;
                return {
                    uri: uriDb,
                };
            },
            inject: [dbConfig.KEY],
        }),
    ],
    controllers: [],
    providers: [],
})
export class PersistanceModule {}
