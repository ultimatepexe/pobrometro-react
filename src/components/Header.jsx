function Header() {
    return (
        <header className="text-white max-w-[800px] min-w-[320px] justify-self-center p-[5px] font-semibold font-sans">
            <img src="/pobrometro-logo.png" alt="Pobrômetro" />
            <p className="text-yellow-300 mb-2">
                Bem-vindo ao <strong>Pobrômetro</strong>, sua ferramenta definitiva para decifrar os mistérios dos números e descobrir o que realmente significam aqueles valores em reais no seu dia a dia! Aqui, transformamos cifras complicadas em comparações simples e divertidas, convertendo seu dinheiro em itens que você entende – de cafezinhos a viagens dos sonhos. Nosso objetivo? Te dar uma visão clara (ou pelo menos uma ilusão bem convincente) sobre como <em>seu suado dinheirinho</em> é gasto, investido ou, quem sabe, perdido no éter das contas e impostos. Prepare-se para rir, refletir e, talvez, chorar um pouco!
            </p>
            <div className="flex max-w-[800px] gap-1 m-1">
                <div className="h-[40px] bg-slate-900 rounded-full p-0.5 m-0">
                    <div className="w-[20px] rounded-full bg-slate-700 p-1 cursor-pointer">
                        <img src="/moon.png" />
                    </div>
                </div>
                <input type="number" placeholder="0" min="0" max="999999999999999" maxLength={15} className="w-full bg-white rounded-md placeholder-gray-700 text-black p-2"/>
                <button className="bg-yellow-400 text-black p-2 rounded-md cursor-pointer active:bg-yellow-600 active:scale-95 transition-transform">
                    CONVERTER
                </button>
            </div>
        </header>
    )
}

export default Header