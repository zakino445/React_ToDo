import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["ああああ", "いいいい"]);
  const [completeTodos, setCompleteTodos] = useState(["いいいい"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onclickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onclickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODOリスト</p>
        <div>
          {incompleteTodos.map((todo, index) => {
            return (
              <ul key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>達成</button>
                <button onClick={() => onClickDelete(index)}>諦める</button>
              </ul>
            );
          })}
        </div>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODOリスト</p>
        <div>
          {completeTodos.map((todo, index) => {
            return (
              <ul key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>もう一度</button>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};
