import { DataSource } from 'typeorm'


require('dotenv').config()

const AppDataSource = 
    
    process.env.NODE_ENV === 'test' ? 
    
    new DataSource({
        type: 'sqlite',
        database: ':memory:',
        entities: [ 'src/entities/**/*.ts' ],
        synchronize: true,
    })
    :
    new DataSource({
        type: 'postgres',
        host: process.env.HOST,
        port: Number(process.env.PORT_DB),
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DB,
        synchronize: true,
        logging: true,
        entities: [ 'src/entities/**/*.ts' ],
        migrations: [ 'src/migrations/*.ts' ],
    })

export { AppDataSource }
