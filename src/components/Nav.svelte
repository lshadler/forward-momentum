<script>
  import { onMount } from 'svelte';

  export let segment;

  // Show mobile icon and display menu
  let showMobileMenu = false;

  // List of navigation items
  const navItems = [
    { label: 'home', href: '.', ariaCurrent: undefined },
    { label: 'about', href: 'about', ariaCurrent: 'about' },
    { label: 'district map', href: 'district-map', ariaCurrent: 'district-map' },
  ];

  // Mobile menu click event handler
  function handleMobileIconClick() {
    showMobileMenu = !showMobileMenu;
  }

  // Media match query handler
  const mediaQueryHandler = (e) => {
    // Reset mobile state
    if (!e.matches) {
      showMobileMenu = false;
    }
  };

  // Attach media query listener on mount hook
  onMount(() => {
    const mediaListener = window.matchMedia('(max-width: 767px)');

    mediaListener.addListener(mediaQueryHandler);
  });
</script>

<style>

nav {
  background: rgb(60,59,110);
  background: linear-gradient(315deg, rgba(60,59,110,1) 0%, rgba(178,34,52,1) 100%);
  background-image: url('/nav-back.png');
  background-repeat: repeat-x;
  background-size: 1440px 60px;
  height: 60px;
  font-size: 1em;
}

.inner {
  max-width: 980px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 100%;
}

.mobile-icon {
  width: 25px;
  height: 14px;
  position: relative;
  cursor: pointer;
}

.mobile-icon:after,
.mobile-icon:before,
.middle-line {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #fff;
  transition: all 0.4s;
  transform-origin: center;
}

.mobile-icon:before,
.middle-line {
  top: 0;
}

.mobile-icon:after,
.middle-line {
  bottom: 0;
}

.mobile-icon:before {
  width: 66%;
}

.mobile-icon:after {
  width: 33%;
}

.middle-line {
  margin: auto;
}

.mobile-icon:hover:before,
.mobile-icon:hover:after,
.mobile-icon.active:before,
.mobile-icon.active:after,
.mobile-icon.active .middle-line {
  width: 100%;
}

.mobile-icon.active:before,
.mobile-icon.active:after {
  top: 50%;
  transform: rotate(-45deg);
}

.mobile-icon.active .middle-line {
  transform: rotate(45deg);
}

.navbar-list {
  display: none;
  width: 100%;
  justify-content: flex-start;
  margin: 0;
  padding: 0 40px;
}

.navbar-list.mobile {
  z-index: 10;
  background: rgb(60,59,110);
  background: linear-gradient(45deg,rgba(178,34,52,0.8) 0%,  rgba(60,59,110,1) 100%);
  position: fixed;
  display: block;
  height: calc(100% - 59px);
  bottom: 0;
  left: 0;
  font-size: 2em;
}

.navbar-list li {
  list-style-type: none;
  position: relative;
}

.navbar-list.mobile li {
  margin-top: 30px;
  list-style-type: none;
  position: relative;
}

.navbar-list li:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #424245;
}

.navbar-list a {
  color: #fff;
  text-decoration: none;
  display: flex;
  height: 60px;
  align-items: center;
  padding: 0 10px;
}

@media only screen and (min-width: 767px) {
  .mobile-icon {
    display: none;
  }

  .navbar-list {
    background: linear-gradient(315deg, rgba(60,59,110,0) 0%, rgba(178,34,52,1) 100%);
    display: flex;
    padding-left: 10px;
    padding-right: 225px;
  }

  .inner {
    padding-left: 0;
  }
}

[aria-current] {
	position: relative;
	display: inline-block;
}

</style>

<nav>
  <div class="inner">
    <div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
      <div class="middle-line"></div>
    </div>
    <ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
      {#each navItems as item}
        <li>
          <a class="" on:click={showMobileMenu ? handleMobileIconClick : ''} aria-current="{segment === item.ariaCurrent ? 'page' : undefined}" href={item.href}>{item.label}</a>
        </li>
      {/each}
    </ul>
  </div>
</nav>
