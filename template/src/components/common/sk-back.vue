<template>
    <transition name="fade">
        <div class="sk-back"
            :style="bg"
            v-show="display"
            @click="back">
        </div>
    </transition>
</template>

<script>
/**
 * @name 返回按钮
 * @description 大小由父元素控制，点击后触发back事件。
 * @prop img 返回图标
 * @method show 显示
 * @method hide 隐藏
 * @event back 返回
 * @event show 显示
 * @event hide 隐藏
 */
import displayMixin from '../../mixins/common-display';

export default {
    name: 'sk-back',
    mixins: [displayMixin],
    props: {
        img: {
            default: null,
            type: String
        },
        isHistoryBack: {
            default: true,
            type: Boolean
        }
    },
    computed: {
        bg() {
            return `background-image: url('${this.img}')`;
        }
    },
    methods: {
        back() {
            if (this.isHistoryBack) window.history.go(-1);
            this.$emit('back');
        }
    }
};
</script>

<style lang="scss">
@import '../../style/mixin.scss';

.sk-back {
    @include fullfill;
    @include bg-contain;
}
</style>

