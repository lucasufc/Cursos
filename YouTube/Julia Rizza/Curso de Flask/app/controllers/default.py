from flask import render_template
from app import app

from app.models.forms import LoginForm

@app.route("/index/<user>")
@app.route("/", defaults={'user':None})
def index(user):
    return render_template('index.html', user=user)

@app.route("/login", methods=["GET","POST"])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        print(form.username.data)
        print(form.password.data)
    return render_template('login.html', form=form)



#------------------------------------------------
## Métodos
# @app.route("/test/", methods=['GET'])
# def test():
#     return "Oi"
#------------------------------------------------
## Inteiros
# @app.route("/test/<int:id>")
# def test(id):
#     return "Seu id é: {}!".format(id)
#------------------------------------------------
## Strings
# @app.route("/test", defaults={'name': None})
# @app.route("/test/<name>")
# def test(name):
#     if name:
#         return "Olá!, %s!" % name
#     else:
#         return "Olá, usuário!"
#------------------------------------------------