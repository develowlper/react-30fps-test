import { useState, useContext } from "react";
import { StoryContext } from '../Story';

export function Messages() {
  const story = useContext(StoryContext);

  const [bot, setBot] = useState(["hello", "hi"]);
  const [user, setUser] = useState(["hello", "hi"]);
  
  return [bot, user, story];
}

export default Messages;
