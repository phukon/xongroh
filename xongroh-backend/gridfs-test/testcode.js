// const express = require('express');
// const multer = require('multer');
// const mongoose = require('mongoose');
// const { GridFSBucket, MongoClient } = require('mongodb');
// const fs = require('fs');

// const app = express();
// const port = 3000;

// // MongoDB URL
// const mongoURI = 'mongodb://localhost:27017/your_database_name';

// // Connect to MongoDB
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// // Access the default connection
// const conn = mongoose.connection;

// // Get the default bucket
// let gfs;
// conn.once('open', () => {
//   gfs = new mongoose.mongo.GridFSBucket(conn.db, {
//     bucketName: 'your_gridfs_bucket_name',
//   });
// });

// // Configure multer for file upload
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads'); // Destination folder for uploaded files
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage });

// // Handle file upload and save to GridFS
// app.post('/upload', upload.single('file'), (req, res) => {
//   const { file } = req;

//   // Check if the file exists
//   if (!file) {
//     return res.status(400).json({ message: 'No file received' });
//   }

//   // Create a writable stream to GridFS
//   const writestream = gfs.openUploadStream(file.originalname);

//   // Read the file and write it to GridFS
//   const readStream = fs.createReadStream(file.path);
//   readStream.pipe(writestream);

//   // After the file is written, delete the temporary file from the server
//   writestream.on('finish', () => {
//     fs.unlink(file.path, (err) => {
//       if (err) {
//         console.error('Error deleting temporary file:', err);
//       }
//     });

//     res.json({ message: 'File uploaded successfully' });
//   });

//   // Handle GridFS stream error
//   writestream.on('error', (err) => {
//     console.error('Error writing to GridFS:', err);
//     res.status(500).json({ message: 'File upload failed' });
//   });
// });

// // Serve the uploaded files from GridFS
// app.get('/file/:filename', (req, res) => {
//   const { filename } = req.params;

//   // Create a readable stream from GridFS
//   const readstream = gfs.openDownloadStreamByName(filename);

//   // Handle GridFS stream error
//   readstream.on('error', (err) => {
//     console.error('Error reading from GridFS:', err);
//     res.status(404).json({ message: 'File not found' });
//   });

//   // Set the appropriate content type and send the file data to the client
//   readstream.on('data', (chunk) => {
//     res.write(chunk);
//   });

//   // Finish the response when the file data is sent
//   readstream.on('end', () => {
//     res.end();
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// ///////////////////////////////////////////
// const db = client.db(dbName);
// const bucket = new mongodb.GridFSBucket(db);

// const bucket = new mongodb.GridFSBucket(db, { bucketName: 'myCustomBucket' });

// fs.createReadStream('./myFile').
//      pipe(bucket.openUploadStream('myFile', {
//          chunkSizeBytes: 1048576,
//          metadata: { field: 'myField', value: 'myValue' }
//      }));

// //
// const { MongoClient } = require("mongodb");

// // Replace the uri string with your connection string.
// const uri = "<connection string uri>";

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     const database = client.db('sample_mflix');
//     const movies = database.collection('movies');

//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await movies.findOne(query);

//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
