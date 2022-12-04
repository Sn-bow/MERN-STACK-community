import React, { useState, useEffect } from 'react'

const Upload = (props) => {
    const [content, setContent] = useState("");
    const onSubmit = () => {
        // const tempContent = [...contentList]
        // tempContent.push(content)
        // setContentList(tempContent)
        props.setContentList(props.contentList.concat(content))
        setContent('')
    }
    console.log('Content', content)
    const onKeyDownEvent = (e) => {
        if (e.key === "Enter") {
            onSubmit()
        }
    }

    useEffect(() => {
        // 컴포넌트가 나타날때 => 마운트가 되었을때 실행되는 코드
        alert("컴포넌트가 실행 되었습니다")
        return () => {
            // 컴포넌트가 죽을때 실행될 코드 => 언마운트 되었을때 실행되는 코드
            alert("컴포넌트가 종료 되었습니다")
        }
    }, []//[] 안에 useEffect가 실행될 조건을 입력할 수 있다. / 빈 배열로 조건을 주게 되면 컴포넌트가 실행되거나 죽을때 딱 한번만 실행되게 된다.
    )

    return (
        <div>
            <input type='text' value={content} onChange={e => setContent(e.target.value)} onKeyPress={onKeyDownEvent} />
            <button onClick={onSubmit}>제출!</button>
        </div>
    )
}

export default Upload;