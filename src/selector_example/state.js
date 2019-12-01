const state = {
    user: {
        primaryId: 'user_1',
        byId: {
            'user_1': { id: 'user_1', name: 'User One' },
            'user_2': { id: 'user_2', name: 'User Two' },
        },
    },
    file: {
        ids: ['file_1', 'file_2', 'file_3'],
        byId: {
            'file_1': { name: 'File One', path: '/home/file_one.txt', owner: 'user_1' },
            'file_2': { name: 'File Two', path: '/home/file_two.txt', owner: 'user_2' },
            'file_3': { name: 'File Three', path: '/home/file_three.txt', owner: 'user_1' },
        },
    },
};

module.exports = {
    state,
};