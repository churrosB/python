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
      }
      set_menu(list){
        this.list.push(list);
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
        CATEGORY.set_menu(new menu("치즈피자",6000,"img/치즈피자.jpg"))
        CATEGORY.set_menu(new menu("페퍼로니피자",6000,"img/페퍼로니피자.jpg"))
        CATEGORY.set_menu(new menu("콤비네이션피자",7000,"img/콤비네이션피자.jpg"))
        CATEGORY.set_menu(new menu("포테이토피자",7000,"img/포테이토피자.jpg"))
        CATEGORY.set_menu(new menu("불고기피자",7000,"img/불고기피자.jpg"))


    STORE.set_category(CATEGORY);

    CATEGORY = new category("스쿨스페셜피자");
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
        CATEGORY.set_menu(new menu("Chicken 브리또",3500,"img/도스마스브리또.png"))
        CATEGORY.set_menu(new menu("Beef 브리또",4000,"img/도스마스브리또.png"))
        CATEGORY.set_menu(new menu("Mixed 브리또",3500,"img/도스마스브리또.png"))
    STORE.set_category(CATEGORY);

    CATEGORY = new category("세트메뉴");
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
