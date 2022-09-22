import '../../styles/components/layout/Header.css';

const Header = (props) => {
    return (
        <header>
            <div id="josesito" className="holder">
                <img src="img/logojuancruz44.jpg" width="300" height="65" alt="Clases Particulares" />
            </div>
            <div class="pepito holder">
                <h1>CLASES PARTICULARES</h1>
                <h2>El genio se hace con un 1% de talento y 99% de trabajo</h2>
            </div>
        </header>
    );
}

export default Header;