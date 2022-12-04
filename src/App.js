import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Heading from './Component/Heading'
import List from './Component/List'
import Upload from './Component/Upload'


const App = () => {
  const [contentList, setContentList] = useState([]);
  // 컴포넌트마다 생명 주기가 있다.
  // 컴포넌트 라이프 사이클 이라고 한다. -> 마운트 언마운트 등등
  // 컴포넌트가 사라질때 나타날때의 순간순간마다 어떤 사용자 정의 커스텀 태그를 넣어줄수 있다.
  // upload가 사라질때 실행되는 코드 와같은 방식이 가능


  return (
    <>
      <Heading />
      <Routes>
        <Route path='/list' element={<List contentList={contentList} setContentList={setContentList} />} />
        <Route path='/upload' element={<Upload contentList={contentList} setContentList={setContentList} />} />
      </Routes>
    </>
  )
}

export default App;
