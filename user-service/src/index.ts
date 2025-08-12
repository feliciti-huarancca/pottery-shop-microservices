import express from 'express';
import userRoutes from './routes/user';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// User routes
app.use('/users', userRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`User service listening on port ${port}`);
});
