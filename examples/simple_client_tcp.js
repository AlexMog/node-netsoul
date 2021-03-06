// Generated by CoffeeScript 1.6.3
(function() {
  var client, netsoul;

  process.stdout.write('\u001B[2J\u001B[0;0f');

  netsoul = require('..');

  client = new netsoul.clients.daemon({
    verbose: true,
    login: process.argv[2],
    password: process.argv[3],
    nsconnect: new netsoul.connects.tcp({
      host: 'ns-server.epitech.eu',
      port: 4242
    })
  });

  client.on('authenticate', function() {
    return console.log('Successfully authenticated !');
  });

  client.on('message_ping', function() {
    return console.log('Ping received');
  });

  client.connect();

}).call(this);
