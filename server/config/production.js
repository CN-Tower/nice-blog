module.exports = {
	port: 3000,
	dbUrl: 'mongodb://localhost:27017/nice-blog',
	secret: 'secret',
	session: {
		name: 'SID',
		secret: 'SID',
		cookie: { maxAge: 6000 }
	}
}
