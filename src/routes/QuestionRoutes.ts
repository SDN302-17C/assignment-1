import express from 'express';
import {
    getAllQuestions,
    createQuestion,
    updateQuestion,
    deleteQuestion
} from '../controllers/QuestionController';

const router = express.Router();

router.get('/questions', getAllQuestions);
router.post('/questions', createQuestion);
router.put('/questions/:questionId', updateQuestion);
router.delete('/questions/:questionId', deleteQuestion);

export default router;