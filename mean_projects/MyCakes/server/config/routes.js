var cakes = require("../controllers/views.js");


module.exports = function(app){

    app.get("/tasks", cakes.index)

    app.get("/tasks/:id", cakes.details)

    app.post("/tasks", cakes.addTask)

    app.put("/tasks/:id", cakes.editTask)

    app.delete("/tasks/:id", cakes.deleteTask)
}

