class store{
    constructor(name){
        this.name = name
        this.list = new Array
        this.tel = ""
        this.time = ""
        // this.location = ""
        // this.delevery_cost_TF = true;
        // this.delevery_cost = 0;
        // this.tossTF = true;
    }
    set_category(list){
        this.list.push(list);
    }
    set_tel(tel){
        this.tel = tel
    }
    set_map(map){
        this.map = map
    }
    set_map_text(map_text){
        this.map_text = map_text
    }
    set_delevery_cost_TF(delevery_cost_TF){
        this.delevery_cost_TF = delevery_cost_TF
    }
    set_delevery_cost(delevery_cost){
        this.delevery_cost = delevery_cost
    }
    set_tossTF(tossTF){
        this.tossTF = tossTF
    }
    set_time(time){
      this.time = time
    }
}

class category {
    constructor(name) {
        this.name = name
        this.list = new Array();
        this.SideFalse = false;
      }
      set_menu(list){
        this.list.push(list);
    }
      set_sideFalse(SideFalse){
        this.SideFalse = SideFalse;
      }
}

class menu {
    constructor(name, price, src="") {
      this.name = name
      this.price = price
      this.src = src
    }
  }
ALL = new Array();

STORE = new store("맘스터치");
STORE.set_tel("041-545-9294")
STORE.set_map('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d611.4810287355803!2d127.07053286332608!3d36.79559899670625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ad8ee744347a3%3A0xbdb15b03c0901c39!2z7JWE7IKw7IucIO2DleygleuptCDshKDrrLjrjIDtlZnqtZAg7IOd7Zmc7Lmc6rWQ6rSA!5e0!3m2!1sko!2skr!4v1541514214288')
STORE.set_map_text("선문대학교 친교관 1층 맘스터치")
STORE.set_delevery_cost_TF(true)
STORE.set_delevery_cost(2000);
STORE.set_tossTF(false);
STORE.set_time("11:00 ~ 20:30")
    CATEGORY = new category("버거메뉴");
    CATEGORY.set_sideFalse(true);
        CATEGORY.set_menu(new menu("마살라버거_세트",6000,"img/마살라버거.jpg"))
        CATEGORY.set_menu(new menu("치즈베이컨버거_세트",6500,"img/치즈베이컨버거.jpg"))
        CATEGORY.set_menu(new menu("싸이버거_세트", 5600, "img/싸이버거.jpg"))
        CATEGORY.set_menu(new menu("불싸이버거_세트",5800,"img/불싸이버거.jpg"))
        CATEGORY.set_menu(new menu("화이트갈릭버거_세트", 6100, "img/화이트갈릭버거.jpg"))
        CATEGORY.set_menu(new menu("딥치즈버거_세트",6000,"img/딥치즈버거.jpg"))
        CATEGORY.set_menu(new menu("리샐버거_세트",6100,"img/리샐버거.jpg"))
        CATEGORY.set_menu(new menu("스파이시_불고기_버거_세트",5400,"img/스파이시불고기버거.jpg"))
        CATEGORY.set_menu(new menu("치킨커틀렛버거_세트",5400,"img/치킨커틀렛버거.jpg"))
        CATEGORY.set_menu(new menu("휠랫버거_세트",5800,"img/휠랫버거.jpg"))
    STORE.set_category(CATEGORY);

    CATEGORY = new category("사이드메뉴");
        CATEGORY.set_menu(new menu("김떡만", 3000,"img/김떡만.jpg"));
        CATEGORY.set_menu(new menu("팝콘만두", 3000, "img/팝콘만두.jpg"));
        CATEGORY.set_menu(new menu("할라피뇨치즈너겟(8조각)",3000,"img/할라피뇨치즈너겟.jpg"))
        CATEGORY.set_menu(new menu("어니언치즈감자",2500,"img/어니언치즈감자.jpg"))
    STORE.set_category(CATEGORY);

    CATEGORY = new category("음료수");
        CATEGORY.set_menu(new menu("콜라", 1400, "img/콜라.jpg"));
        CATEGORY.set_menu(new menu("망고에이드", 2000, "img/망고에이드.jpg"));
        CATEGORY.set_menu(new menu("레몬에이드", 2000, "img/레몬에이드.jpg"));
    STORE.set_category(CATEGORY);
