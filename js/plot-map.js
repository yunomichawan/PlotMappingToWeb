var map;
var infoWindow;

// マッピング用データ
var testData = {
    '202001': {
        "type": "FeatureCollection",
        "features": [
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-106, 34.1] }, 'properties': { 'meter': 662, 'dataCount': 19, 'name': 'ニューメキシコ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-99.61, 41.5] }, 'properties': { 'meter': 60, 'dataCount': 2, 'name': 'ネブラスカ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-120.505, 47.165] }, 'properties': { 'meter': 3186, 'dataCount': 117, 'name': 'ワシントン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-120.33, 44.09] }, 'properties': { 'meter': 5526, 'dataCount': 205, 'name': 'オレゴン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-89.3, 39.44] }, 'properties': { 'meter': 1765, 'dataCount': 69, 'name': 'イリノイ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-107.8, 43] }, 'properties': { 'meter': 447, 'dataCount': 19, 'name': 'ワイオミング', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-92.53, 38.185] }, 'properties': { 'meter': 771, 'dataCount': 36, 'name': 'ミズーリ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-83.43, 27.65] }, 'properties': { 'meter': 1934, 'dataCount': 92, 'name': 'フロリダ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-79.91, 38.755] }, 'properties': { 'meter': 342, 'dataCount': 17, 'name': 'ウェストバージニア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-85.79, 35.5] }, 'properties': { 'meter': 2492, 'dataCount': 128, 'name': 'テネシー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-80.765, 33.665] }, 'properties': { 'meter': 649, 'dataCount': 34, 'name': 'サウスカロライナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-111.5, 39.5] }, 'properties': { 'meter': 1359, 'dataCount': 73, 'name': 'ユタ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-89.995, 32.56] }, 'properties': { 'meter': 907, 'dataCount': 49, 'name': 'ミシシッピ－', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-71.615, 42] }, 'properties': { 'meter': 73, 'dataCount': 4, 'name': 'ロードアイランド', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-93.59, 41.765] }, 'properties': { 'meter': 1024, 'dataCount': 56, 'name': 'アイオワ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-93.215, 46.315] }, 'properties': { 'meter': 216, 'dataCount': 12, 'name': 'ミネソタ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-77.02, 38.53] }, 'properties': { 'meter': 143, 'dataCount': 8, 'name': 'ワシントンＤＣ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-98.63, 35.185] }, 'properties': { 'meter': 213, 'dataCount': 12, 'name': 'オクラホマ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-79.735, 34.925] }, 'properties': { 'meter': 899, 'dataCount': 51, 'name': 'ノースカロライナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-99.845, 30.9] }, 'properties': { 'meter': 8077, 'dataCount': 463, 'name': 'テキサス', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-82.4, 39.915] }, 'properties': { 'meter': 1673, 'dataCount': 96, 'name': 'オハイオ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-71.345, 43.8] }, 'properties': { 'meter': 608, 'dataCount': 35, 'name': 'ニューハンプシャー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-83.265, 32.655] }, 'properties': { 'meter': 1343, 'dataCount': 78, 'name': 'ジョージア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-117, 38.5] }, 'properties': { 'meter': 1042, 'dataCount': 62, 'name': 'ネバダ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-79.28, 37.8] }, 'properties': { 'meter': 2198, 'dataCount': 132, 'name': 'バージニア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-85.46, 38.1] }, 'properties': { 'meter': 1187, 'dataCount': 72, 'name': 'ケンタッキー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-91.5, 31] }, 'properties': { 'meter': 2723, 'dataCount': 173, 'name': 'ルイジアナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-69.035, 44.93] }, 'properties': { 'meter': 1166, 'dataCount': 76, 'name': 'メーン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-86.535, 39.46] }, 'properties': { 'meter': 350, 'dataCount': 23, 'name': 'インディアナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-119.53, 37.16] }, 'properties': { 'meter': 3384, 'dataCount': 223, 'name': 'カリフォルニア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-111.9, 34.1] }, 'properties': { 'meter': 157, 'dataCount': 11, 'name': 'アリゾナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-72.455, 41.44] }, 'properties': { 'meter': 28, 'dataCount': 2, 'name': 'コネチカット', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-75.46, 42.645] }, 'properties': { 'meter': 2105, 'dataCount': 142, 'name': 'ニューヨーク', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-74.44, 39.885] }, 'properties': { 'meter': 350, 'dataCount': 25, 'name': 'ニュージャージー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-89.495, 44.71] }, 'properties': { 'meter': 1734, 'dataCount': 130, 'name': 'ウィスコンシン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-158.2, 23.775] }, 'properties': { 'meter': 13, 'dataCount': 1, 'name': 'ハワイ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-86.405, 32.555] }, 'properties': { 'meter': 479, 'dataCount': 37, 'name': 'アラバマ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-77.295, 38.48] }, 'properties': { 'meter': 452, 'dataCount': 35, 'name': 'メリーランド', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-91.88, 34.65] }, 'properties': { 'meter': 1214, 'dataCount': 94, 'name': 'アーカンソー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-72.27, 43.72] }, 'properties': { 'meter': 38, 'dataCount': 3, 'name': 'バーモント', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-98.325, 38.5] }, 'properties': { 'meter': 113, 'dataCount': 9, 'name': 'カンザス', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-71.43, 41.835] }, 'properties': { 'meter': 210, 'dataCount': 18, 'name': 'マサチューセッツ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-105.53, 39] }, 'properties': { 'meter': 979, 'dataCount': 84, 'name': 'コロラド', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-86.16, 44.795] }, 'properties': { 'meter': 133, 'dataCount': 12, 'name': 'ミシガン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-77.36, 40.795] }, 'properties': { 'meter': 759, 'dataCount': 95, 'name': 'ペンシルバニア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-114, 45.5] }, 'properties': { 'meter': 27, 'dataCount': 6, 'name': 'アイダホ', }, },
        ],
    },
    '202002': {
        "type": "FeatureCollection",
        "features": [
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-106, 34.1] }, 'properties': { 'meter': 700, 'dataCount': 20, 'name': 'ニューメキシコ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-99.61, 41.5] }, 'properties': { 'meter': 68, 'dataCount': 5, 'name': 'ネブラスカ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-120.505, 47.165] }, 'properties': { 'meter': 3300, 'dataCount': 137, 'name': 'ワシントン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-120.33, 44.09] }, 'properties': { 'meter': 5526, 'dataCount': 205, 'name': 'オレゴン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-89.3, 39.44] }, 'properties': { 'meter': 1765, 'dataCount': 69, 'name': 'イリノイ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-107.8, 43] }, 'properties': { 'meter': 480, 'dataCount': 26, 'name': 'ワイオミング', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-92.53, 38.185] }, 'properties': { 'meter': 771, 'dataCount': 36, 'name': 'ミズーリ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-83.43, 27.65] }, 'properties': { 'meter': 1934, 'dataCount': 92, 'name': 'フロリダ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-79.91, 38.755] }, 'properties': { 'meter': 342, 'dataCount': 17, 'name': 'ウェストバージニア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-85.79, 35.5] }, 'properties': { 'meter': 2492, 'dataCount': 128, 'name': 'テネシー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-80.765, 33.665] }, 'properties': { 'meter': 649, 'dataCount': 34, 'name': 'サウスカロライナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-111.5, 39.5] }, 'properties': { 'meter': 1359, 'dataCount': 73, 'name': 'ユタ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-89.995, 32.56] }, 'properties': { 'meter': 907, 'dataCount': 49, 'name': 'ミシシッピ－', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-71.615, 42] }, 'properties': { 'meter': 73, 'dataCount': 4, 'name': 'ロードアイランド', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-93.59, 41.765] }, 'properties': { 'meter': 1024, 'dataCount': 56, 'name': 'アイオワ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-93.215, 46.315] }, 'properties': { 'meter': 216, 'dataCount': 12, 'name': 'ミネソタ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-77.02, 38.53] }, 'properties': { 'meter': 143, 'dataCount': 8, 'name': 'ワシントンＤＣ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-98.63, 35.185] }, 'properties': { 'meter': 213, 'dataCount': 12, 'name': 'オクラホマ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-79.735, 34.925] }, 'properties': { 'meter': 899, 'dataCount': 51, 'name': 'ノースカロライナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-99.845, 30.9] }, 'properties': { 'meter': 8077, 'dataCount': 263, 'name': 'テキサス', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-82.4, 39.915] }, 'properties': { 'meter': 1673, 'dataCount': 96, 'name': 'オハイオ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-71.345, 43.8] }, 'properties': { 'meter': 608, 'dataCount': 35, 'name': 'ニューハンプシャー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-83.265, 32.655] }, 'properties': { 'meter': 1343, 'dataCount': 78, 'name': 'ジョージア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-117, 38.5] }, 'properties': { 'meter': 1042, 'dataCount': 62, 'name': 'ネバダ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-79.28, 37.8] }, 'properties': { 'meter': 2198, 'dataCount': 132, 'name': 'バージニア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-85.46, 38.1] }, 'properties': { 'meter': 1187, 'dataCount': 72, 'name': 'ケンタッキー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-91.5, 31] }, 'properties': { 'meter': 2723, 'dataCount': 173, 'name': 'ルイジアナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-69.035, 44.93] }, 'properties': { 'meter': 1166, 'dataCount': 76, 'name': 'メーン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-86.535, 39.46] }, 'properties': { 'meter': 350, 'dataCount': 23, 'name': 'インディアナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-119.53, 37.16] }, 'properties': { 'meter': 3384, 'dataCount': 223, 'name': 'カリフォルニア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-111.9, 34.1] }, 'properties': { 'meter': 157, 'dataCount': 11, 'name': 'アリゾナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-72.455, 41.44] }, 'properties': { 'meter': 28, 'dataCount': 2, 'name': 'コネチカット', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-75.46, 42.645] }, 'properties': { 'meter': 2005, 'dataCount': 142, 'name': 'ニューヨーク', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-74.44, 39.885] }, 'properties': { 'meter': 350, 'dataCount': 25, 'name': 'ニュージャージー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-89.495, 44.71] }, 'properties': { 'meter': 1734, 'dataCount': 130, 'name': 'ウィスコンシン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-158.2, 23.775] }, 'properties': { 'meter': 13, 'dataCount': 1, 'name': 'ハワイ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-86.405, 32.555] }, 'properties': { 'meter': 479, 'dataCount': 37, 'name': 'アラバマ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-77.295, 38.48] }, 'properties': { 'meter': 452, 'dataCount': 35, 'name': 'メリーランド', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-91.88, 34.65] }, 'properties': { 'meter': 1214, 'dataCount': 94, 'name': 'アーカンソー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-72.27, 43.72] }, 'properties': { 'meter': 38, 'dataCount': 3, 'name': 'バーモント', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-98.325, 38.5] }, 'properties': { 'meter': 113, 'dataCount': 9, 'name': 'カンザス', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-71.43, 41.835] }, 'properties': { 'meter': 210, 'dataCount': 18, 'name': 'マサチューセッツ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-105.53, 39] }, 'properties': { 'meter': 979, 'dataCount': 84, 'name': 'コロラド', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-86.16, 44.795] }, 'properties': { 'meter': 133, 'dataCount': 12, 'name': 'ミシガン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-77.36, 40.795] }, 'properties': { 'meter': 759, 'dataCount': 95, 'name': 'ペンシルバニア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-114, 45.5] }, 'properties': { 'meter': 27, 'dataCount': 6, 'name': 'アイダホ', }, },
        ],
    },
    '202003': {
        "type": "FeatureCollection",
        "features": [
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-106, 34.1] }, 'properties': { 'meter': 662, 'dataCount': 19, 'name': 'ニューメキシコ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-99.61, 41.5] }, 'properties': { 'meter': 60, 'dataCount': 2, 'name': 'ネブラスカ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-120.505, 47.165] }, 'properties': { 'meter': 3186, 'dataCount': 117, 'name': 'ワシントン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-120.33, 44.09] }, 'properties': { 'meter': 5526, 'dataCount': 205, 'name': 'オレゴン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-89.3, 39.44] }, 'properties': { 'meter': 1765, 'dataCount': 69, 'name': 'イリノイ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-107.8, 43] }, 'properties': { 'meter': 447, 'dataCount': 19, 'name': 'ワイオミング', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-92.53, 38.185] }, 'properties': { 'meter': 771, 'dataCount': 36, 'name': 'ミズーリ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-83.43, 27.65] }, 'properties': { 'meter': 1934, 'dataCount': 92, 'name': 'フロリダ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-79.91, 38.755] }, 'properties': { 'meter': 342, 'dataCount': 17, 'name': 'ウェストバージニア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-85.79, 35.5] }, 'properties': { 'meter': 2550, 'dataCount': 150, 'name': 'テネシー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-80.765, 33.665] }, 'properties': { 'meter': 649, 'dataCount': 34, 'name': 'サウスカロライナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-111.5, 39.5] }, 'properties': { 'meter': 1359, 'dataCount': 73, 'name': 'ユタ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-89.995, 32.56] }, 'properties': { 'meter': 907, 'dataCount': 49, 'name': 'ミシシッピ－', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-71.615, 42] }, 'properties': { 'meter': 73, 'dataCount': 4, 'name': 'ロードアイランド', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-93.59, 41.765] }, 'properties': { 'meter': 1024, 'dataCount': 56, 'name': 'アイオワ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-93.215, 46.315] }, 'properties': { 'meter': 216, 'dataCount': 12, 'name': 'ミネソタ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-77.02, 38.53] }, 'properties': { 'meter': 143, 'dataCount': 8, 'name': 'ワシントンＤＣ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-98.63, 35.185] }, 'properties': { 'meter': 213, 'dataCount': 12, 'name': 'オクラホマ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-79.735, 34.925] }, 'properties': { 'meter': 899, 'dataCount': 51, 'name': 'ノースカロライナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-99.845, 30.9] }, 'properties': { 'meter': 8077, 'dataCount': 463, 'name': 'テキサス', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-82.4, 39.915] }, 'properties': { 'meter': 1500, 'dataCount': 80, 'name': 'オハイオ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-71.345, 43.8] }, 'properties': { 'meter': 608, 'dataCount': 35, 'name': 'ニューハンプシャー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-83.265, 32.655] }, 'properties': { 'meter': 1343, 'dataCount': 78, 'name': 'ジョージア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-117, 38.5] }, 'properties': { 'meter': 1042, 'dataCount': 62, 'name': 'ネバダ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-79.28, 37.8] }, 'properties': { 'meter': 2198, 'dataCount': 132, 'name': 'バージニア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-85.46, 38.1] }, 'properties': { 'meter': 1187, 'dataCount': 72, 'name': 'ケンタッキー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-91.5, 31] }, 'properties': { 'meter': 2723, 'dataCount': 173, 'name': 'ルイジアナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-69.035, 44.93] }, 'properties': { 'meter': 1166, 'dataCount': 76, 'name': 'メーン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-86.535, 39.46] }, 'properties': { 'meter': 350, 'dataCount': 23, 'name': 'インディアナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-119.53, 37.16] }, 'properties': { 'meter': 3384, 'dataCount': 223, 'name': 'カリフォルニア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-111.9, 34.1] }, 'properties': { 'meter': 157, 'dataCount': 11, 'name': 'アリゾナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-72.455, 41.44] }, 'properties': { 'meter': 28, 'dataCount': 2, 'name': 'コネチカット', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-75.46, 42.645] }, 'properties': { 'meter': 2005, 'dataCount': 142, 'name': 'ニューヨーク', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-74.44, 39.885] }, 'properties': { 'meter': 350, 'dataCount': 25, 'name': 'ニュージャージー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-89.495, 44.71] }, 'properties': { 'meter': 1734, 'dataCount': 130, 'name': 'ウィスコンシン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-158.2, 23.775] }, 'properties': { 'meter': 13, 'dataCount': 1, 'name': 'ハワイ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-86.405, 32.555] }, 'properties': { 'meter': 479, 'dataCount': 37, 'name': 'アラバマ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-77.295, 38.48] }, 'properties': { 'meter': 452, 'dataCount': 35, 'name': 'メリーランド', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-91.88, 34.65] }, 'properties': { 'meter': 1214, 'dataCount': 94, 'name': 'アーカンソー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-72.27, 43.72] }, 'properties': { 'meter': 88, 'dataCount': 3, 'name': 'バーモント', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-98.325, 38.5] }, 'properties': { 'meter': 113, 'dataCount': 9, 'name': 'カンザス', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-71.43, 41.835] }, 'properties': { 'meter': 210, 'dataCount': 18, 'name': 'マサチューセッツ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-105.53, 39] }, 'properties': { 'meter': 979, 'dataCount': 84, 'name': 'コロラド', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-86.16, 44.795] }, 'properties': { 'meter': 133, 'dataCount': 12, 'name': 'ミシガン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-77.36, 40.795] }, 'properties': { 'meter': 759, 'dataCount': 95, 'name': 'ペンシルバニア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-114, 45.5] }, 'properties': { 'meter': 27, 'dataCount': 6, 'name': 'アイダホ', }, },
        ],
    },
    '202004': {
        "type": "FeatureCollection",
        "features": [
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-106, 34.1] }, 'properties': { 'meter': 662, 'dataCount': 19, 'name': 'ニューメキシコ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-99.61, 41.5] }, 'properties': { 'meter': 60, 'dataCount': 2, 'name': 'ネブラスカ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-120.505, 47.165] }, 'properties': { 'meter': 3186, 'dataCount': 117, 'name': 'ワシントン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-120.33, 44.09] }, 'properties': { 'meter': 5526, 'dataCount': 205, 'name': 'オレゴン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-89.3, 39.44] }, 'properties': { 'meter': 1765, 'dataCount': 69, 'name': 'イリノイ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-107.8, 43] }, 'properties': { 'meter': 447, 'dataCount': 19, 'name': 'ワイオミング', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-92.53, 38.185] }, 'properties': { 'meter': 771, 'dataCount': 36, 'name': 'ミズーリ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-83.43, 27.65] }, 'properties': { 'meter': 1934, 'dataCount': 92, 'name': 'フロリダ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-79.91, 38.755] }, 'properties': { 'meter': 342, 'dataCount': 17, 'name': 'ウェストバージニア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-85.79, 35.5] }, 'properties': { 'meter': 2492, 'dataCount': 128, 'name': 'テネシー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-80.765, 33.665] }, 'properties': { 'meter': 649, 'dataCount': 34, 'name': 'サウスカロライナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-111.5, 39.5] }, 'properties': { 'meter': 1359, 'dataCount': 73, 'name': 'ユタ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-89.995, 32.56] }, 'properties': { 'meter': 907, 'dataCount': 49, 'name': 'ミシシッピ－', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-71.615, 42] }, 'properties': { 'meter': 73, 'dataCount': 4, 'name': 'ロードアイランド', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-93.59, 41.765] }, 'properties': { 'meter': 1324, 'dataCount': 56, 'name': 'アイオワ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-93.215, 46.315] }, 'properties': { 'meter': 216, 'dataCount': 12, 'name': 'ミネソタ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-77.02, 38.53] }, 'properties': { 'meter': 143, 'dataCount': 8, 'name': 'ワシントンＤＣ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-98.63, 35.185] }, 'properties': { 'meter': 213, 'dataCount': 12, 'name': 'オクラホマ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-79.735, 34.925] }, 'properties': { 'meter': 899, 'dataCount': 51, 'name': 'ノースカロライナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-99.845, 30.9] }, 'properties': { 'meter': 8077, 'dataCount': 263, 'name': 'テキサス', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-82.4, 39.915] }, 'properties': { 'meter': 1673, 'dataCount': 96, 'name': 'オハイオ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-71.345, 43.8] }, 'properties': { 'meter': 608, 'dataCount': 35, 'name': 'ニューハンプシャー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-83.265, 32.655] }, 'properties': { 'meter': 1343, 'dataCount': 78, 'name': 'ジョージア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-117, 38.5] }, 'properties': { 'meter': 1042, 'dataCount': 62, 'name': 'ネバダ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-79.28, 37.8] }, 'properties': { 'meter': 2198, 'dataCount': 132, 'name': 'バージニア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-85.46, 38.1] }, 'properties': { 'meter': 1187, 'dataCount': 72, 'name': 'ケンタッキー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-91.5, 31] }, 'properties': { 'meter': 2723, 'dataCount': 173, 'name': 'ルイジアナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-69.035, 44.93] }, 'properties': { 'meter': 1166, 'dataCount': 76, 'name': 'メーン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-86.535, 39.46] }, 'properties': { 'meter': 350, 'dataCount': 23, 'name': 'インディアナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-119.53, 37.16] }, 'properties': { 'meter': 3384, 'dataCount': 223, 'name': 'カリフォルニア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-111.9, 34.1] }, 'properties': { 'meter': 157, 'dataCount': 11, 'name': 'アリゾナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-72.455, 41.44] }, 'properties': { 'meter': 28, 'dataCount': 2, 'name': 'コネチカット', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-75.46, 42.645] }, 'properties': { 'meter': 2005, 'dataCount': 142, 'name': 'ニューヨーク', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-74.44, 39.885] }, 'properties': { 'meter': 350, 'dataCount': 25, 'name': 'ニュージャージー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-89.495, 44.71] }, 'properties': { 'meter': 1734, 'dataCount': 130, 'name': 'ウィスコンシン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-158.2, 23.775] }, 'properties': { 'meter': 13, 'dataCount': 1, 'name': 'ハワイ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-86.405, 32.555] }, 'properties': { 'meter': 479, 'dataCount': 37, 'name': 'アラバマ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-77.295, 38.48] }, 'properties': { 'meter': 452, 'dataCount': 35, 'name': 'メリーランド', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-91.88, 34.65] }, 'properties': { 'meter': 1214, 'dataCount': 94, 'name': 'アーカンソー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-72.27, 43.72] }, 'properties': { 'meter': 38, 'dataCount': 3, 'name': 'バーモント', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-98.325, 38.5] }, 'properties': { 'meter': 113, 'dataCount': 9, 'name': 'カンザス', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-71.43, 41.835] }, 'properties': { 'meter': 210, 'dataCount': 18, 'name': 'マサチューセッツ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-105.53, 39] }, 'properties': { 'meter': 979, 'dataCount': 84, 'name': 'コロラド', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-86.16, 44.795] }, 'properties': { 'meter': 113, 'dataCount': 12, 'name': 'ミシガン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-77.36, 40.795] }, 'properties': { 'meter': 859, 'dataCount': 95, 'name': 'ペンシルバニア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-114, 45.5] }, 'properties': { 'meter': 27, 'dataCount': 6, 'name': 'アイダホ', }, },
        ],
    },
    '202005': {
        "type": "FeatureCollection",
        "features": [
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-106, 34.1] }, 'properties': { 'meter': 662, 'dataCount': 19, 'name': 'ニューメキシコ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-99.61, 41.5] }, 'properties': { 'meter': 60, 'dataCount': 2, 'name': 'ネブラスカ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-120.505, 47.165] }, 'properties': { 'meter': 3186, 'dataCount': 117, 'name': 'ワシントン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-120.33, 44.09] }, 'properties': { 'meter': 3526, 'dataCount': 225, 'name': 'オレゴン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-89.3, 39.44] }, 'properties': { 'meter': 1765, 'dataCount': 69, 'name': 'イリノイ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-107.8, 43] }, 'properties': { 'meter': 447, 'dataCount': 19, 'name': 'ワイオミング', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-92.53, 38.185] }, 'properties': { 'meter': 771, 'dataCount': 36, 'name': 'ミズーリ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-83.43, 27.65] }, 'properties': { 'meter': 1934, 'dataCount': 92, 'name': 'フロリダ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-79.91, 38.755] }, 'properties': { 'meter': 342, 'dataCount': 17, 'name': 'ウェストバージニア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-85.79, 35.5] }, 'properties': { 'meter': 2492, 'dataCount': 128, 'name': 'テネシー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-80.765, 33.665] }, 'properties': { 'meter': 649, 'dataCount': 34, 'name': 'サウスカロライナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-111.5, 39.5] }, 'properties': { 'meter': 1359, 'dataCount': 73, 'name': 'ユタ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-89.995, 32.56] }, 'properties': { 'meter': 907, 'dataCount': 49, 'name': 'ミシシッピ－', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-71.615, 42] }, 'properties': { 'meter': 93, 'dataCount': 4, 'name': 'ロードアイランド', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-93.59, 41.765] }, 'properties': { 'meter': 1024, 'dataCount': 56, 'name': 'アイオワ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-93.215, 46.315] }, 'properties': { 'meter': 216, 'dataCount': 12, 'name': 'ミネソタ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-77.02, 38.53] }, 'properties': { 'meter': 143, 'dataCount': 8, 'name': 'ワシントンＤＣ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-98.63, 35.185] }, 'properties': { 'meter': 213, 'dataCount': 12, 'name': 'オクラホマ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-79.735, 34.925] }, 'properties': { 'meter': 899, 'dataCount': 51, 'name': 'ノースカロライナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-99.845, 30.9] }, 'properties': { 'meter': 8077, 'dataCount': 463, 'name': 'テキサス', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-82.4, 39.915] }, 'properties': { 'meter': 1673, 'dataCount': 96, 'name': 'オハイオ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-71.345, 43.8] }, 'properties': { 'meter': 608, 'dataCount': 35, 'name': 'ニューハンプシャー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-83.265, 32.655] }, 'properties': { 'meter': 1343, 'dataCount': 78, 'name': 'ジョージア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-117, 38.5] }, 'properties': { 'meter': 1042, 'dataCount': 62, 'name': 'ネバダ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-79.28, 37.8] }, 'properties': { 'meter': 2198, 'dataCount': 132, 'name': 'バージニア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-85.46, 38.1] }, 'properties': { 'meter': 1187, 'dataCount': 72, 'name': 'ケンタッキー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-91.5, 31] }, 'properties': { 'meter': 2723, 'dataCount': 173, 'name': 'ルイジアナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-69.035, 44.93] }, 'properties': { 'meter': 1166, 'dataCount': 76, 'name': 'メーン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-86.535, 39.46] }, 'properties': { 'meter': 390, 'dataCount': 33, 'name': 'インディアナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-119.53, 37.16] }, 'properties': { 'meter': 3384, 'dataCount': 223, 'name': 'カリフォルニア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-111.9, 34.1] }, 'properties': { 'meter': 157, 'dataCount': 11, 'name': 'アリゾナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-72.455, 41.44] }, 'properties': { 'meter': 28, 'dataCount': 2, 'name': 'コネチカット', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-75.46, 42.645] }, 'properties': { 'meter': 2005, 'dataCount': 142, 'name': 'ニューヨーク', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-74.44, 39.885] }, 'properties': { 'meter': 350, 'dataCount': 25, 'name': 'ニュージャージー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-89.495, 44.71] }, 'properties': { 'meter': 1734, 'dataCount': 130, 'name': 'ウィスコンシン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-158.2, 23.775] }, 'properties': { 'meter': 13, 'dataCount': 1, 'name': 'ハワイ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-86.405, 32.555] }, 'properties': { 'meter': 479, 'dataCount': 37, 'name': 'アラバマ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-77.295, 38.48] }, 'properties': { 'meter': 452, 'dataCount': 35, 'name': 'メリーランド', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-91.88, 34.65] }, 'properties': { 'meter': 1214, 'dataCount': 94, 'name': 'アーカンソー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-72.27, 43.72] }, 'properties': { 'meter': 38, 'dataCount': 3, 'name': 'バーモント', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-98.325, 38.5] }, 'properties': { 'meter': 113, 'dataCount': 9, 'name': 'カンザス', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-71.43, 41.835] }, 'properties': { 'meter': 210, 'dataCount': 18, 'name': 'マサチューセッツ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-105.53, 39] }, 'properties': { 'meter': 979, 'dataCount': 84, 'name': 'コロラド', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-86.16, 44.795] }, 'properties': { 'meter': 183, 'dataCount': 19, 'name': 'ミシガン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-77.36, 40.795] }, 'properties': { 'meter': 759, 'dataCount': 95, 'name': 'ペンシルバニア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-114, 45.5] }, 'properties': { 'meter': 27, 'dataCount': 6, 'name': 'アイダホ', }, },
        ],
    },
    '202006': {
        "type": "FeatureCollection",
        "features": [
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-106, 34.1] }, 'properties': { 'meter': 662, 'dataCount': 19, 'name': 'ニューメキシコ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-99.61, 41.5] }, 'properties': { 'meter': 60, 'dataCount': 2, 'name': 'ネブラスカ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-120.505, 47.165] }, 'properties': { 'meter': 3186, 'dataCount': 117, 'name': 'ワシントン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-120.33, 44.09] }, 'properties': { 'meter': 5526, 'dataCount': 205, 'name': 'オレゴン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-89.3, 39.44] }, 'properties': { 'meter': 1465, 'dataCount': 60, 'name': 'イリノイ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-107.8, 43] }, 'properties': { 'meter': 447, 'dataCount': 19, 'name': 'ワイオミング', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-92.53, 38.185] }, 'properties': { 'meter': 771, 'dataCount': 36, 'name': 'ミズーリ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-83.43, 27.65] }, 'properties': { 'meter': 1934, 'dataCount': 92, 'name': 'フロリダ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-79.91, 38.755] }, 'properties': { 'meter': 342, 'dataCount': 17, 'name': 'ウェストバージニア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-85.79, 35.5] }, 'properties': { 'meter': 2492, 'dataCount': 128, 'name': 'テネシー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-80.765, 33.665] }, 'properties': { 'meter': 649, 'dataCount': 34, 'name': 'サウスカロライナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-111.5, 39.5] }, 'properties': { 'meter': 1389, 'dataCount': 75, 'name': 'ユタ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-89.995, 32.56] }, 'properties': { 'meter': 907, 'dataCount': 49, 'name': 'ミシシッピ－', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-71.615, 42] }, 'properties': { 'meter': 73, 'dataCount': 4, 'name': 'ロードアイランド', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-93.59, 41.765] }, 'properties': { 'meter': 1024, 'dataCount': 56, 'name': 'アイオワ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-93.215, 46.315] }, 'properties': { 'meter': 216, 'dataCount': 12, 'name': 'ミネソタ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-77.02, 38.53] }, 'properties': { 'meter': 143, 'dataCount': 8, 'name': 'ワシントンＤＣ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-98.63, 35.185] }, 'properties': { 'meter': 213, 'dataCount': 12, 'name': 'オクラホマ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-79.735, 34.925] }, 'properties': { 'meter': 899, 'dataCount': 51, 'name': 'ノースカロライナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-99.845, 30.9] }, 'properties': { 'meter': 8077, 'dataCount': 263, 'name': 'テキサス', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-82.4, 39.915] }, 'properties': { 'meter': 1673, 'dataCount': 96, 'name': 'オハイオ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-71.345, 43.8] }, 'properties': { 'meter': 608, 'dataCount': 35, 'name': 'ニューハンプシャー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-83.265, 32.655] }, 'properties': { 'meter': 1343, 'dataCount': 78, 'name': 'ジョージア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-117, 38.5] }, 'properties': { 'meter': 1042, 'dataCount': 62, 'name': 'ネバダ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-79.28, 37.8] }, 'properties': { 'meter': 2198, 'dataCount': 132, 'name': 'バージニア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-85.46, 38.1] }, 'properties': { 'meter': 1187, 'dataCount': 72, 'name': 'ケンタッキー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-91.5, 31] }, 'properties': { 'meter': 2723, 'dataCount': 173, 'name': 'ルイジアナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-69.035, 44.93] }, 'properties': { 'meter': 1366, 'dataCount': 86, 'name': 'メーン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-86.535, 39.46] }, 'properties': { 'meter': 350, 'dataCount': 23, 'name': 'インディアナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-119.53, 37.16] }, 'properties': { 'meter': 3384, 'dataCount': 223, 'name': 'カリフォルニア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-111.9, 34.1] }, 'properties': { 'meter': 157, 'dataCount': 11, 'name': 'アリゾナ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-72.455, 41.44] }, 'properties': { 'meter': 28, 'dataCount': 2, 'name': 'コネチカット', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-75.46, 42.645] }, 'properties': { 'meter': 2205, 'dataCount': 152, 'name': 'ニューヨーク', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-74.44, 39.885] }, 'properties': { 'meter': 350, 'dataCount': 25, 'name': 'ニュージャージー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-89.495, 44.71] }, 'properties': { 'meter': 1734, 'dataCount': 120, 'name': 'ウィスコンシン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-158.2, 23.775] }, 'properties': { 'meter': 13, 'dataCount': 1, 'name': 'ハワイ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-86.405, 32.555] }, 'properties': { 'meter': 479, 'dataCount': 37, 'name': 'アラバマ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-77.295, 38.48] }, 'properties': { 'meter': 452, 'dataCount': 35, 'name': 'メリーランド', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-91.88, 34.65] }, 'properties': { 'meter': 1214, 'dataCount': 94, 'name': 'アーカンソー', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-72.27, 43.72] }, 'properties': { 'meter': 38, 'dataCount': 3, 'name': 'バーモント', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-98.325, 38.5] }, 'properties': { 'meter': 113, 'dataCount': 9, 'name': 'カンザス', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-71.43, 41.835] }, 'properties': { 'meter': 210, 'dataCount': 18, 'name': 'マサチューセッツ', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-105.53, 39] }, 'properties': { 'meter': 1079, 'dataCount': 94, 'name': 'コロラド', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-86.16, 44.795] }, 'properties': { 'meter': 133, 'dataCount': 12, 'name': 'ミシガン', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-77.36, 40.795] }, 'properties': { 'meter': 759, 'dataCount': 95, 'name': 'ペンシルバニア', }, },
            { 'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [-114, 45.5] }, 'properties': { 'meter': 27, 'dataCount': 6, 'name': 'アイダホ', }, },
        ],
    },
};

