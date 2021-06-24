import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../App';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import '../styles/auth.scss';


export function NewRoom(){
    const {user} = useContext(AuthContex);

    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <h1>{value}</h1>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form >
                        <input
                         type="text"
                         placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente <Link to="/">clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}