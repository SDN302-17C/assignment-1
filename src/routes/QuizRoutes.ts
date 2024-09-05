import express from 'express';
import {
    getAllQuizzes,
    getQuizById,
    createQuiz,
    updateQuiz,
    deleteQuiz,
    getQuizByKeyword,
    addQuestionToQuiz,
    addQuestionsToQuiz
} from '../controllers/QuizController';

const router = express.Router();

router.get('/quizzes', getAllQuizzes);
router.get('/quizzes/:quizId', getQuizById);
router.post('/quizzes', createQuiz);
router.put('/quizzes/:quizId', updateQuiz);
router.delete('/quizzes/:quizId', deleteQuiz);
router.get('/quizzes/:quizId/populate', getQuizByKeyword);
router.post('/quizzes/:quizId/question', addQuestionToQuiz);
router.post('/quizzes/:quizId/questions', addQuestionsToQuiz);

export default router;