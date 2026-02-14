import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(403).send('Access denied. No token provided.');
    }

    jwt.verify(token, process.env.JWT_SECRET || 'your_secret_key', (err, decoded) => {
        if (err) {
            return res.status(401).send('Invalid token.');
        }
        req.user = decoded; // Attach the decoded user data to the request object
        next(); // Pass control to the next middleware
    });
};

export default authMiddleware;