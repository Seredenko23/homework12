import response from "../models/response";
import User from "../models/user";
import Post from "../models/post";
import comment from "../models/comment";
import { BASE_URL } from "../config/config";

class Api {

    static async getUsers(): Promise<response<User>> {
        let data: Response = await fetch(`${BASE_URL}/users`);
        if(data.status >= 400 && data.status <= 600) throw new Error('Bad response from server')
        let formattedData: Array<User> = await data.json();
        return {
            statusCode: data.status,
            payload: formattedData,
        }
    }

    static async getPosts(id: number): Promise<response<Post>> {
        let data: Response = await fetch(`${BASE_URL}/posts?userId=${id}`);
        if(data.status >= 400 && data.status <= 600) throw new Error('Bad response from server')
        let formattedData: Array<Post> = await data.json();
        return {
            statusCode: data.status,
            payload: formattedData,
        }
    }

    static async getComments(id: number): Promise<response<comment>> {
        let data: Response = await fetch(`${BASE_URL}/comments?postId=${id}`);
        if(data.status >= 400 && data.status <= 600) throw new Error('Bad response from server')
        let formattedData: Array<comment> = await data.json();
        return {
            statusCode: data.status,
            payload: formattedData,
        }
    }
}

export default Api;