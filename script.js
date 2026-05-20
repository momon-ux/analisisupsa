const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxt8qWmwjHmwsLUQ3TKSqMzLq2rG5_EKw5wcVLBfh4Ihh7Ku7kwQ0jB1ug8IvtnBJo7NQ/exec";

const SENARAI_MURID = {
  "5 Mumtaz": [
    "AB MUHAMMAD NURASYRAF BIN AB AZIS",
    "ABDULLAH BIN SAINI",
    "AFIFAH FITRIYAH BINTI ABRAHAM",
    "DAVINA ZAVIERA BINTI RIZAN HARDINATA",
    "DAYANG IZZ RYNA BINTI AHMAD",
    "DAYANG NUR SHAFIYYAH BINTI NASIP",
    "ERISHA DAMIA BINTI NASRI",
    "HAMISYA AMANI BINTI HAMSAH",
    "LINA AFIQAH BINTI ABDULLAH",
    "MOHAMAD DZAQERUL HAMZAH BIN MOHAMAD RIDWAN",
    "MOHAMMAD HARITH MIKAL BIN ISMAIL",
    "MOHAMMAD SHAQIRIN SARIPUDDIN",
    "MOHAMMAD THAQIF HARRAZ BIN SABRI",
    "MUHAMAD IZZAT BIN MUHAMAD SUFRI",
    "MUHAMMAD ARSYAD MALIQRIN SAHRUL",
    "MUHAMMAD ARSYAD MIQAEL BIN SAHRUL",
    "MUHAMMAD FAIZ DAM BIN SYAMSUDDIN",
    "MUHAMMAD HADIFF BIN SAMBRAN",
    "MUHAMMAD KAMARUL BIN KAMAL",
    "MUHAMMAD NAUFAL LUTHFI BIN MOHD SYAZWAN",
    "MUHAMMAD SYAFIQ AIMAN BIN AHMAD",
    "MUHAMMAD SYAHFIQ BIN JUPRI",
    "MUHAMMAD SYAHRIZAN UQASYA BIN REDUWAN",
    "MUHAMMAD ZAHIR ARRAYYAN BIN AZMAN",
    "NUR AISYAH ZULAIKHA BINTI MOHD ROSMAN",
    "NUR DAMIA QAISARA BINTI RAMLAN",
    "NUR FITRI SYAFIYAH BINTI ADZHAR KHAN",
    "NUR ZARA ZULAIQAH BINTI ABDULLAH",
    "NUR QISYA ADELIA BINTI HUSSIEN",
    "NURUL SHAFIQAH SENROSE BINTI ASBIDUN",
    "RAYYAN BIN SUHAIMI",
    "RAZIEQ AZFAR BIN RUSLAN",
    "RISOAH ADRIANA BINTI RAIS"
  ],
  "6 Jayyid": [
    "AIRIS NUR RAYSHA AMANDA BINTI RIDUAN",
    "ARIZ FAIQH BIN MOHD ROZADY",
    "AUFA HANIFAH BINTI JUARI",
    "IZZAT NAZHAN BIN SUMARDI",
    "LINDA QAISARAH BINTI RAILAN",
    "MAHIRAH ATHILAH BINTI M SABRAN",
    "MUHAMMAD AFIF ARSYAD BIN HASRIN",
    "MUHAMMAD AIMAN BIN AMBO MASSE",
    "MUHAMMAD AMMAR SYAWAL BIN SUDEYANSHAH",
    "MUHAMMAD ARIQ ADAM BIN SANUDIN",
    "MUHAMMAD DANISH ZAFWAN BIN PAISAL",
    "MUHAMMAD DZAR DZIKRI BIN MARINDO @ ABD KARIM",
    "MUHAMMAD FAIZ IZZUDDIN BIN MOHD FAIROS",
    "MUHAMMAD FARIZ IZZUDDIN BIN MOHD FAIROS",
    "MUHAMMAD HAZIQ SYAKIR BIN AMING",
    "MUHAMMAD LUTHFI WAFI BIN ABDULLAH",
    "MUHAMMAD MAHDY BIN MAZLAN",
    "MUHAMMAD YUZWAN WAFIY BIN YUSUF",
    "NUR ADILAH BINTI ABDUL MALIK",
    "NUR ERYNANAURAH BINTI JAMAL",
    "NUR FARAH FADILAH BINTI MOHD ARDY",
    "NUR HUMAYRAA DELISYAH BINTI HERMAN",
    "NUR GHAYRIN AFIQAH BINTI JAMIDI",
    "NUR SUBAYYA AZZAHRA BINTI SAHIRUL",
    "NUR ZHAFIRAH BINTI ABDUL RASHID",
    "NURANIS FATIHAH BINTI JAMAL",
    "NURUL SUHADA BINTI SURYAMAN",
    "NURZAHRA ZAFIRAH BINTI ASIS",
    "RIZQ IRFAN BIN MOHD AZRUL",
    "SITI NUR ADIBAH SYAHIRAH BINTI AMRANI",
    "SITI NUR ALYANABILAH BINTI HASRIN",
    "SITI NURFARZIREKIN BINTI HERY",
    "YASIN MUHAMMAD KHAIRUL BIN YUSRAN"
  ],
  "6 Mumtaz": [
    "AFIFAH AUNI AQILAH BINTI JAMIDI",
    "AHMAD IZZAT BIN SUHARDI",
    "AHMED ESHAN BIN ABDULLAH",
    "AMMAAR ALUTHFEA BINTI LUKMAN RIZAL",
    "DAMIA ADRIANA BINTI JIHON PINERO @ MOHAMMAD ARIF",
    "MAAL HIZRAYYAN BIN ABDULLAH",
    "MOHAMAD ARIZ ZAHRAN BIN JASNI",
    "MUHAMAD ALIF HAMDAN BIN WAHID",
    "MUHAMMAD ADLI ADAM BIN ADIL",
    "MUHAMMAD ALIF FIRDAUS BIN MOHD GHAZALI",
    "MUHAMMAD ALIF SYAZWAN BIN USMAN",
    "MUHAMMAD ARFA SAFFARAZ AZ ZAIM BIN DARWIS",
    "MUHAMMAD ARIEF RIFQIE BIN ASHARY",
    "MUHAMMAD ARYAN ASHRAF BIN SABIR",
    "MUHAMMAD IQBAL BIN JAPAR",
    "MUHAMMAD IZZRIN BIN AHMAD",
    "MUHAMMAD SYAFIEQ HAKIMI BIN SUYUTI",
    "MUHAMMAD SYAHMIE BIN SULTAN",
    "MUHAMMAD ZHARIF AIMIN BIN KAMALUDDIN @ MOHD YASMIN",
    "NAAZHIMAH BINTI NASARUDIN",
    "NUR AFFIQAH HIDAYAH BINTI FARIK AKBAR NOR",
    "NUR DELISYA BINTI MOHAMAD",
    "NUR HAZIQAH BINTI JUMADI",
    "NUR SYAFIKA BINTI YASMAHSAH",
    "NUR SYIFA RAISHAH BINTI ROSLAN",
    "NURFARRAH KHAALISHAH BINTI MOHAMAD TAUFIK",
    "NURQISTINA NAJWA BINTI SADAM",
    "PUTRI SYAKILLA DANIA BINTI ABDULLAH",
    "QAYYUM NUR IMAN BIN AMIR",
    "RANIA AWFIYAH BINTI RAMLE",
    "SAMARULISAM BIN ABDULLAH",
    "SAYYIDAH KHAULAH AL AZWAR BINTI MOHD MIHDAD",
    "SHAZWI SHAZIA BINTI AZMAN",
    "SUMAYYAH QAISARA BINTI ALFIAN"
  ],
  "6 Khoir": [
    "AADHAM MUHRIZ BIN MUHAMAD HARIS",
    "AHMAD RIFQI BIN TOTONG",
    "AISHA DAMIA BINTI JAMALUDDIN",
    "AISYAH SARAH BINTI MUHAMAD SHAHRUDDIN",
    "BERYLINE JIDE ARFONNY",
    "CASEY MARCELINA ANAK JEROME",
    "DAANIYATUL FATHIYYAH BINTI SUHAIMI",
    "HANAH UMAIRA BINTI ABD RIZAM",
    "HARITH HAKIM BIN IBNU SUHUD",
    "KHAIREEN SAFIYYAH BINTI MARSAN",
    "MOHAMAD NAZRI BIN LASEAL",
    "MOHAMAD REDZWAN BIN SUPA",
    "MOHAMAD QAIZAR AMAR MICKHAIL BIN HAERUDDIN",
    "MOHAMMAD TRIZUANSHAH BIN MOHAMMAD HANAPIAH",
    "MUHAMAD MIKAIL ADAM MUKRIZ BIN AZLAN",
    "MUHAMMAD ADL WAFIE BIN KASMAN",
    "MUHAMMAD FHIRDAUS ISKANDAR BIN ABDULLAH",
    "MUHAMMAD HAZIQ ADAM BIN EKHO DYNIE ARBIANTO",
    "MUHAMMAD HIZQIL BIN JUKDIN",
    "MUHAMMAD IZMAN IZZIANSHA BIN MOHD AZMAN",
    "MUHAMMAD NAZMI FAIQ BIN MOHAMAD AZIZUL ARIFIN",
    "MUHAMMAD RAYYAN FIRDAUS BIN RAHIM",
    "MUHAMMAD SYAMIL BIN KAMAL",
    "NUR ADHA FATINI BINTI MUSLIM",
    "NUR AIZANATASHA BINTI ABDUL MUCATIL",
    "NUR AQEELA SAFIYA BINTI MOHD NAQUIDDIN NIYAZ",
    "NUR ATIQAH BINTI AMIR",
    "NUR FARISYA HAZIQAH BINTI SURMAN",
    "NUR JANNAH BINTI ISMAIL",
    "NUR QIESYA AQEELA BINTI MOHD AZMAN",
    "NUR RAMADHANIA BINTI MOHAN",
    "NUR SYUHADAH BINTI YASMIN",
    "NURSHAZAFEERA BINTI MUHAMAD SHAZFALIQ",
    "RYANDIEE IZHAM BIN ILHAM",
    "SHAREEN LOIN ANAK SIMON"
  ]
};

