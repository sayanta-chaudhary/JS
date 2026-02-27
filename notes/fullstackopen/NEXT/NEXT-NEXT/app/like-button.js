"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(null);

  function handleClick() {
    setLikes((prev) => prev + 1);
  }

  return <button onClick={handleClick}>Like {likes}</button>;
}
