import { useKeyState } from '../components/GameWrapper';
import { useState, useEffect } from 'react';
import './Game.css';

function Game() {
  const keyState = useKeyState();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // Game loop to update position
  useEffect(() => {
    const tick = () => {
      setPosition(prev => {
        const speed = keyState.Space ? 5 : 2;
        let x = prev.x;
        let y = prev.y;
        
        if (keyState.ArrowUp) y -= speed;
        if (keyState.ArrowDown) y += speed;
        if (keyState.ArrowLeft) x -= speed;
        if (keyState.ArrowRight) x += speed;
        
        return { x, y };
      });
    };
    
    const id = setInterval(tick, 16);
    return () => clearInterval(id);
  }, [keyState]);
  
  return (
    <div className="game">
      <div 
        className="player"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        {keyState.Space ? '🦸' : (
          keyState.ArrowUp || keyState.ArrowDown || 
          keyState.ArrowLeft || keyState.ArrowRight ? '🏃' : '🧍'
        )}
      </div>
    </div>
  );
}

export default Game;