let dataMarkah = [];

function setStatus(msg) {
  const el = document.getElementById("statusInfo");
  if (el) el.textContent = msg;
}

function kiraGred(markah) {
  markah = Number(markah);
  if (markah >= 85) return "A";
  if (markah >= 70) return "B";
  if (markah >= 55) return "C";
  if (markah >= 40) return "D";
  return "E";
}

function kiraTP(markah) {
  markah = Number(markah);
  if (markah >= 85) return 6;
  if (markah >= 70) return 5;
  if (markah >= 55) return 4;
  if (markah >= 40) return 3;
  if (markah >= 20) return 2;
  return 1;
}

function kiraStatus(markah) {
  return Number(markah) >= 40 ? "Menguasai" : "Belum Menguasai";
}

function buatKey(item) {
  return `${item.kelas}|${item.nama}|${item.ujian}`;
}

function bersihkanDuplicate(data) {
  const map = new Map();
  data.forEach(item => map.set(buatKey(item), item));
  return Array.from(map.values());
}

function isiSenaraiNama() {
  const kelas = document.getElementById("kelas").value;
  const namaSelect = document.getElementById("nama");
  const senarai = SENARAI_MURID[kelas] || [];

  namaSelect.innerHTML = '<option value="">-- Pilih nama murid --</option>';

  senarai.forEach(nama => {
    const option = document.createElement("option");
    option.value = nama;
    option.textContent = nama;
    namaSelect.appendChild(option);
  });
}

