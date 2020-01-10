interface response<T> {
    statusCode: number;
    payload: Array<T>
}

export default response