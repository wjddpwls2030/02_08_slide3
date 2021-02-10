var slide = {
    init: function(){
        this.slide1Fn();
        this.slide2Fn();
        this.slide3Fn();
        this.slide4Fn();
    },

    slide1Fn: function(){
        var cnt = 0;
        var $slidewrap = document.querySelector('#section1 .slide-wrap');
        var $nextbtn = document.querySelector('#section1 .next-btn');
        var $prevbtn = document.querySelector('#section1 .prev-btn');

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
        //버튼 등록 onclick Event
        $nextbtn.onclick = function(){
            nextslideFn();
        }
        
        $prevbtn.onclick = function(){
            prevslideFn();
        }

    },
    slide2Fn: function(){
        var cnt = 0;
        var $slidewrap = document.querySelector('#section2 .left-box .slide-wrap');
        var $nextbtn = document.querySelector('#section2 .left-box .next-btn');                                               
        var $prevbtn = document.querySelector('#section2 .left-box .prev-btn');                                                

        function nextslideFn(){
            cnt++;
            cnt > 3 ? cnt=0 : cnt;
            $slidewrap.style = 'left:'+ (-400*cnt)+'px';

        }

        function prevslideFn(){
            cnt--;
            cnt < 0 ? cnt=3 : cnt;
            $slidewrap.style = 'left:'+ (-400*cnt)+'px';
        }

        //버튼 등록
        $nextbtn.onclick = function(){
            nextslideFn();
        }

        $prevbtn.onclick = function(){
            prevslideFn();

        }

    },

    slide3Fn: function(){
        var cnt = 0;
        var $slidewrap = document.querySelector('#section2 .center-box .slide-wrap');
        var $nextbtn = document.querySelector('#section2 .center-box .next-btn');                                               
        var $prevbtn = document.querySelector('#section2 .center-box .prev-btn');

        function prevslideFn(){
            cnt++;
            cnt > 2 ? cnt=0 : cnt;
            $slidewrap.style = 'top:'+ (-200*cnt)+'px';
        }

        function nextslideFn(){
            cnt--;
            cnt < 0 ? cnt=2 : cnt;
            $slidewrap.style = 'top:'+ (-200*cnt)+'px';
        }

        //버튼등록
        $nextbtn.onclick = function(){
            nextslideFn();
        }

        $prevbtn.onclick = function(){
            prevslideFn();

        }
    },

    slide4Fn: function(){
        var cnt = 0;
        var $slidewrap = document.querySelector('#section2 .right-box .slide-wrap');
        var $nextbtn = document.querySelector('#section2 .right-box .next-btn');
        var $prevbtn = document.querySelector('#section2 .right-box .prev-btn');

        function nextslideFn(){
            cnt++;
            cnt > 3 ? cnt=0 : cnt;
            $slidewrap.style = 'left:'+ (-400*cnt)+'px';

        }

        function prevslideFn(){
            cnt--;
            cnt < 0 ? cnt=3 : cnt;
            $slidewrap.style = 'left:'+ (-400*cnt)+'px';
        }

        //버튼 등록
        $nextbtn.onclick = function(){
            nextslideFn();
        }
        $prevbtn.onclick = function(){
            prevslideFn();
        } 
    }
};

slide.init();