async function loadDataDariGoogleSheet() {
  try {
    setStatus("Sedang membaca data Google Sheet...");
    const response = await fetch(GOOGLE_SCRIPT_URL + "?action=read&t=" + Date.now());
    const rows = await response.json();

    dataMarkah = [];

    if (Array.isArray(rows)) {
      rows.forEach(row => {
        const markah = Number(row.markah) || 0;
        if (row.kelas && row.nama) {
          dataMarkah.push({
            kelas: row.kelas,
            nama: row.nama,
            ujian: row.ujian || "UPSA",
            markah,
            gred: row.gred || kiraGred(markah),
            tp: Number(row.tp) || kiraTP(markah),
            status: row.status || kiraStatus(markah)
          });
        }
      });
    }

    dataMarkah = bersihkanDuplicate(dataMarkah);
    paparData();
    setStatus("Data berjaya dibaca dari Google Sheet.");
  } catch (err) {
    console.error(err);
    paparData();
    setStatus("Gagal baca Google Sheet. Semak Apps Script deployment.");
  }
}

async function hantarKeGoogleSheet(item) {
  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ action: "save", item })
  });
}

async function hantarSemuaKeGoogleSheet(items) {
  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ action: "saveAll", items })
  });
}

async function tambahMurid() {
  const kelas = document.getElementById("kelas").value;
  const nama = document.getElementById("nama").value;
  const ujian = document.getElementById("ujian").value.trim() || "UPSA";
  const markah = Number(document.getElementById("markah").value);

  if (!kelas || !nama) {
    alert("Sila pilih kelas dan nama murid.");
    return;
  }

  if (isNaN(markah) || markah < 0 || markah > 100) {
    alert("Sila masukkan markah antara 0 hingga 100.");
    return;
  }

  const item = { kelas, nama, ujian, markah, gred: kiraGred(markah), tp: kiraTP(markah), status: kiraStatus(markah) };

  dataMarkah = dataMarkah.filter(x => buatKey(x) !== buatKey(item));
  dataMarkah.push(item);
  dataMarkah = bersihkanDuplicate(dataMarkah);
  paparData();

  setStatus("Sedang simpan markah...");
  await hantarKeGoogleSheet(item);
  document.getElementById("markah").value = "";
  setStatus("Markah dihantar ke Google Sheet. Semak Sheet atau refresh.");
  setTimeout(loadDataDariGoogleSheet, 1500);
}

