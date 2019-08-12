import axios from 'axios';

export default class ApiService {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });

    Object.assign(this, this.instance);
  }
}
