<script>
    import {onDestroy } from "svelte";
    let counter = 0;

    let timer = setInterval(() => counter += 1, 1000);
    onDestroy(()=> {
        clearInterval(timer);
    })
    
</script>
<h1 class="text-3xl text-slate-800">Hello world, seconds {counter}</h1>
<style lang="scss">
    :global(html) {
        background-color: theme('colors.slate.100');
    }
</style>
