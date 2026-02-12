import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Todo() {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");
  const email = localStorage.getItem("userEmail");

  const [task, setTask] = useState("");
  const [reminderTime, setReminderTime] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [page, setPage] = useState(() => parseInt(localStorage.getItem("taskPage")) || 1);

  const API = `http://localhost:8080/tasks/${email}`;
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API, {
        ...config,
        params: { pgn: page }
      });

      // Backend returns array directly
      setTaskList(res.data || []);
      localStorage.setItem("taskPage", page);
    } catch (err) {
      console.error(err);
      setTaskList([]);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [page]);

  const addTask = async () => {
    if (!task.trim()) return;
    try {
      await axios.post(
        API,
        { title: task, completed: false, reminderTime: reminderTime || null },
        config
      );
      setTask("");
      setReminderTime("");
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API}/${id}`, config);
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const onLogout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("taskPage");
    navigate("/");
  };

  return (
    <div className="todoContainer">
      <h1> To-Do List</h1>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          placeholder="Task title..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="datetime-local"
          value={reminderTime}
          onChange={(e) => setReminderTime(e.target.value)}
        />
        <button type="button" onClick={addTask}>Add</button>
      </div>

      <ul>
        {taskList.length === 0 ? (
          <p>No tasks found.</p>
        ) : (
          taskList.map((t) => (
            <li key={t.id}>
              <b>{t.title}</b>
              {t.reminderTime && (
                <span style={{ marginLeft: "10px" }}>
                  ⏰ {new Date(t.reminderTime).toLocaleString()}
                </span>
              )}
              <button style={{ marginLeft: "10px" }} onClick={() => deleteTask(t.id)}>Delete</button>
            </li>
          ))
        )}
      </ul>

      <button style={{ marginTop: "20px" }} onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Todo;
