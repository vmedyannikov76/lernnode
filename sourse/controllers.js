function mainPage(res) {
    let s = `
    <html>
    <head>
    <meta charset="UTF-8" />
    <title>Список запланированных дел</title>
    </head>
    <body>
    <h1>Запланированные дела</h1>
    </body>
    </html>
    `
    res.end(s)
}
function detailPage(res,id) {
    res.end(`
    <html>
    <head>
    <meta charset="UTF-8" />
    <title>Дело ::: Список запланированных дел</title>
    <p>Дело № ${id}</p>
    </head>
    <body>
    <h1>Дело</h1>
    </body>
    </html>
        `)
}

function errorPage(res){
    res.statusCode = 404;
    res.end(`
    <html>
    <head>
    <meta charset="UTF-8" />
    <title>Ошибка!!!</title>
    </head>
    <body>
    <h1>Ошибка</h1>
    <b>Запрошенная страница не существует</b>
    </body>
    </html>
        `)
}


export {mainPage, errorPage, detailPage}