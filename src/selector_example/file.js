const findUserFiles = (fileState) => (user) => {
    if (!user) {
        return [];
    }
    const userFiles = fileState.ids
        .filter(fileId => fileState.byId[fileId].owner === user.id)
        .map(fileId => fileState.byId[fileId]);
    return userFiles;
}

module.exports = {
    findUserFiles,
};
