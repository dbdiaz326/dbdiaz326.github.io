const road = document.getElementById("road");
const createCar = (color, left, top) => {
    const car = document.createElement("div");
    car.classList.add("car");
    car.style.backgroundColor = color;
    car.style.left = left + "%";
    car.style.top = top + "px";
    const carWindow = document.createElement("div");
    carWindow.classList.add("car-window");
    const leftWheel = document.createElement("div");
    leftWheel.classList.add("wheel");
    leftWheel.classList.add("left-wheel");
    const rightWheel = document.createElement("div");
    rightWheel.classList.add("wheel");
    rightWheel.classList.add("right-wheel");
    car.append(carWindow);
    car.append(leftWheel);
    car.append(rightWheel);
    road.append(car);
};

const colors = ["#23c7bd", "#a7e94a", "#7069b8", "#ef806b", "#42186e", "#9c70ae"];
const lanePositions = [10, 60];
for(let i = 0; i < 7; i++){
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomLeft = Math.floor(Math.random() * 85);
    const randomLane = Math.floor(Math.random() * lanePositions.length);
    const randomTop = lanePositions[randomLane];

    createCar(randomColor, randomLeft, randomTop);
}