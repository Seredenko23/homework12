import HTMLRenderer from "./HTMLRenderer";
import Api from "./api";
import User from "../models/user";
import Post from "../models/post";
import comment from "../models/comment";
import response from "../models/response";

class render {
    static createUserList(users: Array<User>, place: HTMLElement) {
        return users.map((user: User) => {
            const listEl: HTMLElement = HTMLRenderer.render({
                tag: 'a',
                classNames: ['list-group-item', 'list-group-item-action'],
                atrributes: [{name: 'data-id', value: `${user.id}`}],
                text: user.name,
            });
            place.append(listEl);
            return listEl
        })
    }

    static createPostsList(posts: Array<Post> , place: HTMLElement) {
        return posts.map(async (post: Post) => {
            const listEl: HTMLElement = HTMLRenderer.render({
                tag: 'a',
                classNames: ['list-group-item',
                    'list-group-item-action',
                    'd-flex',
                    'flex-row',
                    'justify-content-between',
                    'align-items-center'],
                atrributes: [{
                    name: 'data-id',
                    value: `${post.id}`
                }],
                text: post.title,
            });
            const spinner: HTMLElement = HTMLRenderer.render({
                tag: 'div',
                classNames: ['spinner-border'],
            });
            listEl.append(spinner);
            place.append(listEl);
            let value: response<comment> = await Api.getComments(post.id);
            const badge: HTMLElement = HTMLRenderer.render({
                tag: 'span',
                classNames: ['badge', 'badge-primary'],
                text: `${value.payload.length}`
            });
            spinner.remove();
            listEl.append(badge);
            return listEl
        })
    }

    static createCommentsList(comments: Array<comment>, place: HTMLElement) {
        return comments.map((comment: comment) => {
            const listEl: HTMLElement = HTMLRenderer.render({
                tag: 'li',
                classNames: ['list-group-item',
                    'd-flex',
                    'flex-column',
                    'justify-center']
            });

            const content: HTMLElement = HTMLRenderer.render({
                tag: 'span',
                text: comment.body,
            });

            const name: HTMLElement = HTMLRenderer.render({
                tag: 'span',
                classNames: ['font-weight-bold'],
                text: comment.name,
            });
            listEl.append(name);
            listEl.append(content);
            place.append(listEl);
            return listEl
        })
    }
}

export default render;