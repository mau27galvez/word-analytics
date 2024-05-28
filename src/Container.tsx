import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./textarea";

export default function Container() {
  const [text, setText] = useState("");
  const [warningMessage, setWarningMessage] = useState("");

  function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      newText = newText.replace("<script>", "");
      setWarningMessage("You can't use <script> in your text!");
    } else {
      setWarningMessage("");
    }

    setText(newText);
  }

  return (
    <main className="container">
      <Textarea
        value={text}
        error={warningMessage}
        onChange={handleTextChange}
       />
      <Stats wordsCount={text.split(" ").filter(Boolean).length} charactersCount={text.length} />
    </main>
  )
}
