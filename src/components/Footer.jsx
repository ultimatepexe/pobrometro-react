// Footer.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faXTwitter, faGithub, faDiscord, faBitcoin } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function Footer({ theme }) {
    function donate() {
        window.alert("sourketchup25@walletofsatoshi.com");
    }

    return (
        <footer className={`grid grid-cols-3 grid-rows-4 gap-y-4 transition-all duration-1000
        ${theme ? 'text-yellow-300' : 'text-black'} text-center max-w-[800px] justify-self-center font-semibold`}>
            <p className="col-span-3 text-center text-2xl">
                Créditos
            </p>

            <div className="h-0.5 text-2xl">
                PEXE
                <div className="justify-center mt-1">
                    <a href="https://youtube.com/@ultimatepexe" target='_blank'><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href="https://x.com/ultimatepexe" target='_blank'><FontAwesomeIcon icon={faXTwitter} /></a>
                    <br />
                    <a href="https://discord.gg/EMtcBhxZ64" target='_blank'><FontAwesomeIcon icon={faDiscord} /></a>
                    <a href="https://github.com/ultimatepexe" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </div>
            <button 
                onClick={() => donate()} 
                className={`${theme ? 'text-black bg-yellow-300 hover:bg-yellow-400' : 'text-white bg-blue-600 hover:bg-blue-700'} rounded-md font-semibold cursor-pointer row-span-2 scale-75 text-2xl`}>
                <FontAwesomeIcon icon={faBitcoin} />
                DONATE
            </button>
            <div className="h-0.5 text-2xl">
                PapaHardware
                <div className="justify-center mt-1 h-0.5">
                    <a href="https://youtube.com/@papahardware" target='_blank'><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href="https://x.com/papahardware" target='_blank'><FontAwesomeIcon icon={faXTwitter} /></a>
                    <br />
                    <a href="https://discord.gg/papahardware" target='_blank'><FontAwesomeIcon icon={faDiscord} /></a>
                    <a href="https://papahardware.com" target='_blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </div>
            </div>

            <p className="col-span-3 sm:mt-4">
                O <a href="https://pobrometro.pexe.dev" className="hover:underline"><strong>Pobrômetro</strong></a> pode cometer erros, não confie totalmente nos dados fornecidos no site.
            </p>
        </footer>
    );
}

export default Footer