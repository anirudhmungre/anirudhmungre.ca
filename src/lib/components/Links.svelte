<script>
  import Icon from 'svelte-awesome';
  import calendly from 'svelte-awesome/icons/calendar';
  import envelope from 'svelte-awesome/icons/envelope';
  import github from 'svelte-awesome/icons/github';
  import institution from 'svelte-awesome/icons/institution';
  import linkedin from 'svelte-awesome/icons/linkedin';

  const scale = 3;
</script>

<nav class="links">
  <a href="https://github.com/anirudhmungre"><Icon data={github} {scale} /></a>
  <a href="https://linkedin.com/in/anirudh-mungre"><Icon data={linkedin} {scale} /></a>
  <a href="https://www.parchment.com/u/award/cfcc98ce9454a3fa7c922a8304419895"><Icon data={institution} {scale} /></a>
  <a href="mailto:anirudh.mungre16@gmail.com"><Icon data={envelope} {scale} /></a>
  <a href="https://calendly.com/anirudh-mungre/15min"><Icon data={calendly} {scale} /></a>
</nav>

<style>
  .links {
    display: flex;
    justify-content:space-around;
    align-items: center;
    padding-top: 4em;
    color: dark;
    max-width: 60ch;
  }

  .links > a {
    animation: visible-text-color-change 10s infinite;
  }

  .links > a:hover {
    color: aliceblue !important;
  }
</style>