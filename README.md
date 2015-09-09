###Meteor wrapper for NPM simple-oauth2.
Original package: [simple-oauth2](https://github.com/andreareginato/simple-oauth2)

```
meteor add vuhpham:simple-oauth2
```

``` javascript
Meteor.startup(function () {
  var oauth2 = SimpleOauth2({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    site: 'https://github.com/login',
    tokenPath: '/oauth/access_token',
    authorizationPath: '/oauth/authorize'
  });
});
```
