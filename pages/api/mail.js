const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
  Nombre:${body.name}\r\n
  Telefono:${body.phone}\r\n
  Email:${body.email}\r\n
  Mensaje:${body.message}`;

  const data = {
    to: "silvero.marin.ariel@gmail.com",
    from: "email@arsdev.ar",
    subject: "Nuevo Mensaje de Ars Dev",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail
    .send(data)
    .then(() => console.log("MAIL ENVIADO"))
    .catch(console.log);

  res.status(200).json({ status: "Ok" });
}

export default handler;
