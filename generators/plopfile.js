module.exports = function (plop) {
  plop.setGenerator("page", {
    description: "Gera uma página com seu scss",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Digite o nome da página",
      },
    ],

    actions: [
      {
        type: "add",
        path: "./pages/{{name}}/index.js",
        templateFile: "templates/page.js.hbs",
      },
      {
        type: "add",
        path: "./pages/{{name}}/{{name}}.module.scss",
        templateFile: "templates/style.scss.hbs",
      },
    ],
  });

  plop.setGenerator("component", {
    description: "Gera um component com seu scss",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Digite o nome do componente",
      },
    ],

    actions: [
      {
        type: "add",
        path: "./components/{{name}}/index.js",
        templateFile: "templates/component.js.hbs",
      },
      {
        type: "add",
        path: "./components/{{name}}/{{name}}.module.scss",
        templateFile: "templates/style.scss.hbs",
      },
    ],
  });
};
