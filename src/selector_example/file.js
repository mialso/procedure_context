const { findPrimaryUser } = require('./user.js');

function findPrimaryUserFiles(state) {
    const user = findPrimaryUser(state);

    if (!user) {
        return [];
    }
    const userFiles = state.file.ids.filter(fileId => state.file.byId[fileId].owner === user.id).map(fileId => state.file.byId[fileId]);
    return userFiles;
}

module.exports = {
    findPrimaryUserFiles,
};
