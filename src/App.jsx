import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["ああああ", "いいいい"]);
  const [completeTodos, setCompleteTodos] = useState(["いいいい"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODOリスト</p>
        <div>
          {incompleteTodos.map((todo) => {
            return (
              <ul key={todo} className="list-row">
                <li>{todo}</li>
                <button>達成</button>
                <button>諦める</button>
              </ul>
            );
          })}
        </div>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODOリスト</p>
        <div>
          {completeTodos.map((todo) => {
            return (
              <ul key={todo} className="list-row">
                <li>{todo}</li>
                <button>もう一度</button>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};
