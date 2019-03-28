import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class IndexPage extends Component {

    static async getInitialProps(context) {
        console.log(context);
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({appName: 'nextjs_example'});
            }, 1000);
        });
        return promise;
    }

    render() {
        return (
            <div>
                <h1>The Main page of {this.props.appName}</h1>

                {/* Navigate using a Link */}
                <Link href="/auth"><a>Auth page</a></Link>

                {/* Navigate using the Router */}
                <p><button onClick={() => Router.push('/auth')}>Auth</button></p>
            </div>
        );
    }
}

export default IndexPage;