ALL.push(STORE);

STORE = new store("피자스쿨");
STORE.set_tel("041-533-7003")
STORE.set_map('https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12779.205684780403!2d127.0604092!3d36.7993113!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd75864ae45e96d3a!2z7ZS87J6Q7Iqk7L-oIOyVhOyCsO2DleygleygkA!5e0!3m2!1sko!2skr!4v1541975754358')
STORE.set_map_text("충청남도 아산시 탕정면 탕정면로 37 (트라펠리스)")
STORE.set_delevery_cost_TF(false)
STORE.set_delevery_cost(0);
STORE.set_tossTF(false);
STORE.set_time("11:00 ~ 22:00")
    CATEGORY = new category("클래식피자");
    CATEGORY.set_sideFalse(true);
        CATEGORY.set_menu(new menu("치즈피자",6000,"img/치즈피자.jpg"))
        CATEGORY.set_menu(new menu("페퍼로니피자",6000,"img/페퍼로니피자.jpg"))
        CATEGORY.set_menu(new menu("콤비네이션피자",7000,"img/콤비네이션피자.jpg"))
        CATEGORY.set_menu(new menu("포테이토피자",7000,"img/포테이토피자.jpg"))
        CATEGORY.set_menu(new menu("불고기피자",7000,"img/불고기피자.jpg"))


    STORE.set_category(CATEGORY);

    CATEGORY = new category("스쿨스페셜피자");
    CATEGORY.set_sideFalse(true);
        CATEGORY.set_menu(new menu("고르곤졸라피자",9000,"img/고르곤졸라피자.png"))
        CATEGORY.set_menu(new menu("직화파인애플피자",10000,"img/직화파인애플피자.png"))
        CATEGORY.set_menu(new menu("스테이크피자",9000,"img/스테이크피자.jpg"))
        CATEGORY.set_menu(new menu("까르보네피자",9000,"img/까르보네피자.jpg"))
        CATEGORY.set_menu(new menu("아이리쉬포테이토피자",9000,"img/아이리쉬포테이토피자.jpg"))
        CATEGORY.set_menu(new menu("깐쇼새우피자",10000,"img/깐쇼새우피자.jpg"))
        CATEGORY.set_menu(new menu("도이치바이트피자",11000,"img/도이치바이트피자.jpg"))
        CATEGORY.set_menu(new menu("멕시칸바이트피자",9000,"img/멕시칸바이트피자.jpg"))

    STORE.set_category(CATEGORY);

    CATEGORY = new category("사이드메뉴");
        CATEGORY.set_menu(new menu("오븐구이통닭", 9000, "img/오븐구이통닭.png"));
        CATEGORY.set_menu(new menu("치킨스틱윙", 4900, "img/치킨스틱윙.png"));
        CATEGORY.set_menu(new menu("새우링&웨지감자", 3500, "img/새우링&웨지감자.png"));
        CATEGORY.set_menu(new menu("치즈오븐스파게티", 4000, "img/치즈오븐스파게티.jpg"));
    STORE.set_category(CATEGORY);

    CATEGORY = new category("토핑추가");
        CATEGORY.set_menu(new menu("고구마무스", 1000, "img/고구마무스.png"));
        CATEGORY.set_menu(new menu("파인애플토핑", 2000, "img/파인애플토핑.jpg"));
        CATEGORY.set_menu(new menu("치즈토핑", 2000, "img/치즈토핑.png"));
        CATEGORY.set_menu(new menu("치즈크러스트", 2000, "img/치즈크러스트.png"));
        CATEGORY.set_menu(new menu("치즈바이트", 3000, "img/치즈바이트.png"));

    STORE.set_category(CATEGORY);
ALL.push(STORE);

