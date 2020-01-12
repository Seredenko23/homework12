import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../css/style.css'
import {fromEvent, Observable} from "rxjs";
import {switchMap} from 'rxjs/operators';
import Utilities from "./utilities";
import render from "./render";
import Api from "./api";
import response from "../models/response";
import User from "../models/user";
import createAlert from "./alert";

const userBtn: HTMLElement  = document.getElementById('users');
const usersList: HTMLElement  = document.getElementById('usersList');
const postsList: HTMLElement  = document.getElementById('postsList');
const commentsList: HTMLElement  = document.getElementById('commentsList');
const mainContent: HTMLElement = document.getElementById('mainContent');

const userBtnEvent: Observable<Event> = fromEvent(userBtn, 'click');
const userListEvent: Observable<Event> = fromEvent(usersList, 'click');
const postsListEvent: Observable<Event> = fromEvent(postsList, 'click');

userBtnEvent.pipe(
    switchMap(() => {
        return Api.getUsers();
    })
).subscribe((res: response<User>) => {
    Utilities.clear(usersList);
    render.createUserList(res.payload, usersList);
    createAlert('Here is your data!', 'success', mainContent);
},err => {
    createAlert(err, 'danger', mainContent);
    console.log(err)
});

userListEvent.pipe(
    switchMap((e: Event) => {
        let target: EventTarget = e.target;
        return Api.getPosts( +(<HTMLElement>target).dataset.id )
    })
).subscribe(res => {
    Utilities.clear(postsList);
    render.createPostsList(res.payload, postsList);
    createAlert('Here is your data!', 'success', mainContent);
},err => {
    createAlert(err, 'danger', mainContent);
    console.log(err)
});

postsListEvent.pipe(
    switchMap((e: Event) => {
        let target: EventTarget = e.target;
        return Api.getComments( +(<HTMLElement>target).dataset.id )
    })
).subscribe(res => {
    Utilities.clear(commentsList);
    render.createCommentsList(res.payload, commentsList);
    createAlert('Here is your data!', 'success', mainContent);
},err => {
    createAlert(err, 'danger', mainContent);
    console.log(err)
});
