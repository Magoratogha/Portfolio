const nodemailer = require('nodemailer');

module.exports = (formulario) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'magorabot@gmail.com',
      pass: '24315860'
    }
  });

  const mailOptions = {
    from: `"MagoraBot 🤖" <${formulario.email}>`,
    to: 'magoratoga@gmail.com',
    subject: formulario.asunto,
    html: `
    <strong>Nombre:</strong> ${formulario.nombre} <br/>
    <strong>E-mail:</strong> ${formulario.email}  <br/>
    <strong>Mensaje:</strong> ${formulario.mensaje}
    `
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });
}