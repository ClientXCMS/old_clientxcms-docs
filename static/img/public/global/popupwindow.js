/**
 * Custom Element - PopupWindow 
 * @author CLIENTXCMS
 * @date 29-03-21
 * @example <a href="link" id="email-1" width="650" height="450" is="popup-window"></a>
 * 
 */
class PopupWindow extends HTMLAnchorElement {

    connectedCallback() {
        this.addEventListener("click", this.onClickEvent.bind(this))
    }

    disconnectedCallback() {
        this.removeEventListener("click")
    }

    onClickEvent(e) {
        e.preventDefault()
        this.open(this.href)
    }

    open(href) {
        
        var popupWidth = this.width || 640;
        var popupHeight = this.height || 320;
        var windowLeft = window.screenLeft || window.screenX;
        var windowTop = window.screenTop || window.screenY;
        var windowWidth = window.innerWidth || document.documentElement.clientWidth;
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        var popupLeft = windowLeft + windowWidth / 2 - popupWidth / 2 ;
        var popupTop = windowTop + windowHeight / 2 - popupHeight / 2;
        window.open(href, this.id, 'scrollbars=yes, width=' + popupWidth + ', height=' + popupHeight + ', top=' + popupTop + ', left=' + popupLeft).focus()
    }
}
customElements.define("popup-window", PopupWindow, { extends: 'a' })