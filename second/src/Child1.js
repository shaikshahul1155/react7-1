export default function Child(props){
    return(
        <div> 
            <p> <b>my name is </b> {props.na}</p>
            <img src={props.im} alt="cx" />
        </div>
    )
}