STORE = new store("돼지잡는 농부");
STORE.set_tel("041-548-9293")
STORE.set_map('https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1955.2442673880516!2d127.06923302617345!3d36.801655222925184!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5eb64ca4461e7296!2z64-87KeA7J6h64qU64aN67aA!5e0!3m2!1sko!2skr!4v1542007075746')
STORE.set_map_text("아산시 탕정면 탕정면 갈산리 81-11번지 1층 상가갈산칼국수 아산시 충청남도 KR")
STORE.set_delevery_cost_TF(false)
STORE.set_delevery_cost(0);
STORE.set_tossTF(false);
STORE.set_time("10:30 ~ 20:00")
    CATEGORY = new category("1인 메뉴");
    CATEGORY.set_sideFalse(true);
        CATEGORY.set_menu(new menu("고구마돈가스",6000,""))
        CATEGORY.set_menu(new menu("치즈돈가스",6000,""))
        CATEGORY.set_menu(new menu("등심돈가스",5500,""))
        CATEGORY.set_menu(new menu("오징어두루치기",5500,""))
        CATEGORY.set_menu(new menu("오징어",5500,""))
        CATEGORY.set_menu(new menu("고추장 두루치기",5500,""))
        CATEGORY.set_menu(new menu("간장두루치기",5500,""))
        CATEGORY.set_menu(new menu("불타는 제육",5500,""))
        CATEGORY.set_menu(new menu("비빔제육",5000,""))

    STORE.set_category(CATEGORY);

    CATEGORY = new category("2인 세트");
    CATEGORY.set_sideFalse(true);
        CATEGORY.set_menu(new menu("직접구운 삼겹살 2인",14000,""))
        CATEGORY.set_menu(new menu("직접구운 얼큰이삼겹살 2인",15000,""))
        CATEGORY.set_menu(new menu("직접구운 돼지갈비 2인",6000,""))
    STORE.set_category(CATEGORY);

    CATEGORY = new category("추가메뉴");
        CATEGORY.set_menu(new menu("공기밥 추가",1000,""))
        CATEGORY.set_menu(new menu("곱배기(삼겹살/돼지갈비 제외)",1000,""))
    STORE.set_category(CATEGORY);
ALL.push(STORE);



STORE = new store("도스마스");
STORE.set_tel("041-544-8099")
STORE.set_map('https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12778.710054972942!2d127.0681922!3d36.8022817!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x245658b6c00b73cf!2z64-E7Iqk66eI7Iqk7ISg66y464yA7KCQ!5e0!3m2!1sko!2skr!4v1542074937763')
STORE.set_map_text("충청남도 아산시 탕정면 갈산리 47-5")
STORE.set_delevery_cost_TF(false)
STORE.set_delevery_cost(0);
STORE.set_tossTF(true);
STORE.set_time("??? ~ ???")
    CATEGORY = new category("브리또 (안 매운맛/조금 매운맛/아주 매운맛)");
    CATEGORY.set_sideFalse(true);
        CATEGORY.set_menu(new menu("Chicken 브리또",3500,"img/도스마스브리또.png"))
        CATEGORY.set_menu(new menu("Beef 브리또",4000,"img/도스마스브리또.png"))
        CATEGORY.set_menu(new menu("Mixed 브리또",3500,"img/도스마스브리또.png"))
    STORE.set_category(CATEGORY);

    CATEGORY = new category("세트메뉴");
    CATEGORY.set_sideFalse(true);
        CATEGORY.set_menu(new menu("브리또 + 소다(Beef 브리또는 500원 추가)",4200,"img/도스마스브리또음료.png"))
        CATEGORY.set_menu(new menu("브리또 + 소다 + 프렌치프라이 칩스(Beef 브리또는 500원 추가)",6000,"img/도스마스브리또음료칩스.png"))
    STORE.set_category(CATEGORY);

    CATEGORY = new category("추가메뉴");
        CATEGORY.set_menu(new menu("점보 사이즈",1000,""))
        CATEGORY.set_menu(new menu("웨지감자",500,""))
        CATEGORY.set_menu(new menu("더블치즈",500,""))
        CATEGORY.set_menu(new menu("모짜렐라 치즈",1000,""))
        CATEGORY.set_menu(new menu("할라피뇨",500,""))
        CATEGORY.set_menu(new menu("콩",500,""))
    STORE.set_category(CATEGORY);
ALL.push(STORE);


