# Leadzen Todo

#### Supercharge your productivity, solo or with your team.

#### project hosted on url :- [https://leadzen-ai-assingment.onrender.com/](https://leadzen-ai-assingment.onrender.com/)


# Project Folder Structure

The folder consists of three folder :-

- `backend` - The server of todo app written in Python.
- `frontend` - The frontend of the todo app, made using frontend web technologies `React+Vite` and `Tailwind`

---

# TechStack

#### Back End & CLI

<ul style='display:flex;flex-direction:column;gap:.4rem'>
    <li style="font-weight:bold;display:flex;align-items:center;gap:1rem"><img src='https://supabase.com/favicon/favicon-96x96.png' width='20'/> Supabase</li>
    <li style="font-weight:bold;display:flex;align-items:center;gap:1rem"><img src='https://www.postgresql.org/favicon.ico' width='20'/> PostgreSQL</li>
    <li style="font-weight:bold;display:flex;align-items:center;gap:1rem"><img src='https://flask.palletsprojects.com/en/3.0.x/_static/shortcut-icon.png' width='20'/> Flask</li>
    <li style="font-weight:bold;display:flex;align-items:center;gap:1rem"><img src='https://www.python.org/favicon.ico' width='20'/> Python</li>
</ul>

#### Front End

<ul style='display:flex;flex-direction:column;gap:.4rem'>
    <li style="font-weight:bold;display:flex;align-items:center;gap:1rem"><img src='https://react.dev/favicon.ico' width='20'/> React</li>
    <li style="font-weight:bold;display:flex;align-items:center;gap:1rem"><img src='https://tailwindcss.com/favicons/favicon.ico?v=3' width='20'/> Tailwind CSS</li>
    <li style="font-weight:bold;display:flex;align-items:center;gap:1rem"><img src='https://vitejs.dev/logo.svg' width='20'/> Vite</li>
</ul>

# Project Setup

- In the root directory of the repo, run the following command to install all python dependencies.
  ```bash
  pip install -r requirements.txt
  ```
- in the `backend` folder create a `.env` file in the root directory and initialize to variable inside it.
  ```.env
  PROJECT_URL = <YOUR_PROJECT_URL>
  API_KEY = <YOUR_API_KEY>
  ```
- install the front-end dependencies.
  ```bash
  cd frontend
  npm i
  ```

# Supabse Key

- goto supbase official site [supabase.com](https://supabase.com/)
- log in with github account
- create your ogrganization and a project inside it.
- on the hope page of the project you will find the `PROJECT_URL` and `API_KEY`
- now create a table named `todo` not `todos` and add rows to it
  - `id`
  - `created_at`
  - `desc` (text) not nullable
  - `completed` (bool) default false
- make sure to disable RSL in the table to allow curd to occur.

# Run Project

- backend
  ```bash
  cd backend
  python main.py
  ```
- frontend
  ```bash
  cd frontend
  npm run dev
  ```

**Note :- the backend will server the static file for the front-end but if want to run front-end seperately then you can do it.**
