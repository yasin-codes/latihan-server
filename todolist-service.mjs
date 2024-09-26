// import { todo } from "node:test";

import { todo } from "node:test";

export class TodolistService {
  todolists = ["Belajar NodeJS", "Belajar Javascript"];

  getJsonTodolist() {
    return JSON.stringify({
      code: 200,
      status: "OK",
      data: this.todolists.map((val, idx) => {
        return { id: idx + 1, todo: val };
      }),
    });
  }

  getTodolist(req, res) {
    res.end(this.getJsonTodolist());
  }

  createTodolist(req, res) {
    req.on("data", (data) => {
      const body = JSON.parse(data.toString());
      this.todolists.push({ body, todo });
      this.getTodolist(req, res);
    });
  }

  updateTodolist(req, res) {
    req.on("data", (data) => {
      const body = JSON.parse(data.toString());
      if (this.todolists[body.id] && this.todolists[body.id].todo != body.todo) {
        this.todolists[body.id].todo = body.todo;
      }
      this.getTodolist(req, res);
    });
  }

  deleteTodolist(req, res) {
    req.on("data", (data) => {
      const body = JSON.parse(data.toString());
      if (this.todolists[body.id]) {
        this.todolists.splice(body.id, 1);
      }
      this.getTodolist(req, res);
    });
  }
}
