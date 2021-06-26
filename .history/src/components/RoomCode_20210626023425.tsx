import { ButtonHTMLAttributes } from 'react';
import toast from 'react-hot-toast';
import copyImg from '../assets/images/copy.svg';
import '../styles/room-code.scss';
import  { Toaster } from 'react-hot-toast';
type RoomCodeProps= {
    code: string;
    
}


export function RoomCode(props: RoomCodeProps){
    function copyRoomCodeToClipBoard(){
        navigator.clipboard.writeText(props.code)

            toast.success('Copiado com Sucesso!!', {
                style: {
                  border: '1px solid green',
                  padding: '16px',
                  color: 'green',
                },
                iconTheme: {
                  primary: 'green',
                  secondary: '#FFFAEE',
                },
              });
        
    }
   
    return(
        <button className="room-code" onClick={copyRoomCodeToClipBoard} {...props}>
            <div>
                <img src={copyImg} alt="Copiar room code" />
            </div>
            <span>Sala #{props.code}</span>
        </button>
        
    )
}