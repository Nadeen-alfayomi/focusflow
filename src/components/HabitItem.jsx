// src/components/HabitItem.jsx
import { useState } from "react";
import { ListGroup, Form, Button } from "react-bootstrap";

export const HabitItem = ({ habit, onToggle, onUpdateTitle, onUpdateNote, onRemove }) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [titleText, setTitleText] = useState(habit.title);
  const [noteText, setNoteText] = useState(habit.note || "");

  const handleSaveTitle = () => {
    if (titleText.trim()) {
      onUpdateTitle(habit.id, titleText);
      setIsEditingTitle(false);
    }
  };

  const handleSaveNote = () => {
    onUpdateNote(habit.id, noteText);
    setIsEditingNote(false);
  };

  if (isEditingTitle) {
    return (
      <ListGroup.Item className="px-3 py-3">
        <div className="d-flex gap-2 w-100">
          <Form.Control
            size="sm"
            value={titleText}
            onChange={(e) => setTitleText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSaveTitle()}
            autoFocus
          />
          <Button size="sm" className="btn-maroon" onClick={handleSaveTitle}>Save</Button>
          <Button size="sm" variant="outline-secondary" onClick={() => setIsEditingTitle(false)}>Cancel</Button>
        </div>
      </ListGroup.Item>
    );
  }

  return (
    <ListGroup.Item className="px-3 py-3">
      <div className="d-flex justify-content-between align-items-center w-100">
        <Form.Check
          type="checkbox"
          id={`habit-${habit.id}`}
          checked={habit.isCompleted}
          onChange={() => onToggle(habit.id)}
          label={
            <div className="ms-2">
         
              <span 
                className={habit.isCompleted ? "text-completed fw-bold" : "fw-bold"}
                style={{ fontSize: "1.05rem" }}
              >
                {habit.title}
              </span>

              {habit.note && !isEditingNote && (
                <div 
                  className="mt-1" 
                  style={{ 
                    fontSize: "0.8rem", 
                    color: "#888888", 
                    fontWeight: "normal" 
                  }}
                >
                {habit.note}
                </div>
              )}
            </div>
          }
        />
        <div className="d-flex gap-1">
          <Button size="sm" variant="light" onClick={() => setIsEditingNote(!isEditingNote)}>📝</Button>
          <Button size="sm" variant="light" onClick={() => setIsEditingTitle(true)}>✏️</Button>
          <Button size="sm" variant="light" className="text-danger" onClick={() => onRemove(habit.id)}>🗑️</Button>
        </div>
      </div>

      {isEditingNote && (
        <div className="mt-2 pt-2 border-top d-flex gap-2">
          <Form.Control
            size="sm"
            placeholder="Write your note here..."
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            autoFocus
          />
          <Button size="sm" className="btn-maroon" onClick={handleSaveNote}>Save</Button>
          <Button size="sm" variant="outline-secondary" onClick={() => setIsEditingNote(false)}>Cancel</Button>
        </div>
      )}
    </ListGroup.Item>
  );
};