
I have worked on Antenatal(ANC) module only. 

Antenatal(ANC) module file path: 
.
└── src/
    └── pages/
        └── anc-referrals/
            ├── encounter
            └── index

And I have added some things to other files as needed to work, such as: adding routing, adding some objects to the modal-types.ts file to open modal, adding some custom classes in index.css file to facilitate the design. 
The files outside of my module have comments attached to the work I have done. 
And I've recreated some of the components to make it work. I did them in my template file.

template file path:
.
└── src/
    └── pages/
        └── anc-referrals/
            └── encounter/
                └── form-tamplate
                
            
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
