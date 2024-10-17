function TodoItem({ todoclassName, todoDate,onDeleteClick }) {
    return (
      <div className="container">
        <div className="row kg-row">
          <div className="col-6">{todoclassName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger kg-button"
            onClick={()=>onDeleteClick(todoclassName)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default TodoItem;