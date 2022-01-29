const form = `

    <html>
        <head>
            <title>Welcome Form</title>
        </head>

        <body>
            <form method="POST" action='/message'>
                <label>Enter Message</label>
                <input type='text' name="message"/>
                <input type='text' name="message2"/>
                <button type='submit'>Send</button>
            </form>
        
        </body>
    
    </html>

`

module.exports = {
    form
}