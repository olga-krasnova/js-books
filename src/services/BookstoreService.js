export const apiUrl = '/search/javascript';

export default class BookstoreService {
  constructor(apiService) {
    this.apiService = apiService;
  }

  fetchBooks() {
    return this.apiService.get(apiUrl);
  }
}
