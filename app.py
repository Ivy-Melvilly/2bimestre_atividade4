from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/questao01')
def questao01():
    return render_template("questao01.html")

@app.route('/questao02')
def questao02():
    return render_template("questao02.html")

@app.route('/questao03')
def questao03():
    return render_template("questao03.html")

@app.route('/questao04')
def questao04():
    return render_template("questao04.html")

@app.route('/questao05')
def questao05():
    return render_template("questao05.html")
    
app.run(host='0.0.0.0', port=81, debug=True)