STORE = new store("화정관");
STORE.set_tel("041-541-2263")
STORE.set_map('https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12777.67363318828!2d127.0802261!3d36.8084925!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x71e62c4530c14cdf!2sHwajeong-Gwan!5e0!3m2!1sen!2skr!4v1542103715300')
STORE.set_map_text("충청남도 아산시 탕정면 호산리 210-17")
STORE.set_delevery_cost_TF(false)
STORE.set_delevery_cost(0);
STORE.set_tossTF(false);
STORE.set_time("10:30 ~ 21:00")
    CATEGORY = new category("면류");
    CATEGORY.set_sideFalse(true);
        CATEGORY.set_menu(new menu("짜장면",5000,""))
        CATEGORY.set_menu(new menu("간짜장",6000,""))
        CATEGORY.set_menu(new menu("짬뽕",7000,""))
        CATEGORY.set_menu(new menu("우동",7000,""))
        CATEGORY.set_menu(new menu("쟁반짜장(2인)",13000,""))
        CATEGORY.set_menu(new menu("쟁반짬뽕(2인)",15000,""))
    STORE.set_category(CATEGORY);

    CATEGORY = new category("밥류");
    CATEGORY.set_sideFalse(true);
        CATEGORY.set_menu(new menu("짜장밥",6000,""))
        CATEGORY.set_menu(new menu("볶음밥",6000,""))
        CATEGORY.set_menu(new menu("짬뽕밥",7000,""))
        CATEGORY.set_menu(new menu("오므라이스",7000,""))
        CATEGORY.set_menu(new menu("오징어덮밥",7000,""))
        CATEGORY.set_menu(new menu("제육덮밥",7000,""))
        CATEGORY.set_menu(new menu("잡채밥",7000,""))
        CATEGORY.set_menu(new menu("고추잡채밥",8000,""))
    STORE.set_category(CATEGORY);

    CATEGORY = new category("요리류");
    CATEGORY.set_sideFalse(true);
        CATEGORY.set_menu(new menu("탕수육 소",16000,""))
        CATEGORY.set_menu(new menu("탕수육 중",20000,""))
        CATEGORY.set_menu(new menu("탕수육 대",25000,""))
        CATEGORY.set_menu(new menu("사천탕수육 중",25000,""))
        CATEGORY.set_menu(new menu("양장피",30000,""))
        CATEGORY.set_menu(new menu("팔보채",30000,""))
        CATEGORY.set_menu(new menu("유산슬",30000,""))
        CATEGORY.set_menu(new menu("깐쇼새우",35000,""))
    STORE.set_category(CATEGORY);
ALL.push(STORE);

STORE = new store("비단비");
STORE.set_tel("041-541-2263")
STORE.set_map('https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12777.67363318828!2d127.0802261!3d36.8084925!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x71e62c4530c14cdf!2sHwajeong-Gwan!5e0!3m2!1sen!2skr!4v1542103715300')
STORE.set_map_text("충청남도 아산시 탕정면 호산리 210-17")
STORE.set_delevery_cost_TF(false)
STORE.set_delevery_cost(0);
STORE.set_tossTF(false);
STORE.set_time("10:30 ~ 20:30")
    CATEGORY = new category("면류");
    CATEGORY.set_sideFalse(true);
        CATEGORY.set_menu(new menu("짜장면",5000,""))
        CATEGORY.set_menu(new menu("간짜장",6000,""))
        CATEGORY.set_menu(new menu("짬뽕",7000,""))
        CATEGORY.set_menu(new menu("우동",7000,""))
        CATEGORY.set_menu(new menu("쟁반짜장(2인)",13000,""))
        CATEGORY.set_menu(new menu("쟁반짬뽕(2인)",15000,""))
    STORE.set_category(CATEGORY);

    CATEGORY = new category("밥류");
    CATEGORY.set_sideFalse(true);
        CATEGORY.set_menu(new menu("짜장밥",6000,""))
        CATEGORY.set_menu(new menu("볶음밥",6000,""))
        CATEGORY.set_menu(new menu("짬뽕밥",7000,""))
        CATEGORY.set_menu(new menu("오므라이스",7000,""))
        CATEGORY.set_menu(new menu("오징어덮밥",7000,""))
        CATEGORY.set_menu(new menu("제육덮밥",7000,""))
        CATEGORY.set_menu(new menu("잡채밥",7000,""))
        CATEGORY.set_menu(new menu("고추잡채밥",8000,""))
    STORE.set_category(CATEGORY);

    CATEGORY = new category("요리류");
  CATEGORY.set_sideFalse(true);
        CATEGORY.set_menu(new menu("탕수육 소",16000,""))
        CATEGORY.set_menu(new menu("탕수육 중",20000,""))
        CATEGORY.set_menu(new menu("탕수육 대",25000,""))
        CATEGORY.set_menu(new menu("사천탕수육 중",25000,""))
        CATEGORY.set_menu(new menu("양장피",30000,""))
        CATEGORY.set_menu(new menu("팔보채",30000,""))
        CATEGORY.set_menu(new menu("유산슬",30000,""))
        CATEGORY.set_menu(new menu("깐쇼새우",35000,""))
    STORE.set_category(CATEGORY);
