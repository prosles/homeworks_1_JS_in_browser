    window.addEventListener('load', () => {

        const xhr = new XMLHttpRequest();
      
        xhr.open('GET','https://netology-slow-rest.herokuapp.com', true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                const items = document.getElementById('items');
                const loader = document.getElementById('loader');
      
                const json = JSON.parse(xhr.responseText);
                const data = json.response.Valute;
      
                loader.classList.remove('loader_active');
      
                for(let item in data) {
                    const {CharCode, Value} = data[item];
                    items.insertAdjacentHTML('beforeEnd',`
                        <div class="item">
                            <div class="item__code">
                                ${CharCode}
                            </div>
                            <div class="item__value">
                                ${Value}
                            </div>
                            <div class="item__currency">
                                руб.
                            </div>
                        </div>    
                    `);
                };
            }
        }
      })