
const everything = [
    {
        "header": "Geography",
        "headerText": `Iceland is closer to continental Europe than to mainland North America, although it is closest to Greenland
        (290 km, 180 mi), an island of North America. Iceland is generally included in Europe for geographical,
        historical, political, cultural, linguistic and practical reasons. Geologically, the island includes parts of
        both continental plates. Iceland is the world's 18th-largest island, and Europe's second-largest island after
        Great Britain. The island's interior is a cold and uninhabitable combination of sand, mountains, and lava
        fields. The major towns are the capital city of Reykjavík, along with its outlying towns of Kópavogur,
        Hafnarfjörður, and Garðabær, nearby Reykjanesbær where the international airport is located, and the town of
        Akureyri in northern Iceland.`,

        "firstName": "Geology",
        "firstText": "A geologically young land, Iceland is the surface expression of the Iceland Plateau, a large igneous province forming as a result of volcanism from the Iceland hotspot and along the Mid-Atlantic Ridge, the latter of which runs right through it. This means that the island is highly geologically active with many volcanoes including Hekla, Eldgjá, Herðubreið, and Eldfell.",
        "firstText2": "Iceland has many geysers, including Geysir, from which the English word is derived, and the famous Strokkur, which erupts every 8–10 minutes. After a phase of inactivity, Geysir started erupting again after a series of earthquakes in 2000. Geysir has since grown quieter and does not erupt often.",
        "firstText3": "With the widespread availability of geothermal power, and the harnessing of many rivers and waterfalls for hydroelectricity, most residents have access to inexpensive hot water, heating, and electricity. The island is composed primarily of basalt, a low-silica lava associated with effusive volcanism as has occurred also in Hawaii. Iceland, however, has a variety of volcanic types (composite and fissure), many producing more evolved lavas such as rhyolite and andesite. Iceland has hundreds of volcanoes with about 30 active volcanic systems.",

        "secondName": "Climate",
        "secondText": "The climate of Iceland's coast is subarctic. The warm North Atlantic Current ensures generally higher annual temperatures than in most places of similar latitude in the world. Regions in the world with similar climates include the Aleutian Islands, the Alaska Peninsula, and Tierra del Fuego, although these regions are closer to the equator. Despite its proximity to the Arctic, the island's coasts remain ice-free through the winter. Ice incursions are rare, the last having occurred on the north coast in 1969",
        "secondText2": "The climate varies between different parts of the island. Generally speaking, the south coast is warmer, wetter, and windier than the north. The Central Highlands are the coldest part of the country. Low-lying inland areas in the north are the most arid. Snowfall in winter is more common in the north than the south.",
        "secondText3": "The highest air temperature recorded was 30.5 °C (86.9 °F) on 22 June 1939 at Teigarhorn on the southeastern coast. The lowest was −38 °C (−36.4 °F) on 22 January 1918 at Grímsstaðir and Möðrudalur in the northeastern hinterland. The temperature records for Reykjavík are 26.2 °C (79.2 °F) on 30 July 2008, and −24.5 °C (−12.1 °F) on 21 January 1918.",

        "thirdName": "Plants",
        "thirdText": "Phytogeographically, Iceland belongs to the Arctic province of the Circumboreal Region within the Boreal Kingdom. Around three-quarters of the island is barren of vegetation; plant life consists mainly of grassland, which is regularly grazed by livestock. The most common tree native to Iceland is the northern birch (Betula pubescens), which formerly formed forests over much of Iceland, along with aspens (Populus tremula), rowans (Sorbus aucuparia), common junipers (Juniperus communis), and other smaller trees, mainly willows.",
        "thirdText2": `When the island was first settled, it was extensively forested, with around 30% of the land covered in trees. In the late 12th century, Ari the Wise described it in the Íslendingabók as "forested from mountain to sea shore".Permanent human settlement greatly disturbed the isolated ecosystem of thin, volcanic soils and limited species diversity. The forests were heavily exploited over the centuries for firewood and timber.Deforestation, climatic deterioration during the Little Ice Age, and overgrazing by sheep imported by settlers caused a loss of critical topsoil due to erosion.`,
        "thirdText3": "Today, many farms have been abandoned. Three-quarters of Iceland's 100,000 square kilometres is affected by soil erosion, 18,000 km2 (6,900 sq mi) serious enough to make the land useless. Only a few small birch stands now exist in isolated reserves. The planting of new forests has increased the number of trees, but the result does not compare to the original forests. Some of the planted forests include introduced species. The tallest tree in Iceland is a sitka spruce planted in 1949 in Kirkjubæjarklaustur; it was measured at 25.2 m (83 ft) in 2013.",

        "fourthName": "Animals",
        "fourthText": "The only native land mammal when humans arrived was the Arctic fox, which came to the island at the end of the ice age, walking over the frozen sea. On rare occasions, bats have been carried to the island with the winds, but they are not able to breed there. No native or free-living reptiles or amphibians are on the island.",
        "fourthText2": "The animals of Iceland include the Icelandic sheep, cattle, chickens, goats, the sturdy Icelandic horse, and the Icelandic Sheepdog, all descendants of animals imported by Europeans. Wild mammals include the Arctic fox, mink, mice, rats, rabbits, and reindeer. Polar bears occasionally visit the island, travelling from Greenland on icebergs, but no Icelandic populations exist. In June 2008, two polar bears arrived in the same month. Marine mammals include the grey seal (Halichoerus grypus) and harbour seal (Phoca vitulina).",
        "fourthText3": "Many species of fish live in the ocean waters surrounding Iceland, and the fishing industry is a major part of Iceland's economy, accounting for roughly half of the country's total exports. Birds, especially seabirds, are an important part of Iceland's animal life. Atlantic puffins, skuas, and black-legged kittiwakes nest on its sea cliffs. On the other hand, Around 1,300 species of insects are known in Iceland. This is low compared with other countries (over one million species have been described worldwide). Iceland is essentially free of mosquitoes.",
    },
]

