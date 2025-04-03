function CreateItem() {
    return (
        <li onClick={() => addItem()}
        className="cursor-pointer max-w-[800px] min-w-[320px] bg-neutral-950 rounded-2xl justify-self-center m-2 h-48 text-white text-3xl shadow-lg border border-neutral-800
        grid grid-cols-2 grid-rows-1 
        text-center
        md:w-[720px]
        ">
            <img src="/add-item.png" className=" h-48 w-fit" />
            <h2 className="p-2 w-max self-center">
                Create Item
            </h2>
        </li>
    )
}

export default CreateItem