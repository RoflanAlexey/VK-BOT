const express = require('express')
const bodyParser = require('body-parser')
const { Botact } = require('botact')

const app = express()
const bot = new Botact({
	token: 'efc25ee8a42a3eb8aa87ec4fc6348d3a2283ec6d521c22c2237f99b94ede548a521dc1598c874eb1c7303',
	confirmation: '71cf836f'
})
bot.on(function (ctx) {
	console.log(ctx.body)
	ctx.reply("Ты лох")
})

app.use(bodyParser.json())

app.post('/', bot.listen)

app.listen(80)