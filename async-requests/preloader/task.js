window.addEventListener('load', () => {

        const xhr = new XMLHttpRequest();
      
        xhr.open('GET','https://netology-slow-rest.herokuapp.com', true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                const items = document.getElementById('items');
                const loader = document.getElementById('loader');
                const json = JSON.parse(xhr.responseText)
      
                const data = Object.entries(json.response.Valute)

                loader.classList.remove('loader_active');

               data.forEach( (item) => {
                    items.insertAdjacentHTML('beforeEnd',`
                        <div class="item">
                            <div class="item__code">
                            ${item[1].CharCode}
                            </div>
                            <div class="item__value">
                            ${item[1].Value}
                            </div>
                            <div class="item__currency">
                                руб.
                            </div>
                        </div>    
                    `)
                }) 
            }
        }
});
