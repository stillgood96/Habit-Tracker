import "./app.css";
import Habits from "./components/habits";

import React, { Component } from "react";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    // 방법1
    // if (!habits[index].count <= 0) {
    //   habits[index].count--;
    // }

    // 방법2
    const count = habits[index].count - 1;
    habits[index].count = count <= 0 ? 0 : count;
    this.setState({ habits: habits });
    console.log(`handleDecrement , ${habit.name}`);
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
    console.log(`handleDelete , ${habit.name}`);
  };

  countNum = () => {
    const habits = [...this.state.habits];
    const count = habits.filter(habits.count > 0);
    return count;
  };

  handleAdd = (name) => {
    // Date.now() = 현재 시/분/초의 합의 수를 만들어 줌.
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    console.log("app");
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
