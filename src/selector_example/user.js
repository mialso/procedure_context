function findPrimaryUser(userState) {
    debugger;
    const primaryId = userState.primaryId;
    const userData = userState.byId[primaryId];
    if (!userData) {
        return null;
    }
    return userData;
}

module.exports = {
    findPrimaryUser,
}
