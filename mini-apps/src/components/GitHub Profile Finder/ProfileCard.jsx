function ProfileCard({ userData }) {

    const { avatar_url, followers, following, login, name, bio, html_url, created_at, public_repos } = userData;
    const createDate = new Date(created_at);

    return (
        <div className="profile-card">
            <div className="intro">
                <img src={avatar_url} alt={login} className="avatar" />
                <h2>{name || login}</h2>
                <p className="username">@{login}</p>
                <p className="bio">{bio || "No bio available"}</p>
                <a href={html_url} target="_blank" rel="noreferrer" className="profile-link">
                    View Profile
                </a>
            </div>

            <div className="profile-content">
                <div className="stat">
                    <h3>{followers}</h3>
                    <p>Followers</p>
                </div>
                <div className="stat">
                    <h3>{following}</h3>
                    <p>Following</p>
                </div>
                <div className="stat">
                    <h3>{public_repos}</h3>
                    <p>Repos</p>
                </div>
            </div>

            <div className="joined">
                Joined on {createDate.toDateString()}
            </div>
        </div>
    );
}

export default ProfileCard;
