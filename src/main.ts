import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import quizRoutes from './routes/QuizRoutes';
import questionRoutes from './routes/QuestionRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

app.use('/api', quizRoutes);
app.use('/api', questionRoutes);

mongoose.connect('mongodb://localhost:27017/SimpleQuiz')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            console.log(`Connected to MongoDB at mongodb://localhost:27017/SimpleQuiz`);
        });
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });