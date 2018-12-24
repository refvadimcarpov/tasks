var sel = "table tbody";
var ctl = "#ctl";
var btn = "#btn";

window.addEventListener("load", function(evt) {
    
    var tbl = document.querySelector(sel);

    tbl.innerHTML = '';

    for(var i = 1; i < 10; i++) {
        
        var tr = document.createElement("tr");
        
        var th = document.createElement("th");
        th.classList.add('mul-' + i);
        th.innerText = i.toString();
        tr.appendChild(th);
        
        var td = document.createElement("td");
        td.classList.add('res-' + i);
        tr.appendChild(td);

        tbl.appendChild(tr);
    }

    document.querySelector(ctl).addEventListener("keyup", function(evt) {
        document.querySelector(btn).classList.remove('btn-danger');
        for(var i = 1; i < 10; i++) {
            document.querySelector(sel + ' td.res-' + i).innerText = '...';
        }
        document.querySelector("table tfoot td").innerText = '...';
    });

    document.querySelector(btn).addEventListener("click", function(evt) {
        var inp = parseInt(document.querySelector(ctl).value);
        if (isNaN(inp))
        {
            document.querySelector(btn).classList.add('btn-danger');
            document.querySelector(ctl).value = '';
            return;
        }
        var total = 0;
        for(var i = 1; i < 10; i++) {
            var curr = inp * i;
            total += curr;
            document.querySelector(sel + ' td.res-' + i).innerText = (inp == 0 ? "" : curr);
        }
        document.querySelector("table tfoot td").innerText = (total == 0 ? "" : total);
    });

});