const findOwnerFileIds = (fileState) => (ownerId) => {
    if (!ownerId) {
        return [];
    }
    const ownerFiles = fileState.ids
        .filter(fileId => fileState.byId[fileId].owner === ownerId);
    return ownerFiles;
}

module.exports = {
    findOwnerFileIds,
};
