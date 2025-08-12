import { userService } from "../src/services/userService";

describe('User Service', () => {
  test('should create a user', () => {
    const userData = {
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
      role: "Admin"
    };

    const user = userService.create(userData.firstName, userData.lastName, userData.email, userData.role);

    expect(user).toHaveProperty('id');
    expect(user.firstName).toEqual(userData.firstName);
    expect(user.lastName).toEqual(userData.lastName);
    expect(user.email).toEqual(userData.email);
    expect(user.role).toEqual(userData.role);
  });

  test('should throw an error if a field is missing', () => {
    const userData = {
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
    };
    
    expect(() => {
      userService.create(userData.firstName, userData.lastName, userData.email, undefined as any);
    }).toThrow('All fields are required');
  });

  test('should throw an error if fields are empty', () => {
    expect(() => {
      userService.create('Test', '   ', '   ', '   ');
    }).toThrow('All fields are required');
  });

  test('should throw an error if email is already taken', () => {
    userService.create('Test', 'User', 'test_duplicate@example.com', 'admin');
    console.log('all users:', userService.getAll()); // Log all users to verify the user was created
    expect(() => {
      userService.create('Another', 'User', 'test_duplicate@example.com', 'user');
    }).toThrow('User with this email already exists');
  });

  test('should get a user by id', () => {
    const user = userService.create('Jane', 'Smith', 'jane@example.com', 'admin');
    const found = userService.getById(user.id);
    expect(found).toEqual(user);
  });

  test('getById should return undefined for non-existent user id', () => {
    const found = userService.getById('non-existent-id');
    expect(found).toBeUndefined();
  });

  test('should update a user by id', () => {
    const user = userService.create('Bob', 'Brown', 'bob@example.com', 'customer');
    const updatedUser = userService.update(user.id, undefined, undefined, 'bob.brown@example.com');
    expect(updatedUser).toEqual({ ...user, email: 'bob.brown@example.com' });
  });

  test('should not update user with non-existent id', () => {
    const updatedUser = userService.update('non-existent-id', 'New', 'Name', 'new@example.com', 'user');
    expect(updatedUser).toBeUndefined();
  });

  test('should delete a user by id', () => {
    const user = userService.create('Alice', 'Johnson', 'alice@example.com', 'admin');
    const success = userService.delete(user.id);
    expect(success).toBe(true);
    expect(userService.getById(user.id)).toBeUndefined();
  });

  test('should not delete user with non-existent id', () => {
    const success = userService.delete('non-existent-id');
    expect(success).toBe(false);
  });
});