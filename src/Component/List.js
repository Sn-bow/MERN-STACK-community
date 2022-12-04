import React, { useState, useEffect } from 'react'
import axios from 'axios'

const List = (props) => {

    const [list, setList] = useState("")

    useEffect(() => {

        // post 요청을 할때 클라이언트에서 데이터를 보내주기 위해 작성한 코드
        let body = {
            test: 'hello',
        }
        // .post("URL", 보낼 데이터) 형식으로 작성하여 클라이언트에서 데이터를 전송한다.
        axios
            .post("/api/test", body)
            .then((response) => {
                // 성공 핸들링 / get이 성공했을때
                setList(response.data.test)
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
            <div>{list}</div>
        </div>
    )
}

export default List;