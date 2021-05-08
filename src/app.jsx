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
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits });
    console.log(`handleIncrement , ${habit.name}`);
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

  render() {
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
        />
      </>
    );
  }
}

export default App;
