import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  const [postTitle, setPostTitle] = useState("남자 코트 추천");

  let num = [1, 2];
  setPostTitle("f");

  return (
    <div className="App">
      <div>
        <div class="black-nav">
          <h4 style={{ fontSize: "20px" }}>블로그</h4>
        </div>
        <div className="list">
          <h4>글제목</h4>
          <p>글내용</p>
        </div>
        <div className="list">
          <h4>{postTitle}</h4>
          <p>글내용</p>
        </div>
      </div>
    </div>
  );
}

export default App;
