import mysql from "mysql2";

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week10',
        password: 'qw85638563',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
    }
); // db 연결

const promisePool = pool.promise(); // db에 접근하는 객체 생성

export const selectSql = { // export : 외부에서 이 파일을 참조하면 selectSql 사용가능
    getUsers: async () => {
        const [rows] = await promisePool.query(`select * from user`);

        return rows;
    },
    getDepartment: async () => {
        const [rows] = await promisePool.query(`select * from department`);

        return rows;
    },
};

export const deleteSql = {
    deleteDepartment: async (data) => {
        console.log("deleteSql.deleteDepartment:", data.Dnumber);
        const sql = `delete from department where Dnumber=${data.Dnumber}`

        await promisePool.query(sql);
    },
};