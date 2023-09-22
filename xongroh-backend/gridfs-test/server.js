const fs = require('fs')
const { MongoClient, GridFSBucket, ObjectId } = require('mongodb')
const path = require('path')

const url = 'YOUR_MONGODB_CONNECTION_URL' // Replace with your MongoDB connection URL

const dbName = 'gridfs-test'
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

async function uploadFileToGridFS() {
  const filePath = './pic1.jpg' // Replace with the actual file path
  const originalFileName = path.basename(filePath) // Extract the original file name

  try {
    await client.connect()
    const db = client.db(dbName) // Your MongoDB database name
    const bucket = new GridFSBucket(db, { bucketName: 'bucket1' }) // Use GridFSBucket from 'mongodb' and pass the db instance

    const uploadStream = bucket.openUploadStream(originalFileName)
    const readStream = fs.createReadStream(filePath)

    readStream.pipe(uploadStream)

    uploadStream.on('finish', () => {
      console.log('File uploaded successfully.')
    })

    uploadStream.on('error', (error) => {
      console.error('Error uploading file:', error)
    })
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  } finally {
    client.close()
  }
}

uploadFileToGridFS()

// Retrieving from GridFS:

// async function retrieveFileFromGridFS() {
//   const fileId = '64c3ca9e3ed1f78967348344';
//   const outputFile = './downloads/myfile'; // The base output path (without extension)

//   try {
//     await client.connect();
//     const db = client.db(dbName); // Your MongoDB database name
//     const bucket = new GridFSBucket(db, { bucketName: 'bucket1' });

//     const downloadStream = bucket.openDownloadStream(new ObjectId(fileId));
//     const fileInfo = await bucket.find({ _id: new ObjectId(fileId) }).toArray();

//     if (fileInfo.length === 0) {
//       console.error('File not found with the provided fileId.');
//       return;
//     }

//     const fileExtension = fileInfo[0].filename.split('.').pop(); // Extract extension from the filename
//     const outputPath = `${outputFile}.${fileExtension}`;

//     const writeStream = fs.createWriteStream(outputPath);

//     downloadStream.pipe(writeStream);

//     downloadStream.on('end', () => {
//       console.log('File retrieved successfully.');
//     });

//     downloadStream.on('error', (error) => {
//       console.error('Error retrieving file:', error);
//     });
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   } finally {
//     client.close();
//   }
// }

// retrieveFileFromGridFS();
