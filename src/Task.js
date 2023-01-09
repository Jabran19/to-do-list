export const Task =(props) => {
    return (
        <div>
        <h1>{props.taskName}</h1>
        {/* make a buton for delete */}
        <button onClick={() => props.deleteTask(props.id)}> X </button> 
        </div>
        );
};