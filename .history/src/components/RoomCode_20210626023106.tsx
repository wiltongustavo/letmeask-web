import { ButtonHTMLAttributes } from 'react';
import toast from 'react-hot-toast';
import copyImg from '../assets/images/copy.svg';
import '../styles/room-code.scss';
import  { Toaster } from 'react-hot-toast';
type RoomCodeProps= {
    code: string;
    
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function RoomCode(props: RoomCodeProps){
    function copyRoomCodeToClipBoard(){
        navigator.clipboard.writeText(props.code)
        
         
    }
   
    return(
        <button className="room-code" onClick={copyRoomCodeToClipBoard} {...props}>
            <div>
                <img src={copyImg} alt="Copiar room code" />
            </div>
            <span>Sala #{props.code}</span>
           <Toaster/>
        </button>
        
    )
}