import { useState, useEffect} from "react";
export default function RandomPassword() {
  let [copy, setCopy] = useState("Copy");
  const chars =
    "123456789990!@#$%^&*()`~qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM,./;'.,";
  const passwordLength = 20;
  let password = "";
  function generatePassword() {
    password = "";
    for (let i = 0; i < passwordLength; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }
    setRandomPassword(password);
  }
  let [randomPassword, setRandomPassword] = useState("");
  
  useEffect(() => {
    generatePassword()
  }, [])
  return (
    <>
      <div className="RandomPassword">
        <button
          id="buttonn"
          onClick={() => {
            generatePassword();
            setCopy("Copy");
          }}
        >
          Generate password
        </button>
        <p>{randomPassword}</p>
        <button
          onClick={() => {
            navigator.clipboard.writeText(randomPassword);
            setCopy("Copied");
          }}
        >
          {copy}
        </button>
      </div>
    </>
  );
}