// プロットマッピング
function plotMapping() {
    // 再生・停止ボタン
    this.anmButton = document.getElementById('btnPlotAnimation');
    // ul要素
    this.plotListParent = document.getElementById('plotDataList');
    // プロットするinput要素
    this.inputDatas = [];
    // チェック中のデータ
    this.currendIndex;
    // timer保持
    this.animationTimer;
    // アニメーション間隔ミリ秒
    this.animationPeriod = 1500;

    // 初期化
    this.init = function () {
        var mine = this;
        // 再生・停止ボタンクリックイベントセット
        this.anmButton.setAttribute('is-stop', '0');
        this.anmButton.addEventListener('click', function (event) {
            if (this.getAttribute('is-stop') == '0') {
                this.innerText = '□';
                this.setAttribute('is-stop', '1');
                mine.setCurrentIndex();
                mine.animationTimer = setInterval(function () {
                    mine.currendIndex += 1;
                    if (mine.currendIndex >= mine.inputDatas.length) {
                        mine.currendIndex = 0;
                    }

                    // 次のデータに切り替え
                    mine.removeAll();
                    mine.setMapData(mine.inputDatas[mine.currendIndex].value);
                    mine.inputDatas[mine.currendIndex].checked = true;

                }, mine.animationPeriod);
            } else {
                this.innerText = '▷';
                this.setAttribute('is-stop', '0');
                clearInterval(mine.animationTimer);
            }
        });

        // グラフに使用するデータセット
        this.setInputDatas();
    };

    // グラフ用データセット
    this.setInputDatas = function () {
        var mine = this;
        for (var i = 0; i < this.plotListParent.children.length; i++) {
            var child = this.plotListParent.children[i];
            this.inputDatas.push(child.firstChild);

            // 選択値が変わったら
            child.firstChild.addEventListener('change', function (ev) {
                // 選択状態になった場合、表示グラフを変更
                if (this.checked) {
                    mine.removeAll();
                    mine.setMapData(this.value);
                }
            });
        }

        this.setCurrentIndex();
    };

    // チェック中のデータをセット
    this.setCurrentIndex = function () {
        for (var i = 0; i < this.inputDatas.length; i++) {
            var input = this.inputDatas[i];
            // 選択中のデータのインデックス保持
            if (input.checked) {
                this.currendIndex = i;
                break;
            }
        }
    }

    // マーカー全削除
    this.removeAll = function () {
        map.data.forEach(function (value) {
            map.data.remove(value);
        });
        infoWindow.close();
    };

    // データセット
    this.setMapData = function (key) {
        var mappingData = testData[key];

        // 0:min,1:max
        var rangeAvg = [,];
        var rangeCount = [,];

        // 値域の決定
        for (var i = 0; i < mappingData.features.length; i++) {
            var cnt = mappingData.features[i].properties.dataCount;
            var avg = mappingData.features[i].properties.meter / cnt;
            if (i == 0) {
                rangeAvg[0] = avg;
                rangeAvg[1] = avg;
                rangeCount[0] = cnt;
                rangeCount[1] = cnt;
            } else {
                rangeAvg[0] = rangeAvg[0] > avg ? avg : rangeAvg[0];
                rangeAvg[1] = rangeAvg[1] < avg ? avg : rangeAvg[1];
                rangeCount[0] = rangeCount[0] > cnt ? cnt : rangeCount[0];
                rangeCount[1] = rangeCount[1] < cnt ? cnt : rangeCount[1];
            }
        }

        map.styling.rangeCount = rangeCount;
        map.styling.rangeAvg = rangeAvg;
        // データを追加し、円を描画する。
        map.data.addGeoJson(mappingData);
    };
};

