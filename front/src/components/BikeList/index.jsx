const BikeList = () => {
  return (
    <div class="bike-list">
      <h2 class="container font-1-xxl fadeInDown" data-anime="200">
        escolha a sua<span class="color-p1">.</span>
      </h2>
      <ul>
        <li class="fadeInRight" data-anime="800">
          <a href="./1">
            <img
              src="./assets/images/magic-page.jpg"
              alt="Bicicleta preta"
              width="920"
              height="1040"
            />
            <h3 class="font-1-xl">Magic Might</h3>
            <span class="font-2-m color-8">R$ 2499</span>
          </a>
        </li>
        <li class="fadeInDown" data-anime="1000">
          <a href="./2">
            <img
              src="./assets/images/nimbus-page.jpg"
              alt="Bicicleta preta"
              width="920"
              height="1040"
            />
            <h3 class="font-1-xl">Nimbus Stark</h3>
            <span class="font-2-m color-8">R$ 4999</span>
          </a>
        </li>
        <li class="fadeInLeft" data-anime="1200">
          <a href="./3">
            <img
              src="./assets/images/nebula-page.jpg"
              alt="Bicicleta preta"
              width="920"
              height="1040"
            />
            <h3 class="font-1-xl">Nebula Cosmic</h3>
            <span class="font-2-m color-8">R$ 3999</span>
          </a>
        </li>
      </ul>
    </div>
  ) 
}
export default BikeList