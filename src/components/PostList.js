
function PostList ({values, setTexts}) {

    function deleteText(event) {
        const deleteId = parseInt(event.target.id);
        console.log(deleteId)
        setTexts( pre => {
            const newTexts = pre.filter(val => val.id !== deleteId)
            console.log(newTexts)
            return [...newTexts]
        })
    }

    return (
        <div className="flex flex-col gap-4 items-center">
            <h1 className="text-2xl font-bold">Paylaşılanlar</h1>
            {values.map((val, index) => 
                <div key={val.id}
                className="flex flex-col items-center gap-2 text-center w-full p-5 rounded-xl shadow-gray-400 shadow-sm"
                >
                    <p>{val.text}</p>
                    <button 
                    className="px-7 py-1 bg-red-500 rounded-3xl" 
                    onClick={deleteText} 
                    id={val.id}
                    >
                        Sil
                    </button>
                </div>
            )}
        </div>
    )
}

export default PostList