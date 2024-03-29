/* eslint-disable react/prop-types */
import { DeleteOutlined, EditOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Input, List, Row, Typography } from "antd";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Task = ({ tasks, onDelete, onClearAll, onUpdateTasks }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [checkedTasks, setCheckedTasks] = useState([]);

  const textStyle = {
    color: "grey",
    margin: 0,
  };

  const handleCheckboxChange = (index) => {
    const updatedCheckedTasks = [...checkedTasks];
    updatedCheckedTasks[index] = !checkedTasks[index];
    setCheckedTasks(updatedCheckedTasks);
  };

  const handleClearAll = () => {
    onClearAll();
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedText(tasks[index]);
  };

  const handleSaveEdit = (index) => {
    if (editedText.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index] = editedText;
      setEditingIndex(null);
      setEditedText("");
      onUpdateTasks(updatedTasks);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          background: "white",
          width: "42%",
          marginTop: "40px",
          borderRadius: "8px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <List
          header={
            <Row justify="space-between" align="middle">
              <Col>
                <p style={textStyle}>{tasks.length} tasks left</p>
              </Col>
              <Col>
                <Button
                  type="link"
                  onClick={handleClearAll}
                  style={{ padding: "0" }}
                >
                  clear all tasks
                </Button>
              </Col>
            </Row>
          }
          // footer={<div>Footer</div>}
          bordered
          dataSource={tasks}
          renderItem={(item, index) => (
            <List.Item>
              <div style={{ display: "contents", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Checkbox
                    style={{ marginRight: "15px" }}
                    checked={checkedTasks[index]}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  {editingIndex === index ? (
                    <Input
                      value={editedText}
                      onChange={(e) => setEditedText(e.target.value)}
                    />
                  ) : (
                    <Typography.Text
                      style={{
                        textDecoration: checkedTasks[index]
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {item}
                    </Typography.Text>
                  )}
                </div>
                <div>
                  {editingIndex === index ? (
                    <Button
                      type="text"
                      icon={<SaveOutlined />}
                      onClick={() => handleSaveEdit(index)}
                    />
                  ) : (
                    <Button
                      type="text"
                      icon={<EditOutlined />}
                      onClick={() => handleEdit(index)}
                    />
                  )}
                  <Button
                    type="text"
                    icon={<DeleteOutlined />}
                    onClick={() => onDelete(index)}
                  />
                </div>
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
export default Task;
