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

- Keep confirmed event listings in `src/data/events.ts` and render both homepage and event pages from them, so updates have one source of truth.
- Keep shared navigation, footer, and action styling in `src/components/club-shell.tsx` so event pages and homepage stay consistent.
- Keep this concept frontend-only and distinguish concept imagery from official club photography, because this is not the official club site.
