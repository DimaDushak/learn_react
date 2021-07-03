const indexTemplate = (content: string, token?: string): string => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="/static/client.js" type="application/javascript"></script>
        <script>
            window.__token__ = '${token ?? ''}';
        </script>
    </head>
    <body>
        <div id="root">${content}</div>
    </body>
    </html>
`;

export default indexTemplate;
