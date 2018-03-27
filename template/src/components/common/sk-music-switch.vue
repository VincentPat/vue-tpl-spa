<template>
    <transition name="fade">
        <div class="sk-music-switch"
            v-show="display"
            @click="switchMusic">
            <div class="sk-music-switch__on"
                :class="{ rotate }"
                :style="style.on"
                v-show="on">
            </div>
            <div class="sk-music-switch__on"
                :style="style.off"
                v-show="!on">
            </div>
        </div>
    </transition>
</template>

<script>
/**
 * @name 音乐开关
 * @description 大小由父元素控制，点击后触发switch事件，切换图标。
 * @prop imgOn 开启图标
 * @prop imgOff 关闭图标
 * @prop on 是否开启
 * @prop rotate 是否开启时自动旋转
 * @method show 显示
 * @method hide 隐藏
 * @event switch 切换开关
 * @event show 显示
 * @event hide 隐藏
 */
import displayMixin from '../../mixins/common-display';

export default {
    name: 'sk-music-switch',
    mixins: [displayMixin],
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
        },
        rotate: {
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

.sk-music-switch {
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

