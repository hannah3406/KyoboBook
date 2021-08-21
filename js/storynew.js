//제목 selectBox
srchFirst.addEventListener('click',function(){
    this.classList.toggle('on');
})

const elLi1 = document.querySelectorAll('.list-srch1 li');
const btnSrch1 = document.querySelector('.btn-slt1');

for(let i=0;i<elLi1.length;i++){
    elLi1[i].addEventListener('click',function(){
        btnSrch1.value = this.textContent;
    })
}

//상품별 selectBox
SelectBox.addEventListener('click',function(){
    this.classList.toggle('on');
})

const elLi2 = document.querySelectorAll('.list-srch2 li');
const btnSrch2 = document.querySelector('.btn-slt2');

for(let i=0;i<elLi2.length;i++){
    elLi2[i].addEventListener('click',function(){
        btnSrch2.value = this.textContent;
    })
}

//json 파일
fetch('js/storyBook.json')
    .then( (res) => res.json() )
    .then( (data) => callback(data) );

    function callback(data){
        //ul 선택자 잡아주기
        const StoryList = document.querySelector('.storyMarket_item');
        let msg = '',BookType,color,genre,author,strong,detail;
            data.Book.forEach(function(v,k){
                BookType =data.Book[k].BookType
                color =data.Book[k].color
                genre =data.Book[k].genre
                author =data.Book[k].author
                strong =data.Book[k].strong
                detail =data.Book[k].detail

                msg += `                    
                <li class="item_detail">
                    <input type="checkbox" class="ckbox" name="bookInfo" value="7955">
                    <div class="item_detail_book">
                        <div class="Bookimg">
                            <span class="${color} colorBook">${BookType}</span>
                            <img src="img/sb_story_img(${k + 1 }).jpg" alt="item_detail_book">
                            <p><strong>${genre}</strong>${author}</p>
                        </div>
                        <div class="Booktxt">
                            <p>
                                <strong>${strong}</strong>
                                ${detail}
                            </p>
                        </div>
                    </div>
                </li>
                `
            });
            StoryList.innerHTML = msg;
            
            const itemDetail = document.querySelectorAll('.item_detail');
            const itemBook = document.querySelectorAll('.Bookimg > span');

            Select3.addEventListener('click',function(e){
                // e.preventDefault();
                idx=0;
            for(let i=0;i<itemBook.length;i++){
                filter = btnSrch2.value.toUpperCase();
                booktype = itemBook[i].textContent;

                if(booktype.toUpperCase().indexOf(filter) > -1){
                    itemDetail[i].style.display = "";
                }else{
                    itemDetail[i].style.display = "none";
                    }
                }
            })


        //관심상품 클릭
        const elBtn = document.querySelector('.btn01');
        const ckbox = document.querySelectorAll('.ckbox');
        let favorites = []; 
        elBtn.addEventListener('click',function(){
            let checkedF = [];
            //체크박스 반복문
            for(let i=0;i<ckbox.length;i++){
                    if(!favorites.includes(i)){ //중복 요소 제외한 값만
                        if(ckbox[i].checked){
                            favorites.push(i);// localStorage에 value 값 넣기 위한 배열
                            checkedF.push(i);// checked length 잡기위한 배열
                        }
                    }
                ckbox[i].checked = false; //반복문 끝난 후 체크지우기
            }
            localStorage.BookNum = favorites

            //체크박스 선택 안 된 경우
            if(checkedF.length == 0){ 
                alert('상품을 체크해주세요');
            }else{
                alert('관심작품이 등록되었습니다');
                location.replace('storykit.html');
            }
        })
        

}
