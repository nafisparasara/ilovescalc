# iLoveCalc — Cloudflare Pages production package

This static site includes the calculator suite, 37 dedicated calculator landing pages, legal/support pages, sitemap, robots.txt, and Cloudflare Pages headers/redirects.

## Deploy to Cloudflare Pages
1. Extract this folder (`ilovecalc-production`) and upload its contents to a GitHub repository (not the ZIP itself).
2. In Cloudflare Dashboard, open Workers & Pages → Create → Pages → Connect to Git.
3. Select the repository. Framework preset: **None**. Build command: leave empty. Build output directory: `.` (the repository root, where `index.html` is located).
4. Deploy. Open the generated `*.pages.dev` URL and test the home page, one calculator, About, Contact, Privacy, Terms, Disclaimer, and `/sitemap.xml`.
5. In the Pages project, add the custom domains `ilovescalc.com` and `www.ilovescalc.com`. Follow Cloudflare's DNS instructions. Keep `ilovescalc.com` as canonical; `_redirects` redirects www to apex.
6. Ensure HTTPS is active. Then open `https://ilovescalc.com/robots.txt`, `/sitemap.xml`, and `/ads.txt` to confirm they load.

## Google Search Console
1. Add `ilovescalc.com` as a Domain property in Search Console.
2. Verify with the DNS TXT record Google provides (add it in Cloudflare DNS).
3. Submit `https://ilovescalc.com/sitemap.xml`.
4. Use URL Inspection on the home page and important calculator pages, then request indexing. Indexing and ranking are decided by Google and are not guaranteed.

## AdSense — intentionally not activated yet
No fake AdSense client ID, ad-unit ID, or seller record is included. The visible ad blocks are layout placeholders only. Do not expect ads to serve.
After your AdSense account/site is approved: replace the placeholders with the exact `ca-pub-...` publisher ID and real ad unit IDs from your account, add the matching `pub-...` seller line to `ads.txt`, update the privacy policy and consent setup for the regions you serve, then redeploy. Do not click your own ads or encourage clicks.

## Important before launch
- Confirm that `support@ilovescalc.com` is an active mailbox or forwarding address. The contact form opens the visitor's email app; it is not a server-side ticket system.
- Review each calculator's formulas, defaults, limits, and explanatory text. Financial and health tools are estimates, not professional advice.
- No SEO package can guarantee a #1 Google position. Original helpful content, reliable formulas, links, reputation, speed, and ongoing maintenance matter.
