function Header({ theme, toggleMode, converted, setConvert, value, setValue }) {
    const mimg = theme ? "moon.png" : "sun.png";

    return (
        <header className={`text-white max-w-[800px] min-w-[320px] justify-self-center p-[5px] font-semibold font-sans
        ${converted ? 'pt-0' : 'pt-[15vh]'} transition-all duration-1000`}>
            <img src="pobrometro-logo.png" alt="Pobrômetro" />
            <p className={`${theme ? 'text-yellow-300' : 'text-black'} mb-2 transition-all duration-1000`}>
                Bem-vindo ao <strong>Pobrômetro</strong>, sua ferramenta definitiva para decifrar os mistérios dos números e descobrir o que realmente significam aqueles valores em reais no seu dia a dia! Aqui, transformamos cifras complicadas em comparações simples e divertidas, convertendo seu dinheiro em coisas que você entende – de cafezinhos a compras dos sonhos. Nosso objetivo? Te dar uma visão clara (ou pelo menos uma ilusão bem convincente) sobre como <em>seu suado dinheirinho</em> é gasto, investido ou, quem sabe, perdido no éter das contas e impostos. Prepare-se para rir, refletir e, talvez, chorar um pouco!
            </p>
            <div className="flex max-w-[800px] gap-1.5 m-1">
                <div className={`flex ${theme ? 'flex-col bg-slate-900' : 'flex-col-reverse bg-white'} h-[40px] rounded-full p-0.5 m-0 transition-all duration-1000`}>
                    <div className={`${theme ? 'bg-slate-700' : 'bg-neutral-400'} w-[20px] rounded-full p-1 cursor-pointer transition-all duration-1000`} onClick={toggleMode}>
                        <img src={mimg} alt="Tema" />
                    </div>
                </div>
                <input type="number" placeholder="0" min="0" max="999999999999999" maxLength={15} className={`${theme ? 'bg-neutral-900 placeholder-neutral-400 text-white focus:ring-yellow-300' : 'bg-white placeholder-neutral-700 text-black focus:ring-blue-600'} transition-all duration-1000 w-full rounded-md p-2 focus:outline-none focus:ring-2`}
                onChange={(e) => setValue(Number(e.target.value))} />
                <button className={`${theme ? 'bg-yellow-400 text-black hover:bg-yellow-500 active:bg-yellow-600' : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'} p-2 rounded-md cursor-pointer active:scale-97 transition-transform`}
                onClick={setConvert}>
                    CONVERTER
                </button>
            </div>
        </header>
    )
}

export default Header