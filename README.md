# Aesop's Fables with GPT-4 Analysis

This repository contains a collection of Aesop's fables, enhanced with analytical insights powered by OpenAI's GPT-4. Additionally, it serves as an example for building a static site using Sveltekit.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Useful Instructions](#useful-instructions)
  - [Adding a Favicon](#adding-a-favicon)
  - [Adding a Sitemap](#adding-a-sitemap)
  - [Adding a Contact Form](#adding-a-contact-form)
- [Deployment](#deployment)

## Project Structure

- `/src/`: Primary directory containing SvelteKit components.
- `/static/`: Contains assets like favicons, `robots.txt`, and sitemap configurations.
- `/motif_processing/`: Contains python scripts and notes on exploratory NLP analysis on the fables. Not directly related to the static site structure.

---

## Features

- **SvelteKit & mdsvex**: Convert 82 markdown files into over 900 cross-linked HTML files during the build process, showcasing the power and efficiency of SvelteKit combined with mdsvex.
- **Static Site Generation**: Benefit from the speed and security advantages of a fully pre-rendered static site.
- **Contact Integration**: Seamlessly integrate Google Forms for user feedback and inquiries.
- **Favicon & Sitemap**: Easily add a favicon for branding and a sitemap for improved search engine optimization and user navigation.
- **Performance**: Achieves a 100/100 score on Lighthouse, ensuring optimal speed, accessibility, best practices, and SEO.

## Useful Instructions

### Adding a Favicon

1. Visit [Favicon.io Emoji Favicons](https://favicon.io/emoji-favicons/).
2. Select and download the desired favicon.
3. Extract and move all files to the `/static` directory.
4. Update `app.html`:
   - Remove: `<link rel="icon" href="%sveltekit.assets%/favicon.png" />`
   - Insert the new favicon configurations (example provided in `app.html`).

### Adding a Sitemap

To integrate a sitemap into your project, follow the steps below:

1. **Setup `robots.txt`**:

   - Create a `robots.txt` file in the `/static` directory.
   - Add the following content:
     ```plaintext
     User-agent: *
     Sitemap: https://aesops-insights.vercel.app/sitemap.xml
     Disallow:
     ```

2. **Generate the Sitemap**:

   - Install and use [svelte-sitemap](https://www.npmjs.com/package/svelte-sitemap) to generate a sitemap.
   - After setting it up, run:
     ```bash
     npm run build
     ```
   - This command will place a `sitemap.xml` in the `./build` folder.

3. **Cleanup**:

   - Remove the `svelte-sitemap` package:
     ```bash
     npm uninstall svelte-sitemap
     ```

4. **Integrate the Sitemap**:

   - Move the contents of `./build/sitemap.xml` to the place where it fits in `/routes/sitemap.xml/+server.ts`.

5. **Note**:
   - You might encounter issues with the sitemap displaying as "Content Type: html" after running `npm run build` and `npm run preview`. However, it should work correctly once deployed to production.

### Adding a Contact Form

Easily integrate a contact form into your static site in just a few minutes. Follow the steps below:

1. **Tutorial**: Watch the tutorial by WebJeda on YouTube to understand how to use Google's pre-filled link feature:

   - [Watch the tutorial here](https://www.youtube.com/watch?v=4XCGuchFiac)

2. **Contact Form Code**: Refer to the `/routes/contact/+page.svelte` file for the contact form's code implementation.

3. **Note**: Since this is a static site without a server, the contact form operates on a 'fire-and-forget' basis. This means that while you can send messages through the form, there's no direct way to verify their delivery from the site itself. However, when deployed to Vercel, the form has been tested and works as expected.

## Deployment

To deploy to Vercel:

- In `Project Settings`, change `output folder` in `Build and Output Settings` from `public` to `build`.
- The site is continuously deployed on [Vercel](https://aesops-insights.vercel.app/).
