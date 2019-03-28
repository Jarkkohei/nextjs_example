import React from  'react';
import Link from 'next/link';
import Router from 'next/router'

const authIndexPage = () => (
    <div>
        <h1>Auth Page</h1>

        {/* Navigate using a Link */}
        <Link href="/"><a>Main page</a></Link>

        {/* Navigate using the Router */}
        <p><button onClick={() => Router.push('/')}>Main</button></p>
    </div>
);

export default authIndexPage;