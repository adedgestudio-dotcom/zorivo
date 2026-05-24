"use client";

export default function Home() {
  const copyText = (text, btnId) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        const btn = document.getElementById(btnId);
        btn?.classList.add("copied");
        setTimeout(() => btn?.classList.remove("copied"), 2000);
      })
      .catch(() => {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        const btn = document.getElementById(btnId);
        btn?.classList.add("copied");
        setTimeout(() => btn?.classList.remove("copied"), 2000);
      });
  };

  const saveContact = () => {
    // Simple direct download - works on all devices
    window.location.href = "/api/contact";
  };

  return (
    <>
      <div className="bg-glow"></div>
      <div className="dot-grid"></div>

      <div className="page">
        <div className="card">
          <div className="top-bar"></div>

          {/* Hero */}
          <div className="hero">
            <svg className="hero-bg" viewBox="0 0 500 500" fill="none">
              <polygon
                points="169.57,132.97 224.12,110.38 219.61,77.66 280.39,77.66 275.88,110.38 330.43,132.97 350.38,106.65 393.35,149.62 367.03,169.57 389.62,224.12 422.34,219.61 422.34,280.39 389.62,275.88 367.03,330.43 393.35,350.38 350.38,393.35 330.43,367.03 275.88,389.62 280.39,422.34 219.61,422.34 224.12,389.62 169.57,367.03 149.62,393.35 106.65,350.38 132.97,330.43 110.38,275.88 77.66,280.39 77.66,219.61 110.38,224.12 132.97,169.57 106.65,149.62 149.62,106.65"
                fill="none"
                stroke="#b8a4ff"
                strokeWidth="13"
                strokeLinejoin="round"
              />
              <polyline
                points="196,205 148,250 196,295"
                fill="none"
                stroke="#b8a4ff"
                strokeWidth="15"
                strokeLinec
                strokeLinecap="round"
              />
            </svg>

            <div className="badge">
              <span className="badge-dot"></span>Available for work
            </div>
            <div className="company-name">
              ZORIVO<span>.</span>
            </div>
            <div className="tagline">Digital Innovation Studio</div>
            <div className="divider"></div>
            <div className="person-name">Sarrah Bharmal</div>
            <div className="person-role">Founder &amp; Developer</div>
          </div>

          {/* Contacts */}
          <div className="contacts">
            {/* Phone */}
            <div className="contact-row">
              <a className="action-btn has-copy" href="tel:+919940611281">
                <div className="action-icon">
                  <svg viewBox="0 0 18 18" fill="none">
                    <path
                      d="M3 2.5h3l1.5 4-2 1.2s1 3.3 4.3 4.3l1.2-2L15 11.5v3c0 .3-.3.5-.5.5C6 15 2.5 8 2.5 3c0-.3.2-.5.5-.5Z"
                      stroke="#47ffe8"
                      strokeWidth="1.3"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="action-info">
                  <div className="action-label">Phone</div>
                  <div className="action-value">+91 99406 11281</div>
                </div>
                <button
                  id="copyPhone"
                  className="copy-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    copyText("+919940611281", "copyPhone");
                  }}
                  title="Copy number"
                >
                  <svg viewBox="0 0 16 16" fill="none">
                    <rect
                      x="5"
                      y="5"
                      width="8"
                      height="8"
                      rx="1.5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    />
                    <path
                      d="M3 11V3.5A.5.5 0 0 1 3.5 3H11"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="tooltip">Copied!</span>
                </button>
              </a>
            </div>

            {/* Email */}
            <div className="contact-row">
              <a
                className="action-btn has-copy"
                href="mailto:zorivoworks@gmail.com"
              >
                <div className="action-icon">
                  <svg viewBox="0 0 18 18" fill="none">
                    <rect
                      x="2.5"
                      y="4"
                      width="13"
                      height="10"
                      rx="2"
                      stroke="#b8a4ff"
                      strokeWidth="1.3"
                    />
                    <path
                      d="M2.5 6l6.5 4.5 6.5-4.5"
                      stroke="#b8a4ff"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="action-info">
                  <div className="action-label">Email</div>
                  <div className="action-value">zorivoworks@gmail.com</div>
                </div>
                <button
                  id="copyEmail"
                  className="copy-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    copyText("zorivoworks@gmail.com", "copyEmail");
                  }}
                  title="Copy email"
                >
                  <svg viewBox="0 0 16 16" fill="none">
                    <rect
                      x="5"
                      y="5"
                      width="8"
                      height="8"
                      rx="1.5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    />
                    <path
                      d="M3 11V3.5A.5.5 0 0 1 3.5 3H11"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="tooltip">Copied!</span>
                </button>
              </a>
            </div>

            {/* WhatsApp */}
            <a
              className="action-btn whatsapp"
              href="https://wa.me/919940611281?text=Hi%20Sarrah%2C%20I%20found%20your%20contact%20via%20Zorivo!"
              target="_blank"
              rel="noopener"
              style={{ width: "100%" }}
            >
              <div className="action-icon">
                <svg viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 1.39.38 2.69 1.04 3.8L1.5 16.5l3.83-1A7.45 7.45 0 0 0 9 16.5c4.14 0 7.5-3.36 7.5-7.5S13.14 1.5 9 1.5Z"
                    fill="rgba(37,211,102,0.15)"
                    stroke="#25d366"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M12.83 10.95c-.23-.11-1.33-.65-1.53-.73-.2-.07-.35-.11-.5.11-.15.23-.58.73-.71.88-.13.15-.26.17-.49.05-.23-.11-.95-.35-1.8-1.11-.67-.59-1.12-1.33-1.25-1.55-.13-.23-.01-.35.1-.46.1-.1.23-.26.34-.39.11-.13.15-.23.23-.38.07-.15.04-.28-.02-.39-.05-.11-.5-1.22-.69-1.67-.18-.43-.37-.37-.5-.38h-.43c-.15 0-.39.05-.59.28-.2.23-.78.77-.78 1.86 0 1.1.8 2.16.91 2.31.11.15 1.58 2.4 3.81 3.37.53.23.95.37 1.27.47.53.17 1.02.15 1.4.09.43-.07 1.33-.54 1.52-1.07.19-.52.19-.97.13-1.07-.06-.09-.2-.15-.43-.26Z"
                    fill="#25d366"
                  />
                </svg>
              </div>
              <div className="action-info">
                <div className="action-label">WhatsApp</div>
                <div className="action-value">Chat on WhatsApp</div>
              </div>
              <svg
                className="action-arrow"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M3 11L11 3M11 3H5M11 3v6"
                  stroke="#25d366"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Portfolio */}
            <a
              className="action-btn portfolio"
              href="https://zorivo.in"
              target="_blank"
              rel="noopener"
              style={{ width: "100%" }}
            >
              <div className="action-icon">
                <svg viewBox="0 0 18 18" fill="none">
                  <rect
                    x="2"
                    y="5"
                    width="14"
                    height="10"
                    rx="2"
                    stroke="#47ffe8"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M6 5V3.5A1.5 1.5 0 0 1 7.5 2h3A1.5 1.5 0 0 1 12 3.5V5"
                    stroke="#47ffe8"
                    strokeWidth="1.3"
                  />
                  <path d="M2 8h14" stroke="#47ffe8" strokeWidth="1.3" />
                </svg>
              </div>
              <div className="action-info">
                <div className="action-label">Portfolio</div>
                <div className="action-value">zorivo.in</div>
              </div>
              <svg
                className="action-arrow"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M3 11L11 3M11 3H5M11 3v6"
                  stroke="#47ffe8"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Save to Contacts */}
            <button
              className="action-btn save-contact"
              onClick={saveContact}
              style={{ width: "100%" }}
            >
              <div className="action-icon">
                <svg viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 2v10m0 0L6 9m3 3l3-3"
                    stroke="#b8a4ff"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 12v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2"
                    stroke="#b8a4ff"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="action-info">
                <div className="action-label">Save Contact</div>
                <div className="action-value">Add to your contacts</div>
              </div>
              <svg
                className="action-arrow"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M3 11L11 3M11 3H5M11 3v6"
                  stroke="#b8a4ff"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="footer">zorivo · digital innovation studio · 2025</div>
      </div>
    </>
  );
}
