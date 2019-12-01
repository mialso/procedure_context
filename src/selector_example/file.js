const findOwnerFileIds = (fileState) => (user) => {
    if (!user) {
        return [];
    }
    const userFiles = fileState.ids
        .filter(fileId => fileState.byId[fileId].owner === user.id);
    return userFiles;
}

module.exports = {
    findOwnerFileIds,
};
