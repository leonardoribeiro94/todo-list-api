"use strict";
const Todo = require("./todo");

Todo.methods(["get", "post", "put", "delete"]); //node restful tem tudo pronto quanto aos metodos
Todo.updateOptions({ new: true, runValidators: true });

module.exports = Todo;