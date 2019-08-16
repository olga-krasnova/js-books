import mockAxios from '../__mocks__/axios';
import BookstoreService, { apiUrl } from './BookstoreService';
import bookResponse from '../__mocks__/bookResponse';

describe('BookstoreService', () => {
  const expectedUrl = apiUrl;
  const bookstoreService = new BookstoreService(mockAxios);

  describe('Fetch locations', () => {
    test('happy path', async () => {
      // Arrange
      const expectedResponse = bookResponse;
      const mockApiServiceGet = jest.fn(
        () =>
          new Promise(resolve => {
            resolve(expectedResponse);
          }),
      );

      mockAxios.get.mockImplementation(mockApiServiceGet);

      // Act
      const actualResponse = await bookstoreService.fetchBooks();

      // Assert
      expect(expectedResponse).toEqual(actualResponse);
      expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl);
    });
  });
});
