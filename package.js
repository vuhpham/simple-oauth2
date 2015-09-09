Package.describe({
  name: 'vuhpham:simple-oauth2',
  version: '0.0.1',
  summary: 'simple-oauth2 wrapper for Meteor',
  git: 'https://github.com/vuhpham/simple-oauth2.git',
  documentation: 'README.md'
});

Npm.depends({"simple-oauth2": "0.2.1"});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles(['simple-oauth2.js'], ['server']);
  api.export && api.export('SimpleOauth2');
});
