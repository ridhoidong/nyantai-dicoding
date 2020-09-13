//initialize data
const dataPantai = [{
        "title": "Pantai Nihiwatu",
        "desc": "Wilayah Sumba Barat, Provinsi Nusa Tenggara Timur (NTT) ternyata menyimpan Pantai yang masuk kedalam 100 pantai terbaik di dunia, pantai ini bernama Pantai Nihiwatu. Pantai itu berada di peringkat ke 17 dari 100 pantai terbaik di dunia dan satu – satunya pantai di Indonesia yang terpilih menjadi pantai terbaik di Asia",
        "address": "Sumba Barat, NTT",
        "open": "24 jam",
        "price": "1 - 250 Juta",
        "imageurl": "assets/images/beach/img_nihiwatu.jpg",
        "maps": "https://www.google.com/maps/place/Nihiwatu+Beach/@-9.7727611,119.3615474,16z/data=!3m1!4b1!4m5!3m4!1s0x2c4afcdc01f97a73:0x54c747e3fc22ac63!8m2!3d-9.7720795!4d119.3682249?hl=id"
    },
    {
        "title": "Pantai Ora",
        "desc": "Pantai Ora memiliki taman bawah laut yang sangat indah, pantai yang bersih dan air laut yang jernih membuat Pantai Ora layaknya kaca karena kita bisa melihat bebatuan karang dari atas. Pantai Ora memang terkenal dengan keindahan bawah laut, bahkan saking indah banyak wisatawan menyebut Pantai Ora mirip dengan pantai yang ada di Maladewa",
        "address": "Baguala, Kota Ambon, Maluku",
        "open": "24 jam",
        "price": "1 - 250 Juta",
        "imageurl": "assets/images/beach/img_ora.jpg",
        "maps": "https://www.google.com/maps/place/Wisata+Pantai+Ora+(Ora+Beach)+Dellan+Tour/@-3.3184871,128.2357168,8z/data=!4m8!1m2!2m1!1spantai+ora+maluku!3m4!1s0x2d6ce948f9312e61:0x3e02fc8a973194c4!8m2!3d-3.659074!4d128.213958?hl=id"
    },
    {
        "title": "Pantai Pink Pulau Komodo",
        "desc": "Pantai Pink Labuan Bajo berada di Pulau Komodo, Flores Barat, Nusa Tenggara Timur. Untuk menuju ke Lokasi, para wisatawan memang harus memanfaatkan beberapa moda transportasi. Karena keberadaannya di pulau yang dikelilingi oleh pantai-pantai. Pasir yang berwarna pink nan halus membuat betah berlama-lama di pantai ini.",
        "address": "Taman Nasional Komodo, Nusa Tenggara Timur",
        "open": "08 - 18.00",
        "price": "1 - 250 Juta",
        "imageurl": "assets/images/beach/img_pink.jpg",
        "maps": "https://www.google.com/maps/place/Pantai+Merah/@-8.6011662,119.5175966,17z/data=!3m1!4b1!4m5!3m4!1s0x2db4567cf1cba7c3:0x327deda4042fcdb6!8m2!3d-8.6011715!4d119.5197906?hl=id"
    },
    {
        "title": "Raja Ampat Papua",
        "desc": "Kepulauan Raja Ampat, Papua Barat, Indonesia-lah tempatnya. Kepulauan yang berada di ujung barat laut pulau Papua ini memang sudah dikenal luas sebagai ‘tambang emas’ bagi para penggila petualangan. Sedangkan, bagi para penyelam dalam dan luar Indonesia, Raja Ampat dianggap sebagai surga yang tidak dapat diungkapkan kata-kata. Satu-satunya cara untuk membuktikan berbagai pendapat ini adalah dengan datang langsung menikmati ‘sang mutiara’ di ujung Papua ini.",
        "address": "Kepulauan Raja Ampat, Papua",
        "open": "10 - 18.00",
        "price": "1 - 250 Juta",
        "imageurl": "assets/images/beach/img_rajaampat.jpg",
        "maps": "https://www.google.com/maps/place/Piaynemo+Raja+Ampat/@-1.0261567,130.4996801,8z/data=!4m8!1m2!2m1!1spantai+raja+ampat!3m4!1s0x2d5e37819775a0bf:0xb98db4c6e60649fb!8m2!3d-0.5642076!4d130.2708139?hl=id"
    },
    {
        "title": "Tomini Bay",
        "desc": "Tomini Bay, ini terletak di Sulawesi Utara. Tomini Bay ini lokasinya yang tak jauh dari garis khatulistiwa maka dari itu pantai ini menjadi tempat wisatawan untuk memilih menikmati waktu bersantai dan berliburnya dengan berjemur dan pastinya melakukan Diving karena disini sudah terkenal dengan pemandangan bawah lautnya yang menawan",
        "address": "Teluk Tomini, Gorontalo",
        "open": "24 jam",
        "price": "1 - 250 Juta",
        "imageurl": "assets/images/beach/img_tomini.jpg",
        "maps": "https://www.google.co.id/maps/place/Tomini+Pantai/@0.512785,120.5512978,17z/data=!3m1!4b1!4m5!3m4!1s0x32765f8cf49af143:0xe5857acf64f3f46f!8m2!3d0.5127796!4d120.5534918?hl=id"
    },
    {
        "title": "Pantai Weh",
        "desc": "Bicara tentang Pulau Weh memang selalu berkaitan erat dengan ‘Iboih’. Tak jarang orang yang datang ke Pulau Weh pasti selalu menanyakan dimana ‘Iboih’ berada. Iboih adalah nama sebuah pantai yang berada di Pulau Weh. Pantai ini terkenal memiliki pemandangan yang memukau dan memiliki air yang sangat jernih. Seperti apa pemandanga cantik khas Pantai Iboih? Berikut ini adalah 8 fakta tentang Pantai Iboih yang harus kalian tahu.",
        "address": "Iboih, Sukakarya, Kota Sabang, Aceh",
        "open": "24 jam",
        "price": "1 - 250 Juta",
        "imageurl": "assets/images/beach/img_weh.jpg",
        "maps": "https://www.google.com/maps/place/Pantai+Iboih/@5.6794668,95.1549209,11z/data=!4m8!1m2!2m1!1spantai+weh!3m4!1s0x3041cf8814922c7d:0xad5746c8f98121f3!8m2!3d5.8728466!4d95.2567202?hl=id"
    }
];

