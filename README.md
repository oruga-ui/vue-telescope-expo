## Installation

```sh
yarn add vue-telescope-expo
```

## Usage

```js
import VueTelescopeExpo from 'vue-telescope-expo'

Vue.component(VueTelescopeExpo.name, VueTelescopeExpo)
```

```html
<template>
  <div id="app">
    <vue-telescope-expo :slugs="{ui: 'oruga'}" :image-width="800"/>
  </div>
</template>
```

## Project setup

```sh
yarn install
```

### Compiles and minifies for production

```sh
yarn build
```

### Run your unit tests

```sh
yarn test:unit
```

### Lints and fixes files

```sh
yarn lint
```
