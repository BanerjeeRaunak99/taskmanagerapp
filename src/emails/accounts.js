const sgMail = require('@sendgrid/mail')
const sendgridAPI = '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'
sgMail.setApiKey(sendgridAPI)
sgMail.send({
    to:'banerjeeraunak97@gmail.com',
    from:'billgates@gmail.com',
    subject:'hey there',
    text:'e nao microsoft er chakri'
})
const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to:email,
        from:'taskapp@taskapp.com',
        subject:'Welcome to the app!',
        text:` welcome to the app ${name}. lets get started`
    })
}

module.export = sendWelcomeEmail