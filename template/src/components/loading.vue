<template>
    <div class="loading">
        <sk-loading ref="loading"
            :bg="bg"
            :logo="logo"
            :progress="progress"
            :progressBg="progressBg"
            :progressFg="progressFg">
        </sk-loading>
    </div>
</template>

<script>
import skLoading from './common/sk-loading';

export default {
    name: 'loading',
    components: {
        skLoading
    },
    data() {
        return {
            bg: 'https://static.cdn.24haowan.com/img/32/32152384654333850.jpg',
            progress: 50,
            progressBg: 'white',
            progressFg: 'yellow',
            logo: 'https://static.cdn.24haowan.com/img/32/32152384656755411.png'
        };
    }
};
</script>

<style lang="scss">
@import '../style/mixin.scss';
@import '../style/color.scss';

.loading {
    @include fullscreen;
}
</style>

