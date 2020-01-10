import response from "../models/response";
import User from "../models/user";
import Post from "../models/post";

const BASE_URL: string = 'https://jsonplaceholder.typicode.com';

class Api {

    static async getUser(): Promise<response<User>> {
        let data: Response = await fetch(`${BASE_URL}/users`);
        let formattedData: Array<User> = await data.json();
        return {
            statusCode: data.status,
            payload: formattedData,
        }
    }

    static async getPosts(id: number): Promise<response<Post>> {
        let data: Response = await fetch(`${BASE_URL}/users`);
        let formattedData: Array<Post> = await data.json();
        return {
            statusCode: data.status,
            payload: formattedData,
        }
    }

    static async getComments(id: number): Promise<response<Comment>> {
        let data: Response = await fetch(`${BASE_URL}/users`);
        let formattedData: Array<Comment> = await data.json();
        return {
            statusCode: data.status,
            payload: formattedData,
        }
    }

}

export default Api;