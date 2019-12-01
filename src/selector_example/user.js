function findPrimaryUser(state) {
    const { user } = state;
    const primaryId = user.primaryId;
    const userData = user.byId[primaryId];
    if (!userData) {
        return null;
    }
    return userData;
}

module.exports = {
    findPrimaryUser,
}
