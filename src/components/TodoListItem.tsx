import React from "react";

/*
    1. Our TodoListItem component will at least take a todo item as a prop. 
    That todo item will have text property, (in types.d.ts)
    which will be a string, and a complete property, 
    which will be a boolean.
*/

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

//2. Once we’ve defined our props, we can declare our TodoListItem as a functional component (React.FC) and then pass our Props as a generic.
export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  /*
     3. use the props that we’ve described. Let’s put a checkbox in each
      list item. The checkbox will be checked when todo.complete is true. A
      label will be populated with our todo.text.
  */
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? "line-through" : undefined }}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
        />{" "}
        {todo.text}
      </label>
    </li>
  );
};
