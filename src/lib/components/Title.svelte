<div class="title">
  <h1><span class="title__greeting"></span><br /> my name is <br /><span class="title__name">Anirudh Mungre</span>.</h1>
  <h2>I am a <span class="title__job">Web Developer</span>.</h2>
</div>

<style>
  @keyframes greetings {
    0% { content: "Hello,"; }
    25% { content: "Salut,"; }
    50% { content: "Namaste,"; }
    75% { content: "Konnichiwa,"; }
    100% { content: "Hello,"; }
  }

  .title {
    font-size: 3em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow: wrap;
  }

  .title__greeting {
    transform: translate(0, 100%);
  }

  .title__greeting:after {
    content: "Hello";
    animation: greetings 10s linear infinite;
  }

  .title__name, .title__job {
    animation: visible-text-color-change 10s infinite;
    text-decoration: underline;
  }
</style>