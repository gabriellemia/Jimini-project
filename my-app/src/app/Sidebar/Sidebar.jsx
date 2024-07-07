"use client";
import "./Sidebar.css";
import Image from "next/image";
import profile from "/public/profile-img.png";

function Sidebar() {
  return (
    <main className="sidebar-section">
      <section className="profile-section">
        <h4 className="user-name">Pinochia</h4>
        <Image src={profile} alt="profile image" width={200} height={200} />
        <h4 className="xp">75xp</h4>
      </section>

      <section className="sidebar-items">
        <h2>Home</h2>
        <h2>Achievements</h2>
        <h2>Quests</h2>
        <h2>Notifications</h2>
        <h2>Chat</h2>
        <h2>Calendar</h2>
        <h2>Guilds</h2>
        <h2>Power Ups</h2>
      </section>
    </main>
  );
}

export default Sidebar;
