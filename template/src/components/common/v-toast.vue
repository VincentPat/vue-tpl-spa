<template>
    <transition name="fade">
        <div class="v-toast"
            v-show="display">
            <div class="v-toast__cnt"
                v-html="content">
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'v-toast',
    methods: {
        show({ content, timeout = 3000 }) {
            this.$emit('show');
            this.content = content;
            this.timeout = timeout;
            this.display = true;
            if (timeout > 0) {
                setTimeout(() => {
                    this.display = false;
                }, this.timeout);
            }
        },
        hide() {
            this.$emit('hide');
            this.display = false;
        }
    }
};
</script>

<style lang="scss">
@import '@/style/mixin.scss';

.v-toast {
    @include fullscreen;
    &__cnt {
        @include transform-center;
        @include toast;
    }
}
</style>
