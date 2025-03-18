import React from 'react';
import ReactDOM from 'react-dom';
import './profile.css';

const Profile = ({ imageUrl, name, bio, email, location, posts }) => {
    return (
        <div>
            <header>
                <h1>User Profile</h1>
            </header>
            <main>
                <section className="profile-header">
                    <img src={imageUrl} alt="Profile Picture" className="profile-picture" />
                    <h2 className="username">{name}</h2>
                    <p className="bio">{bio}</p>
                </section>
                <section className="profile-details">
                    <h3>Details</h3>
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Location:</strong> {location}</p>
                </section>
                <section className="profile-posts">
                    <h3>Recent Posts</h3>
                    {posts.map((post, index) => (
                        <div className="post" key={index}>
                            <h4>{post.title}</h4>
                            <p>{post.content}</p>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
};

const userProfile = {
    imageUrl: 'profile-picture.jpg',
    name: 'John Doe',
    bio: 'This is the user\'s bio. It can be a short description about the user.',
    email: 'john.doe@example.com',
    location: 'New York, USA',
    posts: [
        { title: 'Post Title 1', content: 'This is the content of the first post.' },
        { title: 'Post Title 2', content: 'This is the content of the second post.' }
    ]
};

ReactDOM.render(<Profile {...userProfile} />, document.getElementById('root'));