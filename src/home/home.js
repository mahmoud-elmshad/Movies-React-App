import React, { useContext } from "react";
import { languageContext } from "../contexts/language";

export default function Home() {
  const { lang, setLanguage } = useContext(languageContext);
  return (
    <>
      <div>Language in Context is : {lang}</div>
      <div>home</div>
    </>
  );
}
