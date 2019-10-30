class Car {
  constructor(car) {
    this.name = car.name;
    this.price = car.price;
    this.year = car.year;
    console.log("생성되었어요");
  }
  drive() {
    console.log("부릉부릉");
  }
}
const avante = new Car({
  name: "아반떼",
  price: 2500,
  year: 2019
});
const moring = new Car({
  name: "모닝",
  price: 1200,
  year: 2019
});
avante.drive();
moring.drive();

// class App extends React.Component {}
// ReactDOM.render(<App />, document.querySelector("#root"));

//동물 Animal 포유류 Mammalia

class SuperCar extends Car {
  constructor(options) {
    super(options); //규칙
    console.log("수퍼카가 태어났어요");
  }
  booster() {
    console.log("부아앙아아아앙");
  }
}
const 벤틀리 = new SuperCar({
  name: "벤틀리",
  price: 20000000000000000,
  year: 2019
});
벤틀리.drive();
벤틀리.booster();

//실습 1 -RPG 게임 개발중...
//Monster 클래스의 instance는 생성될 때 health가 100이다.
//constructor는 options라는 인자를 받으며
//options는 name 라는 키가 있다. {name:""}
//monster를 만들고 피카츄라는 이름을 가진 몬스터를 만들자
class Monster {
  constructor(options) {
    this.name = options.name;
    this.health = 100;
  }
}
const 피카츄 = new Monster({
  name: "피카츄"
});
console.log("피카츄가 태어났어요");
console.log("피카추의 체력은=" + 피카츄.health);
//실습 2
//monster 클래스의 자식 클래스 Dinosaur를 만들어주시되,
//생성자 함수는 같고,
//Dinosaur는 몸통박치기라는 메소드를 갖습니다.
//몸통박치기는 다른몬스터 인스턴스를 인자로받고,
//결과로 인자로 받은 몬스터의 health를 10 깍습니다.
//Tirano.몸통박치기(피카츄)
// => console.log(피카츄.health)=>90
class Dinosaur extends Monster {
  constructor(options) {
    super(options);
    console.log("공룡이 태어나는중입니다");
  }

  몸통박치기(monster) {
    monster.health -= 10;
  }
}

const tirano = new Dinosaur({ name: "티라노" });
console.log("티라노가 태어났어요!!");
console.log("티라노의 몸통 박치기!!");

tirano.몸통박치기(피카츄);
console.log("피카츄가 맞았다!!");
console.log("피카추의 체력은=" + 피카츄.health);
