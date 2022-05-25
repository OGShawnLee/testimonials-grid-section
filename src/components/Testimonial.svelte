<script lang="ts">
  let className = '';

  export { className as class };
  export let name: string;
  export let title = 'Verified Graduate';
  export let image: string;
  export let isDark = false;
</script>

<article class="p-6 | space-y-4 | shadow-lg rounded-md | {className}">
  <header class="flex items-center gap-3">
    <img class="h-9 w-9 min-w-9 | rounded-full" src={image} alt={name} />
    <div class="leading-3">
      <h2 class="text-sm {isDark ? 'text-white' : 'text-blue-blackish'}">{name}</h2>
      <span class="text-xs {isDark ? 'text-white/50' : 'text-blue-blackish/50'}"> {title} </span>
    </div>
  </header>
  <div class="content space-y-4">
    <slot />
  </div>
</article>

<style global>
  .content strong {
    @apply text-xl font-semibold leading-3;
  }
</style>
