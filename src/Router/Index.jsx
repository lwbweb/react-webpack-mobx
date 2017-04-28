import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { index, listall, memain, article, essay, message, detail } from './Chunks';

const routes = params => (
	<Route path="/" getComponent={index}>
        <IndexRoute getComponent={listall} />
        <Route path="/me" getComponent={memain} params={memain} />
        <Route path="/article" getComponent={article} params={article} />
        <Route path="/essay" getComponent={essay} params={essay} />
        <Route path="/message" getComponent={message} params={message} />
        <Route path="/detail" getComponent={detail} params={detail} />
    </Route>
    );

export default { routes };
