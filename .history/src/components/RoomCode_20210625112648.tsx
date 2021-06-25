import copyImg from '../assets/images/copy.svg';

export function RoomCode(){
    return(
        <button className="room-code">
            <div>
                <img src={copyImg} alt="Copiar room code" />
            </div>
            <span>Sala #13123156</span>
        </button>
    )
}