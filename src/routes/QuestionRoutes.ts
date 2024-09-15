import express from 'express';
import {
    getAllQuestions,
    createQuestion,
    updateQuestion,
    deleteQuestion,
    getQuestionByID
} from '../controllers/QuestionController';

const router = express.Router();

router.get('/', getAllQuestions);
router.get('/:questionId', getQuestionByID);
router.post('/', createQuestion);
router.put('/:questionId', updateQuestion);
router.delete('/:questionId', deleteQuestion);

export default router;