import './App.css'

function App() {
  return (
    <>
      <div className="cursor" id="cur" />
      <div className="cursor-ring" id="curRing" />

      <nav id="mainNav">
        <div className="logo-wrap">
          <div className="logo-main">dejoule</div>
          <div className="logo-sub">Intelligence meets impact</div>
        </div>
        <ul className="nav-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Operational Excellence</a></li>
          <li><a href="#">Solutions ▾</a></li>
          <li><a href="#">AFDD</a></li>
        </ul>
        <div className="nav-right">
          <a href="#" className="nav-btn">Let's connect</a>
        </div>
      </nav>

      <section className="hero" id="hero">
        <div className="hero-bg" />
        <div className="hero-grid-lines" />
        <div className="hero-content">
          <div className="hero-tag" id="htag">
            <span className="dot-pulse" />
            AFDD Powered by Smart Alerts
          </div>
          <h1 className="hero-h1" id="hh1">
            Making alerts <strong>relevant,<br />personalized,</strong> and <strong>directly actionable</strong>
          </h1>
          <p className="hero-sub" id="hSub">
            Intelligent alerts that tell your team not just what went wrong — but exactly how to fix it.
          </p>
          <div className="hero-cta-row" id="hCta">
            <a href="#" className="btn-primary">See it in action</a>
            <a href="#" className="btn-ghost">Learn more</a>
          </div>

          <div className="hero-phone-wrap" id="heroPhone">
            <div className="hero-notif hero-notif-left" id="hNotif1">
              <div className="hn-source"><span className="hn-source-dot" />WhatsApp · Smart alert</div>
              <div className="hn-title">4F NW CORRIDOR AHU OVERCOOLED</div>
              <div className="hn-body">Area temperature is below setpoint while valve is at 100%. Immediate inspection required.</div>
            </div>
            <div className="hero-notif hero-notif-right" id="hNotif2">
              <div className="hn-source"><span className="hn-source-dot" />Mail · Recipe Alert</div>
              <div className="hn-title">CHILLER 2 250TR TRIPPED (ID:3657)</div>
              <div className="hn-body">High discharge pressure caused by insufficient cooling tower operation detected.</div>
            </div>

            <svg viewBox="0 0 320 580" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
              <defs>
                <linearGradient id="wg" x1="86" y1="66" x2="264" y2="434" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#E07060" />
                  <stop offset="100%" stopColor="#C05040" />
                </linearGradient>
              </defs>
              <path d="M98 395 Q88 478 98 548 Q118 588 158 590 Q198 590 228 568 Q258 540 248 490 L238 395 Z" fill="#F2BAA0" />
              <path d="M128 405 Q123 478 128 538 Q138 568 158 574 Q178 574 188 558 L193 405 Z" fill="#E8AC8A" />
              <ellipse cx="162" cy="495" rx="41" ry="25" fill="#EDAB88" />
              <ellipse cx="208" cy="516" rx="35" ry="21" fill="#E8A080" />
              <rect x="82" y="58" width="188" height="378" rx="28" fill="#181818" />
              <rect x="84" y="60" width="184" height="374" rx="26" fill="#202020" />
              <rect x="88" y="64" width="176" height="366" rx="22" fill="url(#wg)" />
              <g opacity=".16" stroke="#fff" strokeWidth="1.5" fill="none">
                <rect x="106" y="298" width="17" height="62" rx="3" />
                <rect x="129" y="318" width="17" height="42" rx="3" />
                <rect x="152" y="288" width="17" height="72" rx="3" />
                <rect x="175" y="308" width="17" height="52" rx="3" />
                <rect x="198" y="328" width="17" height="32" rx="3" />
                <rect x="221" y="303" width="17" height="57" rx="3" />
                <line x1="98" y1="363" x2="250" y2="363" />
              </g>
              <rect x="144" y="68" width="64" height="20" rx="10" fill="#181818" />
              <text x="176" y="128" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="36" fontWeight="700" fill="white">11:11</text>
              <text x="176" y="150" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="12" fontWeight="300" fill="rgba(255,255,255,.78)">Thursday, July 31</text>
              <g id="hn1" opacity="0">
                <rect x="94" y="162" width="164" height="57" rx="12" fill="rgba(255,255,255,.17)" stroke="rgba(255,255,255,.22)" strokeWidth=".5" />
                <text x="103" y="176" fontFamily="Inter,sans-serif" fontSize="7.5" fill="rgba(255,255,255,.65)">MESSAGES</text>
                <text x="103" y="190" fontFamily="Inter,sans-serif" fontSize="8.5" fontWeight="700" fill="#FF7055">RECIPE ALERT</text>
                <text x="103" y="202" fontFamily="Inter,sans-serif" fontSize="7.5" fontWeight="300" fill="rgba(255,255,255,.85)">The 280 TR chiller has tripped and alarm</text>
                <text x="103" y="213" fontFamily="Inter,sans-serif" fontSize="7.5" fontWeight="300" fill="rgba(255,255,255,.85)">code is 1. Check plant room...</text>
                <text x="244" y="176" textAnchor="end" fontFamily="Inter,sans-serif" fontSize="7.5" fill="rgba(255,255,255,.45)">now</text>
              </g>
              <g id="hn2" opacity="0">
                <rect x="94" y="225" width="164" height="57" rx="12" fill="rgba(255,255,255,.17)" stroke="rgba(255,255,255,.22)" strokeWidth=".5" />
                <text x="103" y="239" fontFamily="Inter,sans-serif" fontSize="7.5" fill="rgba(255,255,255,.65)">WHATSAPP</text>
                <text x="103" y="253" fontFamily="Inter,sans-serif" fontSize="8.5" fontWeight="700" fill="#FF7055">4F NW CORRIDOR AHU OVERCOOLED</text>
                <text x="103" y="265" fontFamily="Inter,sans-serif" fontSize="7.5" fontWeight="300" fill="rgba(255,255,255,.85)">Hello Rahul, 4F NW Corridor area is</text>
                <text x="103" y="276" fontFamily="Inter,sans-serif" fontSize="7.5" fontWeight="300" fill="rgba(255,255,255,.85)">overcooled where the area is...</text>
                <text x="244" y="239" textAnchor="end" fontFamily="Inter,sans-serif" fontSize="7.5" fill="rgba(255,255,255,.45)">2m ago</text>
              </g>
              <g id="hn3" opacity="0">
                <rect x="94" y="288" width="164" height="57" rx="12" fill="rgba(255,255,255,.17)" stroke="rgba(255,255,255,.22)" strokeWidth=".5" />
                <text x="103" y="302" fontFamily="Inter,sans-serif" fontSize="7.5" fill="rgba(255,255,255,.65)">MAIL</text>
                <text x="103" y="316" fontFamily="Inter,sans-serif" fontSize="8.5" fontWeight="700" fill="#FF7055">CHILLER 2 250TR TRIPPED (ID:3657)</text>
                <text x="103" y="328" fontFamily="Inter,sans-serif" fontSize="7.5" fontWeight="300" fill="rgba(255,255,255,.85)">Hello Rahul, Chiller dripped due to high</text>
                <text x="103" y="339" fontFamily="Inter,sans-serif" fontSize="7.5" fontWeight="300" fill="rgba(255,255,255,.85)">discharge pressure caused...</text>
                <text x="244" y="302" textAnchor="end" fontFamily="Inter,sans-serif" fontSize="7.5" fill="rgba(255,255,255,.45)">1m ago</text>
              </g>
              <rect x="148" y="425" width="56" height="4" rx="2" fill="rgba(255,255,255,.38)" />
            </svg>
          </div>
        </div>
        <div className="stats-bar" id="statsBar">
          <div className="stat-item">
            <div className="stat-num" data-count="40"><span id="s1">0</span><span>%</span></div>
            <div className="stat-label">Energy Savings</div>
          </div>
          <div className="stat-div" />
          <div className="stat-item">
            <div className="stat-num" data-count="85"><span id="s2">0</span><span>%</span></div>
            <div className="stat-label">Alert Accuracy</div>
          </div>
          <div className="stat-div" />
          <div className="stat-item">
            <div className="stat-num"><span>24</span><span>/7</span></div>
            <div className="stat-label">Monitoring</div>
          </div>
          <div className="stat-div" />
          <div className="stat-item">
            <div className="stat-num"><span id="s4">0</span><span>+</span></div>
            <div className="stat-label">Buildings Connected</div>
          </div>
        </div>
      </section>

      <div className="ticker-wrap">
        <div className="ticker-track">
          <span className="ticker-item">Smart Building Automation <span className="sep">·</span></span>
          <span className="ticker-item">AFDD-Powered Alerts <span className="sep">·</span></span>
          <span className="ticker-item">Chiller Plant Optimization <span className="sep">·</span></span>
          <span className="ticker-item">Energy Intelligence <span className="sep">·</span></span>
          <span className="ticker-item">Real-Time Monitoring <span className="sep">·</span></span>
          <span className="ticker-item">Joule Recipes <span className="sep">·</span></span>
          <span className="ticker-item">Root Cause Analysis <span className="sep">·</span></span>
          <span className="ticker-item">Multi-Channel Delivery <span className="sep">·</span></span>
          <span className="ticker-item">Smart Building Automation <span className="sep">·</span></span>
          <span className="ticker-item">AFDD-Powered Alerts <span className="sep">·</span></span>
          <span className="ticker-item">Chiller Plant Optimization <span className="sep">·</span></span>
          <span className="ticker-item">Energy Intelligence <span className="sep">·</span></span>
          <span className="ticker-item">Real-Time Monitoring <span className="sep">·</span></span>
          <span className="ticker-item">Joule Recipes <span className="sep">·</span></span>
          <span className="ticker-item">Root Cause Analysis <span className="sep">·</span></span>
          <span className="ticker-item">Multi-Channel Delivery <span className="sep">·</span></span>
        </div>
      </div>

      <div className="phone-scroll-section" id="pss">
        <div className="phone-scroll-sticky" id="psticky">
          <div className="scroll-left" id="sLeft">
            <div className="stag">Smart Alerts by DeJoule</div>
            <h2 className="scroll-h2">Redefining what <strong>alerts</strong><br />should do for you</h2>
            <p className="scroll-p">Operations teams shouldn't be bombarded with irrelevant, static alerts that increase overhead. Smart Alerts by DeJoule redefines how alerts speak to you — personalized, actionable, and like an intelligent teammate.</p>
            <div className="feat-rows">
              <div className="feat-row" id="fr1">
                <h3>Role-based &amp; SLA-driven</h3>
                <p>Alerts that match your responsibility without clutter. One-click subscriptions and SLA-based escalations save time and make everyone efficient.</p>
              </div>
              <div className="feat-row" id="fr2">
                <h3>Root-cause analysis</h3>
                <p>Get alerts that tell you the root cause and history of the problem, based on real-time analysis of equipment and building operations.</p>
              </div>
              <div className="feat-row" id="fr3">
                <h3>Actionable solutions</h3>
                <p>Replace reactive firefighting with direct resolution actions to prevent failures and keep your building one step ahead.</p>
              </div>
              <div className="feat-row" id="fr4">
                <h3>Multi-channel delivery</h3>
                <p>Insights delivered wherever your team works — WhatsApp, SMS, or email — not buried in a BMS dashboard.</p>
              </div>
            </div>
          </div>

          <div className="phone-pin" id="phonePinned">
            <svg viewBox="0 0 320 580" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', filter: 'drop-shadow(0 48px 96px rgba(0,0,0,.25))' }}>
              <defs>
                <linearGradient id="wg2" x1="86" y1="66" x2="264" y2="434" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#E07060" />
                  <stop offset="100%" stopColor="#C05040" />
                </linearGradient>
              </defs>
              <path d="M98 395 Q88 478 98 548 Q118 588 158 590 Q198 590 228 568 Q258 540 248 490 L238 395 Z" fill="#F2BAA0" />
              <path d="M128 405 Q123 478 128 538 Q138 568 158 574 Q178 574 188 558 L193 405 Z" fill="#E8AC8A" />
              <ellipse cx="162" cy="495" rx="41" ry="25" fill="#EDAB88" />
              <ellipse cx="208" cy="516" rx="35" ry="21" fill="#E8A080" />
              <rect x="82" y="58" width="188" height="378" rx="28" fill="#181818" />
              <rect x="84" y="60" width="184" height="374" rx="26" fill="#202020" />
              <rect x="88" y="64" width="176" height="366" rx="22" fill="url(#wg2)" />
              <g opacity=".16" stroke="#fff" strokeWidth="1.5" fill="none">
                <rect x="106" y="298" width="17" height="62" rx="3" />
                <rect x="129" y="318" width="17" height="42" rx="3" />
                <rect x="152" y="288" width="17" height="72" rx="3" />
                <rect x="175" y="308" width="17" height="52" rx="3" />
                <rect x="198" y="328" width="17" height="32" rx="3" />
                <rect x="221" y="303" width="17" height="57" rx="3" />
                <line x1="98" y1="363" x2="250" y2="363" />
              </g>
              <rect x="144" y="68" width="64" height="20" rx="10" fill="#181818" />
              <text x="176" y="128" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="36" fontWeight="700" fill="white">11:11</text>
              <text x="176" y="150" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="12" fontWeight="300" fill="rgba(255,255,255,.78)">Thursday, July 31</text>
              <rect x="94" y="162" width="164" height="57" rx="12" fill="rgba(255,255,255,.17)" stroke="rgba(255,255,255,.22)" strokeWidth=".5" />
              <text x="103" y="176" fontFamily="Inter,sans-serif" fontSize="7.5" fill="rgba(255,255,255,.65)">MESSAGES</text>
              <text x="103" y="190" fontFamily="Inter,sans-serif" fontSize="8.5" fontWeight="700" fill="#FF7055">RECIPE ALERT</text>
              <text x="103" y="202" fontFamily="Inter,sans-serif" fontSize="7.5" fontWeight="300" fill="rgba(255,255,255,.85)">The 280 TR chiller has tripped and alarm</text>
              <text x="103" y="213" fontFamily="Inter,sans-serif" fontSize="7.5" fontWeight="300" fill="rgba(255,255,255,.85)">code is 1. Check plant room conditions...</text>
              <text x="244" y="176" textAnchor="end" fontFamily="Inter,sans-serif" fontSize="7.5" fill="rgba(255,255,255,.45)">now</text>
              <rect x="94" y="225" width="164" height="57" rx="12" fill="rgba(255,255,255,.17)" stroke="rgba(255,255,255,.22)" strokeWidth=".5" />
              <text x="103" y="239" fontFamily="Inter,sans-serif" fontSize="7.5" fill="rgba(255,255,255,.65)">WHATSAPP</text>
              <text x="103" y="253" fontFamily="Inter,sans-serif" fontSize="8.5" fontWeight="700" fill="#FF7055">4F NW CORRIDOR AHU OVERCOOLED</text>
              <text x="103" y="265" fontFamily="Inter,sans-serif" fontSize="7.5" fontWeight="300" fill="rgba(255,255,255,.85)">Hello Rahul, 4F NW Corridor area is</text>
              <text x="103" y="276" fontFamily="Inter,sans-serif" fontSize="7.5" fontWeight="300" fill="rgba(255,255,255,.85)">overcooled where the area is...</text>
              <text x="244" y="239" textAnchor="end" fontFamily="Inter,sans-serif" fontSize="7.5" fill="rgba(255,255,255,.45)">2m ago</text>
              <rect x="94" y="288" width="164" height="57" rx="12" fill="rgba(255,255,255,.17)" stroke="rgba(255,255,255,.22)" strokeWidth=".5" />
              <text x="103" y="302" fontFamily="Inter,sans-serif" fontSize="7.5" fill="rgba(255,255,255,.65)">MAIL</text>
              <text x="103" y="316" fontFamily="Inter,sans-serif" fontSize="8.5" fontWeight="700" fill="#FF7055">CHILLER 2 250TR TRIPPED (ID:3657)</text>
              <text x="103" y="328" fontFamily="Inter,sans-serif" fontSize="7.5" fontWeight="300" fill="rgba(255,255,255,.85)">Hello Rahul, Chiller dripped due to high</text>
              <text x="103" y="339" fontFamily="Inter,sans-serif" fontSize="7.5" fontWeight="300" fill="rgba(255,255,255,.85)">discharge pressure caused...</text>
              <text x="244" y="302" textAnchor="end" fontFamily="Inter,sans-serif" fontSize="7.5" fill="rgba(255,255,255,.45)">1m ago</text>
              <rect x="148" y="425" width="56" height="4" rx="2" fill="rgba(255,255,255,.38)" />
            </svg>

            <div className="ac" id="acL" style={{ left: '-268px', top: '10%' }}>
              <div className="ac-head">
                <div className="ac-icon">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1L1 10.5h10L6 1z" fill="rgba(192,57,43,.2)" stroke="#C0392B" strokeWidth="1.2" />
                    <text x="6" y="9" textAnchor="middle" fontSize="5" fontWeight="800" fill="#C0392B" fontFamily="sans-serif">!</text>
                  </svg>
                </div>
                <span className="ac-lbl">Smart alert · DeJoule</span>
              </div>
              <div className="ac-title">4F NW CORRIDOR AHU AREA OVERCOOLED</div>
              <div className="ac-body">Area temperature is below setpoint while the valve is at 100%. Root cause: chilled water valve stuck open.</div>
            </div>
            <div className="ac" id="acT" style={{ right: '-268px', top: '-4%' }}>
              <div className="ac-head">
                <div className="ac-icon">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1L1 10.5h10L6 1z" fill="rgba(192,57,43,.2)" stroke="#C0392B" strokeWidth="1.2" />
                    <text x="6" y="9" textAnchor="middle" fontSize="5" fontWeight="800" fill="#C0392B" fontFamily="sans-serif">!</text>
                  </svg>
                </div>
                <span className="ac-lbl">Smart alert · DeJoule</span>
              </div>
              <div className="ac-title">CHILLER 2 250TR SJPL TRIPPED</div>
              <div className="ac-body">Chiller tripped due to high discharge pressure caused by insufficient cooling tower operation.</div>
            </div>
            <div className="ac" id="acR" style={{ right: '-268px', top: '44%' }}>
              <div className="ac-head">
                <div className="ac-icon">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1L1 10.5h10L6 1z" fill="rgba(192,57,43,.2)" stroke="#C0392B" strokeWidth="1.2" />
                    <text x="6" y="9" textAnchor="middle" fontSize="5" fontWeight="800" fill="#C0392B" fontFamily="sans-serif">!</text>
                  </svg>
                </div>
                <span className="ac-lbl">Smart alert · DeJoule</span>
              </div>
              <div className="ac-title">CHILLED WATER PUMP 1 MAINTENANCE REQUIRED</div>
              <div className="ac-body">Low power consumption detected. Possibly due to blocked strainer — inspect pump immediately.</div>
            </div>
          </div>
        </div>
      </div>

      <section className="metrics-strip">
        <div className="metric-cell reveal">
          <div className="metric-num"><span>40</span><span>%</span></div>
          <div className="metric-label">Average energy savings across deployments</div>
        </div>
        <div className="metric-cell reveal">
          <div className="metric-num"><span>2</span><span>min</span></div>
          <div className="metric-label">Mean time to alert after fault detection</div>
        </div>
        <div className="metric-cell reveal">
          <div className="metric-num"><span>500</span><span>+</span></div>
          <div className="metric-label">Fault patterns recognized by the AI engine</div>
        </div>
        <div className="metric-cell reveal">
          <div className="metric-num"><span>99</span><span><span style={{ color: 'var(--red)' }}>.</span>5%</span></div>
          <div className="metric-label">System uptime for monitoring infrastructure</div>
        </div>
      </section>

      <section className="val-sec">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="val-tag">Return on Intelligence</div>
          <div className="val-grid">
            <h2 className="val-h2">Smarter buildings don't just function. <strong>They deliver value.</strong></h2>
            <div className="val-right">When systems think, buildings give back. DeJoule turns every minute into measurable gain across <strong>energy, uptime, and user satisfaction.</strong><br /><br />Our platform pays for itself — typically within 6 months of deployment — through reduced energy waste, eliminated overtime, and fewer emergency repairs.</div>
          </div>
          <div className="acc-list" id="accList">
            <div className="acc-item" id="a1">
              <div className="acc-hdr">
                <h3><span className="acc-dot-sm" />Smart Analytics &amp; Reporting</h3>
                <div className="acc-plus">+</div>
              </div>
              <div className="acc-body" id="a1b">Real-time energy dashboards, custom KPI tracking, and automated reports that give you full visibility into building performance — without manual data wrangling. Schedule reports to arrive in your inbox every Monday morning.</div>
            </div>
            <div className="acc-item" id="a2">
              <div className="acc-hdr">
                <h3><span className="acc-dot-sm" />Smart Alerts</h3>
                <div className="acc-plus">+</div>
              </div>
              <div className="acc-body" id="a2b">Role-based, SLA-driven alerts with root cause analysis and actionable recommendations. Delivered via WhatsApp, SMS, email — wherever your team works. No more noise, just signal.</div>
            </div>
            <div className="acc-item" id="a3">
              <div className="acc-hdr">
                <h3><span className="acc-dot-sm" />Facility-Wide Monitoring &amp; Control</h3>
                <div className="acc-plus">+</div>
              </div>
              <div className="acc-body" id="a3b">Full SCADA-level visibility across all equipment — chillers, AHUs, pumps — with real-time telemetry and remote control from a single interface. One screen. Everything in it.</div>
            </div>
            <div className="acc-item" id="a4">
              <div className="acc-hdr">
                <h3><span className="acc-dot-sm" />Intelligent Automation</h3>
                <div className="acc-plus">+</div>
              </div>
              <div className="acc-body" id="a4b">Your building's intelligence engine. Joule Recipes automate routine actions, dynamic orchestration balances loads, and adaptive schedules keep performance optimal 24/7 — without human intervention.</div>
            </div>
          </div>
        </div>
      </section>

      <div className="auto-wrap" id="autoWrap">
        <div className="auto-left" id="autoLeft">
          <div className="auto-tag">Intelligent Automation</div>
          <h2 className="auto-h2">Your building's intelligence engine. Learning, adapting, and acting in real time.</h2>
          <p className="auto-p">Let's bring your systems to life with automation that evolves by the minute, making data-driven decisions to optimize performance without compromise.</p>
          <div className="auto-rows">
            <div className="auto-row"><span>Joule Recipes for routine actions</span><em>+</em></div>
            <div className="auto-row"><span>Dynamic equipment orchestration</span><em>+</em></div>
            <div className="auto-row"><span>Balanced equipment utilization</span><em>+</em></div>
          </div>
          <a href="#" className="see-btn">
            See how it works
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <div className="ui-card" id="uiCard">
          <div className="ui-bar">
            <div className="ui-circle" style={{ background: '#ff5f57' }} />
            <div className="ui-circle" style={{ background: '#ffbd2e' }} />
            <div className="ui-circle" style={{ background: '#28c840' }} />
            <div className="ui-step-row">
              <div className="ui-snum on">1</div>
              <div className="ui-snum">2</div>
              <div className="ui-snum">3</div>
            </div>
            <span style={{ fontSize: '10px', color: '#aaa', marginLeft: 'auto', fontWeight: 500 }}>Create Action Recipe</span>
          </div>
          <div className="ui-body">
            <div style={{ fontSize: '10px', color: 'var(--red)', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '.04em' }}>
              Step 1: Basic Details &amp; Involved Users
            </div>
            <div className="ui-label">Recipe Title *</div>
            <input className="ui-field" type="text" defaultValue="AHU Turn ON" readOnly />
            <div className="ui-label">Recipe Description *</div>
            <textarea className="ui-field" rows={2} defaultValue="Turn AHU ON at given schedule" readOnly style={{ resize: 'none' }} />
            <div className="ui-label">Select Recipe Type *</div>
            <div className="ui-chips">
              <span className="chip on">State Retention</span>
              <span className="chip">Setpoint</span>
              <span className="chip">Frequency Push</span>
              <span className="chip">Run Hour</span>
              <span className="chip">Actuator Valve</span>
            </div>
            <div className="ui-chips"><span className="chip">Tonnage Injection</span><span className="chip">Miscellaneous</span></div>
            <div className="ui-label">Running Interval (Minutes) *</div>
            <input className="ui-field" type="text" defaultValue="Running interval: minutes" readOnly />
          </div>
        </div>
      </div>

      <section className="cta-sec">
        <div className="cta-eyebrow" id="ctaEye">Ready to get started?</div>
        <h2 className="cta-h2" id="ctaH">Let's unlock the <strong>peak performance</strong> and <strong>efficiency</strong> of your building.</h2>
        <a href="#" className="cta-link" id="ctaA">
          <span className="bl">Let's</span>&nbsp;connect
          <span className="arrow-icon">→</span>
        </a>
      </section>

      <footer>
        <div className="ft-grid">
          <div>
            <div className="ft-logo-main">dejoule</div>
            <div className="ft-logo-sub">Intelligence meets impact</div>
            <p className="ft-tagline">Transforming buildings into intelligent assets that save energy, prevent failures, and deliver measurable ROI.</p>
          </div>
          <div className="ft-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">Operational Excellence</a></li>
              <li><a href="#">A Day in a Building</a></li>
              <li><a href="#">Smart Alerts</a></li>
              <li><a href="#">Analytics &amp; Reporting</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </div>
          <div className="ft-col">
            <h4>Solutions</h4>
            <ul>
              <li><a href="#">Full-Stack BMS</a></li>
              <li><a href="#">Chiller Plant Optimization</a></li>
              <li><a href="#">AFDD Platform</a></li>
              <li><a href="#">Joule Recipes</a></li>
            </ul>
          </div>
          <div className="ft-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">X.com</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="ft-bottom">
          <span>© 2025 DeJoule. All rights reserved.</span>
          <div className="ft-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
