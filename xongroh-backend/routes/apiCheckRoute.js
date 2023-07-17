import { Router } from "express";
const router = Router();
import APIStatus from "../models/apiStatus.js";
import asyncHandler from "express-async-handler"

//controller
const checkApiStatus = asyncHandler(async (req, res) => {
    const _id = "64b4c93a0fd0260f8e327b3b";

    // Get the API status from MongoDB
    const status = await APIStatus.findOne({ _id }).lean();

    // If no status found
    if (!status) {
        return res.status(400).json({ message: 'No status found' });
    }

    // Set cache-control headers
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    // Retrieve the resource version from MongoDB or any other appropriate mechanism
    const resourceVersion = status.version;

    // Add cache-busting query parameter to the response
    status.version = resourceVersion + '?' + Date.now(); // Concatenate the resource version with a cache-busting parameter

    res.json(status);
});




const addApiStatus = asyncHandler(async (req, res) => {
    const status = new APIStatus({
        "register": true,
        "registerMail": false,
        "authenticate": true,
        "login": true,
        "userDetails": true,
        "generateOTP": true,
        "verifyOTP": true,
        "createResetSession": true,
        "updateUser": true,
        "resetPassword": true,
        "version": "1"
      });

      // Return save result as a response
      const result = await status.save();
      return res.status(201).send({ msg: "Status added" });
})


export const updateApiStatus = asyncHandler(async (req, res) => {
    try {
        const _id = "64b4c93a0fd0260f8e327b3b"

        const body = req.body;

        // Update the data
        await APIStatus.updateOne({ _id: _id }, body);

        return res.status(201).send({ msg: "Status Updated...!" });
    }catch (error) {
        return res.status(401).send({ error });
    }
    });


// routes
router.route('/apiStatus').get(checkApiStatus)
router.route('/apiStatus').post(addApiStatus)
router.route('/apiStatus').put(updateApiStatus)

export default router;