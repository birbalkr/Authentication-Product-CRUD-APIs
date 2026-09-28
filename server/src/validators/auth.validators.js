import { body, validationResult } from 'express-validator'

export const validateRegister = [
    body('name')
        .exists().withMessage('Name is required')
        .trim().isLength({ min: 3, max: 30 }).withMessage('Name must be between 3 and 30 characters'),

    body('email')
        .exists().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format'),

    body('password')
        .exists().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),

    body('confirmPassword')
        .exists().withMessage('Confirm Password is required')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Passwords do not match');
            }
            return true;
        }),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: 'Validation failed',
                errors: errors.array()
            });
        }
        next();
    }

]



export const validateLogin = []


export const productValidation = []