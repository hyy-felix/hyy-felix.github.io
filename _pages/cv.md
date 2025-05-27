---
layout: archive
title: "Resume"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<style>
.resume-download-icon {
  position: absolute;
  top: 0;
  right: -3rem;
  font-size: 1.5rem;
  color: var(--global-link-color);
  text-decoration: none;
}

.resume-download-icon i {
  vertical-align: middle;
}
</style>

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

<!-- ========== CSS layout ========== -->
<style>
#cv-nav {position: fixed; top: 100px; right: calc((100% - 1100px) / 2); width: 180px; z-index: 10; padding-left: 1rem;}
#cv-nav ul { list-style: none; padding-left: 0; margin: 0; }
#cv-nav li { margin-bottom: 0.6em; }
#cv-nav a {  position: relative; display: block; padding-left: 0.5rem; color: var(--global-primary-color); text-decoration: none; transition: color 0.3s; }
#cv-nav a.active { color: var(--global-link-color); font-weight: bold;}
#cv-nav a.active::before {content: ""; position: absolute; left: 0; height: 1.8em; width: 3px; background-color: var(--global-link-color); }
.archive { padding-right: 240px;}
</style>

<!-- ========== Sections ========== -->

<!-- ========== Resume Basics Card ========== -->
<div style="background-color: #1e1e1e; color: #fff; border-radius: 8px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: 0 0 10px rgba(0,0,0,0.3);">
  <h2 style="font-size: 1.8rem; margin-bottom: 1rem;">Basics</h2>
  <p><strong>Name</strong><br>江德超 | Dechao Jiang</p>
  <p><strong>Email</strong><br><a href="mailto:dechao823@outlook.com" style="color: #4db8ff;">dechao823@outlook.com</a></p>
  <p><strong>Email_0</strong><br><a href="mailto:dcjiang@berkeley.edu" style="color: #4db8ff;">dcjiang@berkeley.edu</a></p>
  <p><strong>Phone</strong><br><a href="tel:+15108334373" style="color: #4db8ff;">+1 (510) 833-4373</a></p>
  <p><strong>LinkedIn</strong><br><a href="https://www.linkedin.com/in/dechao-jiang-200984260" target="_blank" style="color: #4db8ff;">dechao-jiang-200984260</a></p>
  <p><strong>Summary</strong><br>厚德载物，超凡脱俗</p>
</div>

<h2 id="education">Education</h2>
* Ph.D in Version Control Theory, GitHub University, 2018 (expected)
* M.S. in Jekyll, GitHub University, 2014
* B.S. in GitHub, GitHub University, 2012

<h2 id="work">Work experience</h2>
* Spring 2024: Academic Pages Collaborator  
  * Duties: Template updates, GitHub University  
* Fall 2015: Research Assistant  
  * Duties: Merging PRs  
* Summer 2015: Research Assistant  
  * Duties: Tagging issues

<h2 id="skills">Skills</h2>
* Skill 1  
* Skill 2  
  * Sub-skill 2.1  
  * Sub-skill 2.2  
* Skill 3

<h2 id="publications">Publications</h2>
<ul>{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

<h2 id="talks">Talks</h2>
<ul>{% for post in site.talks reversed %}
  {% include archive-single-talk-cv.html  %}
{% endfor %}</ul>

<h2 id="teaching">Teaching</h2>
<ul>{% for post in site.teaching reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

<h2 id="service">Service and leadership</h2>
* Currently signed in to 43 different Slack teams

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
