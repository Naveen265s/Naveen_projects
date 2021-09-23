let config =  {
    WWW_PORT : (process.env.PORT || 8011),
    players_url : (process.env.players_url || 'http://localhost:8031'),
    users_url : (process.env.users_url || 'http://localhost:8021')
}

module.exports = config;