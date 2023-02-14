import React from "react";

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
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
  );
};
