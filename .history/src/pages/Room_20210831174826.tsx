import logoImg from '../assets/images/logo.svg';
import {useParams} from 'react-router-dom'
import { Button } from '../components/Button';
import {RoomCode} from '../components/RoomCode';
import '../styles/room.scss'
import { FormEvent, useState } from 'react';
import { useAuth } from '../hooks/userAuth';
import { database } from '../services/firebase';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Question } from '../components/Question';

type FirebaseQuestions =  Record<string, {
    author:{
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighLighted: boolean;
}>

type Question = {
    id: string;
    author:{
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighLighted: boolean;
}



type RoomParams={
    id: string;
}

export function Room(){

    const { user } = useAuth();
    const params = useParams<RoomParams>();
    const [ newQuestion, setNewQuestion] = useState(''); 
    const roomId = params.id
    const [questions, setQuestions] = useState<Question[]>([])
    const [title, setTitle] = useState('');
    const notifySendSucess = () => toast.success('Pergunta enviada com Sucesso!!', {
        style: {
          border: '1px solid green',
          padding: '16px',
          color: 'green',
        },
        iconTheme: {
          primary: 'green',
          secondary: '#FFFAEE',
        },
        duration: 3000
      });

    
    useEffect(() => { 
        const roomRef = database.ref(`rooms/${roomId}`);

        roomRef.on('value', room =>{

            const databaseRoom = room.val();
            const  firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

             const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                    return{
                        id: key,
                        content: value.content,
                        author: value.author,
                        isHighLighted: value.isHighLighted,
                        isAnswered: value.isAnswered,
                    }
             })

             setTitle(databaseRoom.title);
             setQuestions(parsedQuestions);
             
        })
    }, [roomId]);

    async function handleSendNewQuestion(event: FormEvent){
        event.preventDefault();
        if(newQuestion.trim() === ''){
            return;
        }
        if(!user){
            throw new Error(toast.error('You must be logged in'));
            
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
                    <RoomCode  code={roomId}/>
                </div>
            </header>
            <main >

                
                <div className="room-title">
                <Toaster 
                  position="top-right"
                  reverseOrder={false}
                />
                    <h1>Sala {title}</h1>
                    { questions.length > 0 && <span>{questions.length} Pergunta(s)</span>}
                </div>
                <form onSubmit={handleSendNewQuestion}>
                    <textarea
                     placeholder="O que você quer perguntar?"
                     onChange={event => setNewQuestion(event.target.value)}
                     value={newQuestion}
                    />
                    <div className="form-footer">
                        {user ? (
                            <div className="user-info">
                                <img src={user.avatar} alt={user.name} />
                                <span>{user.name}</span>
                            </div>
                        ) : (
                            <span>Para enviar  uma pergunta, <button>faça seu login</button>.</span>
                        )}
                        <Button onClick={notifySendSucess} type="submit" disabled={!user}>Enviar pergunta </Button>
                    </div>
                    
                </form>

                {questions.map(question => {
                    return(
                        <Question
                            content={question.content}
                            author={question.author}
                        />
                    )
                })}
            </main>
        </div>
    );
}