// マップ初期化
function initMap() {
    // google map 初期化
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4, // 初期表示時の縮尺
        center: { lat: 36, lng: -101 }, // 初期表示位置
        mapTypeControl: false, // 地図、航空写真機能を非表示
        zoomControl: false, // ズーム機能(+-)を非表示
        streetViewControl: false, // ストリートビュー機能を非表示
    });
    infoWindow = new google.maps.InfoWindow();

    // 円のスタイル設定をmapに保持
    var styling = new circleStyling();
    map.styling = styling;
    // 円描画時のスタイルを設定
    map.data.setStyle(function (feature) {
        var meter = feature.getProperty('meter');
        var cnt = feature.getProperty('dataCount');
        return {
            icon: map.styling.getCircle(meter, cnt)
        };
    });

    // 円クリックイベント設定
    map.data.addListener('click', function (event) {
        var iw = infoWindow;
        var meter = event.feature.getProperty('meter');
        var cnt = event.feature.getProperty('dataCount');
        var name = event.feature.getProperty('name');
        var avgs = String(meter / cnt).split('.');

        if (avgs.length > 1) {
            avgs[1] = avgs[1].substring(0, avgs[1].length >= 2 ? 2 : avgs[1].length);
        }
        // 表示内容生成
        var content = `
        <div>
            <div>`+ name + `</div>
            <div>・データ数：`+ cnt + `</div>
            <div>・平均値：`+ avgs.join('.') + `</div>
        </div>
        `;
        iw.setContent(content);
        iw.setPosition(event.latLng);
        // ここでinfowindowの位置を指定
        iw.setOptions({
            pixelOffset: new google.maps.Size(0, -30)
        });
        iw.open(map);
    });

    // プロットマッピング初期化
    var plotMap = new plotMapping();
    plotMap.init();
    plotMap.setMapData('202001');
}

