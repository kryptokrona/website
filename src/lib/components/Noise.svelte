<div class="noise"></div>
<style>
  .noise {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -2;
    background-repeat: repeat;
    background-image: url('/grain.gif');
    background-size: 20%;
    opacity: 0.2;
    mix-blend-mode: overlay;
  }

  @media (max-width: 768px) {
    .noise {
      opacity: 0;
    }
  }
</style>