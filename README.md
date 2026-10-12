# Configurable Syntax Cards

A small React and TypeScript card gallery with configurable `div`, `span`, `input`, and `script` syntax cards.

## Use the component

Pass a `CardConfig` object to the `config` prop:

```tsx
import Card from './Card'
import { CardType, DescriptionType } from './card_config'
import type { CardConfig } from './card_config'

const config: CardConfig = {
  type: CardType.DIV,
  name: 'card',
  description: [
    'This card scores ',
    { text: '3', type: DescriptionType.NUMBER },
    ' points.',
  ],
  useClosingTag: false,
}

const example = <Card config={config} />
```

`CardConfig` includes a `CardType`, a name, description parts, and whether a closing tag is shown. Description entries can be plain strings or typed parts using `DescriptionType.NUMBER` or `DescriptionType.TAG` for syntax coloring. Optional `flavorText` adds a comment.

Cards select their theme by type: `div` and `script` use Night Owl; `span` and `input` use Dracula. The app previews one configured card of each type.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the app whenever
changes are pushed to `main`. To enable it, set the repository's Pages source to
**GitHub Actions** under **Settings → Pages**. The Vite base path is configured
for the `TangerineCat/divspan` project site.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
