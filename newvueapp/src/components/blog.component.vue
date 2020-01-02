<template>
    <div>
        <!--named slot-->
        <header>
            <slot name="header"></slot>
        </header>
        <!--default slot-->
        <article>
            <slot>
                <span>No content available</span><!--slot defaults-->
            </slot>
        </article>
        <footer>
            <slot name="footer"></slot>
        </footer>

    </div>
</template>

<script>
    export default{
        name:'blog'

    }
</script>

<style scoped>


</style>