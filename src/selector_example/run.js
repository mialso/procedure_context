const compose = require('ramda/src/compose');
const equals = require('ramda/src/equals');
const { state } = require('./state.js');
const { findOwnerFileIds } = require('./file.js');
const { findPrimaryUserId } = require('./user.js');

const CORRECT_FILE_IDS = ['file_1', 'file_3'];

const { user, file } = state;

const findPrimaryUserFileIds = compose(
    findOwnerFileIds(file),
    findPrimaryUserId,
);

// first case where everything is correct
const fileIds = findPrimaryUserFileIds(user);

if (!equals(CORRECT_FILE_IDS, fileIds)) {
    console.log('ERROR: selector: fileIds');
    process.exit(1);
}
console.log('SUCCESS: selector: fileIds');

// first case where user id is somehow absent and file owner is not set
state.user.primaryId = 'user_3';

const wrongFileIds = findPrimaryUserFileIds(user);
if (wrongFileIds.length > 0) {
    console.log('ERROR: selector: wrongFileIds');
    process.exit(1);
}

console.log('WRONG[1]: %s', wrongFileIds);

// second case where user is somehow absent and file owner is not set
state.user.primaryId = 'user_4';

const wrong2FileIds = findPrimaryUserFileIds(user);
if (wrong2FileIds.length > 0) {
    console.log('ERROR: selector: wrong2FileIds');
    process.exit(1);
}

console.log('WRONG[2]: %s', wrong2FileIds);
