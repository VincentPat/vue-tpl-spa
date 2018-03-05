import axios from 'axios';

// 请求头参数
const axiosConfig = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
    }
};

// JSSDK API列表
const defaultJsApiList = [
    // 所有要调用的 API 都要加到这个列表中
    'onMenuShareTimeline', 'onMenuShareAppMessage', 'hideMenuItems'
];

export default {
    getWxSignPackage: () => {
        const url = '/game/gameAjax/GetSignPackage';
        const href = location.href.split('#')[0];
        return axios.post(url, `url=${window.encodeURIComponent(href)}`, axiosConfig).then((response) => {
            const result = response.data;
            const data = result.data || result.msg;
            return data;
        });
    },
    configWx: (wxSignPackage, jsApiList) => {
        if (typeof window.wx !== 'undefined') {
            // 这里有个坑。用//api.24haowan.com时，nonceStr是大写。用平台时是：noncestr。切换时记得切换
            if (!wxSignPackage.appId || !wxSignPackage.timestamp
                || !wxSignPackage.nonceStr || !wxSignPackage.signature) {
                return false;
            }
            /* 微信接口 */
            window.wx.config({
                debug: false,
                appId: wxSignPackage.appId,
                timestamp: wxSignPackage.timestamp,
                nonceStr: wxSignPackage.nonceStr,
                signature: wxSignPackage.signature,
                jsApiList: jsApiList || defaultJsApiList
            });
        }
        return this;
    },
    setWxShare: function setWxShare(wxShareObj, callback) {
        if (typeof wx !== 'undefined') {
            // 配置分享信息
            window.wx.ready(() => {
                // 在这里调用 API
                // 分享朋友圈
                window.wx.onMenuShareTimeline({
                    title: wxShareObj.title, // 分享标题
                    link: wxShareObj.link, // 分享链接
                    imgUrl: wxShareObj.imgUrl, // 分享图标
                    success: function success() {
                        if (typeof callback === 'function') callback();
                    }
                });
                // 分享朋友
                window.wx.onMenuShareAppMessage({
                    title: wxShareObj.title, // 分享标题
                    desc: wxShareObj.desc, // 分享描述
                    link: wxShareObj.link, // 分享链接
                    imgUrl: wxShareObj.imgUrl, // 分享图标
                    type: 'link', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function success() {
                        if (typeof callback === 'function') callback();
                    }
                });
            });
        }
    },
};