ALL.push(STORE);

STORE = new store("느티나무");
STORE.set_tel("041-532-2141")
STORE.set_map('https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12779.575749546075!2d127.084254!3d36.7970933!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb0d8765d00a5bd87!2z64qQ7Yuw64KY66y07KeR!5e0!3m2!1sen!2skr!4v1542105520615')
STORE.set_map_text("충남 아산시 탕정면 선문로221번길 11-4")
STORE.set_delevery_cost_TF(false)
STORE.set_delevery_cost(0);
STORE.set_tossTF(false);
STORE.set_time("10:00 ~ 21:30")
    CATEGORY = new category("식사류");
    CATEGORY.set_sideFalse(true);
        CATEGORY.set_menu(new menu("김치불고기",5000,""))
        CATEGORY.set_menu(new menu("김치불고기볶음밥",5000,""))
        CATEGORY.set_menu(new menu("오므라이스",5000,""))
        CATEGORY.set_menu(new menu("돈까스",5500,""))
        CATEGORY.set_menu(new menu("매운돈까스",5500,""))
        CATEGORY.set_menu(new menu("오징어제육덮밥",5500,""))
        CATEGORY.set_menu(new menu("제육덮밥",5500,""))
        CATEGORY.set_menu(new menu("오징어덮밥",5500,""))
        CATEGORY.set_menu(new menu("우렁된장",6000,""))
        CATEGORY.set_menu(new menu("뼈해장국",7000,""))
        CATEGORY.set_menu(new menu("삼겹살김치찜",6500,""))
        CATEGORY.set_menu(new menu("닭갈비덮밥",5500,""))
        CATEGORY.set_menu(new menu("김치찌개",5500,""))
        CATEGORY.set_menu(new menu("순두부찌개",5500,""))
        CATEGORY.set_menu(new menu("소고기덮밥",6000,""))
        CATEGORY.set_menu(new menu("쫄면",4500,""))
        CATEGORY.set_menu(new menu("칡비빔냉면",6000,""))
        CATEGORY.set_menu(new menu("칡물냉면",5000,""))
    STORE.set_category(CATEGORY);

    CATEGORY = new category("사이드메뉴");
        CATEGORY.set_menu(new menu("알추가(계란추가)",500,""))
      STORE.set_category(CATEGORY);
ALL.push(STORE);

