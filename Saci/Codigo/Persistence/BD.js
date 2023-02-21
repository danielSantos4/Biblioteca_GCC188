import pg from "pg"

function conectar() {
    if (global.connection) {
        return global.connection.connect();
    }

    const pool = new pg.Pool({
        host: 'localhost',
        database: 'postgres',
        user: 'postgres',
        password: '123456',
        port: '5432'
    })
    global.connection = pool;
    return pool.connect();
}

export default {conectar}