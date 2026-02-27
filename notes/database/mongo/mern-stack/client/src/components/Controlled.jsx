import { useState } from "react";

const Controlled = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <h1>Controlled</h1>
      <input
        name="input"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Controlled;
