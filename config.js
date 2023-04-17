module.exports = {
	development: {
	    username: process.env.MYSQL_USER,
	    password: process.env.MYSQL_PASS,
	    database: 'orm_bbdd',
	    host: 'localhost',
	    dialect: 'mysql',
	    dialectOptions: {
	      bigNumberStrings: true
	    },
	    port: 3306
	},
	test: {
	    username: process.env.MYSQL_USER,
	    password: process.env.MYSQL_PASS,
	    database: 'orm_bbdd_test',
	    host: 'localhost',
	    dialect: 'mysql',
	    dialectOptions: {
	      bigNumberStrings: true
	    },
	    port: 3306
	},
}