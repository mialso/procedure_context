function findPrimaryUser(userState) {
    const primaryId = userState.primaryId;
    const userData = userState.byId[primaryId];
    if (!userData) {
        return {};
    }
    return userData;
}

module.exports = {
    findPrimaryUser,
}
