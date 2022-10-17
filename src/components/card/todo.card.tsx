import { component$ } from "@builder.io/qwik";
import { ITodo } from '../../../types/todo.type';

const Card = component$((props: { content: ITodo }) => {

    return (
        
        <div>
            <h1>{props.content.title}</h1>
            <br />
            {props.content.content}
        </div>
        
    )}
);

export {
    Card,
}
