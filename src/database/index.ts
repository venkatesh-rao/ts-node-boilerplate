import { Db, MongoClient } from 'mongodb';

class MongoDB {
  client: MongoClient;
  db?: Db;
  constructor() {
    const url = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017';
    this.client = new MongoClient(url, {
      useUnifiedTopology: true,
    });
  }
  async init() {
    await this.client.connect();
    console.log('MongoDB Connected');
    this.db = this.client.db(process.env.DB_NAME);
  }
}

const mongoDB = new MongoDB();

export default mongoDB;
