const compose = require('ramda/src/compose');
const equals = require('ramda/src/equals');
const { state } = require('./state.js');
const { findOwnerFileIds } = require('./file.js');
const { findPrimaryUser } = require('./user.js');

const CORRECT_FILE_IDS = ['file_1', 'file_3'];

const { user, file } = state;

const findPrimaryUserFileIds = compose(
    findOwnerFileIds(file),
    findPrimaryUser,
);

const fileIds = findPrimaryUserFileIds(user);

if (!equals(CORRECT_FILE_IDS, fileIds)) {
    console.log('ERROR: selector: fileIds');
    process.exit(1);
}
console.log('SUCCESS: selector: fileIds');
