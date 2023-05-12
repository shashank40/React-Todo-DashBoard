
export const TodoItem = (props) => { 

    return (
        <>
        <div className="item-center m-1 flex flex-col border border-cyan-950 rounded-lg p-1 basis-1/4">
            <span> {props.todoData.todo} </span>
            <button className="m-2 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={ () => {props.deleteTodo(props.todoData.id)}}> Delete </button>
        </div>
        </>
    )

}