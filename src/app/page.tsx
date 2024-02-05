"use client";
import CommaConverter from "@/lib/utils/commaCoverter";
import StringDateConverter from "@/lib/utils/stringDateCoverter";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState(CommaConverter("1232130"));
  const now = new Date();

  console.log(now);
  return (
    <main>
      <div>예산</div>
      <div>{state}</div>
      <div>{StringDateConverter(now)}</div>
    </main>
  );
}
