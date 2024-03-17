import requests
from tabulate import tabulate
import argparse
BASE_URL = 'http://127.0.0.1:5000'


def show_tasks(data):
    current = data.get('current')
    completed = data.get('completed')
    
    table_header = ['id', 'created_at','desc','completed']
    current = [[x[label] for label in table_header] for x in current]
    completed = [[x[label] for label in table_header] for x in completed]

    print('\n'*2,"⚡ CURRENT TASK ⚡")
    print(tabulate(current, table_header, tablefmt='grid'),  '\n'*2)

    print('\n'*2,"✅ COMPLETED TASK ✅")
    print(tabulate(completed, table_header, tablefmt='grid'),  '\n'*2)

def add_task(desc):
    try:
        requests.post(f'{BASE_URL}/todo/create', json={'desc' : desc}).json()
    except Exception as e:
        print('some error occoured')

def get_task():
    data = requests.get(f"{BASE_URL}/todo").json()
    show_tasks(data)

def mark_task(id):
    try:
        requests.post(f'{BASE_URL}/todo/mark', json={'task_id':id})
    except Exception as e:
        print('some error occoured')

def unmark_task(id):
    try:
        requests.post(f'{BASE_URL}/todo/unmark', json={'task_id':id})
    except Exception as e:
        print('some error occoured')

def delete_task(id, completed):
    try:
        requests.post(f'{BASE_URL}/todo/del', json={'task_id':id, 'completed' : completed})
    except Exception as e:
        print('some error occoured')


def main():
    # Parse command-line arguments
    parser = argparse.ArgumentParser(description="Your CLI application description")
    parser.add_argument("--add", type=str, help="desc for new todo")
    parser.add_argument("--mark", type=int,  help="mark you task as done provide your task_id")
    parser.add_argument("--unmark", type=int,  help="unmark your task, provide your task_id")
    parser.add_argument("--del-cur", type=int,  help="delete your task, provide task_id")
    parser.add_argument("--del-com", type=int,  help="delete your task, provide task_id")
    parser.add_argument("--show", action='store_true', default=None, help="show all your tasks")
    args = parser.parse_args()

    if args.add:
        add_task(args.add)
    
    if args.mark:
        mark_task(args.mark)

    if args.unmark:
        unmark_task(args.unmark)
    
    if args.del_cur:
        delete_task(args.del_cur, False)

    if args.del_com:
        delete_task(args.del_com, True)

    if args.show:
        get_task()


if __name__ == "__main__":
    main()