// 円スタイル設定
function circleStyling() {
    // 緑色最大値
    const gmax = 255;
    // 円の最大、最小サイズ
    const scaleMin = 5;
    const scaleMax = 60;

    // データ範囲(0:min,1:max)
    this.rangeCount = [,];
    this.rangeAvg = [,];
    
    // 円描画
    this.getCircle = function (meter, cnt) {
        var avg = meter / cnt;
        var avgRatio = avg / this.rangeAvg[1];
        avgRatio = avgRatio > 1 ? 1 : avgRatio;
        var cntRatio = cnt / this.rangeCount[1];

        // 緑値決定
        var g = (1 - avgRatio) * gmax;
        g = g > gmax ? gmax : g;
        // 円サイズ決定
        var s = cntRatio * scaleMax;
        if (s < scaleMin) {
            s = scaleMin;
        } else if (s > scaleMax) {
            s = scaleMax;
        }

        return {
            path: google.maps.SymbolPath.CIRCLE, // 円を指定
            fillColor: 'rgb(255,' + g + ',0)', // 円の色
            fillOpacity: 0.4, // 円の透明度
            scale: s, // 円のサイズ
            strokeColor: 'white', // 円の枠線の色
            strokeWeight: 0.5 // 円の枠線の太さ
        };
    };
};