import { Request, Response } from 'express';
import { Quiz } from '../models/Quiz';
import { Question } from '../models/Question';

// User enter keywords to search for quizzes at getQuizByKeyword
const keywords = ['React'];

// GET /quizzes
export const getAllQuizzes = async (req: Request, res: Response): Promise<void> => {
    try {
        const quizzes = await Quiz.find().populate('questions');
        res.json(quizzes);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// GET /quizzes/:quizId
export const getQuizById = async (req: Request, res: Response): Promise<void> => {
    try {
        const quizzes = await Quiz.findById(req.params.quizId).populate('questions');
        if (!quizzes) {
            res.status(404).json({ message: 'Quiz not found' });
            return;
        }
        res.json(quizzes);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// POST /quizzes
export const createQuiz = async (req: Request, res: Response): Promise<void> => {
    try {
        const quiz = new Quiz(req.body);
        await quiz.save();
        res.status(201).json(quiz);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// PUT /quizzes/:quizId
export const updateQuiz = async (req: Request, res: Response): Promise<void> => {
    try {
        const quiz = await Quiz.findByIdAndUpdate(req.params.quizId, req.body, { new: true });
        if (!quiz) {
            res.status(404).json({ message: 'Quiz not found' });
            return;
        }
        res.json(quiz);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// DELETE /quizzes/:quizId
export const deleteQuiz = async (req: Request, res: Response): Promise<void> => {
    try {
        await Quiz.findByIdAndDelete(req.params.quizId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// GET /quizzes/:quizId/populate
export const getQuizByKeyword = async (req: Request, res: Response): Promise<void> => {
    try {
        const quiz = await Quiz.findById(req.params.quizId).populate({
            path: 'questions',
            match: { keywords: keywords  } 
        });

        res.json(quiz);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// POST /quizzes/:quizId/question
export const addQuestionToQuiz = async (req: Request, res: Response): Promise<void> => {
    try {
        const question = new Question(req.body);
        await question.save();
        const quiz = await Quiz.findById(req.params.quizId);
        if (!quiz) {
            res.status(404).json({ message: 'Quiz not found' });
            return;
        } 
        quiz.questions.push(question._id);
        await quiz.save();
        res.status(201).json(question);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// POST /quizzes/:quizId/questions
export const addQuestionsToQuiz = async (req: Request, res: Response): Promise<void> => {
    try {
        const questions = await Question.insertMany(req.body);
        const quiz = await Quiz.findById(req.params.quizId);
        if (!quiz) {
            res.status(404).json({ message: 'Quiz not found' });
            return;
        }
        questions.forEach(question => quiz.questions.push(question._id));
        await quiz.save();
        res.status(201).json(questions);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};