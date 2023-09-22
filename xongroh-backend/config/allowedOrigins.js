const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3500',
  'https://xongroh.vercel.app',
  'https://xongroh-public.vercel.app',
];

module.exports = allowedOrigins;

// Don't use a trailing slash. The last time I used it, it caused a bug.
