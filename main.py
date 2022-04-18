import os, json

from flask import Flask, flash, redirect, render_template, request, session, abort
from flask_cors import CORS

# Initialize
app = Flask(__name__)
cors = CORS(app, resources={r"/static/*": {"origins": "*"}})

PROJECT_PATH = os.path.dirname(__file__)
DATA_DIR = os.path.join(PROJECT_PATH, "dll_data")
DATA_FILE = os.path.join(PROJECT_PATH, "static/data.json")

if not os.path.exists(DATA_DIR):
    os.mkdir(DATA_DIR)


@app.route("/index")
def index():
    return "Index!"


@app.route("/hello")
def hello():
    return "Hello World!"

@app.route("/")
def main_page():
    return 'you might be looking for this page, <a href=http://digitallovelanguages.com/form>http://digitallovelanguages.com/form</a>'

#
# @app.route("/form")
# def form():
#     return render_template(
#         'form.html',**locals())


def regenerate_data_file():
    files = os.listdir(DATA_DIR)
    data = []
    for f_name in files:
        f_path = os.path.join(DATA_DIR, f_name)
        with open(f_path, 'r') as f:
            contents = json.loads(f.read())
            data.append(contents)
    with open(DATA_FILE, 'w') as f:
        f.write(json.dumps(data))


@app.route('/regenerate', methods = ['GET'])
def regenerate():
    regenerate_data_file()
    return "data file was regenerated"


@app.route('/form_post', methods = ['POST'])
def form_post():
    if request.method == 'POST':
        data = request.form
        print("data: {}".format(data))
        filename = data['name'] + "-" + data['project']
        file_path = os.path.join(DATA_DIR, filename)
        link = data['link-input']
        if link:
            with open(file_path, 'w') as f:
                f.write(json.dumps(data))
        # if link is empty, then delete this entry
        else:
            os.remove(file_path)
    # regenerate all data into one file
    regenerate_data_file()
    return "your form submission was saved, thank you"


if __name__ == "__main__":
    app.run()