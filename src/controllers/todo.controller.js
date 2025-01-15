import Todo from "../models/todo.model.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    // creating the document in the mongodb database

    if (!title) {
      return res
        .status(400)
        .json({ message: "Title is required", success: false });
    }

    const todo = new Todo({
      title,
      description,
    });

    await todo.save();
    return res.status(201).json({
      message: "Todo created successfully",
      success: true,
      data: todo,
    });
  } catch (err) {
    console.log("CreateTodoError", err);
  }
};

// mark task as done
export const todoDone = async (req, res) => {
  try {
    // set the status of a particular todo data to 1
    const { id } = req.params;
    const todo = await Todo.findByIdAndUpdate(id, {
      $set: {
        status: 1,
      },
    });

    // DYOR: Handle the req if there is no todo
    return res.status(201).json({
      message: "Task marked as complete",
      success: true,
    });
  } catch (err) {
    console.log("TodoStausUpdateError", err);
  }
};

// DYOR: Update the todo. Basically change the title and description of a particular todo
export const updateTodo = async (req, res) => {};

// DYOR: Fetch all the todos
export const fetchAllTodo = async (req, res) => {};

// DYOR: Fetch a particular todo
export const fetchSingle = async (req, res) => {};

// DYOR: Delete a todo
export const deleteTodo = async (req, res) => {};
