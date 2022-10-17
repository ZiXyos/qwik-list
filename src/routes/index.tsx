import { component$, useStore } from '@builder.io/qwik';
import { DocumentHead} from '@builder.io/qwik-city';
import { Card } from '~/components/card/todo.card';
import { ITodo } from '../../types/todo.type';
import { post } from './api';


export default component$(() => {
  
    const prevD: ITodo = {
        title: 'simple todo card', 
        content: 'this is a card filled by props',
        value: false
    }

    const store = useStore({ count: 0 });
    return (   
        <div>
            <h1>Hello World { store.count }</h1>
            <button onClick$={() => {
                store.count++;
                post({ sessions: { todo: prevD, date: Date.now() }, path: '/' });
            }}> Add me</button>

            <Card content={{title: 'simple todo card', content: 'this is a card filled by props', value: false}}
            />
        </div>
    );
});

export const head: DocumentHead = {
  title: 'QWIK ASFFFF',
};