everything.forEach((event) => {
    $(".container-fluid .wrapper").append(`

    <div class="row">
    <div class="col-lg-2"></div>
    <div class="col-lg-8">
      <div class="nadpisyJavascript">
        <h1>${event.header}</h1>
        <p>${event.headerText}</p>
      </div>
        <div class="textyJavascript">
          <hr>
          <div class="row">
          <div class="obsahSekce">
            <div class="firstRadek">
              <p>
                <span><i class="ikonka fas fa-angle-double-right"></i></span>
                <span class="nadpis text-success">${event.firstName}</span>
              </p>
            </div>
            <div class="secondRadek">
              <p>${event.firstText}</p>
              <p>${event.firstText2}</p>
              <p>${event.firstText3}</p>
            </div>
          </div>
        </div>
          <hr>
        </div>
        <div class="textyJavascript">
          <hr>
          <div class="row">
          <div class="obsahSekce">
            <div class="firstRadek">
              <p>
                <span><i class="ikonka fas fa-angle-double-right"></i></span>
                <span class="nadpis text-success">${event.secondName}</span>
              </p>
            </div>
            <div class="secondRadek">
              <p>${event.secondText}</p>
              <p>${event.secondText2}</p>
              <p>${event.secondText3}</p>
            </div>
          </div>
        </div>
          <hr>
        </div>
        <div class="textyJavascript">
          <hr>
          <div class="row">
          <div class="obsahSekce">
            <div class="firstRadek">
              <p>
                <span><i class="ikonka fas fa-angle-double-right"></i></span>
                <span class="nadpis text-success">${event.thirdName}</span>
              </p>
            </div>
            <div class="secondRadek">
              <p>${event.thirdText}</p>
              <p>${event.thirdText2}</p>
              <p>${event.thirdText3}</p>
            </div>
          </div>
        </div>
          <hr>
        </div>
        <div class="textyJavascript">
          <hr>
          <div class="row">
          <div class="obsahSekce">
            <div class="firstRadek">
              <p>
                <span><i class="ikonka fas fa-angle-double-right"></i></span>
                <span class="nadpis text-success">${event.fourthName}</span>
              </p>
            </div>
            <div class="secondRadek">
              <p>${event.fourthText}</p>
              <p>${event.fourthText2}</p>
              <p>${event.fourthText3}</p>
            </div>
          </div>
        </div>
          <hr>
        </div>
    </div>
    <div class="col-lg-2"></div>
  </div>

    `)

    $(".secondRadek").hide();
});


$(function () {

    $(".firstRadek").on('click', function () {
        $(this).next().toggle(1000);
    });
});