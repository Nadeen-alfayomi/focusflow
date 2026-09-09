import { useState } from "react";
import { Container, Card, Form, Button, ListGroup, ProgressBar, Badge, Row, Col } from "react-bootstrap";
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
    /* 1. إزالة maxWidth وتقسيم الصفحة بالـ Container مع Padding مناسب للهواتف */
    <Container className="py-3 py-md-5">
      <Row className="justify-content-center g-4">
        
        {/* العمود الأساسي: يأخذ الشاشة كاملة ع الهواتف (12) وعرض مريح للشاشات المتوسطة والكبيرة (md=10, lg=8) */}
        <Col xs={12} md={10} lg={8}>
          <Card className="p-2 p-md-4 custom-card shadow-sm border-0">
            <Card.Body>
              <Card.Title className="text-center mb-4 app-title fs-2 fw-bold" style={{ color: "#5c061c" }}>
                FocusFlow ✨
              </Card.Title>

              {/* Progress Bar */}
              <div className="mb-4 bg-light p-3 rounded-3 border">
                <div className="d-flex justify-content-between align-items-center mb-2 fs-6 fw-semibold">
                  <span style={{ color: "#5c061c" }}>Daily Progress</span>
                  <Badge bg="none" className="px-3 py-2 rounded-pill" style={{ backgroundColor: "#fce8eb", color: "#5c061c" }}>
                    {progressPercentage}%
                  </Badge>
                </div>
                <ProgressBar 
                  now={progressPercentage} 
                  animated={progressPercentage > 0 && progressPercentage < 100}
                  style={{ height: '10px' }}
                />
              </div>

              {/* Form - ينزل بشكل عمودي في الشاشات الصغيرة جداً ويكون أفقياً في العادية */}
              <Form className="mb-4 d-flex flex-column flex-sm-row gap-2" onSubmit={handleSubmit}>
                <Form.Control
                  type="text"
                  placeholder="What habit are you building?"
                  value={inputHabit}
                  onChange={(e) => setInputHabit(e.target.value)}
                  className="py-2"
                />
                <Button type="submit" className="btn-maroon px-4 py-2 w-100 w-sm-auto">
                  Add
                </Button>
              </Form>

              {/* Filters - أزرار التصفية لتتأقلم مع حجم الشاشة */}
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center mb-3 gap-2">
                <div className="d-flex gap-1 flex-wrap">
                  {["all", "pending", "completed"].map((type) => (
                    <Button
                      key={type}
                      size="sm"
                      className={filter === type ? "btn-pink-outline active flex-fill" : "btn-pink-outline flex-fill"}
                      onClick={() => setFilter(type)}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}{" "}
                      ({type === "all" ? habits.length : type === "pending" ? activeHabits.length : completedHabits.length})
                    </Button>
                  ))}
                </div>

                {completedHabits.length > 0 && (
                  <Button variant="link" size="sm" className="text-decoration-none text-muted p-0 text-start text-sm-end" onClick={clearCompleted}>
                    Clear Completed
                  </Button>
                )}
              </div>

              {/* Habit List */}
              <ListGroup variant="flush" className="rounded">
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
        </Col>

      </Row>
    </Container>
  );
};

export default Habits;