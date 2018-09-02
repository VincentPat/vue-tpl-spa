<template>
    <div class="loading"></div>
</template>

<script>
export default {
    name: 'loading'
};
</script>

<style lang="scss">
@import '../style/mixin.scss';
@import '../style/color.scss';

.loading {
    @include fullscreen;
}
</style>

