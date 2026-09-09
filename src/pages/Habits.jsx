import { useState } from "react";
import { Container, Card, Form, Button, ListGroup, ProgressBar, Badge } from "react-bootstrap";
import { useHabits } from "../hooks/useHabits";
import { HabitItem } from "../components/HabitItem";

const Habits = () => {
  const {
    habits,
    addHabit,
    toggleHabit,
    updateHabitTitle,
    updateHabitNote,
    removeHabit,
    clearCompleted,
  } = useHabits();

  const [inputHabit, setInputHabit] = useState("");
  const [filter, setFilter] = useState("all");

  const activeHabits = habits.filter((h) => !h.isCompleted);
  const completedHabits = habits.filter((h) => h.isCompleted);

  const progressPercentage =
    habits.length > 0 ? Math.round((completedHabits.length / habits.length) * 100) : 0;

  const filteredHabits =
    filter === "pending"
      ? activeHabits
      : filter === "completed"
      ? completedHabits
      : habits;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputHabit.trim()) return;
    addHabit(inputHabit);
    setInputHabit("");
  };

  return (
    <Container className="py-5" style={{ maxWidth: "600px" }}>
      <Card className="p-3 custom-card">
        <Card.Body>
          <Card.Title className="text-center mb-4 app-title fs-2">FocusFlow ✨</Card.Title>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-2 fs-6 fw-semibold">
              <span style={{ color: "#7a0c2e" }}>Progress</span>
              <Badge bg="none" className="px-3 py-2 rounded-pill" style={{ backgroundColor: "#fce8eb", color: "#7a0c2e" }}>
                {progressPercentage}%
              </Badge>
            </div>
            <ProgressBar now={progressPercentage} animated={progressPercentage > 0 && progressPercentage < 100} />
          </div>

          {/* Form */}
          <Form className="mb-4 d-flex gap-2" onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder="What habit are you building?"
              value={inputHabit}
              onChange={(e) => setInputHabit(e.target.value)}
            />
            <Button type="submit" className="btn-maroon px-4">Add</Button>
          </Form>

          {/* Filters */}
          <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
            <div className="d-flex gap-2">
              {["all", "pending", "completed"].map((type) => (
                <Button
                  key={type}
                  size="sm"
                  className={filter === type ? "btn-pink-outline active" : "btn-pink-outline"}
                  onClick={() => setFilter(type)}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}{" "}
                  ({type === "all" ? habits.length : type === "pending" ? activeHabits.length : completedHabits.length})
                </Button>
              ))}
            </div>

            {completedHabits.length > 0 && (
              <Button variant="link" size="sm" onClick={clearCompleted}>
                Clear Completed
              </Button>
            )}
          </div>

          {/* Habit List */}
          <ListGroup variant="flush">
            {filteredHabits.map((habit) => (
              <HabitItem
                key={habit.id}
                habit={habit}
                onToggle={() => toggleHabit(habit.id)}
                onUpdateTitle={updateHabitTitle}
                onUpdateNote={updateHabitNote}
                onRemove={removeHabit}
              />
            ))}
          </ListGroup>

          {filteredHabits.length === 0 && (
            <p className="text-center text-muted my-4 fs-6">No habits found! ✨</p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Habits;