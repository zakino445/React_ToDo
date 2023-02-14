import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
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
  );
};
