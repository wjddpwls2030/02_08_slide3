//객체(object)기반
//var obj  = new Object(); //객체 생성자 방식
//var obj  = {}; //객체 리터럴 방식 (권장방식)

//객체 안에 속성(property)과 속성값은 콜론(:)을 사용해서 구분한다
//객체 안에 속성(property)은 속성 값 다음에 콤마(,)를 사용해서 구분한다
//속성 값이 문자 또는 문자열은 반드시 인용부용("",'',``)사용해서 감싸준다.
var obj = {        //객체 이름
    irum:'김유신', //irum 속성(property 프로퍼티) : '김유신' 속성 값(value)
    age:45,//(숫자는 ''안쓰고 바로 써도 된다)
    mill:true,
    result: function(){
       //this 객체이름 obj객체
       //메서드 안에서는 객체 속성값 뒤에 = 을 사용한다. :는 X
       var cnt = 0;
           cnt = 100;
       console.log( this.irum, this.age = 30, this.mill);
       console.log('result 메소드cnt 값 : ',cnt);
    }, //메서드(Method) 또는 리터럴 함수 또는 익명함수(이름이 없는 함수)
                         //프로퍼티에 function(){}이 존재하면 메서드가 된다.

        answer:function(){
            var cnt = 0;
                cnt = 50;
                console.log('result 메소드 cnt 값 :',cnt);
        },

        init:function(){
            this.result();
            this.answer();
        }

    };

    //obj.init();
    //obj.result();//result 메서드 호출 실행
    // console.log ( obj.result.cnt() );
    // console.log ( obj.answer.cnt() );

//객체 호출 실행
// console.log( obj ); //객체
// console.log( obj.irum ); //객체.프로퍼티 -- 객체.이름 - 문자열
// console.log( obj.age ); //객체. 프로퍼티 -- 객체.나이 - 정수
// console.log( obj.mill ); //객체.프로퍼티 -- 객체.군복무 - 참/거짓

//성적처리 객체
var sungjuk = {
    init:function(){
        this.tot();
        this.avg();
    },
    irum:'강감찬',
    kor:95,
    eng:90,
    mat:94,
    tot:function(){
        console.log('이름 : ' + this.irum );
        console.log('국어점수 : ' + this.kor );
        console.log('영어점수 : ' + this.eng );
        console.log('수학점수 : ' + this.mat );
        console.log('총점 : ' + (this.kor+this.eng+this.mat) );

    },
    avg:function(){
        console.log('평균 : ' + (this.kor+this.eng+this.mat)/3 );
    }
}

sungjuk.init(); //객체.init();

var sungjuk2 = {
    init:function(){
        this.tot();
        this.avg();
    },
    irum:'정예진',
    sie:90,
    eng:98,
    his:88,
    tot:function(){
        console.log('이름:'+this.irum );
        console.log('과학점수:'+this.sie );
        console.log('영어점수:'+this.eng );
        console.log('사회점수:'+this.his );
        console.log('총점:'+(this.sie+this.eng+this.his) );
    },
    avg:function(){
        console.log('평균:'+(this.sie+this.eng+this.his)/3);
    }
}

sungjuk2.init();




//섹션1 슬라이드 박스
var cnt = 0;
var $slidewrap = document.querySelector('#section1 .slide-wrap');//#section1 .slide-wrap

//이름 있는 함수 (선언적 함수)
function nextslideFn(){
    cnt++;
    cnt > 3 ? cnt=0: cnt; 
    $slidewrap.style = 'left:' + (-1200*cnt) + 'px'; 
    
}


function prevslideFn(){    
    cnt--;
    cnt < 0 ? cnt=3 :cnt; 
    $slidewrap.style = 'left:' + (-1200*cnt) + 'px';
    
}

//섹션2 left박스 슬라이드

var cnt2 = 0;
var $slidewrap2 = document.querySelector('#section2 .left-box .slide-wrap');//wrap2인거 wrap로 바꾸고(html에서도)
                                                         //#section2 .left-box .slide-wrap 

function nextslideFn2(){
    cnt2++;
    cnt2 > 3 ? cnt2=0 : cnt2;
    $slidewrap2.style = 'left:'+ (-400*cnt2)+'px';

}

function prevslideFn2(){
    cnt2--;
    cnt2 < 0 ? cnt2=3 : cnt2;
    $slidewrap2.style = 'left:'+ (-400*cnt2)+'px';
}

//섹션2 center박스 슬라이드
var cnt3 = 0;
var $slidewrap3 = document.querySelector('#section2 .center-box .slide-wrap');

function prevslideFn3(){
    cnt3++;
    cnt3 > 2 ? cnt3=0 : cnt3;
    $slidewrap3.style = 'top:'+ (-200*cnt3)+'px';
}

function nextslideFn3(){
    cnt3--;
    cnt3 < 0 ? cnt3=2 : cnt3;
    $slidewrap3.style = 'top:'+ (-200*cnt3)+'px';
}


//섹션2 right 박스 슬라이드

var cnt4 = 0;
var $slidewrap4 = document.querySelector('#section2 .right-box .slide-wrap');

function nextslideFn4(){
    cnt4++;
    cnt4 > 3 ? cnt4=0 : cnt4;
    $slidewrap4.style = 'left:'+ (-400*cnt4)+'px';

}

function prevslideFn4(){
    cnt4--;
    cnt4 < 0 ? cnt4=3 : cnt4;
    $slidewrap4.style = 'left:'+ (-400*cnt4)+'px';
}