const { connectDB } = require('./common/database');
const app = require('./app');
const { PORT } = require('./common/config');

(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Express server is listening on port ${PORT}`);
  });
})();
