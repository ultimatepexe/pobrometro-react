function CreateItem({ theme }) {
    const img = theme ? "/add-item-yellow.png" : "/add-item-blue.png"
    return (
        <li onClick={() => addItem()}
        className={`cursor-pointer max-w-[800px] min-w-[320px] rounded-2xl justify-self-center m-2 h-48 text-3xl shadow-lg border
        grid grid-cols-2 grid-rows-1 
        text-center
        md:w-[720px]
        ${theme ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-white border-neutral-400 text-black'}
        `}>
            <img src={img} className=" h-48 w-fit" />
            <h2 className={`p-2 w-max self-center`}>
                Create Item
            </h2>
        </li>
    )
}

export default CreateItem