page = new Array();

class store {
    constructor(name) {
      this.name = name
      page.push(name)

      this.element = new Array();
    }
    
    set_logo(pic){
        this.logo = pic;
    }
    add_section(title, paragrahp=""){
        this.section.push(title)
        this.paragrahp.push(paragrahp) 
    }
    add_element(title, price=false){
        this.element.push(title, price)
    }

  }


//   1111
page.push(new store("맘스터치"));
page[1].set_logo("Moms_Touch.jpg")

//  2222
page.push


