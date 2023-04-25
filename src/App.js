import React, { useState } from 'react';
import './App.css';
import Comment from './exam/Comment';
//1. 인풋에서 코멘트 이름과 내용 받기
//2. 추가 버튼을 누르면 코멘트 리스트 추가
//3. 전체 삭제 버튼 만들기
//4. 개별 삭제 버튼 만들기
function App() {
  const [commentName, setCommentName] = useState("");
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  
  const addComment = ()=>{
    console.log(commentList);
    const newCommentList = [
      ...commentList,
      <Comment commentName={commentName} comment={comment}/>,
    ];
    setCommentList(newCommentList);
  }
  return(
    <div className='App'>
      <input type='text' value={commentName} onChange={(e)=>setCommentName(e.target.value)} style={{ width: "100px", height: "30px" }} ></input>
      <input type='text' value={comment} onChange={(e)=>setComment(e.target.value)} style={{ width: "100px", height: "30px" }} ></input>
      <button onClick={()=>addComment()}>추가</button>
      {
        commentList.map((e)=>{
          return (
            e
          )
        })
      }
    </div>
  )
}

export default App;
