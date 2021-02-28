const app = require('./app');
const { PORT } = require('./common/config');

app.listen(PORT, () => {
  console.log(`Express server is listening on port ${PORT}`);
});
