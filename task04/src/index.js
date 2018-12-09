const sel = "table tbody";
const ctl = "#ctl";
const btn = "#btn";
$(() => {
    $(sel).empty();
    
    for(let i = 1; i < 10; i++) {
        $(sel).append(`<tr><th class="mul-${i}">${i}</th><td class="res-${i}"></td></tr>`);
    }

    $(ctl).keyup((evt) => {
        $(btn).removeClass('btn-danger');
        for(let i = 1; i < 10; i++) {
            $(sel + ` td.res-${i}`).text('...');
        }
        $("table tfoot td").text('...');
    });

    $(btn).click((evt) => {
        const inp = parseInt($(ctl).val());
        if (isNaN(inp))
        {
            $(btn).addClass('btn-danger');
            $(ctl).val('');
            return;
        }
        let total = 0;
        for(let i = 1; i < 10; i++) {
            const curr = inp * i;
            total += curr;
            $(sel + ` td.res-${i}`).text(inp == 0 ? "" : curr);
        }
        $("table tfoot td").text(total == 0 ? "" : total);
    });
});