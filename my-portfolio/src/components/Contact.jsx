import { useState } from "react";

export default function Contact() {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="contact_container">
      <a href="/" className="noline">
        <h2>Contact</h2>
      </a>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/activities">Activities</a></li>
        </ul>
      </nav>

      <section className="container1">
        <h3>Contact</h3>
        <hr />
        <div className="contact-card">
          <div className="contact-item">
            <img src="/phone.png" width="20" alt="Phone Icon" className="icon" />
            <span>010-4627-0592</span>
          </div>
          <div className="contact-item">
            <img src="/mail.png" width="30" alt="Email Icon" className="icon" />
            <span>kijoo1128@yonsei.ac.kr</span>
          </div>

        </div>
      </section>
    </div>
  );
}
