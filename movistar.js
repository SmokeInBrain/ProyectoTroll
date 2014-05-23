var Tweet = require('twit')

var T = new Tweet({
		consumer_key:     '...'
	,	consumer_secret:   '...'
	,	access_token:      '...' 
	,   access_token_secret:    '...'
})

var speech = [
		'Navego a 1 MB porque @MovistarChile y @AyudaMovistarCL no quiere instalar fibra óptica donde vivo'
	,	'@MovistarChile y @AyudaMovistarCL dejen de darle fibra a los más ricos'
	,	'En cualquier momento me cambio, @MovistarChile @AyudaMovistarCL paren el #MonopolioMovistar!'
]

Date.prototype.today=function(){
	return ((this.getDate()<10)?"0":"")
		+	this.getDate() + "/"+(((this.getMonth()+1)<10)?"0":"")
		+	(this.getMonth()+1) + "/"+ this.getFullYear();
}

Date.prototype.timeNow=function(){
	return ((this.getHours()<10)?"0":"")
		+	this.getHours()+":"+((this.getMinutes()<10)?"0":"")
		+	this.getMinutes()+":"+((this.getSeconds()<10)?"0":"")+this.getSeconds();
}

setInterval(function(){
	var chosen = Math.floor(Math.random()*10)%3
	var time = new Date()
	var msg = speech[chosen]+ ' ' + time.today() + ' ' + time.timeNow()

	T.post('statuses/update',{status:msg},function(err,data,response){
		console.log('miguel_carcamov: ('+chosen+') '+msg)
	})
},60000*5)