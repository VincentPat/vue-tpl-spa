/**
 * 通用组件混合
 * Display 显示/隐藏
 */
export default {
    data() {
        return {
            display: true
        };
    },
    methods: {
        show() {
            this.display = true;
            this.$emit('show');
        },
        hide() {
            this.display = false;
            this.$emit('hide');
        }
    }
};
