
  const mobileMenuButton = document.getElementById('bar');
  const mobileNavbar = document.getElementById('navbar');



  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      mobileNavbar.classList.remove('show');
    }
  });
 
  document.getElementById('sizeSelect').addEventListener('change', function() {
    var customSelected = this.value === 'Custom';
    document.getElementById('heightSelect').style.display = customSelected ? 'inline-block' : 'none';
    document.getElementById('widthSelect').style.display = customSelected ? 'inline-block' : 'none';
  });
  
  document.querySelector('.normal').addEventListener('click', function() {
    var selectedSize = document.getElementById('sizeSelect').value;
    var selectedHeight = document.getElementById('heightSelect').value;
    var selectedWidth = document.getElementById('widthSelect').value;
    var quantity = document.getElementById('quantityInput').value;
    
    // Perform action with selected size, height, width, and quantity (e.g., add to cart)
    console.log('Selected Size:', selectedSize);
    console.log('Selected Height:', selectedHeight);
    console.log('Selected Width:', selectedWidth);
    console.log('Quantity:', quantity);
  });