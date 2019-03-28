import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const indexPage = () => (
    <div>
        <h1>The Main page</h1>

        {/* Navigate using a Link */}
        <Link href="/auth"><a>Auth page</a></Link>

        {/* Navigate using the Router */}
        <p><button onClick={() => Router.push('/auth')}>Auth</button></p>
    </div>
);

export default indexPage;