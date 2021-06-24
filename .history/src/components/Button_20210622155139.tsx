

type ButtonProps ={
    text: string;

}

export function Button(props: ButtonProps){
    return(
        <button className="button">{props.text || 'Default'}</button>
        )
}

