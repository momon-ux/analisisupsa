const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxt8qWmwjHmwsLUQ3TKSqMzLq2rG5_EKw5wcVLBfh4Ihh7Ku7kwQ0jB1ug8IvtnBJo7NQ/exec";

let records = [];

// LOAD DATA DARI GOOGLE SHEET
async function loadData() {

try {

const response = await fetch(WEB_APP_URL);
const data = await response.json();

records = [];

for (let i = 1; i < data.length; i++) {

records.push({
tarikh: data[i][0],
kelas: data[i][1],
nama: data[i][2],
ujian: data[i][3],
markah: Number(data[i][4]),
gred: data[i][5],
tp: data[i][6],
status: data[i][7]
});

}

renderTable();
renderAnalysis();

} catch (err) {

console.log(err);

}

}

// ANALISIS
function renderAnalysis() {

const kelasList = [...new Set(records.map(x => x.kelas))];

const container = document.getElementById("analisisKelas");

container.innerHTML = "";

kelasList.forEach(kelas => {

const murid = records.filter(x => x.kelas === kelas);

const jumlah = murid.length;

const totalMarkah =
murid.reduce((a, b) => a + Number(b.markah), 0);

const purata =
jumlah > 0 ? (totalMarkah / jumlah).toFixed(2) : 0;

const menguasai =
murid.filter(x => Number(x.markah) >= 40).length;

const belum =
jumlah - menguasai;

const peratus =
jumlah > 0
? ((menguasai / jumlah) * 100).toFixed(1)
: 0;

container.innerHTML += `

<div class="kelas-card">

<h2>${kelas}</h2>

<div class="grid">

<div class="box">
<h1>${jumlah}</h1>
<p>Jumlah Murid</p>
</div>

<div class="box">
<h1>${purata}</h1>
<p>Purata</p>
</div>

<div class="box">
<h1>${menguasai}</h1>
<p>Menguasai</p>
</div>

<div class="box">
<h1>${belum}</h1>
<p>Belum Menguasai</p>
</div>

<div class="box">
<h1>${peratus}%</h1>
<p>Peratus Menguasai</p>
</div>

</div>
</div>

`;

});

}

// TABLE
function renderTable() {

const tbody =
document.getElementById("tableBody");

tbody.innerHTML = "";

records.forEach((item, index) => {

tbody.innerHTML += `

<tr>

<td>${index + 1}</td>
<td>${item.kelas}</td>
<td>${item.nama}</td>
<td>${item.ujian}</td>

<td>
<input
type="number"
value="${item.markah}"
readonly
/>
</td>

<td>${item.gred}</td>

<td>
<span class="tp">
${item.tp}
</span>
</td>

<td>${item.status}</td>

</tr>

`;

});

}

// START
loadData();
