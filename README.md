# Retro Calculator

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/gmoraleslondono/retro-calculator/blob/master/LICENSE) [![Continuous Integration](https://github.com/gmoraleslondono/retro-calculator/workflows/Continuous%20Integration/badge.svg)](https://github.com/gmoraleslondono/retro-calculator/actions?query=workflow%3A%22Continuous+Integration%22) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github) [![Known Vulnerabilities](https://snyk.io/test/github/gmoraleslondono/retro-calculator/badge.svg)](https://snyk.io/test/github/gmoraleslondono/retro-calculator) [![Maintainability](https://api.codeclimate.com/v1/badges/7c3c40739251b674d92b/maintainability)](https://codeclimate.com/github/gmoraleslondono/retro-calculator/maintainability)

A colleague challenged me to build a calculator, so I started this project on [CodePen](https://codepen.io/gmoraleslondono/pen/JjdopWy) to practice JavaScript, CSS, and HTML.
When I was almost done a friend found a bug (`1 + 1 + 1 = 11`) so I quickly made some changes to fix it. I ended up moving the project to GitHub and added some end-to-end tests using [Cypress](https://www.cypress.io/) because after my quick fix `1 + 1 = 0` 🙈

## Prerequisites

- [Node.js 12.x or newer](https://nodejs.org/en/download/)

## Development

### How to run locally

- Clone this repository.

```sh
git clone https://github.com/gmoraleslondono/retro-calculator.git
```

- Run `npm install` in the repository root.

- Run `npm start`.

- Open `http://127.0.0.1:8080` 🚀

### How to Contribute

Please make sure the following is done:

- Fork the repository and create your branch from `master`.

- Run `npm install` in the repository root.

- If you’ve fixed a bug or added code that should be tested, add tests!

- Ensure the test suite passes (`npm test`).

- Format your code with prettier (`npm run prettier`).

- ~Make sure your code lints (`npm run eslint`).~

## Credits

Made with ❤ by Gloria Morales
