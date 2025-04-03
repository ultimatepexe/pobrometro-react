// Footer.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faXTwitter, faGithub, faDiscord, faBitcoin } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    function donate() {
        window.alert("sourketchup25@walletofsatoshi.com");
    }

    return (
        <footer className="grid grid-cols-3 grid-rows-4 gap-1 text-yellow-300 text-center max-w-[800px] justify-self-center font-semibold">
            <p className="col-span-3 text-center text-2xl">
                Créditos
            </p>

            <div className="h-0.5">
                PEXE
                <div className="justify-center mt-1">
                    <a href="https://youtube.com/@ultimatepexe"><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href="https://x.com/ultimatepexe"><FontAwesomeIcon icon={faXTwitter} /></a>
                    <br />
                    <a href="https://discord.gg/EMtcBhxZ64"><FontAwesomeIcon icon={faDiscord} /></a>
                    <a href="https://github.com/ultimatepexe"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </div>
            <button 
                onClick={() => donate()} 
                className="text-black bg-yellow-300 rounded-md font-semibold cursor-pointer hover:bg-yellow-400 row-span-2 scale-75 text-2xl"
            >
                <FontAwesomeIcon icon={faBitcoin} />
                DONATE
            </button>
            <div>
                PapaHardware
                <div className="justify-center mt-1 h-0.5">
                    <a href="https://youtube.com/@papahardware"><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href="https://x.com/papahardware"><FontAwesomeIcon icon={faXTwitter} /></a>
                    <br />
                    <a href="https://discord.gg/papahardware"><FontAwesomeIcon icon={faDiscord} /></a>
                    <a href="https://papahardware.com"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </div>
            </div>

            <p className="col-span-3">
                O <a href="https://pobrometro.pexe.dev" className="hover:underline"><strong>Pobrômetro</strong></a> pode cometer erros, não confie totalmente nos dados fornecidos no site.
            </p>
        </footer>
    );
}

export default Footer;