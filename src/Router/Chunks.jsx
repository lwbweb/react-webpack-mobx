export const index = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../pages/Index').default);
    }, 'index');
};

export const header = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Header').default);
    }, 'header');
};

export const memain = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Memain').default);
    }, 'memain');
};

export const listall = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Listall').default);
    }, 'listall');
};

export const article = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Article').default);
    }, 'article');
};

export const essay = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Essay').default);
    }, 'essay');
};

export const message = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Message').default);
    }, 'message');
};

export const detail = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Detail').default);
    }, 'detail');
};

export const search = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Search').default);
    }, 'search');
};

export const footernav = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/FooterNav').default);
    }, 'footernav');
};

export const footer = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Footer').default);
    }, 'footer');
};
