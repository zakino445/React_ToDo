import React from "react";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のエリア</p>
        <ul>
          <li>初期</li>
          <button>達成</button>
          <button>諦める</button>
        </ul>
      </div>
      <div>
        <p>完了のエリア</p>
        <ul>
          <li>初期</li>
          <button>もう一度</button>
        </ul>
      </div>
    </>
  );
};
