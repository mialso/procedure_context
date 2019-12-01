const compose = require('ramda/src/compose');
const { state } = require('./state.js');
const { findUserFiles } = require('./file.js');
const { findPrimaryUser } = require('./user.js');

const { user, file } = state;

const findPrimaryUserFiles = compose(
    findUserFiles(file),
    findPrimaryUser,
);

debugger;
console.log(findPrimaryUserFiles(user));
