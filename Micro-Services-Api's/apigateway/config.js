let config ={
    WWW_PORT : (process.env.PORT || 8010),
    todo_url : (process.env.todo_url || 'http://localhost:8030'),
    user_url : (process.env.user_url || 'http://localhost:8020')
}
module.exports = config;
