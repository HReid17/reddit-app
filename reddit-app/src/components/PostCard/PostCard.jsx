import "../PostCard/PostCard.css"

export default function PostCard() {

    return (
        <article className="post-card">
            <div className="post-wrapper">
                {/* Voting Section */}
                <aside className="post-votes">
                    <button className="upvote">⬆️</button>
                    <p className="votes-total">127</p>
                    <button className="downvote">⬇️</button>
                </aside>

                {/* Main Post Content */}
                <div className="post-content">
                    <h3 className="post-title">Caption</h3>

                    <figure className="post-image-container">
                        <p>[Image placeholder]</p>
                    </figure>

                    <footer className="post-footer">
                        <div className="author-details">
                            <span className="profile-pic">[profile pic]</span>
                            <span className="username">username</span>
                            <time dateTime="2025-09-01T12:00:00Z">16 hours ago</time>
                        </div>

                        <div className="post-comments">
                            <button>💬 42 Comments</button>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
}