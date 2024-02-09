
function PostList ({texts, setTexts, setText}) {
    
    function delFunc(event) {
        const deleteId = parseInt(event.target.getAttribute('data-id'));
        console.log(event.target.getAttribute('data-id'))
        console.log(deleteId)
        setTexts( pre => {
            const newTexts = pre.filter(val => val.id !== deleteId)
            console.log(newTexts)
            return newTexts;
        })
    }

    function updateFunc(event) {
        delFunc(event)
        const updateId = parseInt(event.target.getAttribute('data-id'));
        console.log(updateId)
        const myText = texts.filter(val => val.id === updateId)
        console.log(myText)
        setText( text => myText[0].myText)
    }

    return (
        <div className="flex flex-col gap-4 items-center">
            <h1 className="text-2xl font-bold">Paylaşılanlar</h1>
            {texts.map((val, index) => <Post key={index} dataId={val.id} text={val.myText} delFunc={delFunc} updateFunc={updateFunc}/>)}
        </div>
    )
}

const Post = ( {dataId, text, delFunc, updateFunc}) => { 
    return (
        <div
        className="w-full flex  gap-2 p-5 rounded-xl shadow-gray-400 shadow-sm"
        >
            <p className="w-2/3 max-h-full flex-shrink-0 overflow-ellipsis break-words">{text}</p>
            <div className="flex flex-col gap-2">
               <button 
                id="delete-btn"
                data-id= {dataId}
                className="px-7 py-1 bg-green-500 rounded-3xl" 
                onClick={updateFunc} 
                >
                    Düzenle
                </button> 
               <button 
                id="delete-btn"
                data-id= {dataId}
                className="px-7 py-1 text-center bg-red-500 rounded-3xl" 
                onClick={delFunc} 
                >
                    Sil
                </button> 
            </div>
            
        </div>
    )
}

export default PostList