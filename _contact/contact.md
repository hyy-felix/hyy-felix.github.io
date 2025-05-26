---
layout: archive
title: "Contact"
permalink: /contact/
---

<form action="https://formspree.io/f/mzzrlall" method="POST">
  <!-- Line 1: First & Last Name -->
  <div class="form-row">
    <div class="form-group">
      <label for="first_name">First Name <span style="color:red">*</span></label>
      <input type="text" id="first_name" name="first_name" required>
    </div>
    <div class="form-group">
      <label for="last_name">Last Name <span style="color:red">*</span></label>
      <input type="text" id="last_name" name="last_name" required>
    </div>
  </div>

  <!-- Line 2: Email & Phone -->
  <div class="form-row">
    <div class="form-group">
      <label for="email">Email <span style="color:red">*</span></label>
      <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
      <label for="phone">Phone</label>
      <input type="tel" id="phone" name="phone">
    </div>
  </div>

  <!-- Line 3: Subject -->
  <label for="subject">Subject <span style="color:red">*</span></label>
  <input type="text" id="subject" name="subject" required>

  <!-- Line 4: Message -->
  <label for="message">Message <span style="color:red">*</span></label>
  <textarea id="message" name="message" rows="5" required></textarea>

  <button type="submit">Submit</button>
</form>
