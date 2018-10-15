var config = require('./db.js');
var MySQL = require('./mysql.js').getInstance(config);
(async function getUser() {
	// var user = await MySQL.query("select * from test");
	// console.log(user);
	var sql = 'update test set name = ? where id = ?'
	var update = await MySQL.query(sql,['77777','2']);
	console.log(update)
})();