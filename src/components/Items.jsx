function Items(props) {
    return (
        <ul className="text-white list-none justify-self-center w-[800px]">
            {props.items.map((item) => 
                <li key={item.id} className="max-w-[800px] min-w-[320px]">
                    <h2>
                        {item.name}
                    </h2>
                    <p>
                        {item.description}
                    </p>
                </li>
            )}
        </ul>
    )
}

export default Items