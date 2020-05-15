const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'mongodb+srv://ernest:TAI123TAI@cluster0-ykgbb.mongodb.net/test?retryWrites=true&w=majority',
  JwtSecret: process.env.JWT_SERCRET || 'secret'
};

export default config;
