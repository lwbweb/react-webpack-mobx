/**
 * Created by Min on 2017/2/9.
 * Require App Chunk Files
 */

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

export const listall = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Listall').default);
    }, 'listall');
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

export const main = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Main').default);
    }, 'main');
};

export const intro = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Intro').default);
    }, 'intro');
};

export const todo = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Todo').default);
    }, 'todo');
};
