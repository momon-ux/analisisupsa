const STORAGE_KEY = 'analisis_matematik_2026_fikrey';
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxt8qWmwjHmwsLUQ3TKSqMzLq2rG5_EKw5wcVLBfh4Ihh7Ku7kwQ0jB1ug8IvtnBJo7NQ/exec';
let sedangLoadSheet = false;
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

let dataMarkah = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function kiraGred(markah) {
  if (markah >= 85) return 'A';
  if (markah >= 70) return 'B';
  if (markah >= 55) return 'C';
  if (markah >= 40) return 'D';
  return 'E';
}

function kiraTP(markah) {
  if (markah >= 85) return 6;
  if (markah >= 70) return 5;
  if (markah >= 55) return 4;
  if (markah >= 40) return 3;
  if (markah >= 20) return 2;
  return 1;
}

function kiraStatus(markah) {
  return markah >= 40 ? 'Menguasai' : 'Belum Menguasai';
}

function tambahMurid() {
  const kelas = document.getElementById('kelas').value;
  const nama = document.getElementById('nama').value.trim();
  const markah = Number(document.getElementById('markah').value);
  const ujian = document.getElementById('ujian').value.trim() || 'UPSA';

  if (!nama) {
    alert('Sila masukkan nama murid.');
    return;
  }

  if (isNaN(markah) || markah < 0 || markah > 100) {
    alert('Sila masukkan markah antara 0 hingga 100.');
    return;
  }

  dataMarkah.push({
    id: Date.now(),
    kelas,
    nama,
    ujian,
    markah,
    gred: kiraGred(markah),
    tp: kiraTP(markah),
    status: kiraStatus(markah)
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataMarkah));
  document.getElementById('markah').value = '';
  document.getElementById('nama').focus();
  paparData();
}

async function simpanData(showAlert = true) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataMarkah));
  await simpanKeGoogleSheet(showAlert);
}

async function simpanKeGoogleSheet(showAlert = false) {
  if (sedangLoadSheet) return;

  const payload = {
    action: 'saveAll',
    records: dataMarkah.map(item => ({
      kelas: item.kelas,
      nama: item.nama,
      ujian: item.ujian,
      markah: Number(item.markah),
      gred: item.gred,
      tp: Number(item.tp),
      status: item.status
    }))
  };

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    });

    if (showAlert) {
      alert('Data berjaya disimpan ke Google Sheet. Boleh buka di peranti lain.');
    }
  } catch (err) {
    console.error(err);
    if (showAlert) alert('Data disimpan dalam browser, tetapi gagal dihantar ke Google Sheet.');
  }
}

function loadDataDariGoogleSheet() {
  sedangLoadSheet = true;
  const callbackName = 'terimaDataSheet_' + Date.now();

  window[callbackName] = function(rows) {
    try {
      if (Array.isArray(rows) && rows.length > 1) {
        const dataRows = rows.slice(1).filter(row => row[1] && row[2]);
        dataMarkah = dataRows.map((row, index) => ({
          id: Date.now() + index + Math.random(),
          kelas: row[1] || '',
          nama: row[2] || '',
          ujian: row[3] || 'UPSA',
          markah: Number(row[4]) || 0,
          gred: row[5] || kiraGred(Number(row[4]) || 0),
          tp: Number(row[6]) || kiraTP(Number(row[4]) || 0),
          status: row[7] || kiraStatus(Number(row[4]) || 0)
        }));
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataMarkah));
      }
      paparData();
    } finally {
      sedangLoadSheet = false;
      delete window[callbackName];
      script.remove();
    }
  };

  const script = document.createElement('script');
  script.src = GOOGLE_SCRIPT_URL + "?action=read&callback=" + callbackName + "&t=" + Date.now();
  script.onerror = function() {
    sedangLoadSheet = false;
    paparData();
    alert('Gagal baca Google Sheet. Data local/browser akan dipaparkan.');
  };
  document.body.appendChild(script);
}

function padamMurid(id) {
  if (!confirm('Padam rekod murid ini?')) return;
  dataMarkah = dataMarkah.filter(item => item.id !== id);
  simpanData(false);
  paparData();
}

function kemaskiniMarkah(id, nilai) {
  const markah = Number(nilai);
  if (isNaN(markah) || markah < 0 || markah > 100) return;

  dataMarkah = dataMarkah.map(item => {
    if (item.id === id) {
      return {
        ...item,
        markah,
        gred: kiraGred(markah),
        tp: kiraTP(markah),
        status: kiraStatus(markah)
      };
    }
    return item;
  });

  simpanData(false);
  paparData();
}

function padamSemua() {
  if (!confirm('Anda pasti mahu padam semua data?')) return;
  dataMarkah = [];
  simpanData(false);
  paparData();
}

function getFilteredData() {
  const filter = document.getElementById('filterKelas').value;
  if (filter === 'Semua') return dataMarkah;
  return dataMarkah.filter(item => item.kelas === filter);
}

