
# GameBank.js
GameBank.js the JavaScript API for GameBank blockchain

## Server
## Install
```
$ npm install gamebank --save
```

## Examples
### Broadcast Vote
```js
var gamebank = require('gamebank');

var wif = gamebank.auth.toWif(username, password, 'posting');
gamebank.broadcast.vote(wif, voter, author, permlink, weight, function(err, result) {
	console.log(err, result);
});
```

### Get Accounts
```js
gamebank.api.getAccounts(['ned', 'dan'], function(err, result) {
	console.log(err, result);
});
```

### Get State
```js
gamebank.api.getState('/trends/funny', function(err, result) {
	console.log(err, result);
});
```

### Reputation Formatter
```js
var reputation = gamebank.formatter.reputation(user.reputation);
console.log(reputation);
```


## Issues
When you find issues, please report them!

## License
MIT
