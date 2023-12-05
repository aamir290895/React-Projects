import { useState } from "react";
const TaskForm = () => {
  const [title , setTitle] = useState("");
  const [description , setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className={"task-form"}>
      <input type={"text"} placeholder="input" onChange={(e) => setTitle(e.target.value)}/>
      <input type={"text"} placeholder="input" onChange={(e) => setDescription(e.target.value)}/>

      <button className="btn-form" type="submit" onSubmit={handleSubmit}>Add Task</button>

    </form>
  );
};

export default TaskForm;
