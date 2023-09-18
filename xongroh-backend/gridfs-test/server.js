import fs from 'fs'
import { MongoClient, GridFSBucket, ObjectId } from 'mongodb'
import path from 'path'

// const url =

const dbName = 'gridfs-test'
const client = await MongoClient.connect(url)
const db = client.db(dbName) // Your MongoDB database name
const bucket = new GridFSBucket(db, { bucketName: 'bucket1' }) // Use GridFSBucket from 'mongodb' and pass the db instance

async function uploadFileToGridFS() {
  const filePath = './pic1.jpg' // Replace with the actual file path
  const originalFileName = path.basename(filePath) // Extract the original file name

  const uploadStream = bucket.openUploadStream(originalFileName)
  const readStream = fs.createReadStream(filePath)

  readStream.pipe(uploadStream)

  uploadStream.on('finish', () => {
    console.log('File uploaded successfully.')
    client.close()
  })

  uploadStream.on('error', (error) => {
    console.error('Error uploading file:', error)
    client.close()
  })
}

uploadFileToGridFS()

// retrieving from gridfs:

// async function retrieveFileFromGridFS() {
//     const fileId = '64c3ca9e3ed1f78967348344';
//     const outputFile = './downloads/myfile'; // The base output path (without extension)

//     const downloadStream = bucket.openDownloadStream(new ObjectId(fileId));
//     const fileInfo = await bucket.find({ _id: new ObjectId(fileId) }).toArray();

//     if (fileInfo.length === 0) {
//       console.error('File not found with the provided fileId.');
//       client.close();
//       return;
//     }

//     const fileExtension = fileInfo[0].filename.split('.').pop(); // Extract extension from the filename
//     const outputPath = `${outputFile}.${fileExtension}`;

//     const writeStream = fs.createWriteStream(outputPath);

//     downloadStream.pipe(writeStream);

//     downloadStream.on('end', () => {
//       console.log('File retrieved successfully.');
//       client.close();
//     });

//     downloadStream.on('error', (error) => {
//       console.error('Error retrieving file:', error);
//       client.close();
//     });
//   }

//   retrieveFileFromGridFS();
