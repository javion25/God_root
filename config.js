/*
dev or undefined 本地调试环境
test 测试环境
TODO:
production 生产环境 
*/
var configObj = {
	dev: {
		root : {
			mysql : {
				host : '127.0.0.1',
			    port : 3306 ,
			    database : 'rt_root',
			    user: 'root',
			    password : '',
			    multipleStatements: true
			}
		}
	},
	test: {

	}
	
};

configObj[undefined] = configObj['dev'];

module.exports = configObj[process.env.NODE_ENV];