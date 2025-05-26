---
layout: archive
title: "Contact"
permalink: /contact/
---

<form action="https://formspree.io/f/mzzrlall" method="POST">
  <!-- Line 1: Name (required) -->
  <label for="first_name">First Name <span style="color:red">*</span></label><br>
  <input type="text" id="first_name" name="first_name" required><br>

  <label for="last_name">Last Name <span style="color:red">*</span></label><br>
  <input type="text" id="last_name" name="last_name" required><br><br>

  <!-- Line 2: Email (required) & Phone (optional) -->
  <label for="email">Email <span style="color:red">*</span></label><br>
  <input type="email" id="email" name="email" required><br>

  <label for="phone">Phone (optional)</label><br>
  <input type="tel" id="phone" name="phone"><br><br>

  <!-- Line 3: Subject (required) -->
  <label for="subject">Subject <span style="color:red">*</span></label><br>
  <input type="text" id="subject" name="subject" required><br><br>

  <!-- Line 4: Message (required) -->
  <label for="message">Message <span style="color:red">*</span></label><br>
  <textarea id="message" name="message" rows="5" required></textarea><br><br>

  <button type="submit">Send</button>
</form>
