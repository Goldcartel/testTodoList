import React from 'react'
import Comment from './Comment'

const comments = [
    {
        id: 1,
        name: '비트코인',
        img: 'bit.jpg',
        text: '사토시',
    },
    {
        id: 2,
        name: '이더리움',
        img: 'ether.png',
        text: '알트코인',
    },
    {
        id: 3,
        name: '도지코인',
        img: 'dogi.png',
        text: '머스크',
    },
]


function CommentList(props) {
    return (
        <div>
            {
                comments.map((comment) => {
                    return (
                        <Comment key={comment.id} name={comment.name} img={comment.img} text={comment.text} />
                    )
                })
            }
        </div>
    )
}

export default CommentList
