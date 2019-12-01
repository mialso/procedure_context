function findPrimaryUserId(userState) {
    return userState.primaryId || '';
}

function findPrimaryUser(userState) {
    const primaryId = userState.primaryId;
    const userData = userState.byId[primaryId];
    if (!userData) {
        return {};
    }
    return userData;
}

module.exports = {
    findPrimaryUserId,
    findPrimaryUser,
}
