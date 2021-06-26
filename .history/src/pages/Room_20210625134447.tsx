import logoImg from '../assets/images/logo.svg';
import {useParams} from 'react-router-dom'
import { Button } from '../components/Button';
import {RoomCode} from '../components/RoomCode';
import '../styles/room.scss'
import { FormEvent, useState } from 'react';
import { useAuth } from '../hooks/userAuth';
import { database } from '../services/firebase';

type RoomParams={
    id: string;
}

export function Room(){

    const { user } = useAuth();
    const params = useParams<RoomParams>();
    const [ newQuestion, setNewQuestion] = useState(''); 
    const roomId = params.id

    async function handleSendNewQuestion(event: FormEvent){
        event.preventDefault();
        if(newQuestion.trim() === ''){
            return;
        }
        if(!user){
            throw new Error('You must be logged in');
        }
        const question = {
            content: newQuestion,
            author:{
                name: user.name,
                avatar: user.avatar,
            },
            isHighLighted: false,
            isAnswered: false 
        };

        await database.ref(`rooms/${roomId}/questions`).push(question);

        setNewQuestion('');
    }

    return(
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Leatmeask" />
                    <RoomCode code={roomId}/>
                </div>
            </header>
            <main >
                <div className="room-title">
                    <h1>Sala React</h1>
                    <span>4 Perguntas</span>
                </div>
                <form onSubmit={handleSendNewQuestion}>
                    <textarea
                     placeholder="O que você quer perguntar?"
                     onChange={event => setNewQuestion(event.target.value)}
                     value={newQuestion}
                    />
                    <div className="form-footer">
                        <span>Para enviar  uma pergunta, <button>faça seu login</button>.</span>
                        <Button type="submit" disabled={!user}>Enviar pergunta </Button>
                    </div>
                </form>
            </main>
        </div>
    );
}