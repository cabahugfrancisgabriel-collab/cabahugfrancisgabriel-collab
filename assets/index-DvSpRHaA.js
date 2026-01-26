(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();function o(){const n=document.querySelector("#navBar");n.innerHTML=`
    <nav class="navbar">
      <div class="navbar-left">
        <div class="navbar-logo">
          <a href="#home">codesentinel</a>
        </div>
        <ul class="navbar-menu">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Experience</a></li>
          <li><a href="#skills">Resources</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <button class="nav-button">Get Started</button>
    </nav>
  `;const t=document.querySelector(".navbar-logo a");t&&t.addEventListener("click",a=>{a.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}),document.querySelectorAll(".navbar-menu a").forEach(a=>{a.addEventListener("click",e=>{e.preventDefault();const i=a.getAttribute("href").substring(1),r=document.getElementById(i);r&&r.scrollIntoView({behavior:"smooth",block:"start"})})})}function l(){const n=document.querySelector("#mainBody");n.innerHTML=`
  <div class="main-wrapper">
    <!-- HOME SECTION -->
    <section id="home" class="hero">
      <h1>Cybersecurity and IT Expertise</h1>
      <p>Web Developer | Security Operations | IT | Gamer</p>
      <div class="button-group">
        <a href="#projects" class="cta-button">View My Work</a>
        <a href="#contact" class="cta-button">Contact</a>
        
      </div>
    </section>
  </div>
  `}function c(){const n=document.querySelector("#mainBody"),t=document.createElement("div");t.className="sections-wrapper",t.innerHTML=`
    <!-- ABOUT SECTION -->
    <div class="main-wrapper-about" >
    <section id="about" class="section">
      <div class="section-about">
        
        <div class="about-intro">
          <p>CAPABILITIES</p>
          <h1>What I bring to the table</h1>
        </div>

        <div class="about-cards">
          <div class="web-development card">
            <div class="card-image">
            <img src="web-development.jpg" alt="Web Development" class="card-img">
            </div>
            <div class="card-content">
              <h2>Website Development</h2>
              <p>Building responsive and user-friendly websites using modern technologies like HTML, CSS, and JavaScript.</p>
            </div>
          </div>
          
          <div class="security-operations card">
            <div class="card-content">
            <img src="security-operations.jpg" alt="sec-ops" class="card-img">
              <h2>Security Operations</h2>
              <p>Implementing and managing security protocols to protect systems and data from cyber threats.</p>
            </div>
          </div>
          <div class="it-support card">
          <img src="IT-support.jpg" alt="IT-support" class="card-img">
            <div class="card-content">
              <h2>Information Technology Specialist</h2>
              <p>Providing technical support and troubleshooting for hardware, software, and network issues.</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    </div>



<!-- EXPERIENCE SECTION -->
<div class="main-wrapper-experience">
<section id="projects" class="section">
  <h2 id="h1Exp">Experience</h2>

  <div class="experience-cards">

    <!-- SOC Tier 1 – Cytech -->
    <div class="experience-card">
      <h3>SOC Analyst – Tier 1</h3>
      <span class="experience-company">Cytech</span>

      <ul class="experience-list">
        <li>Accelerated incident response times by approximately <strong>15%</strong> through real-time monitoring and analysis using Elastic SIEM, VirusTotal, and AnyRun.</li>
        <li>Improved alert fidelity, contributing to a <strong>20% reduction in false positives</strong> and enabling focus on high-priority threats.</li>
        <li>Led cybersecurity onboarding sessions for new employees, promoting secure digital practices.</li>
        <li>Documented and maintained over <strong>50 security incidents</strong>, supporting audits and team coordination.</li>
        <li>Coordinated with HR and IT to escalate confirmed insider threat cases.</li>
      </ul>
    </div>

    <!-- IT Specialist -->
    <div class="experience-card">
      <h3>IT Specialist</h3>
      <span class="experience-company">AIMCooP</span>

      <ul class="experience-list">
        <li>Diagnosed and resolved Windows desktop and laptop issues, improving workstation reliability.</li>
        <li>Resolved printer connectivity, hardware, and configuration issues to minimize user downtime.</li>
        <li>Identified and corrected basic LAN/WAN connectivity issues, reducing support tickets by an estimated <strong>10–15%</strong>.</li>
        <li>Assisted in firewall installation and configuration alongside senior technicians.</li>
        <li>Performed routine hardware maintenance and replaced faulty components such as RAM, drives, and power supplies.</li>
        <li>Maintained stability of branch-level network systems and end-user workstations.</li>
        <li>Developed software solutions for internal business processes.</li>
      </ul>
    </div>

    <!-- NSOC Analyst -->
    <div class="experience-card">
      <h3>NSOC Analyst</h3>
      <span class="experience-company">Astute Cybersecurity</span>

      <ul class="experience-list">
        <li>Monitored and triaged security alerts as an NSOC Analyst performing Tier 1 SOC and network monitoring.</li>
        <li>Validated security and network alerts to identify true positives and potential threats.</li>
        <li>Conducted regular security health checks to ensure optimal tool performance.</li>
        <li>Monitored network availability and stability of critical infrastructure.</li>
        <li>Created Alert Suppression Requests (ASRs) to reduce alert fatigue.</li>
        <li>Investigated firewall and network events including outages, flapping, and abnormal behavior.</li>
        <li>Performed daily threat hunting and communicated confirmed incidents to clients with clear recommendations.</li>
      </ul>
    </div>

  </div>
</section>
</div>
<!-- RESOURCES / SKILLS SECTION -->
<div class="main-wrapper-resources">
<section id="skills" class="section">
  <h2 id=h1Res>Resources</h2>

  <div class="resources-card">
    <!-- LEFT SIDE: Skills -->
    <div class="skills-list">
      <h3>Skills</h3>
      <ul>
        <li>Arch Linux</li>
        <li>Basic Networking</li>
        <li>Burp Suite - Professional</li>
        <li>CSS</li>
        <li>Elastic Stack</li>
        <li>FortiAnalyzer</li>
        <li>FortiManager</li>
        <li>FortiSiem</li>
        <li>HTML</li>
        <li>IT Support</li>
        <li>JavaScript</li>
        <li>Kali Linux</li>
        <li>MySQL</li>
        <li>MSSQL</li>
        <li>NodeJS</li>
        <li>Oracle</li>
        <li>Oracle Virtual Machine</li>
        <li>OpsRamp</li>
        <li>OWASP ZAP</li>
        <li>Postman</li>
        <li>ReactJS Framework</li>
        <li>Splunk Cloud</li>
        <li>sqlmap</li>
        <li>Sophos</li>
        <li>VMware</li>
      </ul>
    </div>

    <!-- RIGHT SIDE: Education / Certificates / References -->
    <div class="resources-content">
      <h3>Education</h3>
      <p><strong>Bachelor of Science in Information Technology</strong><br>
      University Of Science and Technology Of Southern Philippines | April 2018 - Sep 2022</p>

      <h3>Certificates</h3>
      <ul>
        <li>Google Foundations of Cybersecurity</li>
        <li>Google Play It Safe: Manage Security Risks</li>
        <li>Cisco Introduction to Cybersecurity</li>
        <li>Udemy: The Cyber Security Network Protocol Hacking Course</li>
        <li>CCNA Introduction to Networks</li>
        <li>CCNA Introduction to IoT</li>
        <li>Cisco Cyberops Associate</li>
        <li>DICT Programming for Beginners Using Python</li>
        <li>DICT Programming for Intermediate Users Using Python</li>
      </ul>

      <h3>Character References</h3>
      <ul>
        <li>CyTech Former Manager, Head Of Offensive Security: Raymond Felicidario Garcia, +639777778865</li>
        <li>CyTech Former Senior Manager: John Vina Neijzen, +639673954283</li>
        <li>CyTech Human Resource Associate: Maria Katrina Verendia, +639673393602</li>
        <li>CyTech Former Cybersecurity Senior Manager: John Rafael Llena, johnllena7@gmail.com</li>
      </ul>
    </div>
  </div>
</section>
</div>


<!-- CONTACT SECTION -->
<div class = "main-wrapper-contact">
  <section id="contact" class="section">
    <div class="contact-intro">
    <h2 id=h2Con>READY TO WORK TOGETHER</h2>
    <p>Contact me and let's discuss how I can contribute to your team or project.</p>
    </div>


    <div class="contact-card">
      <!-- Left: Profile Picture -->
      <div class="contact-photo">
        <img src="francis.jpg" alt="Francis Gabriel Cabahug">
      </div>

      <!-- Right: Contact Info -->
      <div class="contact-info">
        <h3>Francis Gabriel Cabahug</h3>
        <p><strong>Whatsapp:</strong> +63 921 922 7344</p>
        <p><strong>Email:</strong> <a href="mailto:cabahugfrancisgabriel@gmail.com">cabahugfrancisgabriel@gmail.com</a></p>
        <p><strong>Address:</strong> Poblacion Aurora, Zamboanga Del Sur</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/francis-gabriel-cabahug-6225941ba/" target="_blank">francis-gabriel-cabahug</a></p>
        
        
      </div>
    </div>
    </div>
</section>
  `,n.appendChild(t)}o();l();c();
