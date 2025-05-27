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
  right: -8rem; /* 向右偏移一点，避免贴太近标题文字 */
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
