import Child from './Child.js'

export default function Parent()
{
    let names=["raju","ravi","kumar"]
    return(
        <div>
            {names.map((name.i)=>(<Child n={name}key={i}/>))
            }
        </div>
    )
}