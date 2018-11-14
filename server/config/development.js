module.exports = {
	port: 3000,
	dbUrl: 'mongodb://10.40.154.118:26001/nice-blog',
	secret: 'secret',
	session: {
		name: 'SID',
		secret: 'SID',
		cookie: { maxAge: 60 * 60 * 6000 }
	}
}
