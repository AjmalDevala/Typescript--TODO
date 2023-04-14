import * as React from 'react';

 interface Props {
    name?:string,
    age?: number,
    email?: string
}

interface Todo {
    text?:string,
    id?:number,
    status?:boolean 
}


export const Sample = (props: Props) => {

    const [toDos,setTodos]= React.useState<Todo[]>([])
    const [toDo,setTodo] = React.useState<string>('') 
     return (
    <div className='app'>
      {/* <h1>{props?.name}</h1>
      <h1>{props?.age}</h1>
      <h1>{props?.email}</h1> */}

      <h1>{props.name} TODO list</h1>
      <div className="input">
      <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>{setTodos([...toDos,{id :Date.now() ,text: toDo ,status :false}]);
       setTodo("")}} >✔</i>
    </div>
    <div className="todos">
     { toDos.map((obj)=>{
      return(
       <div className="todo">
        <div className="left">
          <input onChange={(e)=>{
           setTodos(toDos.filter(obj2=>{
            if(obj2.id===obj.id){
              obj2.status=e.target.checked
            }
            return obj2
           }))
          
          }}
          value={obj.text} type="checkbox" name="" id="" />
          <p>{obj.text}</p>
        </div>
        <div className="right">
          <i 
          onClick={(e)=>{
            setTodos(toDos.filter((toDo)=>{
              if(toDo.id !== obj.id){
                return toDo
              }
              return null
            }))
          }}> ❌</i>
        </div>
      </div>
      )
     })}

     {toDos.map((obj)=>{
      if(obj.status){
        return(<h1>{obj.text}</h1>)
      }
      return null
     })

     }
     </div>
    </div>
  );
}
