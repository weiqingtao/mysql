var config = require('./db.js');
var MySQL = require('./mysql.js').getInstance(config);
(async function getUser() {
	var applyDatas = { '0':
	{ _id: '5bc03ab65ae16e0fd732ff6a',
	currency: 'HKD',
	name: '43e242',
	number: '52343541',
	holder: 't435345' },
	'1':
	{ _id: '5bc03ab65ae16e5fac32ff69',
	currency: 'USD',
	name: '65344536',
	number: '36453465',
	holder: '63453456' },
	'2':
	{ _id: '5bc03ab65ae16e3b8a32ff68',
	currency: 'USD',
	name: '5646534534665436543654365436543',
	number: '4536354654635432534254325432543253425342',
	holder: '3456345654354325432' } }
	let key = Object.keys(applyDatas);
	for (var i = 0; i < key.length; i++) {
		// console.log(applyDatas[key[i]])
		var id = applyDatas[key[i]]._id;
		var currency = applyDatas[key[i]].currency;
		var name = applyDatas[key[i]].name;
		var number = applyDatas[key[i]].number;
		var holder = applyDatas[key[i]].holder;
		var sql = 'INSERT INTO test VALUES (?,?,?,?,?)'
		var values = [id,currency,name,number,holder];
		var update = await MySQL.query(sql,values);
		console.log(update)
	}

})();
