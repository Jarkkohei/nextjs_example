import React from  'react';
import Link from 'next/link';
import Router from 'next/router';

import User from '../../components/User';

const authIndexPage = () => (
    <div>
        <h1>Auth Page</h1>

        {/* Navigate using a Link */}
        <Link href="/"><a>Main page</a></Link>

        {/* Navigate using the Router */}
        <p><button onClick={() => Router.push('/')}>Main</button></p>
        <User name="Ronald" age={25} />
    </div>
);

export default authIndexPage;