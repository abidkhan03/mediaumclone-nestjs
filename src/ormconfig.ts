import { DataSourceOptions } from "typeorm";

const config: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'mediumclone',
    password: '123',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    extra: {
        migrationsDir: 'src/migrations',
    },
};

export default config;