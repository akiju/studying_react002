import React, { useState } from "react";
import { OutoutMessage } from "./components/ColorfulMessage";

const App = () => {
  const [flg, setFlag] = useState(true);

  const OnClickButton = () => {
    alert("メッセージ");
  };

  const OnClickOnOffButton = () => {
    setFlag(!flg);
  };

  return (
    <>
      <h1>はろー</h1>
      <OutoutMessage color="red" message="わしじゃ？" />
      <OutoutMessage color="red">"わしじゃ？" </OutoutMessage>
      <p>俺だよ</p>
      <button onClick={OnClickButton}>ボタン</button>
      <button onClick={OnClickOnOffButton}>on/off</button>
      {flg && <p>がががががががが</p>}
    </>
  );
};

export default App;
