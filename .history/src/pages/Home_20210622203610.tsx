import { useHistory } from 'react-router';
import { useContext } from 'react';
import { auth, firebase } from '../services/firebase';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import { Button } from '../components/Button';
import '../styles/auth.scss';

import {TestContext} from '../App'

export function Home(){
    const history = useHistory();
    const value= useContext(TestContext) 

    function signIn(){
        
    }

    function handleCreateRoom(){

        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(result =>{
            console.log(result);
            0
            history.push('/rooms/new')
        })

          
    }

    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <h1></h1>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button className="create-room" onClick={handleCreateRoom}>
                        <img src={googleIconImg} alt="Logo do google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator"> ou entre em uma sala</div>
                    <form >
                        <input
                         type="text"
                         placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na salas
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}