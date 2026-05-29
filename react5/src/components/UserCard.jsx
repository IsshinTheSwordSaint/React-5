function UserCard({ name, role, avatarUrl, isOnline = false }) {
  return (
    <div className="user-card">
      <img src={avatarUrl} alt={name} />

      <h2>{name}</h2>

      <p>{role}</p>

      <span>{isOnline ? 'Online' : 'Offline'}</span>
    </div>
  );
}

export default UserCard;
