---
layout: archive
title: "Resume"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<!-- ========== Scroll Navigation ========== -->
<nav id="cv-nav">
  <ul>
    <li><a href="#education">Education</a></li>
    <li><a href="#work">Work</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#publications">Publications</a></li>
    <li><a href="#talks">Talks</a></li>
    <li><a href="#teaching">Teaching</a></li>
    <li><a href="#service">Service</a></li>
  </ul>
</nav>

{% include base_path %}

<!-- ========== CSS Styling ========== -->
<style>
#cv-nav {
  position: fixed;
  top: 120px;
  right: 40px;
  width: 180px;
  z-index: 10;
  font-weight: bold;
}
#cv-nav ul { list-style: none; padding-left: 0; margin: 0; }
#cv-nav li { margin-bottom: 0.6em; }
#cv-nav a { color: #ccc; text-decoration: none; transition: color 0.3s; }
#cv-nav a.active { color: #00bfff; }
.archive { padding-right: 240px; }
</style>

<!-- ========== Sections ========== -->

<div class="cv-section" id="education">
  <h2>Education</h2>
  <ul>
    <li>Ph.D in Version Control Theory, GitHub University, 2018 (expected)</li>
    <li>M.S. in Jekyll, GitHub University, 2014</li>
    <li>B.S. in GitHub, GitHub University, 2012</li>
  </ul>
</div>

<div class="cv-section" id="work">
  <h2>Work experience</h2>
  <ul>
    <li>Spring 2024: Academic Pages Collaborator
      <ul><li>Duties: Template updates, GitHub University</li></ul>
    </li>
    <li>Fall 2015: Research Assistant
      <ul><li>Duties: Merging PRs</li></ul>
    </li>
    <li>Summer 2015: Research Assistant
      <ul><li>Duties: Tagging issues</li></ul>
    </li>
  </ul>
</div>

<div class="cv-section" id="skills">
  <h2>Skills</h2>
  <ul>
    <li>Skill 1</li>
    <li>Skill 2
      <ul>
        <li>Sub-skill 2.1</li>
        <li>Sub-skill 2.2</li>
      </ul>
    </li>
    <li>Skill 3</li>
  </ul>
</div>

<div class="cv-section" id="publications">
  <h2>Publications</h2>
  <ul>
    {% for post in site.publications reversed %}
      {% include archive-single-cv.html %}
    {% endfor %}
  </ul>
</div>

<div class="cv-section" id="talks">
  <h2>Talks</h2>
  <ul>
    {% for post in site.talks reversed %}
      {% include archive-single-talk-cv.html %}
    {% endfor %}
  </ul>
</div>

<div class="cv-section" id="teaching">
  <h2>Teaching</h2>
  <ul>
    {% for post in site.teaching reversed %}
      {% include archive-single-cv.html %}
    {% endfor %}
  </ul>
</div>

<div class="cv-section" id="service">
  <h2>Service and leadership</h2>
  <ul>
    <li>Currently signed in to 43 different Slack teams</li>
  </ul>
</div>

<!-- ========== ScrollSpy Script ========== -->
<script>
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("h2[id]");
  const navLinks = document.querySelectorAll("#cv-nav a");

  function updateActiveLink() {
    let index = sections.length;
    while (--index >= 0 && window.scrollY + 150 < sections[index].offsetTop) {}

    navLinks.forEach(link => link.classList.remove("active"));
    if (index >= 0) {
      const id = sections[index].id;
      const activeLink = document.querySelector(`#cv-nav a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  }

  updateActiveLink();
  window.addEventListener("scroll", updateActiveLink);
});
</script>
