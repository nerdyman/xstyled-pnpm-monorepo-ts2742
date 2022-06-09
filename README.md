# xstyled not working with pnpm monorepo (ts2742)

Building with xstyled in a pnpm monorepo fails with the following error when trying to produce `.d.ts` files:

```
src/xstyled.config.ts(27,43): error TS4023: Exported variable 'styled' has or is using name 'XStyled' from external module "/Users/me/Documents/projects/nerdyman/xstyled-pnpm-monorepo-ts2742/node_modules/.pnpm/@xstyled+styled-components@3.6.0_styled-components@5.3.5/node_modules/@xstyled/styled-components/dist/index" but cannot be named.
```

This is because the `XStyled` interface is not exported from `@xstyled/styled-components`.

[Fork with fix](https://github.com/nerdyman/xstyled)

Related Issues:

- [pnpm 3396](https://github.com/pnpm/pnpm/issues/3396)
- [typescript 29808](https://github.com/microsoft/TypeScript/issues/29808)
- [typescript 42873](https://github.com/microsoft/TypeScript/issues/42873)
