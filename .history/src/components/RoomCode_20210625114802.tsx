import copyImg from '../assets/images/copy.svg';
import '../styles/room-code.scss';

type RoomCodeProps={
    code: string;
}

export function RoomCode(props: RoomCodeProps){
    function copyRoomCodeToClipBoard(){
        navigator.clipboard.writeText('')
    }
    return(
        <button className="room-code">
            <div>
                <img src={copyImg} alt="Copiar room code" />
            </div>
            <span>Sala #13123156</span>
        </button>
    )
}