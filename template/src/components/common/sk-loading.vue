<template>
    <transition name="fade">
        <div class="sk-loading"
            v-show="display"
            :style="bgStyle">
            <div class="sk-loading__cnt">
                <img class="sk-loading__cnt__logo"
                    :src="logo">
                <div class="sk-loading__cnt__progress"
                    :style="progressBgStyle">
                    <div class="sk-loading__cnt__progress__bar"
                        :style="progressFgStyle">
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
/**
 * @name 加载页
 * @description 通用的加载页、包括加载LOGO、背景、进度条
 * @prop bg 背景图片/颜色
 * @prop progress 加载进度
 * @prop logo 加载LOGO
 * @prop progressBg 加载进度条背景
 * @prop progressFg 加载进度条前景
 * @method show 显示
 * @method hide 隐藏
 * @event show 显示回调
 * @event hide 隐藏回调
 */
import displayMixin from '../../mixins/common-display';

export default {
    name: 'sk-loading',
    mixins: [displayMixin],
    props: {
        bg: {
            default: null,
            type: String
        },
        progress: {
            default: 0,
            type: Number
        },
        logo: {
            default: null,
            type: String
        },
        progressBg: {
            default: null,
            type: String
        },
        progressFg: {
            default: null,
            type: String
        }
    },
    computed: {
        progressBgStyle() {
            if (this.progressBg) {
                return `background: ${this.progressBg};`;
            }
            return null;
        },
        progressFgStyle() {
            return `background: ${this.progressFg};width: ${this.progress}%;`;
        },
        bgStyle() {
            return `background: ${this.bg};`;
        }
    }
};
</script>

<style lang="scss">
@import '../../style/mixin.scss';

.sk-loading {
    @include fullscreen;
    @include bg-cover;
    @include box;
    &__cnt {
        width: 80%;
        transform: translate(0, -50%);
        &__logo {
            max-width: 20vw;
            max-height: 20vw;
            margin: 0 auto;
            display: block;
            margin-bottom: .2rem;
        }
        &__progress {
            width: 100%;
            height: .1rem;
            border-radius: .05rem;
            &__bar {
                transition: all linear .2s;
                height: 100%;
                border-radius: .05rem;
            }
        }
    }
}
</style>
