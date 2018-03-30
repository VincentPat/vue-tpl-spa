<template>
    <transition name="fade">
        <div class="sk-toast"
            v-show="display">
            <div class="sk-toast__cnt"
                v-html="content">
            </div>
        </div>
    </transition>
</template>

<script>
/**
 * @name 弹出框提示
 * @description 可调用show方法显示自定义HTML，可设置timeout参数，定时自动消失。
 * @method show 显示
 * @method hide 隐藏
 * @event show 显示回调
 * @event hide 隐藏回调
 */
import displayMixin from '../../mixins/common-display';

export default {
    name: 'sk-toast',
    mixins: [displayMixin],
    data() {
        return {
            display: false,
            content: null,
            timeout: 0
        };
    },
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
@import '../../style/mixin.scss';

.sk-toast {
    @include fullscreen;
    &__cnt {
        @include transform-center;
        @include toast;
    }
}
</style>
