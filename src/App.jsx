import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Navbar'
function App() {
const [todo, settodo] = useState('');
const [todos, settodos] = useState([]);

useEffect(() => {
  let string =  localStorage.getItem('todo');
  if(string){
    settodos(JSON.parse(string))
  }
}, [])

function saveLS(){
  localStorage.setItem('todo',JSON.stringify(todos))
}


function handleChange(e){
  settodo(e.target.value)
}
function handleAdd(){
  if(todo.length === 0){
    alert('enter todo')
  }
  else{
    settodos([...todos,{todo,isCompleted:false}])
    settodo('')
    saveLS()
  }
}

function handleDelete(index){
  let newArr = [...todos]
  newArr.splice(index,1);
  settodos(newArr)
  saveLS()
}

function handleEdit(item,index){
 settodo(item.todo)
 let newArr = [...todos]
 newArr.splice(index,1);
 settodos(newArr)
 saveLS()
}
function handleCheck(item){
   
   if(item.isCompleted === false){
    let newarr = [...todos]
    item.isCompleted = true;
    settodos(newarr)
    saveLS()
   }
   else if(item.isCompleted === true){
    let newarr = [...todos]
    item.isCompleted = false;
    settodos(newarr)
    saveLS()
   }
}
  return (
    <>
     <Navbar/>
     <div className="container text-black min-h-14 bg-green-400 w-[600px] ml-[200px] mt-8 rounded-xl p-4">
      <h1 className='font-semibold text-center text-xl mb-3'>Manage your tasks with -FireTasks</h1>
      <div className="searchTodo">
        <h3 className='mb-2 font-medium'>Add todos</h3>
        <input onChange={handleChange} value={todo} placeholder='Add todo' className='px-3 py-1 w-[70%] outline-none rounded-sm' type="text" />
        <button onClick={handleAdd} className='ml-3 bg-green-900 text-white px-5 py-1 rounded-lg hover:bg-green-800'>Add</button>
      </div>
      <h3 className='mb-2 mt-6 font-medium text-xl'>Todos:</h3>
      <div className="todos">
        {todos.map(function(item,index){
           return <div key={index} className="todo mt-5 flex justify-between items-center">
            <div className="right flex gap-2">
            <input checked={item.isCompleted} onChange={function(){handleCheck(item)}} type="checkbox"  />
            <p className={item.isCompleted?'line-through':''}>{item.todo}</p>
            </div>
            <div className="left1 flex gap-2">
              <button onClick={function(){handleEdit(item,index)}} className='bg-green-900 text-white px-5 py-1 rounded-lg hover:bg-green-800'>Edit</button>
              <button onClick={function(){handleDelete(index)}} className='bg-green-900 text-white px-5 py-1 rounded-lg hover:bg-green-800'>Delete</button>
            </div>
          </div> 
        })}
        
      </div>
     </div>
    </>
  )
}

export default App
