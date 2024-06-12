import './Profile.css';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className="prof-container">
      <div>
        <img className="prof-img" src={avatar} alt="User avatar" />
        <p className="prof-username">{username}</p>
        <p className="prof-tag">{tag}</p>
        <p className="prof-location">{location}</p>
      </div>

      <ul className="stat-list">
        <li className="stat-item">
          <span className="followers-title">Followers</span>
          <span className="followers-num">{followers}</span>
        </li>
        <li className="stat-item">
          <span className="views-title">Views</span>
          <span className="views-num">{views}</span>
        </li>
        <li className="stat-item">
          <span className="likes-title">Likes</span>
          <span className="likes-num">{likes}</span>
        </li>
      </ul>
    </div>
  );
}
