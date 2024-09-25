import { todo } from "node:test";

export class TodolistService {
  todolist = {
    id: 1,
    todo: "Belajar NodeJS",
  };

  getTodolist(req, res) {
    res.write(
      JSON.stringify({
        code: 200,
        status: "OK",
        data: this.todolist,
      })
    );
    return this.todolist;
  }

  postTodolist(req, res) {}

  putTodolist(req, res) {}

  delTodolist(req, res) {}
}
