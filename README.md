# firebase-config-type-definition

Let's typecheck of firebase config.

## Motivation

I didn't firebase config checker.

## How to use

Copy your firebase config to ts file. And use this library's type definition.

```ts
import { Firebaserc } from "firebase-config-type-definition";
const json: Firebaserc = {
  // your json
};
```

## Mechanism

Use jsonschema of firebase config.

FYI: <https://github.com/firebase/firebase-tools/blob/c2feb0836f6f64236e117f2906ef6083840e212b/src/index.js>
