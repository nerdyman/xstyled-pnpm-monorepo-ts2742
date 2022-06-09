# xstyled not working with pnpm monorepo (ts2742)

Building with xstyled in a pnpm monorepo fails with the following error when trying to produce `.d.ts` files:

```
src/xstyled.config.ts(27,43): error TS4023: Exported variable 'styled' has or is using name 'XStyled' from external module "/Users/me/Documents/projects/nerdyman/xstyled-pnpm-monorepo-ts2742/node_modules/.pnpm/@xstyled+styled-components@3.6.0_styled-components@5.3.5/node_modules/@xstyled/styled-components/dist/index" but cannot be named.
```

This is because the `XStyled` interface is not exported from `@xstyled/styled-components`.

[TypeScript issue](https://github.com/microsoft/TypeScript/issues/29808) (not specific to xstyled).
