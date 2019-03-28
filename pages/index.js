import React from 'react';
import Link from 'next/link';

const indexPage = () => (
    <div>
        <h1>The Main page</h1>
        <Link href="/auth"><a>Auth page</a></Link>
    </div>
);

export default indexPage;