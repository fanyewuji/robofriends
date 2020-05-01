import React from 'react';

const Card =(props) => {
    const {id, name, email} = props;
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw5 shadow-5 tc'>
            <img alt='robots' src={`https://robohash.org/b${id}?size=200x200`} />
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>

    );
}

export default Card