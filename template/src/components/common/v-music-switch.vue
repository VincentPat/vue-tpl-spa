<template>
    <div class="v-music-switch"
        @click="switchMusic">
        <div class="v-music-switch__on rotate"
            :style="style.on"
            v-show="on">
        </div>
        <div class="v-music-switch__on"
            :style="style.off"
            v-show="!on">
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-music-switch',
    props: {
        imgOn: {
            default: null,
            type: String
        },
        imgOff: {
            default: null,
            type: String
        },
        on: {
            default: true,
            type: Boolean
        }
    },
    computed: {
        style() {
            return {
                on: `background-image: url('${this.imgOn}')`,
                off: `background-image: url('${this.imgOff}')`
            };
        }
    },
    methods: {
        switchMusic() {
            this.$emit('switch');
        }
    }
};
</script>

<style lang="scss">
@import '../../style/mixin.scss';

.v-music-switch {
    @include fullfill;
    &__on {
        @include bg-contain;
        @include fullfill;
    }
    &__off {
        @include bg-contain;
        @include fullfill;
    }
}
</style>