STORE = new store("한솥");
STORE.set_tel("041-544-8099")
STORE.set_map('https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15307.112736808347!2d127.06708507864415!3d36.7999822484328!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x48103eb43b69d02b!2z7ZWc7Ial64-E7Iuc6529!5e0!3m2!1sen!2skr!4v1542116204896')
STORE.set_map_text("충청남도 아산시 탕정면 갈산리 81-3")
STORE.set_delevery_cost_TF(false)
STORE.set_delevery_cost(0);
STORE.set_tossTF(true);
STORE.set_time("9:00 ~ 21:00")
    CATEGORY = new category("프리미엄");
    CATEGORY.set_sideFalse(true);
        CATEGORY.set_menu(new menu("시그니처 도시락",13000,""))
        CATEGORY.set_menu(new menu("매화(치킨,연어구이)",10000,""))
        CATEGORY.set_menu(new menu("매화(순살 고등어데리야끼)",10000,""))
        CATEGORY.set_menu(new menu("진달래",7000,""))
        CATEGORY.set_menu(new menu("개나리(순살 고등어데리야끼)",8000,""))
        CATEGORY.set_menu(new menu("개나리(순살 고등어조림)",8000,""))
    STORE.set_category(CATEGORY);

    CATEGORY = new category("고메이");
    CATEGORY.set_sideFalse(true);
    CATEGORY.set_menu(new menu("큐브스테이크 필라프",6300,""))
    CATEGORY.set_menu(new menu("나시고랭",4500,""))
    CATEGORY.set_menu(new menu("순살 고등어조림",6000,""))
    CATEGORY.set_menu(new menu("데미그라스 함박스테이크",5800,""))
    CATEGORY.set_menu(new menu("깐깐도시락",5800,""))
    CATEGORY.set_menu(new menu("깐풍기 도시락",4300,""))
    STORE.set_category(CATEGORY);

    CATEGORY = new category("고기고기시리즈");
    CATEGORY.set_sideFalse(true);
    CATEGORY.set_menu(new menu("새치 고기고기",6000,""))
    CATEGORY.set_menu(new menu("돈치 고기고기",5200,""))
    CATEGORY.set_menu(new menu("고기고기",3800,""))
    STORE.set_category(CATEGORY);

    CATEGORY = new category("모둠시리즈");
    CATEGORY.set_sideFalse(true);
    CATEGORY.set_menu(new menu("동백",5000,""))
    CATEGORY.set_menu(new menu("돈치불고기",4700,""))
    CATEGORY.set_menu(new menu("치킨제육",4300,""))
    CATEGORY.set_menu(new menu("국화",4000,""))
    CATEGORY.set_menu(new menu("돈까스도련님",3800,""))
    CATEGORY.set_menu(new menu("제육볶음",3700,""))
    CATEGORY.set_menu(new menu("도련님",3600,""))
    STORE.set_category(CATEGORY);

    CATEGORY = new category("마요");
    CATEGORY.set_sideFalse(true);
    CATEGORY.set_menu(new menu("왕치킨마요",4200,""))
    CATEGORY.set_menu(new menu("빅치킨마요",3400,""))
    CATEGORY.set_menu(new menu("돈치마요",3400,""))
    CATEGORY.set_menu(new menu("참치 샐러드마요",3300,""))
    CATEGORY.set_menu(new menu("치킨 샐러드마요",3300,""))
    CATEGORY.set_menu(new menu("치킨마요",2800,""))
    CATEGORY.set_menu(new menu("참치마요",2800,""))
    STORE.set_category(CATEGORY);

    CATEGORY = new category("카레");
  CATEGORY.set_sideFalse(true);
    CATEGORY.set_menu(new menu("소불고기카레",4300,""))
    CATEGORY.set_menu(new menu("돈까스 카레",3900,""))
    CATEGORY.set_menu(new menu("카레도시락",2800,""))
    STORE.set_category(CATEGORY);

    CATEGORY = new category("철판볶음밥");
    CATEGORY.set_sideFalse(true);
    CATEGORY.set_menu(new menu("소불고기 철판볶음밥",4500,""))
    CATEGORY.set_menu(new menu("한솥 철판볶음밥",3700,""))
    STORE.set_category(CATEGORY);

    CATEGORY = new category("프리미엄 찌개");
    CATEGORY.set_sideFalse(true);
    CATEGORY.set_menu(new menu("소고기 육개장",4500,""))
    CATEGORY.set_menu(new menu("묵은지 김치찌개",4300,""))
    STORE.set_category(CATEGORY);

    CATEGORY = new category("덮밥");
    CATEGORY.set_sideFalse(true);
    CATEGORY.set_menu(new menu("소불고기덮밥",4200,""))
    CATEGORY.set_menu(new menu("왕카레돈까스덮밥",5500,""))
    CATEGORY.set_menu(new menu("새우돈까스 덮밥",3800,""))
    CATEGORY.set_menu(new menu("돈까스 덮밥",3600,""))
    STORE.set_category(CATEGORY);

    CATEGORY = new category("비빔밥");
    CATEGORY.set_sideFalse(true);
    CATEGORY.set_menu(new menu("치즈불닭비빔밥",5500,""))
    CATEGORY.set_menu(new menu("불닭비빔밥",4500,""))
    CATEGORY.set_menu(new menu("소불고기 감초고추장 비빔밥",4800,""))
    CATEGORY.set_menu(new menu("시골제육 두부강된장 비밤밥",4800,""))
    CATEGORY.set_menu(new menu("참치야재 감초고추장",3200,""))
    CATEGORY.set_menu(new menu("열무 두부강된장 비빔밥",3800,""))
    STORE.set_category(CATEGORY);

    CATEGORY = new category("실속반찬");
    CATEGORY.set_menu(new menu("반찬 큐브스테이크",4300,""))
    CATEGORY.set_menu(new menu("반찬 묵은지김치찌개",3900,""))
    CATEGORY.set_menu(new menu("반찬 소고기육개장",4100,""))
    CATEGORY.set_menu(new menu("반찬 카레",2400,""))
    CATEGORY.set_menu(new menu("반찬 깐쇼칠리새우",6000,""))
    CATEGORY.set_menu(new menu("반찬 깐깐콤비",4800,""))
    CATEGORY.set_menu(new menu("반찬 데미함박스테이크",4800,""))
    CATEGORY.set_menu(new menu("반찬 소불고기",3900,""))
    CATEGORY.set_menu(new menu("반찬 순살 고등어데리야끼",3400,""))
    CATEGORY.set_menu(new menu("반찬 치킨",3200,""))
    CATEGORY.set_menu(new menu("반찬 깐풍기",3000,""))
    CATEGORY.set_menu(new menu("반찬 고기고기",3100,""))
    CATEGORY.set_menu(new menu("반찬 돈까스 도련님",3100,""))
    CATEGORY.set_menu(new menu("반찬 제육볶음",3000,""))
    CATEGORY.set_menu(new menu("반찬 돈까스",2500,""))
    CATEGORY.set_menu(new menu("반찬 순살 고등어조림",5000,""))
    STORE.set_category(CATEGORY);

    CATEGORY = new category("미니반찬");
    CATEGORY.set_menu(new menu("필라프",2000,""))
    CATEGORY.set_menu(new menu("영양밥",2200,""))
    CATEGORY.set_menu(new menu("현미밥",1700,""))
    CATEGORY.set_menu(new menu("한솥밥",1000,""))
    CATEGORY.set_menu(new menu("볶음김치",400,""))
    CATEGORY.set_menu(new menu("김치",300,""))
    CATEGORY.set_menu(new menu("무말랭이",300,""))
    STORE.set_category(CATEGORY);


    CATEGORY = new category("사이드메뉴");
    CATEGORY.set_menu(new menu("교자만두",2800,""))
    CATEGORY.set_menu(new menu("땅콩시나몬빠스",1800,""))
    CATEGORY.set_menu(new menu("케이준후라이",1500,""))
    CATEGORY.set_menu(new menu("치킨 샐러드(유자드레싱)",3600,""))
    CATEGORY.set_menu(new menu("치킨 샐러드(사과드레싱)",3600,""))
    CATEGORY.set_menu(new menu("그린 샐러드(유자드레싱)",2900,""))
    CATEGORY.set_menu(new menu("그린 샐러드(사과드레싱)",2900,""))
    CATEGORY.set_menu(new menu("미니 샐러드(유자드레싱)",1500,""))
    CATEGORY.set_menu(new menu("미니 샐러드(사과드레싱)",1500,""))
    CATEGORY.set_menu(new menu("닭강정(소)",2500,""))
    CATEGORY.set_menu(new menu("닭강정(중)",7000,""))
    CATEGORY.set_menu(new menu("치킨 박스(대)",10000,""))
    CATEGORY.set_menu(new menu("치킨 박스(중)_양식소스",5000,""))
    CATEGORY.set_menu(new menu("치킨 박스(중)_칠리소스",5000,""))
    CATEGORY.set_menu(new menu("치킨 박스(소)",2500,""))
    STORE.set_category(CATEGORY);
ALL.push(STORE);
