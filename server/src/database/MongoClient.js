import mongoose from 'mongoose';

const host = process.env.MONGO_HOST || 'localhost';
const dbName = process.env.MONGO_DBNAME || 'default';
const connectionString = 'mongodb://' + host + '/' + dbName;

class MongoClient {

    connect() {
        console.info('Connecting to mongo at: ' + connectionString);
        mongoose
            .connect(connectionString, { useNewUrlParser: true })
            .then(
                () => { console.info('Connected!') },
                err => { console.info(err) }
            );
    }
}

export default MongoClient;
