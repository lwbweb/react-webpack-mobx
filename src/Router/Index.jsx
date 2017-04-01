/**
 * Created by Min on 2017/2/9.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
    index,
    header,
    listall,
    search,
    footernav,
    footer
} from './Chunks';

const routes = params => (
    <Route path="/" getComponent={index}>
    </Route>
);

export default { routes };
