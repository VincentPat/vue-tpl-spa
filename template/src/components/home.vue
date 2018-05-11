<template>
    <div class="home"></div>
</template>

<script>
export default {
    name: 'home'
};
</script>

<style lang="scss">
@import '../style/mixin.scss';
@import '../style/color.scss';

.home {
    @include fullscreen;
}
</style>
