"use client";
import RandomTask from "./RandonTask/RandomTask.jsx";
import Sidebar from "/src/app/Sidebar/Sidebar.jsx";

export default function Home() {
  return (
    <>
      <main className="main-container">
        <Sidebar />
        <RandomTask />
      </main>
    </>
  );
}
