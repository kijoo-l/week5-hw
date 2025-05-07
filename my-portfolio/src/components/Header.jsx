export default function Header({ tab, setTab }) {
    const tabs = ["about", "activities", "contact"];
    return (
      <ul className="list">
        {tabs.map((t) => (
          <li key={t}>
            <a
              onClick={() => setTab(t)}
              className={tab === t ? "active-tab" : ""}
              style={{ cursor: "pointer" }}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    );
  }