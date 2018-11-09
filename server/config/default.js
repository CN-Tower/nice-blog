module.exports = {
	port: 3000,
	dbUrl: 'mongodb://localhost:27017/elm',
	session: {
		name: 'SID',
		secret: 'SID',
		cookie: {
			httpOnly: true,
		    secure: false,
		    maxAge: 365 * 24 * 60 * 60 * 1000,
		}
	}
}
