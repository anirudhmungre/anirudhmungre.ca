<div class="container">
  <div class="container__content">
    <slot />
  </div>
  <div class="container__background"></div>
</div>
<style>
  /* @keyframes rotation {
    from {
      transform: rotate(359deg);
    }
    to {
      transform: rotate(0deg);
    }
  } */

  @keyframes gradient {
    0% { background: black; }
    50% { background: var(--accent-dark); }
    100% { background: black; }
  }

  .container {
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container__background {
    position: absolute;
    z-index: -1;
    /* min-width: 400vw;
    min-height: 500vh; */
    height: 100%;
    width: 100%;
    overflow: auto;
    /* background: conic-gradient(black 0%, darkgoldenrod 100%); */
    animation: gradient 10s infinite;
    /* animation: rotation 6s infinite linear; */
  }

  .container__content {
    position: fixed;
    left: 10rem;
    top: 20%;
  }

</style>
