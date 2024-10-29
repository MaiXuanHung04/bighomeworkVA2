function openCar(carNumber) {
  currentCar = carNumber;
  document.getElementById('carModal').style.display = 'flex';
  
  document.getElementById('modalImage').src = `Mtr/image/models${carNumber}.png`;
}

function closeCar() {
  document.getElementById('carModal').style.display = 'none';
}

function changeCar(direction) {
  currentCar += direction;
  
  if (currentCar < 1) currentCar = 3;
  if (currentCar > 3) currentCar = 1;


  document.getElementById('modalImage').src = `Mtr/image/models${currentCar}.png`;
}
