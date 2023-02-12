import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODOリスト</p>
        <ul className="list-row">
          <li>初期</li>
          <button>達成</button>
          <button>諦める</button>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODOリスト</p>
        <ul className="list-row">
          <li>初期</li>
          <button>もう一度</button>
        </ul>
      </div>
    </>
  );
};
