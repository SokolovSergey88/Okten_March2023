let userForm = document.userForm;
userForm.onsubmit = function (e){
    e.preventDefault();
    let modelCarValue = userForm.modelCar.value;
    let priceCarValue = userForm.priceCar.value;

    let store = JSON.parse(localStorage.getItem('cars')) || [];
    store.push({model: modelCarValue, price: priceCarValue});
    localStorage.setItem('cars', JSON.stringify(store));
}
