import React from 'react';
import moment from 'moment';

// * DISPLAY USER INFOMATION HERE
export const UserCard = ({ user }) => {

    // * IF STILL LOADING, RETURN LOADING TEXT
    if (!!user === false) {
        return <div>Loading</div>
    }

    // * RETRIEVE OUR DESIRED VALUES
    const {
        avatar_url,
        bio,
        created_at,
        followers,
        followers_url,
        following,
        following_url,
        gists_url,
        html_url,
        id,
        location,
        name,
        public_gists,
        public_repos,
        repos_url,
        updated_at
    } = user

    // ! LOG USER DATA
    console.log(
        avatar_url,
        bio,
        created_at,
        followers,
        followers_url,
        following,
        following_url,
        gists_url,
        html_url,
        id,
        location,
        name,
        public_gists,
        public_repos,
        repos_url,
        updated_at
    )

    return (
        <div className={`user-card__container`}>
            <h2>{name}</h2>

            <article>
                <img src={`${avatar_url}`} alt="github avatar" />
                <p>Bio: {bio}</p>
                <p>Location: {location}</p>
                <p>Followers: {followers}</p>
                <p>Following: {following}</p>
                <p>Main GitHub URL: <a href={`${html_url}`}>Link</a></p>
                <p>Created At: {moment(created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>
                <p>Updated At: {moment(updated_at).format('MMMM Do YYYY, h:mm:ss a')}</p>
            </article>
        </div>
    )
}