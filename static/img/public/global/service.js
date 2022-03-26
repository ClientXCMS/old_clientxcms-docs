const url = window.serviceUrl;
const element = document.getElementById("custom-panel")
const event = new Event('service_reloaded');

if (element) {
    setInterval(function () {
        element.innerHTML = "<spinning-dots style=\"color: var(--success)\"></spinning-dots>" + element.innerHTML;
        fetch(url).then((response) => {
            if (response.status === 200) {
                response.text().then(function (text) {
                    element.innerHTML = text;
                    document.dispatchEvent(event)
                })
            }
        })
    }, 30 * 1000)
}