async function muatSemuaMuridKelas() {
  const kelas = document.getElementById("kelas").value;
  const ujian = document.getElementById("ujian").value.trim() || "UPSA";
  const senarai = SENARAI_MURID[kelas] || [];
  const itemsBaru = [];

  senarai.forEach(nama => {
    const item = { kelas, nama, ujian, markah: 0, gred: kiraGred(0), tp: kiraTP(0), status: kiraStatus(0) };
    if (!dataMarkah.some(x => buatKey(x) === buatKey(item))) {
      dataMarkah.push(item);
      itemsBaru.push(item);
    }
  });

  dataMarkah = bersihkanDuplicate(dataMarkah);
  paparData();

  if (itemsBaru.length === 0) {
    alert("Semua murid kelas ini sudah ada.");
    return;
  }

  setStatus("Sedang masukkan semua murid ke Google Sheet...");
  await hantarSemuaKeGoogleSheet(itemsBaru);
  setStatus(itemsBaru.length + " murid dihantar ke Google Sheet.");
  setTimeout(loadDataDariGoogleSheet, 1800);
}

async function simpanSemuaKeGoogleSheet() {
  if (dataMarkah.length === 0) {
    alert("Tiada data untuk disimpan.");
    return;
  }
  setStatus("Sedang simpan semua data ke Google Sheet...");
  await hantarSemuaKeGoogleSheet(dataMarkah);
  setStatus("Semua data dihantar ke Google Sheet.");
  setTimeout(loadDataDariGoogleSheet, 1800);
}

function getFilteredData() {
  const filter = document.getElementById("filterKelas").value;
  if (!filter || filter === "Semua") return dataMarkah;
  return dataMarkah.filter(item => item.kelas === filter);
}

function cariIndexAsal(item) {
  return dataMarkah.findIndex(x => buatKey(x) === buatKey(item));
}

function paparData() {
  const tbody = document.getElementById("jadualMarkah");
  if (!tbody) return;

  const data = getFilteredData();

  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9">Belum ada data markah.</td></tr>`;
  } else {
    tbody.innerHTML = data.map((item, index) => {
      const indexAsal = cariIndexAsal(item);
      return `
        <tr>
          <td>${index + 1}</td>
          <td>${item.kelas}</td>
          <td>${item.nama}</td>
          <td>${item.ujian}</td>
          <td><input class="markah-input" type="number" min="0" max="100" value="${item.markah}" onchange="ubahMarkah(${indexAsal}, this.value)"></td>
          <td><strong>${item.gred}</strong></td>
          <td>TP${item.tp}</td>
          <td>${item.status}</td>
          <td class="no-print">
            <button class="btn-success" onclick="simpanRekod(${indexAsal})">Simpan</button>
            <button class="btn-danger" onclick="padamRekod(${indexAsal})">Padam</button>
          </td>
        </tr>`;
    }).join("");
  }

  paparAnalisisKeseluruhan();
  paparAnalisisKelas();
  paparGrafTP();
}

function ubahMarkah(index, nilai) {
  const item = dataMarkah[index];
  if (!item) return;
  const markah = Number(nilai);

  if (isNaN(markah) || markah < 0 || markah > 100) {
    alert("Markah mesti antara 0 hingga 100.");
    paparData();
    return;
  }

  item.markah = markah;
  item.gred = kiraGred(markah);
  item.tp = kiraTP(markah);
  item.status = kiraStatus(markah);
  paparData();
}

async function simpanRekod(index) {
  const item = dataMarkah[index];
  if (!item) return;

  setStatus("Sedang simpan rekod...");
  await hantarKeGoogleSheet(item);
  setStatus("Rekod dihantar ke Google Sheet.");
  setTimeout(loadDataDariGoogleSheet, 1500);
}

function padamRekod(index) {
  dataMarkah.splice(index, 1);
  paparData();
  alert("Rekod dipadam pada paparan sahaja. Padam sebenar boleh dibuat di Google Sheet.");
}

