'use strict';
const mysql = require('mysql');

class MySQL {

    constructor(DBConf) {
        this.pool = mysql.createPool(DBConf);
        console.log('---------------------------------------------------已创建数据库连接池----------------------------------------------');
    }

    static getInstance(DBConf) {
        if (!MySQL.instance) {
            MySQL.instance = new MySQL(DBConf);
        }
        return MySQL.instance;
    }

    query(sql, options) {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, conn) => {
                if (err) {
                    reject(err);
                    console.error(sql, err);
                } else {
                    conn.query(sql, options, (error, results) => {
                        //释放连接  
                        conn.release();
                        if (error) {
                            console.error(sql, options, error);
                            reject(error);
                        } else {
                            //事件驱动回调  
                            resolve(results);
                        }
                    });
                }
            });
        });
    }
}



module.exports = MySQL;