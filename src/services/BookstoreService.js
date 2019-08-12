const api_url = '/search/javascript';

export default class BookstoreService {
  constructor(apiService) {
    this.apiService = apiService;
  }

  async fetchBooks() {
    const result = await this.apiService
      .get(api_url)
      .then(response => response);

    return result.data.books;
  };
}