function padamPaparanSahaja() {
  dataMarkah = [];
  paparData();
}

function purata(data) {
  if (data.length === 0) return "0.00";
  const jumlah = data.reduce((sum, item) => sum + Number(item.markah), 0);
  return (jumlah / data.length).toFixed(2);
}

function paparAnalisisKeseluruhan() {
  const div = document.getElementById("analisisKeseluruhan");
  if (!div) return;

  const jumlahMurid = dataMarkah.length;
  const lulus = dataMarkah.filter(item => Number(item.markah) >= 40).length;
  const belum = jumlahMurid - lulus;
  const peratusLulus = jumlahMurid ? ((lulus / jumlahMurid) * 100).toFixed(1) : 0;
  const markahTertinggi = jumlahMurid ? Math.max(...dataMarkah.map(item => Number(item.markah))) : 0;
  const markahTerendah = jumlahMurid ? Math.min(...dataMarkah.map(item => Number(item.markah))) : 0;

  div.innerHTML = `
    <div class="summary-box"><h3>${jumlahMurid}</h3><p>Jumlah Murid</p></div>
    <div class="summary-box"><h3>${purata(dataMarkah)}</h3><p>Purata Markah</p></div>
    <div class="summary-box"><h3>${lulus}</h3><p>Menguasai</p></div>
    <div class="summary-box"><h3>${belum}</h3><p>Belum Menguasai</p></div>
    <div class="summary-box"><h3>${peratusLulus}%</h3><p>Peratus Menguasai</p></div>
    <div class="summary-box"><h3>${markahTertinggi}</h3><p>Markah Tertinggi</p></div>
    <div class="summary-box"><h3>${markahTerendah}</h3><p>Markah Terendah</p></div>`;
}

function paparAnalisisKelas() {
  const div = document.getElementById("analisisKelas");
  if (!div) return;
  const kelasList = ["5 Mumtaz", "6 Jayyid", "6 Mumtaz", "6 Khoir"];

  div.innerHTML = kelasList.map(kelas => {
    const data = dataMarkah.filter(item => item.kelas === kelas);
    const jumlah = data.length;
    const lulus = data.filter(item => Number(item.markah) >= 40).length;
    const belum = jumlah - lulus;
    const peratus = jumlah ? ((lulus / jumlah) * 100).toFixed(1) : 0;

    return `<div class="class-box"><h3>${kelas}</h3><div class="summary-grid">
      <div class="summary-box"><h3>${jumlah}</h3><p>Jumlah Murid</p></div>
      <div class="summary-box"><h3>${purata(data)}</h3><p>Purata</p></div>
      <div class="summary-box"><h3>${lulus}</h3><p>Menguasai</p></div>
      <div class="summary-box"><h3>${belum}</h3><p>Belum Menguasai</p></div>
      <div class="summary-box"><h3>${peratus}%</h3><p>Peratus Menguasai</p></div>
    </div></div>`;
  }).join("");
}

function paparGrafTP() {
  const div = document.getElementById("grafTP");
  if (!div) return;

  const jumlah = dataMarkah.length;
  if (jumlah === 0) {
    div.innerHTML = "<p>Belum ada data untuk paparan graf.</p>";
    return;
  }

  let html = "";
  for (let tp = 1; tp <= 6; tp++) {
    const bil = dataMarkah.filter(item => Number(item.tp) === tp).length;
    const peratus = ((bil / jumlah) * 100).toFixed(1);
    html += `<div class="bar-row"><strong>TP${tp}</strong><div class="bar-bg"><div class="bar-fill" style="width:${peratus}%"></div></div><span>${bil}</span></div>`;
  }
  div.innerHTML = html;
}

function exportCSV() {
  if (dataMarkah.length === 0) {
    alert("Tiada data untuk diexport.");
    return;
  }

  let csv = "Bil,Kelas,Nama Murid,Ujian,Markah,Gred,TP,Status\n";
  dataMarkah.forEach((item, index) => {
    csv += `${index + 1},"${item.kelas}","${item.nama}","${item.ujian}",${item.markah},${item.gred},TP${item.tp},"${item.status}"\n`;
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "analisis_markah_matematik_2026.csv";
  link.click();
}

function simpanData() {
  simpanSemuaKeGoogleSheet();
}

window.onload = function () {
  isiSenaraiNama();
  loadDataDariGoogleSheet();

  const kelasInput = document.getElementById("kelas");
  if (kelasInput) kelasInput.onchange = isiSenaraiNama;

  const filterInput = document.getElementById("filterKelas");
  if (filterInput) filterInput.onchange = paparData;
};
