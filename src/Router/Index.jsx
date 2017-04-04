/**
 * Created by Min on 2017/2/9.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
    // index,
    // header,
    // listall,
    // search,
    // footernav,
    // footer
    main
} from './Chunks';

const routes = params => (
    <IndexRoute path="/" getComponent={main}>
    </IndexRoute>
);

export default { routes };
