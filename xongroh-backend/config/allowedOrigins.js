const allowedOriginsJson = process.env.ALLOWED_ORIGINS_JSON || '[]'

const allowedOrigins = JSON.parse(allowedOriginsJson)

module.exports = allowedOrigins;

// Don't use a trailing slash. The last time I used it, it caused a bug.