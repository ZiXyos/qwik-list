import { ITodo } from "../../../types/todo.type"

interface qwTodoReq {

    sessions: {
        todo: ITodo;
        date: number;
    },
    path: string
}


const post = (req: qwTodoReq): { status: number } => {
    
    const prevD = JSON.parse(localStorage.getItem('todos') || '');
    const list: {
        todo: ITodo, 
        date: number,
    }[] = prevD ? prevD : [];

    list.push(req.sessions);

    localStorage.setItem('todos', JSON.stringify(list));
    return ({ status: 200});
}

export {
    post
}
