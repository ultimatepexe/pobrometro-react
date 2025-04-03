function Items({ items, theme }) {
    return (
        <>
            {items.map((item) => 
                <li className={`max-w-[800px] min-w-[320px] grid grid-cols-1 md:grid-cols-3 m-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-1000 overflow-hidden border
                ${theme ? 'bg-neutral-950' : 'bg-white'}
                ${theme ? 'border-neutral-800' : 'border-neutral-400'}`}>
                    <img 
                        src={item.image}
                        className="w-full h-48 object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
                        alt={item.name}
                    />
                    <article className="p-4 md:col-span-2 flex flex-col justify-center">
                        <h2 className={`text-3xl font-bold mb-2 transition-all duration-1000
                            ${theme ? 'text-white/90' : 'text-black'}`}>
                            {item.name}
                        </h2>
                        <p className={`text-sm leading-relaxed transition-all duration-1000
                            ${theme ? 'text-white/80' : 'text-black'}`}>
                            {item.description}
                        </p>
                    </article>
                </li>
            )}
        </>
    )
}

export default Items