import type { ServerInit } from "@sveltejs/kit";
import { MONGODB_URI, DB_NAME } from '$env/static/private';
import { MongoDBConnection } from "$db/connection";
import { Cube } from "$db/models/cube";


async function initMongoConnection(): Promise<MongoDBConnection> {
  console.info(`Connecting to Database: ${MONGODB_URI} of ${DB_NAME}`)
  let dbConnector = new MongoDBConnection(MONGODB_URI, { dbName: DB_NAME });
  await dbConnector.connect()
  return dbConnector
}

export const init: ServerInit = async () => {
  console.info("Server created, registering shutdown hooks")
  let dbConnector = await initMongoConnection()



  process.on('sveltekit:shutdown', async (reason) => {
    console.info("SvelteKit has shutdown because of", reason)
    await dbConnector.disconnect()
    console.info("Disconnected from MongoDB")
  })


  await Cube.create({ name: 'Kitty' });

};