
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://aadnanshahh2001:mongoING123@cluster0.xc00x1w.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const db = client.db('db2')
    const col = db.collection('col2')

    let data = [{
      "name": 'donkey e',
      "roll no": 678
    }, {
      "name": 'donkey e',
      "roll no": 678
    }, {
      "name": 'donkey e',
      "roll no": 678
    }, {
      "name": 'donkey e',
      "roll no": 678
    }, {
      "name": 'donkey e',
      "roll no": 678
    }, {
      "name": 'donkey e',
      "roll no": 678
    }]

    // const p = await col.insertOne(data)

    // console.log(p);
    // const query = { "roll no": /^6/ };
    // const doc = await col.find({}).limit(2).toArray()
    // console.log(doc);
    // const doc=await col.insertMany(data)
    // console.log(doc);
    const no_of_docs_each_page = 2; // 2 docs in single page
    const current_page_number = 2; // 3rd page
    const doc = await col.estimatedDocumentCount()
    console.log(doc);

    // for(let i=0;i<doc;i=i+5){
      const doc1=await col.find({}).skip(6).limit(3).toArray();
      console.log(doc1,"ok ok ok");

    // }

    // const doc2=await col.find({}).limit(5)
    // const query = { "roll no": "sp2104123" }
    // const doc = await col.find(query).toArray(function (err, res) {
    //   console.log(res);
    // })

    // console.log(doc);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
