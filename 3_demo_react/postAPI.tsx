import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';

interface postType{
  id:number,
  userId:number,
  title:string,
  body:string
}

interface postCreateType{
  success?:any,
  error?:string;
}
// ======================FETCH API CALL====================================

const HomePage = () => {

  const [posts,setPosts]=useState<postType[]>([]);
  const [error,setError]=useState("");
  const [createPost,setCreatePost]=useState<postCreateType>();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((result) => {
    setPosts(result);
    })
    .catch((error) => {
    setError("Something is wrong");
    console.log(error);
    });
    }, []);
console.log(error);

// =======================POST API CALL==================================

useEffect(() => {
  const postData={
    userId:101,
    title:"post API call tanaji",
    body:"post API body vitekar"
  }
  const optionObj={
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
    body:JSON.stringify(postData)
  }
  fetch('https://jsonplaceholder.typicode.com/posts',optionObj)
  .then((response) => response.json())
  .then((result) => {
  setCreatePost({'success':result});
  })
  .catch((error) => {
    setCreatePost({'error':'Something is wrong'});
  console.log(error);
  });
  console.log('createPost Result====>',createPost);
  }, [posts.length]);
console.log(error);

// ==========================================================

  return (
    <div>
      <h2>Homepage</h2>
      <Row>
        {error ? <h1>=== {error}===</h1>:
        <>
        {posts.length && posts.map((post)=>{
          return<Row key={post.id}>
            <Col>{post.userId}</Col>
          <Col>{post.id}</Col>
          <Col>{post.title}</Col>
          <Col>{post.body}</Col>
          </Row>
        })}
        </>}
      </Row>
    </div>
  )
}

export default HomePage;

// function setPosts(data: any) {
//   throw new Error('Function not implemented.');
// }

