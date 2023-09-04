import { Request, Response, NextFunction } from 'express'

export type Route = (req: Request, res: Response, next: NextFunction) => void
export interface User {
    email: string;
    number: string;
  }