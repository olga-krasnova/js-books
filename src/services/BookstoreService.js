const apiUrl = '/search/javascript';

export default class BookstoreService {
  constructor(apiService) {
    this.apiService = apiService;
  }

  async fetchBooks() {
    const result = await this.apiService
      .get(apiUrl)
      .then(response => response);

    return result.data.books;
  };
}
