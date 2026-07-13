const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://DBAuthUser:AJURaoQOXHrd4yF6@cluster0.sw1kp3i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();
