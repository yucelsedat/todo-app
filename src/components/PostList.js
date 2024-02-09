import { useState } from "react";

 
function PostList ({texts, setTexts}) {
    
    function deleteText(event) {
        const deleteId = parseInt(event.target.getAttribute('data-id'));
        console.log(event.target.getAttribute('data-id'))
        console.log(deleteId)
        setTexts( pre => {
            const newTexts = pre.filter(val => val.id !== deleteId)
            console.log(newTexts)
            return newTexts;
        })
    }

    return (
        <div className="flex flex-col gap-4 items-center">
            <h1 className="text-2xl font-bold">Paylaşılanlar</h1>
            {texts.map((val, index) => <Post key={index} dataId={val.id} text={val.text} onClick={deleteText}/>)}
        </div>
    )
}

const Post = ( {dataId, text, onClick}) => { 
    return (
        <div
        className="flex flex-col items-center gap-2 text-center w-full p-5 rounded-xl shadow-gray-400 shadow-sm"
        >
            <p>{text}</p>
            <button 
            data-id= {dataId}
            className="px-7 py-1 bg-red-500 rounded-3xl" 
            onClick={onClick} 
            >
                Sil
            </button>
        </div>
    )
}

export default PostList