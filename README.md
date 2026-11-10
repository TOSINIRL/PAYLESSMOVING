# Payless Moving & Deliveries

A responsive static website for Payless Moving & Deliveries, serving the Greater Toronto Area.

## Run locally

Open `index.html` in a browser, or use a local static server from the project directory:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy with Netlify

This project is ready for Netlify's static hosting:

1. Push the project to the connected GitHub repository.
2. In Netlify, choose **Add new site** → **Import an existing project** and select that repository.
3. Use `.` as the publish directory. No build command is required.
4. Deploy. Future pushes to the production branch will publish updates automatically.

The quote form uses Netlify Forms. After the first successful deploy, open **Forms** in the Netlify site dashboard to confirm submissions are being collected. Set up a form notification there to receive new quote requests by email. The phone number is linked for calling and texting; no contact email has been provided yet.

## Before launch

- Confirm the service list, coverage, and business phone number.
- Configure Netlify form notifications and submit a test request.
- Replace the stock photos with licensed business photos when available.
- Add the business's logo and any verified testimonials or review links.
