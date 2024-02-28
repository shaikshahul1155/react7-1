import Child from "./Child1";

export default function App(){
  let name="shahul",name1="ramesh",name2="homar";
  let images=["img2.jpg","logo192.png","logo512.png"];
  return(
    <div>
      <Child na={name}  im={images[0]}   />
      <Child na={name1} im={images[1]}   />
      <Child na={name2} im={images[2]}   />
    </div>
  )
}


       

