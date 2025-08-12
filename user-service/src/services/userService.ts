import { User } from '../models/user';
import { v4 as uuidv4 } from 'uuid';

const users: User[] = [];

export const userService = {
  getAll(): User[] {
    return users;
  },

  getById(id: string): User | undefined {
    return users.find(u => u.id === id);
  },

  create(firstName: string, lastName: string, email: string, role: string): User {
    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !role?.trim()) {
      throw new Error('All fields are required');
    }

    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    const user: User = { id: uuidv4(), firstName, lastName, email, role };
    users.push(user);
    return user;
  },

  update(id: string, firstName?: string, lastName?: string, email?: string, role?: string): User | undefined {
    const user = users.find(u => u.id === id);
    if (user) {
      if (firstName) user.firstName = firstName;
      if (lastName) user.lastName = lastName;
      if (email) user.email = email;
      if (role) user.role = role;
    }
    return user;
  },

  delete(id: string): boolean {
    const index = users.findIndex(u => u.id === id);
    if (index !== -1) {
      users.splice(index, 1);
      return true;
    }
    return false;
  }
};
