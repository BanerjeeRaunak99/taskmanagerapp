const sgMail = require('@sendgrid/mail')
const sendgridAPI = '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'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to:email,
        from:'taskapp@taskapp.com',
        subject:'Welcome to the app!',
        text:` welcome to the app ${name}. lets get started`
    })
}
const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'goapp <no-reply@goapp.com>',
        subject: 'Hope to see you again',
        text: `We are sad to see you go ${name}. Is there anything we could have done to keep you on board?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}