const dataGunung = [{
        "title": "Gunung Bromo",
        "desc": "Gunung Bromo, siapa yang tidak mengenal kepopuleran gunung berapi yang masih aktif ini. Gunung Bromo adalah gunung yang paling terkenal di Jawa Timur dengan kunjungan yang paling ramai setiap tahunnya. Gunung Bromo memiliki ketinggian 2.392 Meter dari atas permukaan laut dan berada dalam empat lingkup kabupaten, yaitu Probolinggo, Pasuruan, Lumajang dan Kabupaten Malang.",
        "address": "Pasuruan, Jawa Timur",
        "open": "24 jam",
        "price": "500 rb - 1 Juta",
        "imageurl": "assets/images/mount/img_bromo.jpg",
        "maps": "https://www.google.com/maps/place/Gn.+Bromo/@-7.9424721,112.944236,15z/data=!3m1!4b1!4m5!3m4!1s0x2dd637aaab794a41:0xada40d36ecd2a5dd!8m2!3d-7.9424936!4d112.9530122?hl=id"
    },
    {
        "title": "Gunung Ijen",
        "desc": "Terdapat fenomena blue fire di Gunung Ijen. Tak heran, bukan hanya para traveler saja yang berkunjung ke sana, melainkan juga para ahli geologi maupun peneliti, banyak yang mengunjunginya. Setiap saat, banyak turis lokal maupun internasional yang penasaran dengan fenomena api biru ini.",
        "address": "Banyuwangi, Jawa Timur",
        "open": "24 jam",
        "price": "500 rb - 1 Juta",
        "imageurl": "assets/images/mount/img_ijen.jpg",
        "maps": "https://www.google.com/maps/place/Gn.+Ijen/@-8.0587807,114.2351606,14z/data=!3m1!4b1!4m5!3m4!1s0x2dd149f2110ae607:0x7c04ef029d5e39bc!8m2!3d-8.0583811!4d114.243299?hl=id"
    },
    {
        "title": "Gunung Merbabu",
        "desc": "Gunung Merbabu berada di wilayah Semarang, Boyolali, Magelang, Jawa Tengah. Terletak di ketinggian 3.145 mdpl membuat gunung ini nampak berdiri kokoh sejajar dengan Gunung Merapi. Gunung ini tak pernah sepi dari kunjungan wisatawan, entah itu yang hanya ingin sekedar menikmati suasana, berselfie, ataupun mendaki.",
        "address": "Taman Nasional Komodo, Nusa Tenggara Timur",
        "open": "24 Jam",
        "price": "500 rb - 1 Juta",
        "imageurl": "assets/images/mount/img_merbabu.jpg",
        "maps": "https://www.google.com/maps/place/Gn.+Merbabu/@-7.4549785,110.4312238,15z/data=!3m1!4b1!4m5!3m4!1s0x2e7a7b455e544767:0xf7af0c6e80ad2dde!8m2!3d-7.455!4d110.44?hl=id"
    },
    {
        "title": "Gunung Prau",
        "desc": "Lokasi Gunung Prau Prau lebih mudah untuk disebutkan berada di Dieng, karena secara administrasi Gunung Prau berada dalam 5 kabupaten. Gunung Prau juga menjadi favorit karena waktu tempuh pendakian yang tidak terlalu lama dan memang cocok untuk pemula. Sunrise di Gunung Prau memang sangat memanjakan pandangan saat membuka pintu tenda.",
        "address": "Dieng, Jawa Tengah",
        "open": "24 Jam",
        "price": "500 rb - 1 Juta",
        "imageurl": "assets/images/mount/img_prau.jpg",
        "maps": "https://www.google.com/maps/place/Gunung+Prau,+Bakulan,+Dieng,+Wonosobo,+Kabupaten+Wonosobo,+Jawa+Tengah+56354/@-7.4541876,110.1590764,10z/data=!4m5!1m2!2m1!1sprau!3m1!1s0x2e700d2137d6aa11:0x899b0e25bc74ab01?hl=id"
    },
    {
        "title": "Gunung Rinjani",
        "desc": "Keeksotisan Gunung Rinjani berhasil menarik orang untuk datang menemui si Dewi Anjani. Tidak cuma pendaki gunung saja yang terhipnotis kecantikan Rinjani, mereka yang awam dalam pendakian pun ikut terpesona mengagumi keindahannya. Lebih membanggakan lagi, magnet Gunung Rinjani sanggup menarik banyak turis asing. ",
        "address": "Sembalun, Nusa Tenggara Barat",
        "open": "24 jam",
        "price": "500 - 1 Juta",
        "imageurl": "assets/images/mount/img_rinjani.jpg",
        "maps": "https://www.google.com/maps/place/Gn.+Rinjani/@-8.4112737,116.4485726,15z/data=!3m1!4b1!4m5!3m4!1s0x2dcc2d800216cccf:0x3c03cdbf11d30a1e!8m2!3d-8.4112952!4d116.4573488?hl=id"
    },
    {
        "title": "Gunung Semeru",
        "desc": "Gunung Semeru atau Gunung Meru adalah sebuah gunung berapi kerucut di Jawa Timur, Indonesia. Gunung Semeru merupakan gunung tertinggi di Pulau Jawa, dengan puncaknya Mahameru, 3.676 meter dari permukaan laut (mdpl). Gunung Semeru juga merupakan gunung berapi tertinggi ketiga di Indonesia setelah Gunung Kerinci di Sumatra dan Gunung Rinjani di Nusa Tenggara Barat",
        "address": "Lumajang, Jawa Timur",
        "open": "24 jam",
        "price": "500 - 1 Juta",
        "imageurl": "assets/images/mount/img_semeru.jpg",
        "maps": "https://www.google.com/maps/place/Gn.+Semeru/@-8.1076957,112.9136313,15z/data=!3m1!4b1!4m5!3m4!1s0x2dd63e89e1d817bb:0x9c14d4ed3c488f54!8m2!3d-8.1077172!4d112.9224075?hl=id"
    }
];


