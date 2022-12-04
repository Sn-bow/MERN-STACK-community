import React, { useEffect } from 'react'
import axios from 'axios'

const List = (props) => {

    useEffect(() => {
        axios
            .post("/api/test")
            .then((response) => {
                // 성공 핸들링 / get이 성공했을때
                alert("요청성공")
                console.log(response)
            })
            .catch((error) => {
                // 에러 핸들링 / get이 실패했을때
                alert("요청실패")
                console.log(error)
            })
    }, [])

    return (
        <div>
            <h1>List!!</h1>
            {props.contentList.map((content, index) => {
                return (
                    <div key={index}>내용 : {content}</div>
                )
            })}
        </div>
    )
}

export default List;