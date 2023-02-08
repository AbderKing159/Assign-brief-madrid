fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(countries => {
      const select = document.querySelector('#country');

      countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.name;
        option.text = country.name;
        select.add(option);
      });
    });

    function updatePrice() {
        const category = document.querySelector('input[name="category"]:checked').value;
    
        switch (category) {
          case "Category 1":
            document.querySelector('#price').value = "500€";
            break;
          case "Category 2":
            document.querySelector('#price').value = "350€";
            break;
          case "Category 3":
            document.querySelector('#price').value = "250€";
            break;
          case "Category 4":
            document.querySelector('#price').value = "150€";
            break;
          default:
            document.querySelector('#price').value = "";
        }
      }


      const numberEl = document.getElementById('number');
    
      setInterval(() => {
        const currentNumber = numberEl.textContent;
    
        if (!isNaN(currentNumber)) {
          let number = parseInt(currentNumber, 10) - 1;
              if (number === 0) {
            alert('Sold out, maybe the next Time');
            window.location = '../../index.html'
          }
              numberEl.textContent = number;
        }
      }, 15000);
    


let viewerCount = 60; 

function updateViewerCount() {
  viewerCount++; 
  document.getElementById('viewer-count').innerHTML = viewerCount; 
}

setInterval(updateViewerCount, 5000);
