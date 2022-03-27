import os, json

from flask import Flask, flash, redirect, render_template, request, session, abort

app = Flask(__name__)

PROJECT_PATH = os.path.dirname(__file__)
DATA_DIR = os.path.join(PROJECT_PATH, "dll_data")

if not os.path.exists(DATA_DIR):
    os.mkdir(DATA_DIR)


@app.route("/index")
def index():
    return "Index!"


@app.route("/hello")
def hello():
    return "Hello World!"


@app.route("/")
def form():
    return render_template(
        'form.html',**locals())


@app.route('/form_post', methods = ['POST'])
def form_post():
    if request.method == 'POST':
        data = request.form
        print("data: {}".format(data))
        filename = data['fname'] + "-" + data['lname']
        file_path = os.path.join(DATA_DIR, filename)
        with open(file_path, 'w') as f:
            f.write(json.dumps(data))
    return "your form submission was saved, thank you"


if __name__ == "__main__":
    app.run()