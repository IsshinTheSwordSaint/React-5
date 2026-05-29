import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import UserCard from './components/UserCard.jsx';
import Button from './components/Button.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="users">
        <UserCard
          name="Sajmon Wlasi"
          role="Zlodziej rent"
          avatarUrl="https://ocdn.eu/pulscms-transforms/1/Rtkk9kpTURBXy9iNDcwMThiYzBmMzAzOWU4MjI0MzllYTIyMDFhYmQ4MS5wbmeSlQMAE80EZc0CeJMFzQQOzQJI3gABoTAF"
          isOnline={true}
        />

        <UserCard
          name="Mankutov"
          role="Piate zero"
          avatarUrl="https://ocdn.eu/pulscms-transforms/1/Rtkk9kpTURBXy9iNDcwMThiYzBmMzAzOWU4MjI0MzllYTIyMDFhYmQ4MS5wbmeSlQMAE80EZc0CeJMFzQQOzQJI3gABoTAF"
        />

        <UserCard
          name="Dejvid Aroł"
          role="Chill guy"
          avatarUrl="https://ocdn.eu/pulscms-transforms/1/Rtkk9kpTURBXy9iNDcwMThiYzBmMzAzOWU4MjI0MzllYTIyMDFhYmQ4MS5wbmeSlQMAE80EZc0CeJMFzQQOzQJI3gABoTAF"
          isOnline={true}
        />

        <div className="container">
          {/* primary */}
          <Button label="Tung Tung Sahur mode" variant="primary" size="sm" />
          <Button label="Fabryka jaboli start" variant="primary" size="md" />
          <Button label="Sigma launch" variant="primary" size="lg" />

          {/* secondary */}
          <Button label="Skibidi backup" variant="secondary" size="sm" />
          <Button label="Bober system" variant="secondary" size="md" />
          <Button label="Memowy panel" variant="secondary" size="lg" />

          {/* danger */}
          <Button label="Reset świata" variant="danger" size="sm" />
          <Button label="Tryb chaosu" variant="danger" size="md" />
          <Button label="Awaryjne wyłączenie" variant="danger" size="lg" />

          {/* disabled */}
          <Button label="Zablokowany NPC" disabled />
        </div>
      </div>
    </>
  );
}

export default App;
