import { Elysia } from "elysia";
import { html } from "@elysiajs/html";

const app = new Elysia()
  .use(html())
  .get(
    "/",
    () => `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>3</title>
      </head>
      <body>
        <canvas class="webgl"></canvas>
        <script type="module" src="/src/index.ts"></script>
      </body>
    </html>
    `,
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
