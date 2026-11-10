<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep textbook source records flat and group them by grade, subject, and semester; each PDF is download-only from its canonical source.
- Mount site-wide transient controls, such as scroll-to-top, in the root layout so they work consistently on every route.
- Shared ContactSection accepts a groups visibility flag so the dedicated contact page owns group browsing while the homepage provides a direct link.
- Show all teachers grouped one card per subject, styled like the administration cards, so the full roster stays visible and consistent.
- Use the shared native-select control for textbook and staff filters to avoid third-party select context dependencies and retain platform-native mobile picking.
- Images and fonts live as real files in src/assets and public/fonts (not CDN pointers) so a project download includes every photo.
