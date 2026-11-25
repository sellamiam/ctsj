# WordPress Integration Guide — Civic Tech Saint John (CTSJ)

How to embed the **CTSJ Volunteer Intake Form** onto the Civic Tech Saint John WordPress website ([civictechsaintjohn.ca](https://civictechsaintjohn.ca/)).

---

## Method 1: WordPress Block Editor (Recommended — 2 Minutes)

This method embeds the hosted, responsive form without conflicting with your existing WordPress theme or CSS plugins.

1. In WordPress Admin, go to **Pages** → **Add New** (or edit your existing `/volunteer` or `/join` page).
2. Click the **`+` (Add block)** icon.
3. Search for and select **Custom HTML**.
4. Paste the following snippet:

```html
<!-- Civic Tech Saint John Intake Form Embed -->
<div style="width: 100%; max-width: 900px; margin: 0 auto; padding: 10px 0;">
  <iframe
    src="https://sellamiam.github.io/ctsj/form.html"
    width="100%"
    height="920"
    frameborder="0"
    scrolling="no"
    style="border: none; width: 100%; min-height: 920px; border-radius: 16px; overflow: hidden;"
    title="Civic Tech Saint John Volunteer Intake Form"
  ></iframe>
</div>
```

5. Click **Preview** or **Publish**.

---

## Method 2: Dedicated WordPress Sub-page / Redirect

If you prefer a direct link or navigation button from your header menu:
* **Menu Link:** Add a menu item in **Appearance → Menus** labeled `"Volunteer With Us"`.
* **URL:** Point it to:
  * Interactive Prototype: `https://sellamiam.github.io/ctsj/`
  * Standalone Form: `https://sellamiam.github.io/ctsj/form.html`

---

## Method 3: Elementor / Divi / Visual Page Builders
* **Elementor:** Drag the **HTML Widget** into any column and paste the snippet from Method 1 above.
* **Divi:** Add a **Code Module** and paste the snippet.

---

## Features Built-In
* **Mobile-Responsive:** Automatically adapts from desktop 2-column view to single-column mobile view.
* **No CSS Conflicts:** Encapsulated inside iframe so your WordPress typography and navigation stay intact.
* **Bottom Submit Button:** Clear, prominent submission button anchored at the bottom.
* **PIPEDA & CASL Ready:** Includes required consent checkboxes and privacy disclosures.
