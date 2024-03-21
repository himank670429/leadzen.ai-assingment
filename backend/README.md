**API Description:**

This API provides a set of RESTful endpoints for managing a to-do list. It interacts with a Supabase database to store and retrieve tasks.


**Prerequisites:**

- Python 3.x with Flask and Supabase libraries installed.
- A Supabase project with a `todo` table containing columns like `id` (primary key), `desc` (task description), and `completed` (boolean indicating completion status).

**Environment Variables:**

- `PROJECT_URL`: The URL of your Supabase project (e.g., `https://<your-project-id>.supabase.co`).
- `API_KEY`: Your Supabase API key with appropriate permissions (e.g., `public` with read/write access).

**CORS Configuration:**

The API is configured to allow CORS requests from `http://localhost:5173`. Adjust this origin if your frontend application is hosted on a different domain.

**Available Endpoints:**

**1. Create a new task (POST /todo/create):**

- **Request Body:**
    - `desc` (string): The description of the new task.
- **Response:**
    - JSON object containing the newly created task data (including its ID) on success (status code: 200).
    - Error message (status code: 500) in case of internal server error.

**2. Get all tasks (GET /todo):**

- **Response:**
    - JSON object containing two lists:
        - `current`: List of tasks that are not marked as completed.
        - `completed`: List of tasks that are marked as completed.
    - Error message (status code: 500) in case of internal server error.

**3. Mark a task as completed (POST /todo/mark):**

- **Request Body:**
    - `task_id` (integer): The ID of the task to mark as completed.
- **Response:**
    - Updated JSON object containing the current and completed task lists after marking the specified task as completed (status code: 200).
    - Error message (status code: 500) in case of internal server error.

**4. Unmark a completed task (POST /todo/unmark):**

- **Request Body:**
    - `task_id` (integer): The ID of the completed task to unmark.
- **Response:**
    - Updated JSON object containing the current and completed task lists after unmarking the specified completed task (status code: 200).
    - Error message (status code: 500) in case of internal server error.

**5. Delete a task (POST /todo/del):**

- **Request Body:**
    - `task_id` (integer): The ID of the task to delete.
    - `completed` (boolean): Indicates whether the task is currently marked as completed (True) or not (False).
- **Response:**
    - Updated JSON object containing either the current or completed task list depending on whether the deleted task was completed (status code: 200).
    - Error message (status code: 500) in case of internal server error.

**Error Handling:**

The API returns generic error messages for internal server errors (status code: 500). Consider implementing more specific error handling and informative responses for a better user experience.

**Running the API:**

1. Set the `PROJECT_URL` and `API_KEY` environment variables.
2. Run the application using `python app.py`.

**Using the API:**

You can utilize tools like Postman or integrate this API into your frontend application using libraries that support making HTTP requests (e.g., Axios in Javascript). Refer to the specific documentation of your chosen tools or libraries for making requests to the API endpoints.
