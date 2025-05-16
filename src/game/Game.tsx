import { useKeyState } from "../components/GameWrapper";
import { useState, useEffect } from "react";
import "./Game.css";

function Game() {
  const { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Space } = useKeyState();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Game loop to update position
  useEffect(() => {
    const tick = () => {
      setPosition((prev) => {
        const speed = Space ? 5 : 2;
        let x = prev.x;
        let y = prev.y;

        if (ArrowUp) y -= speed;
        if (ArrowDown) y += speed;
        if (ArrowLeft) x -= speed;
        if (ArrowRight) x += speed;

        return { x, y };
      });
    };

    const id = setInterval(tick, 16);
    return () => clearInterval(id);
  }, [ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Space]);

  // Determine player emoji based on key state
  const isMoving = ArrowUp || ArrowDown || ArrowLeft || ArrowRight;
  const playerEmoji = Space ? "🦸" : isMoving ? "🏃" : "🧍";

  return (
    <div className="game">
      <div
        className="player"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        {playerEmoji}
      </div>
    </div>
  );
}

export default Game;
