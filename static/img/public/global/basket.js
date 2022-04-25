
var token = window.token
const OnDelete = function(el){

    var id = $(el).data('id')
    $.ajax({
        method: "POST",
        url: "/basket/api/delete/" + id,
        data: {
            '_csrf': token,
            _method: 'DELETE'
        },
        beforeSend: function () {
            load()
        }
    }).done(function (data) {
        try {
            data = JSON.parse(data)
            deleteRow(id)

            refresh(data, id)

            const count = document.querySelector("a[href='/basket'] .badge");
            count.innerHTML = data.count;
            console.log(count)
            
            if (data.empty && document.getElementsByTagName("tbody")) {
                var table = document.getElementsByTagName("tbody")[0];
                var row = table.insertRow(0);
                var cell1 = row.insertCell(0);
                cell1.innerHTML = "Basket empty";
                cell1.setAttribute('colspan', 5)

                if (count != null) {
                    count.remove();
                }
            }

        } catch (e) {
        }
    }).fail(function ( jqXHR, textStatus ) {
        refresh({
            total: 0,
            subtotal: 0,
            setupfee: 0,
        })
        alert("Request failed: " + textStatus);
    })
}

const changeQuantity = function (el) {
    let value = $(el).val();
    var id = $(el).data('id')
    if (value == 0){
        OnDelete(el)
        return;
    }
    $.ajax({
        method: "POST",
        url: "/basket/api/quantity/" + id,
        data: {
            '_csrf': token,
            quantity: value
        },
        beforeSend: function () {
            load()
        }
    }).done(function (data) {
        data = JSON.parse(data)

        document.querySelector("a[href='/basket'] .badge").innerHTML = data.count;
        refresh(data, id)
    }).fail(function ( jqXHR, textStatus ) {
        refresh({
            total: 0,
            subtotal: 0,
            setupfee: 0,
            discount: 0,

        })
        alert("Request failed: " + textStatus);
    })
}

const changeBilling = function(el){

    let value = $(el).val();
    var id = $(el).data('id')
    $.ajax({
        method: "POST",
        url: "/basket/api/billing/" + id,
        data: {
            '_csrf': token,
            billing: value
        },
        beforeSend: function () {
            load()
        }
    }).done(function (data) {

        try {
            data = JSON.parse(data)
            refresh(data, id)
        } catch (e) {
        }
    }).fail(function ( jqXHR, textStatus ) {
        refresh({
            total: 0,
            subtotal: 0,
            setupfee: 0,
            discount: 0,
        })
        alert("Request failed: " + textStatus);

    })
}
function deleteRow(id)
{
    $('.row-' + id).remove()
}
function refresh(data, id)
{
    refreshTable('#price', data.total)
    refreshTable('#setupfee', data.setupfee)
    refreshTable('#discount', data.discount)
    refreshTable('#subtotal', data.subtotal)
    if (id != undefined) {
        refreshTable('#price-' + id, data.unit_price)

        refreshTable('#setupfee-' + id, data.unit_setupfee)
        $('#quantity-' + id).val(data.new_quantity)
    }
    token = data.token
}
function load()
{
    $('#price').html('<spinning-dots style="color: #535FF6;"></spinning-dots>')
    $('#subtotal').html('<spinning-dots style="color: #535FF6;"></spinning-dots>')
    $('#setupfee').html('<spinning-dots style="color: #535FF6;"></spinning-dots>')
    $('#discount').html('<spinning-dots style="color: #535FF6;"></spinning-dots>')
}

function refreshTable(id, value)
{
    $(id).text([numberWithCommas(value),window.CLIENTXCMSCurrency === "EUR" ? "€" : '$'].join(' '));
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}