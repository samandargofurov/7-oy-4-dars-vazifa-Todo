import Trash from "../../assets/Trash.svg";
import Check from "../../assets/Check.svg";
import rollBack from '../../assets/rollBack.svg'
import { useDispatch } from "react-redux";

function TodoItem(props) {
  const { title, status, id } = props;
  const dispatch = useDispatch()

  function handleCheck() {
    dispatch({type: "TODO_CHECK", payload: {id: id, status: false}})
  }

  function handleRollBack() {
    dispatch({type: "TODO_CHECK", payload: {id: id, status: true}})
  }

  function handleDelete(id) {
    let isDelete = confirm("Do you want to Delete?");
    if (isDelete) {
      dispatch({type: "TODO_DELETE", payload: id})
    }

  }

  return (
    <>
      <div className="flex items-center justify-between bg-[#15101C] p-[22px] rounded-lg mb-4">
        <p className={`${status ? 'text-[#9e78cf]' : 'text-[#78CFB0] line-through'}`}>{title}</p>
        <div className="flex items-center gap-5">

          {
            status && (
              <>
                <span onClick={handleCheck} className="hover:duration-300 hover:opacity-40  cursor-pointer">
                  <img src={Check} alt="" width={25} height={25} />
                </span>

                <span onClick={() => handleDelete(id)} className="hover:duration-300 hover:opacity-40 cursor-pointer">
                  <img src={Trash} alt="" width={25} height={25} />
                </span>
              </>
          )}

          {
            !status && (
              <>
                <span onClick={handleRollBack} className="cursor-pointer">
                    <img src={rollBack} alt="" width={25} height={25} />
                </span>
              </>
            )
          }

        </div>
      </div>
    </>
  );
}

export default TodoItem;
