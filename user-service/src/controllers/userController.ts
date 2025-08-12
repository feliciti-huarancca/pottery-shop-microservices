import { Request, Response } from 'express';
import { userService } from '../services/userService';

export const userController = {
  getAll(req: Request, res: Response) {
    res.json(userService.getAll());
  },

  getById(req: Request, res: Response) {
    const user = userService.getById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  },

  create(req: Request, res: Response) {
    const { firstName, lastName, email, role } = req.body;
    if (!firstName || !lastName || !email || !role) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const user = userService.create(firstName, lastName, email, role);
    res.status(200).json(user);
  },

  update(req: Request, res: Response) {
    const { firstName, lastName, email, role } = req.body;
    const user = userService.update(req.params.id, firstName, lastName, email, role);
    if (user) {
      res.json(user);
    } else {
      console.log('User not found for update:', req.params.id);
      res.status(404).json({ error: 'User not found' });
    }
  },

  delete(req: Request, res: Response) {
    const success = userService.delete(req.params.id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  }
};
