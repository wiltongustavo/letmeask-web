import logoImg from '../assets/images/logo.svg';

export function Room(){
    return(
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Leatmeask" />
                    <div>codigo</div>
                </div>
            </header>
            <main className="content">
                <div className="room-title">
                    <h1>Sala React</h1>
                    <span>4 Perguntas</span>
                </div>
            </main>
        </div>
    );
}