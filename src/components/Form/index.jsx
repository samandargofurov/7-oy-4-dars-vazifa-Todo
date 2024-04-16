import { useRef } from 'react'
import plus from '../../assets/plus.svg'
import { useDispatch } from 'react-redux';

function Form() {
  const todoRef = useRef(null);
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    
    if(todoRef.current.value.length > 2) {
      const todo = {
        name: todoRef.current.value,
        id: Date.now(),
        status: true
      }

      dispatch({type: "TODO_ADD", payload: todo})
      todoRef.current.value = null
    }
  }

  return (
    <>
        <div className='mb-[50px]'>
            <div className='flex gap-3 items-center'>
                <input ref={todoRef} className='border border-[#3E1671] bg-transparent text-white py-2 px-3 w-[381px] rounded-lg outline-none' type="text" name="" id="" placeholder='Add a new task' />
                <button onClick={handleClick} className='bg-[#9E78CF] hover:duration-300 hover:bg-[#7650a7] w-[40px] rounded-lg py-3 px-3'>
                    <img src={plus} alt="plus" width={22} height={22} />
                </button>
            </div>
        </div>
    </>
  )
}

export default Form