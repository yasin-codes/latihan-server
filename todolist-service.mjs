// import { todo } from "node:test";

export class TodolistService {
  todolist = [
    {
      id: 1,
      todo: "Belajar NodeJS",
    },
    {
      id: 2,
      todo: "Belajar JavaScript",
    },
  ];

  getJsonTodolist() {
    JSON.stringify({
      code: 200,
      status: "OK",
      data: this.todolists,
    });
    return JSON.stringify(this.todolists);
    res.end();
  }

  getTodolist(req, res) {
    res.write(this.getJsonTodolist);
    return this.todolist;
    res.end();
  }

  createTodolist(req, res) {
    req.addListener("data", (chunk) => {
      const body = JSON.parse(chunk.toString());
      this.todolist.push({
        id: this.todolist.length + 1,
        todo: body.todo,
      });
      this.getTodolist(req, res);
    });
  }

  putTodolist(req, res) {}

  delTodolist(req, res) {}
}
