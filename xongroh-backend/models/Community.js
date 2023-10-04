const mongoose = require('mongoose');

// Define the schema
const communitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  community_type: {
    type: String,
    enum: ['Public', 'Private', 'Secret'],
    required: true
  },
  topics: [{
    topic_id: {
      type: String,
      required: true
    },
    topic_name: {
      type: String,
      required: true
    }
  }],
  members: [{
    user_id: {
      type: String,
      required: true
    }
  }]
});

const Community = mongoose.model('Community', communitySchema);
module.exports = Community;
