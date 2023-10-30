function searchfunctionfirstdraft() {
    var input = document.getElementById("user-recyclables-search");
    var ul = document.getElementById("list-of-recyclables-types");
    var li = ul.getElementsByTagName("li");
    var filter = input.value.toUpperCase();
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0]
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }
        else {
        li[i].style.display = "none";
        }
    }
}
