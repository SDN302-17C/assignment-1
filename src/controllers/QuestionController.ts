import { Request, Response } from 'express';
import { Question } from '../models/Question';

// GET /questions
export const getAllQuestions = async (req: Request, res: Response): Promise<void> => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error: any) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// POST /questions
export const createQuestion = async (req: Request, res: Response): Promise<void> => {
    try {
        const question = new Question(req.body);
        await question.save();
        res.status(201).json(question);
    } catch (error: any) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// PUT /questions/:questionId
export const updateQuestion = async (req: Request, res: Response): Promise<void> => {
    try {
        const question = await Question.findByIdAndUpdate(req.params.questionId, req.body, { new: true });
        if (!question) {
            res.status(404).json({ message: 'Question not found' });
            return;
        }
        res.json(question);
    } catch (error: any) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// DELETE /questions/:questionId
export const deleteQuestion = async (req: Request, res: Response): Promise<void> => {
    try {
        const question = await Question.findByIdAndDelete(req.params.questionId);
        if (!question) {
            res.status(404).json({ message: 'Question not found' });
            return;
        }
        res.status(204).send();
    } catch (error: any) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};