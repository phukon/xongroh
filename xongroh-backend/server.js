const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const path = require('path');
const { logger, logEvents } = require('./middleware/logger.js');
const errorHandler = require('./middleware/errorHandler.js');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const corsOptions = require('./config/corsOptions.js');
const connectDB = require('./config/dbConn.js');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute.js');
const postRoute = require('./routes/postRoute.js');
const authRoute = require('./routes/authRoutes.js');
const rootRoute = require('./routes/root.js');
// const { fileURLToPath } = require('url');
// const { dirname } = require('path'); for ES6 imports
const apiCheckRoute = require('./routes/apiCheckRoute.js');

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const app = express();

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 413 && 'body' in err) {
    return res.status(413).json({ message: 'Request entity too large' });
  }
  next();
});

console.log(process.env.NODE_ENV);
connectDB();
const PORT = process.env.PORT || 8000;

app.disable('x-powered-by'); // to hide stack details
app.use(logger);
app.use(cors(corsOptions));
// Error handling middleware to catch "request entity too large" error
// Base64 documents can be at most 16mb in size
// ~Riki
app.use(express.json({ limit: '16mb' }));
app.use(cookieParser());

// Overall, this code snippet allows the web
// application to serve static files to the client
// without having to write individual routes for each file.
app.use(
  '/server',
  express.static(path.join(__dirname, 'public'), { cacheControl: false })
);

// This code snippet allows the web application
// to serve the index.html file to the client when
// the client requests the root URL.
app.use('/server', rootRoute);
app.use('/server/v1/auth', authRoute);
app.use('/server/v1/user', userRoute);
app.use('/server/v1/post', postRoute);
app.use('/server/v1/api', apiCheckRoute);

// app.use(require("./routes/auth"));

app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ message: 'Not found' });
  } else {
    res.type('txt').send('Not found');
  }
});

app.use(errorHandler);

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});

mongoose.connection.on('error', (err) => {
  console.log(`Error connecting to MongoDB: ${err}`);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    'mongoErrLog.log'
  );
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});
