/* eslint-disable import/order */
import ApiService from './ApiService';
import axios from 'axios';

describe('ApiService', () => {
  test('constructor instance should equal axios instance', () => {
    // Arrange
    const expectedAxiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });

    const apiService = new ApiService();

    // Act
    const actualInstance = apiService.instance;

    // Assert
    expect(expectedAxiosInstance).toEqual(actualInstance);
  });
});
