import './App.css';
import { useRef } from "react";

function App() {
  const ref = useRef(null);

  const handleChange = event => {
    if (event?.target?.files && event?.target?.files.length > 0) {
      const file = event?.target?.files[0];
      const fileSize = file.size / 1024 / 1024;
      if (fileSize > 10) {
        alert("파일 크기가 10MB를 초과합니다.");
      }
    }
  }

  return (
    <div className="App">
      <input type="file" ref={ref} onChange={e => handleChange(e)} />
    </div>
  );
}

export default App;
