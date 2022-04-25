interface FontFamily {
    uid: string;
    name: string;
    url: string;
    crt_tm: string;
    upd_tm: string;
}
const getFontList = () => {}
/**
 * @description: 设置字体到Header
 * @param {list}
 */
const insertFontToHeader = (list: FontFamily[]) => {
    const style = document.createElement("style");
    style.type = "text/css";
    let text = "";
    list.forEach((font) => {
        text += ` @font-face {font-family:'${font.name}';src:url('${font.url}')}`;
    });
    style.innerText = text;
    document.getElementsByTagName("head")[0].appendChild(style);
};
/**
 * @description: 请求服务端字体数据
 */
const getList = async () => {
    const res = await getFontList();
    if (res.code === 0) {
        insertFontToHeader(res.data.rows);
    }
};
export { getList };
