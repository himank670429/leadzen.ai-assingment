from dotenv import load_dotenv
import os
from supabase import create_client, Client
from flask import Flask, request, abort, jsonify, send_file, send_from_directory
from flask_cors import CORS
from mimetypes import MimeTypes
load_dotenv()

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])
app.static_folder = 'static'

supabase: Client = create_client(os.environ.get("PROJECT_URL"), os.environ.get("API_KEY"))


# mimetypes config
mime = MimeTypes()

@app.route('/')
def index():
    return send_from_directory('static', 'index.html')

@app.route("/<path:filename>")
def serve_static(filename):
    content_type, _= mime.guess_type(filename)
    return send_file(f'static/{filename}', mimetype=content_type)



@app.route('/todo/create', methods=["POST"])
def todo_create():
    data = request.get_json()
    desc = data.get('desc')
    try:
        response = supabase.table('todo').insert({'desc' : desc}).execute()
        return jsonify(response.data[0]), 200
    except Exception as e:
        print(e) 
        raise abort(500, description='Internal server error occurred!')

@app.route('/todo')
def get_todos():
    try:
        current = supabase.table('todo').select('*').eq('completed', False).execute()
        completed = supabase.table('todo').select('*').eq('completed', True).execute()
        return jsonify({'current':current.data, 'completed' : completed.data})
    except Exception as e:
        print(e) 
        raise abort(500, description='Internal server error occurred!')

@app.route('/todo/mark', methods=["POST"])
def mark_todo():
    try:
        data = request.get_json()
        task_id = data.get('task_id')
        supabase.table('todo').update({'completed':True}).match({'id' : task_id}).execute()
        current = supabase.table('todo').select('*').eq('completed', False).execute()
        completed = supabase.table('todo').select('*').eq('completed', True).execute()

        return jsonify({'current':current.data, 'completed' : completed.data})
    except Exception as e:
        print(e) 
        raise abort(500, description='Internal server error occurred!')
    

@app.route('/todo/unmark', methods=["POST"])
def unmark_todo():
    try:
        data = request.get_json()
        task_id = data.get('task_id')
        supabase.table('todo').update({'completed':False}).match({'id' : task_id}).execute()
        current = supabase.table('todo').select('*').eq('completed', False).execute()
        completed = supabase.table('todo').select('*').eq('completed', True).execute()

        return jsonify({'current':current.data, 'completed' : completed.data})
    except Exception as e:
        print(e) 
        raise abort(500, description='Internal server error occurred!')

@app.route('/todo/del', methods=["POST"])
def delete_todo():
    try:
        data = request.get_json()
        completed = data.get('completed')
        task_id = data.get('task_id')
        supabase.table('todo').delete().match({'id' : task_id, 'completed' : completed}).execute()
        todos = supabase.table('todo').select('*').eq('completed', completed).execute()
        if completed: return jsonify({'completed' : todos.data})
        else : return jsonify({'current' : todos.data})
    except Exception as e:
        print(e) 
        raise abort(500, description='Internal server error occurred!')

if __name__=="__main__":
    app.run(debug=True)