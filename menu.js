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

all_menu = new Array();

    burger_menu = new category("버거메뉴");
        burger_menu.set_menu(new menu("마살라버거_세트",6000,"img/마살라버거.jpg","단품 가격은 3800원이다."))
        burger_menu.set_menu(new menu("치즈베이컨버거_세트",6500,"img/치즈베이컨버거.jpg","단품 가격은 4500원이다."))
        burger_menu.set_menu(new menu("싸이버거_세트", 5600, "img/싸이버거.jpg", "Thigh(넓적다리) 버거. 레시피는 닭넓적다리 패티 + 버거소스 + 양상추 + 양파 + 피클이다."))
        burger_menu.set_menu(new menu("불싸이버거_세트",5800,"img/불싸이버거.jpg","단품 가격은 3600원이다."))
        burger_menu.set_menu(new menu("화이트갈릭버거_세트", 6100, "img/화이트갈릭버거.jpg", "단품 가격은 4100원이다."))
        burger_menu.set_menu(new menu("딥치즈버거_세트",6000,"img/딥치즈버거.jpg","단품 가격은 4000원이다."))
        burger_menu.set_menu(new menu("리샐버거_세트",6100,"img/리샐버거.jpg","단품 가격은 4200원이다."))
        burger_menu.set_menu(new menu("스파이시_불고기_버거_세트",5400,"img/스파이시불고기버거.jpg"))
        burger_menu.set_menu(new menu("치킨커틀렛버거_세트",5400,"img/치킨커틀렛버거.jpg"))
        burger_menu.set_menu(new menu("휠랫버거_세트",5800,"img/휠랫버거.jpg"))
        
    all_menu.push(burger_menu);

    side_menu = new category("사이드메뉴");
        side_menu.set_menu(new menu("김떡만", 3000));
        side_menu.set_menu(new menu("팝콘만두", 3000));
    all_menu.push(side_menu);

    drink = new category("음료수");
        drink.set_menu(new menu("콜라", 1100,"","배달 주문 시 펩시콜라 1캔을 받는다."));
        drink.set_menu(new menu("자몽에이드", 2500));
        drink.set_menu(new menu("레몬에이드", 2500));
    all_menu.push(drink);

        

