import response from "../models/response";
import User from "../models/user";
import Post from "../models/post";
import comment from "../models/comment";

const BASE_URL: string = 'https://jsonplaceholder.typicode.com';

class Api {

    static async getUsers(): Promise<response<User>> {
        let data: Response = await fetch(`${BASE_URL}/users`);
        let formattedData: Array<User> = await data.json();
        return {
            statusCode: data.status,
            payload: formattedData,
        }
    }

    static async getPosts(id: number): Promise<response<Post>> {
        let data: Response = await fetch(`${BASE_URL}/posts?userId=${id}`);
        let formattedData: Array<Post> = await data.json();
        return {
            statusCode: data.status,
            payload: formattedData,
        }
    }

    static async getComments(id: number): Promise<response<comment>> {
        let data: Response = await fetch(`${BASE_URL}/comments?postId=${id}`);
        let formattedData: Array<comment> = await data.json();
        return {
            statusCode: data.status,
            payload: formattedData,
        }
    }
}

export default Api;