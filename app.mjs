import http from "http";
import { TodolistService } from "./todolist-service.mjs";

const todolistService = new TodolistService();
const server = http.createServer((req, res) => {
  // res.write("Todolist API");
  if (req.method === "GET") {
    service.getTodolist(req, res);
  } else if (req.method === "POST") {
    service.postTodolist(req, res);
  } else if (req.method === "PUT") {
    service.putTodolist(req, res);
  } else if (req.method === "DELETE") {
    service.delTodolist(req, res);
  }

  res.end();
});

// getTodolist(req, res) {
//   Response.write(this.getJsonTodolist());
//   res.end();
// }

server.listen(3000, () => console.log("server running"));
