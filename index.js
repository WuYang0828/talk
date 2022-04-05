(function () {

    // 初始化结构
    var container = document.querySelector('.container');
    for (var i = 0; i < 6; i++) {
        container.innerHTML += `  
        <li class="items">
        <div class="item">
            <div class="bg"></div>
            <div class="title">
                <h2>image</h2>
            </div>
            <div class="btns">
                <div class="header">SpongeBob SquarePants</div>
                <div class="close"></div>
            </div>
        </div>
    </li>`
    }

    setTimeout(function(){
        container.classList.remove('init')
    },200)


    var oli = document.querySelectorAll('.items')
    var oclose = document.querySelectorAll('.close')
    for(var i=0; i<6; i++){
        oli[i].onclick = function(){
            container.classList.add('oclick');
            this.classList.add('active');
        }
        oclose[i].onclick = function(e){
            var li = document.querySelector('.active');
            if(li){
                container.classList.remove('oclick');
                li.classList.remove('active');
                e.stopPropagation();
            }
        }
        var doc = document.querySelector
    }









})()