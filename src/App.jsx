import "./App.css";
import { Button, Col, Input, Row } from "antd";
import { MoonFilled, PlusCircleOutlined } from "@ant-design/icons";
import Task from "./Task";
import { useState } from "react";

const style = {
  background: "linear-gradient(45deg, #9004D4, #5156E7, #0AB2FC)",
  padding: "40px 0",
  height: "160px",
};

// console.log(setTasks);

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };
  console.log("setTasks", tasks);

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleClearAllTasks = () => {
    setTasks([]);
  };

  const handleUpdateTasks = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  return (
    <>
      <div style={style}>
        <Row>
          <Col span={10} offset={7}>
            <Row
              align="middle"
              justify="space-between"
              style={{ color: "white" }}
            >
              <Col>
                <h1>My Task</h1>
              </Col>
              <Col>
                <div
                  style={{
                    padding: "5px 7px ",
                    borderRadius: "15%",
                    background: "#D1D5DB",
                  }}
                >
                  <MoonFilled style={{ fontSize: "15px", color: "black" }} />
                </div>
              </Col>
            </Row>
            {/*  */}
            <Row>
              <Col span={21}>
                {" "}
                <Input
                  size="large"
                  placeholder="Add a new task"
                  prefix={
                    <PlusCircleOutlined style={{ marginInlineEnd: "5px" }} />
                  }
                  style={{
                    borderRight: "none",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
              </Col>
              <Col span={3}>
                <Button
                  type="primary"
                  style={{
                    background: "white",
                    color: "black",
                    width: "100%",
                    height: "100%",
                    borderLeft: "none",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                  onClick={handleAddTask}
                >
                  ADD
                </Button>{" "}
              </Col>
            </Row>
          </Col>
        </Row>
        {/*  */}
        <Task
          tasks={tasks}
          onDelete={handleDeleteTask}
          onClearAll={handleClearAllTasks}
          onUpdateTasks={handleUpdateTasks}
        />
      </div>
    </>
  );
};

export default App;
