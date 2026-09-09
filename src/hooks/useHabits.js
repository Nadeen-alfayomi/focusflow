import { useState, useEffect } from "react";

export const useHabits = () => {
  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem("focusflow_habits");
    return savedHabits ? JSON.parse(savedHabits) : [];
  });
  const [loading, setLoading] = useState(false);

  // الحفظ التلقائي في LocalStorage عند كل تغيير
  useEffect(() => {
    localStorage.setItem("focusflow_habits", JSON.stringify(habits));
  }, [habits]);

  // إضافة عادة جديدة
  const addHabit = (title) => {
    if (!title.trim()) return;
    const newHabit = {
      id: Date.now().toString(),
      title,
      isCompleted: false,
      note: "",
      createdAt: new Date().toISOString(),
    };
    setHabits((prev) => [newHabit, ...prev]);
  };

  // تغيير حالة الإكمال
  const toggleHabit = (id) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id ? { ...habit, isCompleted: !habit.isCompleted } : habit
      )
    );
  };

  // تعديل العنوان
  const updateHabitTitle = (id, title) => {
    setHabits((prev) =>
      prev.map((habit) => (habit.id === id ? { ...habit, title } : habit))
    );
  };

  // تعديل الملاحظة
  const updateHabitNote = (id, note) => {
    setHabits((prev) =>
      prev.map((habit) => (habit.id === id ? { ...habit, note } : habit))
    );
  };

  // حذف عادة
  const removeHabit = (id) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  };

  // مسح المكتمل
  const clearCompleted = () => {
    setHabits((prev) => prev.filter((habit) => !habit.isCompleted));
  };

  return {
    habits,
    loading,
    addHabit,
    toggleHabit,
    updateHabitTitle,
    updateHabitNote,
    removeHabit,
    clearCompleted,
  };
};