<div align="center" width="150px">
  <img style="width: 150px; height: auto;" src="public/assets/logo.svg" alt="Logo - Strapi Preview plugin" />
</div>
<div align="center">
  <h1>Strapi v4 - Preview plugin</h1>
  <p>Preview your website from within Strapi</p>
  <a href="https://www.npmjs.org/package/strapi-plugin-previewable">
    <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/devtastic-org/strapi-plugin-previewable?label=npm&logo=npm">
  </a>
  <a href="https://www.npmjs.org/package/strapi-plugin-previewable">
    <img src="https://img.shields.io/npm/dm/strapi-plugin-previewable.svg" alt="Monthly download on NPM" />
  </a>
</div>

---

A plugin for [Strapi](https://github.com/strapi/strapi) that embeds your site in Strapi.

## Supported Strapi version

Currently only Strapi v4 is supported.

## Installation

With `npm`
```bash
npm install strapi-plugin-previewable
```

With `yarn`
```bash
yarn add strapi-plugin-previewable
```

In the `config/plugins.js` file add:

```js
preview: {
  websiteUrl: "<URL TO YOUR WEBSITE>"
}
```

☝️ If you're using the `strapi::security` middleware with CSP enabled, make sure
to allow your domain as a `frame-src`. Your `config/middlewares.js` should look something like:

```js
 {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "frame-src": ["https://example.com"],
        ...
```

## Support

For Strapi documentation, please go to [the official Strapi documentation](https://strapi.io/documentation/).

For questions and issues with this plugin use one of the following channels:

- [GitHub](https://github.com/devtastic-org/strapi-plugin-previewable/issues) (Bug reports, Contributions, Questions and Discussions)
- [E-mail](mailto:hi@devtastic.co) - We'll respond as soon as possible

## 📝 License

[MIT License](LICENSE.md) 

Made with 💜 in Utrecht by [Devtastic](https://devtastic.co/).
