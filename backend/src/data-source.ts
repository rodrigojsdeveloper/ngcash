import { DataSource } from 'typeorm'


require('dotenv').config()

const AppDataSource = new DataSource(
    
    process.env.NODE_ENV === 'test' ? 
    
    {
        type: 'sqlite',
        database: ':memory:',
        synchronize: true,
        entities: [ 'src/entities/**/*.ts' ],
    }
    :
    {
        type: 'postgres',
        url: process.env.DATABASE_URL,
        ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
        logging: true,
        synchronize: false,
        entities: process.env.NODE_ENV === 'production' ? [ 'dist/entities/**/*.ts' ] : [ 'src/entities/**/*.ts' ],
        migrations: process.env.NODE_ENV === 'production' ? [ 'dist/migrations/*.ts' ] : [ 'src/migrations/*.ts' ],
    }
)

export { AppDataSource }
