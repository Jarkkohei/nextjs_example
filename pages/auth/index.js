import React from  'react';
import Link from 'next/link';
import Router from 'next/router';

import User from '../../components/User';

const authIndexPage = (props) => (
    <div>
        <h1>Auth Page - {props.appName}</h1>

        {/* Navigate using a Link */}
        <Link href="/"><a>Main page</a></Link>

        {/* Navigate using the Router */}
        <p><button onClick={() => Router.push('/')}>Main</button></p>
        <User name="Ronald" age={25} />
    </div>
);

authIndexPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ appName: 'nextjs_example (Auth)' });
        }, 1000);
    });
    return promise;
}

export default authIndexPage;