function paparData() {
  const tbody = document.getElementById('jadualMarkah');
  const data = getFilteredData();

  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9">Belum ada data markah.</td></tr>`;
  } else {
    tbody.innerHTML = data.map((item, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${item.kelas}</td>
        <td class="nama-cell">${item.nama}</td>
        <td>${item.ujian}</td>
        <td>
          <input type="number" min="0" max="100" value="${item.markah}" onchange="kemaskiniMarkah(${item.id}, this.value)" />
        </td>
        <td><strong>${item.gred}</strong></td>
        <td><span class="badge tp${item.tp}">TP${item.tp}</span></td>
        <td>${item.status}</td>
        <td class="no-print"><button class="btn-danger" onclick="padamMurid(${item.id})">Padam</button></td>
      </tr>
    `).join('');
  }

  paparAnalisisKeseluruhan();
  paparAnalisisKelas();
  paparGrafTP();
}

function purata(data) {
  if (data.length === 0) return 0;
  const jumlah = data.reduce((sum, item) => sum + item.markah, 0);
  return (jumlah / data.length).toFixed(2);
}

function paparAnalisisKeseluruhan() {
  const div = document.getElementById('analisisKeseluruhan');
  const jumlahMurid = dataMarkah.length;
  const lulus = dataMarkah.filter(item => item.markah >= 40).length;
  const belum = jumlahMurid - lulus;
  const peratusLulus = jumlahMurid ? ((lulus / jumlahMurid) * 100).toFixed(1) : 0;
  const markahTertinggi = jumlahMurid ? Math.max(...dataMarkah.map(item => item.markah)) : 0;
  const markahTerendah = jumlahMurid ? Math.min(...dataMarkah.map(item => item.markah)) : 0;

  div.innerHTML = `
    <div class="summary-box"><h3>${jumlahMurid}</h3><p>Jumlah Murid</p></div>
    <div class="summary-box"><h3>${purata(dataMarkah)}</h3><p>Purata Markah</p></div>
    <div class="summary-box"><h3>${lulus}</h3><p>Menguasai</p></div>
    <div class="summary-box"><h3>${belum}</h3><p>Belum Menguasai</p></div>
    <div class="summary-box"><h3>${peratusLulus}%</h3><p>Peratus Menguasai</p></div>
    <div class="summary-box"><h3>${markahTertinggi}</h3><p>Markah Tertinggi</p></div>
    <div class="summary-box"><h3>${markahTerendah}</h3><p>Markah Terendah</p></div>
  `;
}

function paparAnalisisKelas() {
  const kelasList = ['5 Mumtaz', '6 Jayyid', '6 Mumtaz', '6 Khoir'];
  const div = document.getElementById('analisisKelas');

  div.innerHTML = kelasList.map(kelas => {
    const data = dataMarkah.filter(item => item.kelas === kelas);
    const jumlah = data.length;
    const lulus = data.filter(item => item.markah >= 40).length;
    const belum = jumlah - lulus;
    const peratus = jumlah ? ((lulus / jumlah) * 100).toFixed(1) : 0;

    return `
      <div class="class-box">
        <h3>${kelas}</h3>
        <div class="summary-grid">
          <div class="summary-box"><h3>${jumlah}</h3><p>Jumlah Murid</p></div>
          <div class="summary-box"><h3>${purata(data)}</h3><p>Purata</p></div>
          <div class="summary-box"><h3>${lulus}</h3><p>Menguasai</p></div>
          <div class="summary-box"><h3>${belum}</h3><p>Belum Menguasai</p></div>
          <div class="summary-box"><h3>${peratus}%</h3><p>Peratus Menguasai</p></div>
        </div>
      </div>
    `;
  }).join('');
}

function paparGrafTP() {
  const div = document.getElementById('grafTP');
  const jumlah = dataMarkah.length;

  if (jumlah === 0) {
    div.innerHTML = '<p>Belum ada data untuk paparan graf.</p>';
    return;
  }

  let html = '';
  for (let tp = 1; tp <= 6; tp++) {
    const bil = dataMarkah.filter(item => item.tp === tp).length;
    const peratus = ((bil / jumlah) * 100).toFixed(1);

    html += `
      <div class="bar-row">
        <strong>TP${tp}</strong>
        <div class="bar-bg">
          <div class="bar-fill" style="width:${peratus}%"></div>
        </div>
        <span>${bil}</span>
      </div>
    `;
  }

  div.innerHTML = html;
}

function exportCSV() {
  if (dataMarkah.length === 0) {
    alert('Tiada data untuk diexport.');
    return;
  }

  let csv = 'Bil,Kelas,Nama Murid,Ujian,Markah,Gred,TP,Status\n';

  dataMarkah.forEach((item, index) => {
    csv += `${index + 1},"${item.kelas}","${item.nama}","${item.ujian}",${item.markah},${item.gred},TP${item.tp},"${item.status}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'analisis_markah_matematik_2026.csv';
  link.click();
}


function isiSenaraiNama() {
  const kelas = document.getElementById('kelas').value;
  const namaSelect = document.getElementById('nama');
  const senarai = SENARAI_MURID[kelas] || [];

  namaSelect.innerHTML = '<option value="">-- Pilih nama murid --</option>';

  senarai.forEach(nama => {
    const option = document.createElement('option');
    option.value = nama;
    option.textContent = nama;
    namaSelect.appendChild(option);
  });
}

function muatSemuaMuridKelas() {
  const kelas = document.getElementById('kelas').value;
  const ujian = document.getElementById('ujian').value.trim() || 'UPSA';
  const senarai = SENARAI_MURID[kelas] || [];

  if (senarai.length === 0) {
    alert('Tiada senarai murid untuk kelas ini.');
    return;
  }

  const sudahAda = new Set(
    dataMarkah
      .filter(item => item.kelas === kelas && item.ujian === ujian)
      .map(item => item.nama)
  );

  let tambah = 0;

  senarai.forEach(nama => {
    if (!sudahAda.has(nama)) {
      dataMarkah.push({
        id: Date.now() + Math.random(),
        kelas,
        nama,
        ujian,
        markah: 0,
        gred: kiraGred(0),
        tp: kiraTP(0),
        status: kiraStatus(0)
      });
      tambah++;
    }
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataMarkah));
  paparData();

  if (tambah === 0) {
    alert('Semua murid kelas ini sudah ada dalam senarai.');
  } else {
    alert(tambah + ' orang murid berjaya dimuatkan. Sila edit markah dalam jadual.');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  isiSenaraiNama();
  loadDataDariGoogleSheet();
});

