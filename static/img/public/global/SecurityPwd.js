class SecurityPwd extends HTMLAnchorElement {
    connectedCallback(){
        this.addEventListener("click", this.onClickEvent.bind(this))
    }

    disconnectedCallback(){
        this.removeEventListener("click")
    }

    onClickEvent(e) {
        e.preventDefault()
        fetch('/api/pwd').then((response)  => {
            if (response.status >= 200 && response.status < 300) {
                response.json().then(({data}) => {
                    document.querySelectorAll(".pwd-field").forEach((field) =>  {
                        
                        field.value = data.pwd

                    })
                    document.getElementById("pwd-return").innerHTML = this.dataset.verb + " : " + data.pwd
                })
            } else {
                alert("Internal error");
            }
        })
    }
}
customElements.define("security-pwd", SecurityPwd, {extends: 'a'})