//Show Data

window.onload = (() => {
    let itemPantaiAppend = '';
    dataPantai.forEach((item, index, arr) => {
        itemPantaiAppend += '<div class="card">' +
            '<img src=' + item.imageurl + '>' +
            '<h4>' + item.title + '</h4>' +
            '<p>' + item.desc + '</p>' +
            '<table width="100%">' +
            '<tr>' +
            '<td width="35%"> Alamat </td>' +
            '<td width="5%"> : </td>' +
            '<td width="60%">' + item.address + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td width="35%"> Jam Buka</td>' +
            '<td width="5%"> : </td>' +
            '<td width="60%">' + item.open + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td width="35%"> Harga Tiket</td>' +
            '<td width="5%"> : </td>' +
            '<td width="60%">' + item.price + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td colspan="2"><a target="_blank" href=' + item.maps + '>Maps</a></td>' +
            '</table>' +
            '</div>'
    });
    document.getElementById("content-pantai").innerHTML = itemPantaiAppend;

    let itemGunungAppend = '';
    dataGunung.forEach((item, index, arr) => {
        itemGunungAppend += '<div class="card">' +
            '<img src=' + item.imageurl + '>' +
            '<h4>' + item.title + '</h4>' +
            '<p>' + item.desc + '</p>' +
            '<table width="100%">' +
            '<tr>' +
            '<td width="35%"> Alamat </td>' +
            '<td width="5%"> : </td>' +
            '<td width="60%">' + item.address + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td width="35%"> Jam Buka</td>' +
            '<td width="5%"> : </td>' +
            '<td width="60%">' + item.open + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td width="35%"> Harga Tiket</td>' +
            '<td width="5%"> : </td>' +
            '<td width="60%">' + item.price + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td colspan="2"><a target="_blank" href=' + item.maps + '>Maps</a></td>' +
            '</table>' +
            '</div>'
    });
    document.getElementById("content-gunung").innerHTML = itemGunungAppend;
})