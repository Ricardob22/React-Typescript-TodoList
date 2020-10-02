/*
4. we could keep Todo declared in TodoListItem.tsx, it’s going to be used throughout the app. 
We can either export it here and import it everywhere else we need it throughout the app, 
or we can create a type declaration file
*/
interface Todo {
  text: string;
  complete: boolean;
}

//declare a ToggleTodo type in our types.d.ts file:
type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;
