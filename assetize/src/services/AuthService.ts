import axiosInstance from '../constants/axios';

interface User {
  id: number;
  name: string;
  // any other user properties
}

class AuthService {
  async login(username: string, password: string): Promise<User> {
    try {
      const response = await axiosInstance.post('/login', {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      throw new Error('Invalid credentials');
    }
  }

  async logout(): Promise<void> {
    // Perform logout API call using this.axiosInstance
    // await this.axiosInstance.post('/logout');
  }
}

export default AuthService;
