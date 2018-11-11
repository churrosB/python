class store{
    constructor(name){
        this.name = name
        this.list = new Array
        // this.tel = ""
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
    constructor(name, price, src="", modal = "...") {
      this.name = name
      this.price = price
      this.src = src
      this. modal = modal     
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
    CATEGORY = new category("버거메뉴");
        CATEGORY.set_menu(new menu("마살라버거_세트",6000,"img/마살라버거.jpg","단품 가격은 3800원이다."))
        CATEGORY.set_menu(new menu("치즈베이컨버거_세트",6500,"img/치즈베이컨버거.jpg","단품 가격은 4500원이다."))
        CATEGORY.set_menu(new menu("싸이버거_세트", 5600, "img/싸이버거.jpg", "Thigh(넓적다리) 버거. 레시피는 닭넓적다리 패티 + 버거소스 + 양상추 + 양파 + 피클이다."))
        CATEGORY.set_menu(new menu("불싸이버거_세트",5800,"img/불싸이버거.jpg","단품 가격은 3600원이다."))
        CATEGORY.set_menu(new menu("화이트갈릭버거_세트", 6100, "img/화이트갈릭버거.jpg", "단품 가격은 4100원이다."))
        CATEGORY.set_menu(new menu("딥치즈버거_세트",6000,"img/딥치즈버거.jpg","단품 가격은 4000원이다."))
        CATEGORY.set_menu(new menu("리샐버거_세트",6100,"img/리샐버거.jpg","단품 가격은 4200원이다."))
        CATEGORY.set_menu(new menu("스파이시_불고기_버거_세트",5400,"img/스파이시불고기버거.jpg"))
        CATEGORY.set_menu(new menu("치킨커틀렛버거_세트",5400,"img/치킨커틀렛버거.jpg"))
        CATEGORY.set_menu(new menu("휠랫버거_세트",5800,"img/휠랫버거.jpg"))
    STORE.set_category(CATEGORY);

    CATEGORY = new category("사이드메뉴");
        CATEGORY.set_menu(new menu("김떡만", 3000));
        CATEGORY.set_menu(new menu("팝콘만두", 3000));
    STORE.set_category(CATEGORY);

    CATEGORY = new category("음료수");
        CATEGORY.set_menu(new menu("콜라", 1100,"","배달 주문 시 펩시콜라 1캔을 받는다."));
        CATEGORY.set_menu(new menu("자몽에이드", 2500));
        CATEGORY.set_menu(new menu("레몬에이드", 2500));
    STORE.set_category(CATEGORY);
ALL.push(STORE);

STORE = new store("화정관");
    CATEGORY = new category("밥 메뉴");
        CATEGORY.set_menu(new menu("짜장밥",5400,"img/스파이시불고기버거.jpg"))
        CATEGORY.set_menu(new menu("볶음밥",5400,"img/치킨커틀렛버거.jpg"))
        CATEGORY.set_menu(new menu("탕볶밥",5800,"img/휠랫버거.jpg"))
    STORE.set_category(CATEGORY);

    CATEGORY = new category("면 메뉴");
        CATEGORY.set_menu(new menu("짜장면", 3000));
        CATEGORY.set_menu(new menu("짬뽕", 3000));
    STORE.set_category(CATEGORY);

    CATEGORY = new category("음료수");
        CATEGORY.set_menu(new menu("콜라", 1100,"","배달 주문 시 펩시콜라 1캔을 받는다."));
        CATEGORY.set_menu(new menu("자몽에이드", 2500));
        CATEGORY.set_menu(new menu("레몬에이드", 2500));
    STORE.set_category(CATEGORY);
ALL.push(STORE);


        

