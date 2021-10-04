# HOW TO CONTRIBUTE

## Setup

Requirements

- node.js
- ts-node (optional)

Setup package deps.

```
npm install
```

## Generate type

Firebase CLI has firebase-config schema.
I generate type from this with json-schema-to-typescript.
The generating code is src/internal/firebase-config-converter.ts.
