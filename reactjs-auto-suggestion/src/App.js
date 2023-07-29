import { useEffect, useRef, useState } from "react";

// Styles
import "./index.css";

// Services
import { getSuggestions } from "./services/searchedData";

function App() {
  const inputRef = useRef();
  const suggestionAreaRef = useRef();

  const [suggestionAreaVisible, setSuggestionAreaVisible] = useState(false);
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;

    setInput(value);
    makeApiCall(value);
  };

  const makeApiCall = async (query) => {
    try {
      const response = await getSuggestions(query);

      setList(response);
    } catch (error) {
      setList([]);

      console.error("something went wrong");
    }
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        e.target !== inputRef.current &&
        e.target !== suggestionAreaRef.current
      ) {
        setSuggestionAreaVisible(false);
      }
    });

    return () => {
      window.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="search"
        placeholder="search"
        id="search"
        onFocus={() => setSuggestionAreaVisible(true)}
        onChange={handleChange}
        value={input}
      />
      {suggestionAreaVisible && (
        <div id="suggestion-area" ref={suggestionAreaRef}>
          <ul>
            {list.map((element) => (
              <li onClick={() => setInput(element)}>{element}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
