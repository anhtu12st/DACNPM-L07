module.exports = {
  port: process.env.PORT || 8080,
  db: {
    prod: process.env.DATABASE_URL || 'mongodb+srv://dahcnpm:dahcnpm@cluster0.zdn7c.mongodb.net/dahcnpm?retryWrites=true&w=majority',
    test: `${process.env.DATABASE_URL}-test`,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'development_secret',
  },
};
