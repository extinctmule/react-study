import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState([
    "유망한 학과 추천",
    "판교 덮밥 맛집",
    "파이썬 독학",
  ]);
  const [contents, setContents] = useState([
    "생물학과",
    "유스퀘이스 지하1층에 있어요.",
    "할만 해요.",
  ]);
  const [likes, setLikes] = useState(0);
  const [modal, setModal] = useState(false);

  const onClickLikes = () => {
    setLikes(likes + 1);
  };

  const onClickSort = () => {
    const newTitle = [...title];
    newTitle.sort();
    setTitle(newTitle);
  };

  return (
    <div className="App">
      <button onClick={onClickSort}>정렬</button>
      <div className="list">
        <h4>
          {title[0]} <span onClick={onClickLikes}>👍</span> {likes}
        </h4>
        <p>{contents[0]}</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>{contents[1]}</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {title[2]}
        </h4>
        <p>{contents[2]}</p>
      </div>
      {modal ? <Modal /> : null}
    </div>
  );
}

const Modal = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

export default App;
