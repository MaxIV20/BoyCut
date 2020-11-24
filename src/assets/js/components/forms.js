$(".numberInput").keyup(function() {
    $(this).val(this.value.match(/[0-9]*/));
});
