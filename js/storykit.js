//json 파일
fetch('js/storyBook.json')
    .then( (res) => res.json() )
    .then( (data) => {
        if(localStorage.BookNum == undefined) {
            alert('관심상품이 없습니다. 관심상품을 추가해 주세요');
            location.replace('storynew.html');
        }else{
        callback(data)
        }
    } 
    );

    function callback(data){
        //ul 선택자 잡아주기
        const StoryList = document.querySelector('.storyMarket_item');
        let msg = '',BookType,color,genre,author,strong,favoArr = localStorage.BookNum.split(',');

        //관심 상품 추가
        favoArr.forEach(function(v,k){
                //관심상품으로 등록한 상품 코드
            data.Book.forEach(function(v2,k2){
                BookType =data.Book[k2].BookType
                color =data.Book[k2].color
                genre =data.Book[k2].genre
                author =data.Book[k2].author
                strong =data.Book[k2].strong
                if( v == k2 ){
                    msg += `                    
                    <li class="item_detail">
                        <input type="checkbox" class="ckbox" name="bookInfo" value="7955">
                        <div class="item_detail_book">
                            <div class="Bookimg">
                                <span class="${color} colorBook">${BookType}</span>
                                <img src="img/sb_story_img(${k2 + 1 }).jpg" alt="item_detail_book">
                                <p><strong>${genre}</strong>${author}</p>
                            </div>
                            <div class="Booktxt">
                                <p>
                                    <strong>${strong}</strong>
                                </p>
                            </div>
                        </div>
                    </li>
                    `
                }
            });
        });
        StoryList.innerHTML = msg;

        //선택 박스만 삭제하기
        const elBtn = document.querySelector('.btn01');
        const ckbox = document.querySelectorAll('.ckbox'); 

        elBtn.addEventListener('click',function(){
            let checkedF = [];
            for(let i=0;i<ckbox.length;i++){
                if(ckbox[i].checked){
                    localStorage.removeItem('BookNum'); //전체 삭제
                    favoArr.splice(i, 1) //favoArr에서 i번째 1개의 값 지우기
                    checkedF.push(i);
                }
            }
            if(checkedF.length == 0){ 
                alert('상품을 체크해주세요');
            }else{
                if(favoArr.length != 0){
                localStorage.BookNum = favoArr //favoArr값을 새로 BookNum으로
                alert('관심상품목록에서 삭제되었습니다') 
                }
                location.reload(true);
            }

        })


}
