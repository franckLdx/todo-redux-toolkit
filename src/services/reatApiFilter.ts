import axios from 'axios';
import { Todo, Todos } from '../features/Todos/TodoSlice';

const url = 'https://fakerestapi.azurewebsites.net/api';

export const restApiService = {
  async loadTodos(): Promise<Todos> {
    const response = await axios.get(`${url}/Activities`);
    return response.data.map(mapToDo);
  }
}

interface Activity {
  "ID": number,
  "Title": string,
  "DueDate": string,
  "Completed": boolean
}

const mapToDo = (activity: Activity): Todo => ({
  id: activity.ID,
  description: activity.Title,
  done: activity.Completed
});