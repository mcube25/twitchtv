$(document).ready(function() {
  $("#spill").hide();

  let streams = [
    "ESL_SC2",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
    "storbeck",
    "habathcx",
    "RobotCaleb",
    "noobs2ninjas",
    "nba",
    "hotted89",
    "jayytgamer",
    "shroud",
    "admiralbahroo",
    "pokimane",
    "northernlion",
    "royalphunk",
    "bmkibler",
    "th3d4rkness",
    "kissradio_fm999",
    "iijeriichoii",
    "rajjpatel",
    "ezekiel_iii",
    "aaajrifting",
    "brinksgamerps4",
    "sarahxi",
    "snife_monster",
    "likeownzx",
    "mrporoasmr",
    "xeya80",
    "apologyman",
    "reallykush",
    "rewindfgc",
    "psyken",
    "delinquentmuse",
    "drluposon",
    "Brose",
    "thenormiestv",
    "Khal_Drogoh",
    "TheRealDil",
    "iamhemish",
    "FaZe_toty",
    "MightyMumble",
    "dirtypoor",
    "Pieces",
    "meloondeck",
    "Infectious_tom",
    "KenNapzok",
    "AvidRaptor",
    "Bekaloo",
    "hcgm_15",
    "KKirbyy",
    "mafi0z0o",
    "LadyNightmareB",
    "Bridou_just1",
    "Sincitybossrox",
    "snipinginregret",
    "BadGalShay",
    "Cissoufamily",
    "ichigo2213",
    "baneintherain",
    "xpate_7",
    "Spoony50955",
    "Cjanks22",
    "ChiveyX",
    "heavenslastcrush",
    "bart29live",
    "NekomimiKira",
    "Gearrexy",
    "xAnAmNeSiSx",
    "TabernerosGG",
    "morty21",
    "Vaultamor",
    "TryFanMoritz",
    "Tylarious_YT",
    "og_jjayy",
    "Deenied911",
    "xKirfy",
    "Imfamousx1x",
    "CSIENI17",
    "SPCTCL_",
    "CRAZYNIGHTS",
    "netbattles_canno",
    "chaoticshell",
    "mirandahkn",
    "avalonalyson",
    "USArmySoldier97",
    "ImariYumiki",
    "MidnightAngel__22",
    "WowSnuffy",
    "Naturalprimex",
    "HaterBlockerMLG",
    "LethalxAces",
    "AquaHeated",
    "TheRealKingBink",
    "eDirtyTati",
    "tempratetv",
    "PlentyNightmares",
    "mrspanda191",
    "ArobazBeat",
    "ibio"
  ];
  let arrayStorage = 0;

  //These variables store the name, channel status, and URLs later on. They are declared globally here.
  let displayName;
  let streamStatus;
  let twitchURL;

  function buildDataTable() {
    $("#twitchStreams").DataTable();
    //This allows the table to display, and prevents the table from displaying prior to it being made into a DataTable.
    $("#spill").show();
  }

  function buildAsync(data, arg2) {

    //declares streamStatus variable used to label "offline" or pull status from JSON object

    if (data.stream === null) {
      //This assigns values to variables when the channel returns a stream:null object.
      displayName = arg2;
      streamStatus = "<em>Offline</em>";
      twitchURL = "https://www.twitch.tv/" + displayName;

      arrayStorage++;
    } else {
      //This section applies JSON data to the variables when the JSON object has data i.e. is live.
      displayName = data.stream.channel.display_name;
      streamStatus = data.stream.channel.status;
      twitchURL = data.stream.channel.url;

      arrayStorage++;

    }
    //This section adds a new row to the table asynchronously
    $("#twitchStreams tbody").append(
      "<tr><td> <a href=" +
        twitchURL +
        " target=_blank>" +
        displayName +
        "</a></td><td>" +
        streamStatus +
        "</td></tr>"
    );
    //When the number of objects equals the length of the streams array, the program triggers a table build.
    if (arrayStorage === streams.length) {
      buildDataTable();
    }

  }
  for (var i = 0; i < streams.length; i++) {
    let channelName = streams[i];
    $.ajax({
      type: "GET",
      url: "https://api.twitch.tv/kraken/streams/" + streams[i],
      headers: {
        "Client-ID": "0pv3vm5xp7pquz06o0f6e4pm8qgmx2"
      },
      success: function(data) {
        buildAsync(data, channelName);
      }
    });
  }
});
