 ** **Here's the documentation for the CLI application:**

**Description:**

This command-line interface (CLI) tool allows you to manage your to-do tasks effectively. It interacts with a Todo API (at http://127.0.0.1:5000) to create, view, mark, unmark, and delete tasks, keeping you organized and on top of your to-do list.

**Installation:**

1. **Install dependencies:**
   - `pip install requests tabulate`

2. **Ensure a compatible Todo API is running at http://127.0.0.1:5000**

**Usage:**

```bash
python CLI.py [command] [options]
```

**Available Commands:**

- **add:** Creates a new task.
- **mark:** Marks a task as completed.
- **unmark:** Unmarks a completed task.
- **del-cur:** Deletes a current (not completed) task.
- **del-com:** Deletes a completed task.
- **show:** Displays all tasks, both current and completed.

**Options:**

```
--add <description>   Description of the new task to add.
--mark <task_id>      Task ID of the task to mark as completed.
--unmark <task_id>    Task ID of the task to unmark as completed.
--del-cur <task_id>   Task ID of the current task to delete.
--del-com <task_id>   Task ID of the completed task to delete.
--show                Shows all tasks (current and completed).
```

**Examples:**

- Create a new task: `python CLI.py --add "Write a report"`
- Mark task 5 as completed: `python CLI.py --mark 5`
- Show all tasks: `python CLI.py --show`

**Additional Notes:**

- The CLI relies on a functioning Todo API at http://127.0.0.1:5000.
- Error handling for API interactions is limited to a generic "some error occurred" message.
- Consider using more specific error handling for a user-friendly experience.
