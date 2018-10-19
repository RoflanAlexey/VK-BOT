const express = require('express')
const bodyParser = require('body-parser')
const { Botact } = require('botact')

const app = express()
const bot = new Botact({
	token: ' ТУТ ТОКЕН ',
	confirmation: '71cf836f'
})
bot.on(function (ctx) {
	console.log(ctx.body)
	ctx.reply("Ты лох")
})

app.use(bodyParser.json())

app.post('/', bot.listen)

app.listen(80)
