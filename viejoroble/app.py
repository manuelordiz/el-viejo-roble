from flask import Flask, render_template, request, flash, redirect, url_for
from flask_mail import Mail, Message
from config import mail_user, mail_pass

app = Flask(__name__)

app.config['SECRET_KEY'] = '...'
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587   
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = mail_user
app.config['MAIL_PASSWORD'] = mail_pass

 
mail = Mail(app)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/contacto", methods=['GET', 'POST'])
def contacto(): 
    if request.method == 'POST':
        nombre = request.form.get('name')
        email = request.form.get('email')
        telefono = request.form.get('telefono')
        mensaje = request.form.get('mensaje')
    
        if not nombre or not email or not telefono or not mensaje:
            flash('Todos los campos son obligatorios.', 'error')
        else:
            try:
                msg = Message(subject=f"Mensaje de {nombre}",
                              body=f"Nombre: {nombre}\nCorreo: {email}\nTeléfono: {telefono}\n\nMensaje: {mensaje}",
                              sender=mail_user, recipients=[mail_user])
                mail.send(msg)
                flash('Mensaje enviado con éxito.', 'success')
                return redirect(url_for('contacto')) 
            except Exception as e:
                flash(f'Ocurrió un error al enviar el mensaje: {str(e)}', 'error')

    return render_template("contacto.html")


@app.route("/sobre-nosotros")
def sobre_nosotros():       
    return render_template("sobre-nosotros.html")

@app.route("/instalaciones")
def instalaciones():
    return render_template("instalaciones.html")

if __name__ == '__main__':
    app.run(debug=True)
