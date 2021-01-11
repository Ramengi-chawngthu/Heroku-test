const coinTable = document.querySelector('.table-content tbody');

fetch('/api')
.then(res => res.json())
.then(res =>{
    res.forEach(coin => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        const td6 = document.createElement('td');
        td1.textContent = coin["id"];
        td2.textContent = Number(coin["price"]).toFixed(3);
        td3.textContent = `${Number(coin["1h"]["price_change"]/(coin["price"]-coin["1h"]["price_change"])*100).toFixed(2)}%`;
        td4.textContent = `${Number(coin["1d"]["price_change"]/(coin["price"]-coin["1d"]["price_change"])*100).toFixed(2)}%`;
        td5.textContent = `${Number(coin["30d"]["price_change"]/(coin["price"]-coin["30d"]["price_change"])*100).toFixed(2)}%`;
        td6.textContent = Number(coin["high"]).toFixed(3);
        td1.colSpan = 1;
        td2.colSpan = 2;
        td3.colSpan = 2;
        td4.colSpan = 2;
        td5.colSpan = 2;
        td6.colSpan = 2;
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
        tr.append(td6);
        coinTable.append(tr);
    });
})