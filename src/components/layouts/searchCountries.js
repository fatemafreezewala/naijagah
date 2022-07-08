import "../../assets/css/search.css"
import SelectSearch from "react-select-search";
import React,{ useRef } from "react";
import countries from "../../assets/data/country";
export default function App({handleChangef,errors,country,setCountry,code,setCode,setfields,fields}) {

  const searchInput = useRef();
  React.useEffect(() => {
    let field = fields; 
        field["country"] = "+91"; 
        setfields(field);
  
    
  }, [])
  

  const handleChange = (...args) => {
    // searchInput.current.querySelector("input").code = "";
    console.log("ARGS:", args);
    setCode(args[1].code)
    setCountry(args[1].value)
    console.log("CHANGE:");
    let field = fields; 
        field["country"] = args[1].code; 
        setfields(field);
  };

  const options = [
    { 
    "name": "Afghanistan",
    "code": "+93",
    "value": "AF"
    },
    {
    "name": "Aland Islands",
    "code": "+358",
    "value": "AX"
    },
    {
    "name": "Albania",
    "code": "+355",
    "value": "AL"
    },
    {
    "name": "Algeria",
    "code": "+213",
    "value": "DZ"
    },
    {
    "name": "AmericanSamoa",
    "code": "+1684",
    "value": "AS"
    },
    {
    "name": "Andorra",
    "code": "+376",
    "value": "AD"
    },
    {
    "name": "Angola",
    "code": "+244",
    "value": "AO"
    },
    {
    "name": "Anguilla",
    "code": "+1264",
    "value": "AI"
    },
    {
    "name": "Antarctica",
    "code": "+672",
    "value": "AQ"
    },
    {
    "name": "Antigua and Barbuda",
    "code": "+1268",
    "value": "AG"
    },
    {
    "name": "Argentina",
    "code": "+54",
    "value": "AR"
    },
    {
    "name": "Armenia",
    "code": "+374",
    "value": "AM"
    },
    {
    "name": "Aruba",
    "code": "+297",
    "value": "AW"
    },
    {
    "name": "Australia",
    "code": "+61",
    "value": "AU"
    },
    {
    "name": "Austria",
    "code": "+43",
    "value": "AT"
    },
    {
    "name": "Azerbaijan",
    "code": "+994",
    "value": "AZ"
    },
    {
    "name": "Bahamas",
    "code": "+1242",
    "value": "BS"
    },
    {
    "name": "Bahrain",
    "code": "+973",
    "value": "BH"
    },
    {
    "name": "Bangladesh",
    "code": "+880",
    "value": "BD"
    },
    {
    "name": "Barbados",
    "code": "+1246",
    "value": "BB"
    },
    {
    "name": "Belarus",
    "code": "+375",
    "value": "BY"
    },
    {
    "name": "Belgium",
    "code": "+32",
    "value": "BE"
    },
    {
    "name": "Belize",
    "code": "+501",
    "value": "BZ"
    },
    {
    "name": "Benin",
    "code": "+229",
    "value": "BJ"
    },
    {
    "name": "Bermuda",
    "code": "+1441",
    "value": "BM"
    },
    {
    "name": "Bhutan",
    "code": "+975",
    "value": "BT"
    },
    {
    "name": "Bolivia, Plurinational State of",
    "code": "+591",
    "value": "BO"
    },
    {
    "name": "Bosnia and Herzegovina",
    "code": "+387",
    "value": "BA"
    },
    {
    "name": "Botswana",
    "code": "+267",
    "value": "BW"
    },
    {
    "name": "Brazil",
    "code": "+55",
    "value": "BR"
    },
    {
    "name": "British Indian Ocean Territory",
    "code": "+246",
    "value": "IO"
    },
    {
    "name": "Brunei Darussalam",
    "code": "+673",
    "value": "BN"
    },
    {
    "name": "Bulgaria",
    "code": "+359",
    "value": "BG"
    },
    {
    "name": "Burkina Faso",
    "code": "+226",
    "value": "BF"
    },
    {
    "name": "Burundi",
    "code": "+257",
    "value": "BI"
    },
    {
    "name": "Cambodia",
    "code": "+855",
    "value": "KH"
    },
    {
    "name": "Cameroon",
    "code": "+237",
    "value": "CM"
    },
    {
    "name": "Canada",
    "code": "+1",
    "value": "CA"
    },
    {
    "name": "Cape Verde",
    "code": "+238",
    "value": "CV"
    },
    {
    "name": "Cayman Islands",
    "code": "+ 345",
    "value": "KY"
    },
    {
    "name": "Central African Republic",
    "code": "+236",
    "value": "CF"
    },
    {
    "name": "Chad",
    "code": "+235",
    "value": "TD"
    },
    {
    "name": "Chile",
    "code": "+56",
    "value": "CL"
    },
    {
    "name": "China",
    "code": "+86",
    "value": "CN"
    },
    {
    "name": "Christmas Island",
    "code": "+61",
    "value": "CX"
    },
    {
    "name": "Cocos (Keeling) Islands",
    "code": "+61",
    "value": "CC"
    },
    {
    "name": "Colombia",
    "code": "+57",
    "value": "CO"
    },
    {
    "name": "Comoros",
    "code": "+269",
    "value": "KM"
    },
    {
    "name": "Congo",
    "code": "+242",
    "value": "CG"
    },
    {
    "name": "Congo, The Democratic Republic of the Congo",
    "code": "+243",
    "value": "CD"
    },
    {
    "name": "Cook Islands",
    "code": "+682",
    "value": "CK"
    },
    {
    "name": "Costa Rica",
    "code": "+506",
    "value": "CR"
    },
    {
    "name": "Cote d'Ivoire",
    "code": "+225",
    "value": "CI"
    },
    {
    "name": "Croatia",
    "code": "+385",
    "value": "HR"
    },
    {
    "name": "Cuba",
    "code": "+53",
    "value": "CU"
    },
    {
    "name": "Cyprus",
    "code": "+357",
    "value": "CY"
    },
    {
    "name": "Czech Republic",
    "code": "+420",
    "value": "CZ"
    },
    {
    "name": "Denmark",
    "code": "+45",
    "value": "DK"
    },
    {
    "name": "Djibouti",
    "code": "+253",
    "value": "DJ"
    },
    {
    "name": "Dominica",
    "code": "+1767",
    "value": "DM"
    },
    {
    "name": "Dominican Republic",
    "code": "+1849",
    "value": "DO"
    },
    {
    "name": "Ecuador",
    "code": "+593",
    "value": "EC"
    },
    {
    "name": "Egypt",
    "code": "+20",
    "value": "EG"
    },
    {
    "name": "El Salvador",
    "code": "+503",
    "value": "SV"
    },
    {
    "name": "Equatorial Guinea",
    "code": "+240",
    "value": "GQ"
    },
    {
    "name": "Eritrea",
    "code": "+291",
    "value": "ER"
    },
    {
    "name": "Estonia",
    "code": "+372",
    "value": "EE"
    },
    {
    "name": "Ethiopia",
    "code": "+251",
    "value": "ET"
    },
    {
    "name": "Falkland Islands (Malvinas)",
    "code": "+500",
    "value": "FK"
    },
    {
    "name": "Faroe Islands",
    "code": "+298",
    "value": "FO"
    },
    {
    "name": "Fiji",
    "code": "+679",
    "value": "FJ"
    },
    {
    "name": "Finland",
    "code": "+358",
    "value": "FI"
    },
    {
    "name": "France",
    "code": "+33",
    "value": "FR"
    },
    {
    "name": "French Guiana",
    "code": "+594",
    "value": "GF"
    },
    {
    "name": "French Polynesia",
    "code": "+689",
    "value": "PF"
    },
    {
    "name": "Gabon",
    "code": "+241",
    "value": "GA"
    },
    {
    "name": "Gambia",
    "code": "+220",
    "value": "GM"
    },
    {
    "name": "Georgia",
    "code": "+995",
    "value": "GE"
    },
    {
    "name": "Germany",
    "code": "+49",
    "value": "DE"
    },
    {
    "name": "Ghana",
    "code": "+233",
    "value": "GH"
    },
    {
    "name": "Gibraltar",
    "code": "+350",
    "value": "GI"
    },
    {
    "name": "Greece",
    "code": "+30",
    "value": "GR"
    },
    {
    "name": "Greenland",
    "code": "+299",
    "value": "GL"
    },
    {
    "name": "Grenada",
    "code": "+1473",
    "value": "GD"
    },
    {
    "name": "Guadeloupe",
    "code": "+590",
    "value": "GP"
    },
    {
    "name": "Guam",
    "code": "+1671",
    "value": "GU"
    },
    {
    "name": "Guatemala",
    "code": "+502",
    "value": "GT"
    },
    {
    "name": "Guernsey",
    "code": "+44",
    "value": "GG"
    },
    {
    "name": "Guinea",
    "code": "+224",
    "value": "GN"
    },
    {
    "name": "Guinea-Bissau",
    "code": "+245",
    "value": "GW"
    },
    {
    "name": "Guyana",
    "code": "+595",
    "value": "GY"
    },
    {
    "name": "Haiti",
    "code": "+509",
    "value": "HT"
    },
    {
    "name": "Holy See (Vatican City State)",
    "code": "+379",
    "value": "VA"
    },
    {
    "name": "Honduras",
    "code": "+504",
    "value": "HN"
    },
    {
    "name": "Hong Kong",
    "code": "+852",
    "value": "HK"
    },
    {
    "name": "Hungary",
    "code": "+36",
    "value": "HU"
    },
    {
    "name": "Iceland",
    "code": "+354",
    "value": "IS"
    },
    {
    "name": "India",
    "code": "+91",
    "value": "IN"
    },
    {
    "name": "Indonesia",
    "code": "+62",
    "value": "ID"
    },
    {
    "name": "Iran, Islamic Republic of Persian Gulf",
    "code": "+98",
    "value": "IR"
    },
    {
    "name": "Iraq",
    "code": "+964",
    "value": "IQ"
    },
    {
    "name": "Ireland",
    "code": "+353",
    "value": "IE"
    },
    {
    "name": "Isle of Man",
    "code": "+44",
    "value": "IM"
    },
    {
    "name": "Israel",
    "code": "+972",
    "value": "IL"
    },
    {
    "name": "Italy",
    "code": "+39",
    "value": "IT"
    },
    {
    "name": "Jamaica",
    "code": "+1876",
    "value": "JM"
    },
    {
    "name": "Japan",
    "code": "+81",
    "value": "JP"
    },
    {
    "name": "Jersey",
    "code": "+44",
    "value": "JE"
    },
    {
    "name": "Jordan",
    "code": "+962",
    "value": "JO"
    },
    {
    "name": "Kazakhstan",
    "code": "+77",
    "value": "KZ"
    },
    {
    "name": "Kenya",
    "code": "+254",
    "value": "KE"
    },
    {
    "name": "Kiribati",
    "code": "+686",
    "value": "KI"
    },
    {
    "name": "Korea, Democratic People's Republic of Korea",
    "code": "+850",
    "value": "KP"
    },
    {
    "name": "Korea, Republic of South Korea",
    "code": "+82",
    "value": "KR"
    },
    {
    "name": "Kuwait",
    "code": "+965",
    "value": "KW"
    },
    {
    "name": "Kyrgyzstan",
    "code": "+996",
    "value": "KG"
    },
    {
    "name": "Laos",
    "code": "+856",
    "value": "LA"
    },
    {
    "name": "Latvia",
    "code": "+371",
    "value": "LV"
    },
    {
    "name": "Lebanon",
    "code": "+961",
    "value": "LB"
    },
    {
    "name": "Lesotho",
    "code": "+266",
    "value": "LS"
    },
    {
    "name": "Liberia",
    "code": "+231",
    "value": "LR"
    },
    {
    "name": "Libyan Arab Jamahiriya",
    "code": "+218",
    "value": "LY"
    },
    {
    "name": "Liechtenstein",
    "code": "+423",
    "value": "LI"
    },
    {
    "name": "Lithuania",
    "code": "+370",
    "value": "LT"
    },
    {
    "name": "Luxembourg",
    "code": "+352",
    "value": "LU"
    },
    {
    "name": "Macao",
    "code": "+853",
    "value": "MO"
    },
    {
    "name": "Macedonia",
    "code": "+389",
    "value": "MK"
    },
    {
    "name": "Madagascar",
    "code": "+261",
    "value": "MG"
    },
    {
    "name": "Malawi",
    "code": "+265",
    "value": "MW"
    },
    {
    "name": "Malaysia",
    "code": "+60",
    "value": "MY"
    },
    {
    "name": "Maldives",
    "code": "+960",
    "value": "MV"
    },
    {
    "name": "Mali",
    "code": "+223",
    "value": "ML"
    },
    {
    "name": "Malta",
    "code": "+356",
    "value": "MT"
    },
    {
    "name": "Marshall Islands",
    "code": "+692",
    "value": "MH"
    },
    {
    "name": "Martinique",
    "code": "+596",
    "value": "MQ"
    },
    {
    "name": "Mauritania",
    "code": "+222",
    "value": "MR"
    },
    {
    "name": "Mauritius",
    "code": "+230",
    "value": "MU"
    },
    {
    "name": "Mayotte",
    "code": "+262",
    "value": "YT"
    },
    {
    "name": "Mexico",
    "code": "+52",
    "value": "MX"
    },
    {
    "name": "Micronesia, Federated States of Micronesia",
    "code": "+691",
    "value": "FM"
    },
    {
    "name": "Moldova",
    "code": "+373",
    "value": "MD"
    },
    {
    "name": "Monaco",
    "code": "+377",
    "value": "MC"
    },
    {
    "name": "Mongolia",
    "code": "+976",
    "value": "MN"
    },
    {
    "name": "Montenegro",
    "code": "+382",
    "value": "ME"
    },
    {
    "name": "Montserrat",
    "code": "+1664",
    "value": "MS"
    },
    {
    "name": "Morocco",
    "code": "+212",
    "value": "MA"
    },
    {
    "name": "Mozambique",
    "code": "+258",
    "value": "MZ"
    },
    {
    "name": "Myanmar",
    "code": "+95",
    "value": "MM"
    },
    {
    "name": "Namibia",
    "code": "+264",
    "value": "NA"
    },
    {
    "name": "Nauru",
    "code": "+674",
    "value": "NR"
    },
    {
    "name": "Nepal",
    "code": "+977",
    "value": "NP"
    },
    {
    "name": "Netherlands",
    "code": "+31",
    "value": "NL"
    },
    {
    "name": "Netherlands Antilles",
    "code": "+599",
    "value": "AN"
    },
    {
    "name": "New Caledonia",
    "code": "+687",
    "value": "NC"
    },
    {
    "name": "New Zealand",
    "code": "+64",
    "value": "NZ"
    },
    {
    "name": "Nicaragua",
    "code": "+505",
    "value": "NI"
    },
    {
    "name": "Niger",
    "code": "+227",
    "value": "NE"
    },
    {
    "name": "Nigeria",
    "code": "+234",
    "value": "NG"
    },
    {
    "name": "Niue",
    "code": "+683",
    "value": "NU"
    },
    {
    "name": "Norfolk Island",
    "code": "+672",
    "value": "NF"
    },
    {
    "name": "Northern Mariana Islands",
    "code": "+1670",
    "value": "MP"
    },
    {
    "name": "Norway",
    "code": "+47",
    "value": "NO"
    },
    {
    "name": "Oman",
    "code": "+968",
    "value": "OM"
    },
    {
    "name": "Pakistan",
    "code": "+92",
    "value": "PK"
    },
    {
    "name": "Palau",
    "code": "+680",
    "value": "PW"
    },
    {
    "name": "Palestinian Territory, Occupied",
    "code": "+970",
    "value": "PS"
    },
    {
    "name": "Panama",
    "code": "+507",
    "value": "PA"
    },
    {
    "name": "Papua New Guinea",
    "code": "+675",
    "value": "PG"
    },
    {
    "name": "Paraguay",
    "code": "+595",
    "value": "PY"
    },
    {
    "name": "Peru",
    "code": "+51",
    "value": "PE"
    },
    {
    "name": "Philippines",
    "code": "+63",
    "value": "PH"
    },
    {
    "name": "Pitcairn",
    "code": "+872",
    "value": "PN"
    },
    {
    "name": "Poland",
    "code": "+48",
    "value": "PL"
    },
    {
    "name": "Portugal",
    "code": "+351",
    "value": "PT"
    },
    {
    "name": "Puerto Rico",
    "code": "+1939",
    "value": "PR"
    },
    {
    "name": "Qatar",
    "code": "+974",
    "value": "QA"
    },
    {
    "name": "Romania",
    "code": "+40",
    "value": "RO"
    },
    {
    "name": "Russia",
    "code": "+7",
    "value": "RU"
    },
    {
    "name": "Rwanda",
    "code": "+250",
    "value": "RW"
    },
    {
    "name": "Reunion",
    "code": "+262",
    "value": "RE"
    },
    {
    "name": "Saint Barthelemy",
    "code": "+590",
    "value": "BL"
    },
    {
    "name": "Saint Helena, Ascension and Tristan Da Cunha",
    "code": "+290",
    "value": "SH"
    },
    {
    "name": "Saint Kitts and Nevis",
    "code": "+1869",
    "value": "KN"
    },
    {
    "name": "Saint Lucia",
    "code": "+1758",
    "value": "LC"
    },
    {
    "name": "Saint Martin",
    "code": "+590",
    "value": "MF"
    },
    {
    "name": "Saint Pierre and Miquelon",
    "code": "+508",
    "value": "PM"
    },
    {
    "name": "Saint Vincent and the Grenadines",
    "code": "+1784",
    "value": "VC"
    },
    {
    "name": "Samoa",
    "code": "+685",
    "value": "WS"
    },
    {
    "name": "San Marino",
    "code": "+378",
    "value": "SM"
    },
    {
    "name": "Sao Tome and Principe",
    "code": "+239",
    "value": "ST"
    },
    {
    "name": "Saudi Arabia",
    "code": "+966",
    "value": "SA"
    },
    {
    "name": "Senegal",
    "code": "+221",
    "value": "SN"
    },
    {
    "name": "Serbia",
    "code": "+381",
    "value": "RS"
    },
    {
    "name": "Seychelles",
    "code": "+248",
    "value": "SC"
    },
    {
    "name": "Sierra Leone",
    "code": "+232",
    "value": "SL"
    },
    {
    "name": "Singapore",
    "code": "+65",
    "value": "SG"
    },
    {
    "name": "Slovakia",
    "code": "+421",
    "value": "SK"
    },
    {
    "name": "Slovenia",
    "code": "+386",
    "value": "SI"
    },
    {
    "name": "Solomon Islands",
    "code": "+677",
    "value": "SB"
    },
    {
    "name": "Somalia",
    "code": "+252",
    "value": "SO"
    },
    {
    "name": "South Africa",
    "code": "+27",
    "value": "ZA"
    },
    {
    "name": "South Sudan",
    "code": "+211",
    "value": "SS"
    },
    {
    "name": "South Georgia and the South Sandwich Islands",
    "code": "+500",
    "value": "GS"
    },
    {
    "name": "Spain",
    "code": "+34",
    "value": "ES"
    },
    {
    "name": "Sri Lanka",
    "code": "+94",
    "value": "LK"
    },
    {
    "name": "Sudan",
    "code": "+249",
    "value": "SD"
    },
    {
    "name": "Suriname",
    "code": "+597",
    "value": "SR"
    },
    {
    "name": "Svalbard and Jan Mayen",
    "code": "+47",
    "value": "SJ"
    },
    {
    "name": "Swaziland",
    "code": "+268",
    "value": "SZ"
    },
    {
    "name": "Sweden",
    "code": "+46",
    "value": "SE"
    },
    {
    "name": "Switzerland",
    "code": "+41",
    "value": "CH"
    },
    {
    "name": "Syrian Arab Republic",
    "code": "+963",
    "value": "SY"
    },
    {
    "name": "Taiwan",
    "code": "+886",
    "value": "TW"
    },
    {
    "name": "Tajikistan",
    "code": "+992",
    "value": "TJ"
    },
    {
    "name": "Tanzania, United Republic of Tanzania",
    "code": "+255",
    "value": "TZ"
    },
    {
    "name": "Thailand",
    "code": "+66",
    "value": "TH"
    },
    {
    "name": "Timor-Leste",
    "code": "+670",
    "value": "TL"
    },
    {
    "name": "Togo",
    "code": "+228",
    "value": "TG"
    },
    {
    "name": "Tokelau",
    "code": "+690",
    "value": "TK"
    },
    {
    "name": "Tonga",
    "code": "+676",
    "value": "TO"
    },
    {
    "name": "Trinidad and Tobago",
    "code": "+1868",
    "value": "TT"
    },
    {
    "name": "Tunisia",
    "code": "+216",
    "value": "TN"
    },
    {
    "name": "Turkey",
    "code": "+90",
    "value": "TR"
    },
    {
    "name": "Turkmenistan",
    "code": "+993",
    "value": "TM"
    },
    {
    "name": "Turks and Caicos Islands",
    "code": "+1649",
    "value": "TC"
    },
    {
    "name": "Tuvalu",
    "code": "+688",
    "value": "TV"
    },
    {
    "name": "Uganda",
    "code": "+256",
    "value": "UG"
    },
    {
    "name": "Ukraine",
    "code": "+380",
    "value": "UA"
    },
    {
    "name": "United Arab Emirates",
    "code": "+971",
    "value": "AE"
    },
    {
    "name": "United Kingdom",
    "code": "+44",
    "value": "GB"
    },
    {
    "name": "United States",
    "code": "+1 ",
    "value": "US"
    },
    {
    "name": "Uruguay",
    "code": "+598",
    "value": "UY"
    },
    {
    "name": "Uzbekistan",
    "code": "+998",
    "value": "UZ"
    },
    {
    "name": "Vanuatu",
    "code": "+678",
    "value": "VU"
    },
    {
    "name": "Venezuela, Bolivarian Republic of Venezuela",
    "code": "+58",
    "value": "VE"
    },
    {
    "name": "Vietnam",
    "code": "+84",
    "value": "VN"
    },
    {
    "name": "Virgin Islands, British",
    "code": "+1284",
    "value": "VG"
    },
    {
    "name": "Virgin Islands, U.S.",
    "code": "+1340",
    "value": "VI"
    },
    {
    "name": "Wallis and Futuna",
    "code": "+681",
    "value": "WF"
    },
    {
    "name": "Yemen",
    "code": "+967",
    "value": "YE"
    },
    {
    "name": "Zambia",
    "code": "+260",
    "value": "ZM"
    },
    {
    "name": "Zimbabwe",
    "code": "+263",
    "value": "ZW"
    }
    ];

  const handleFilter = (items) => {
    return (searchValue) => {
      if (searchValue.length === 0) {
        return options;
      }
      const updatedItems = items.filter((list) => {
        
          return list.name.toLowerCase().includes(searchValue.toLowerCase());
        
        
      });
      return updatedItems;
    }; 
  };

  return (
    <div className="App">
      <div style={{display:'flex'}}>
     <div>
     <label class="form-label no-margin-bottom">Country</label>
      <SelectSearch
        ref={searchInput}
        options={options}
        filterOptions={handleFilter} 
        code=""
        name="Workshop"
        placeholder="Country"
        search
        onChange={handleChange}
        value={country}
      />
     </div>
      <div>
            <label class="form-label no-margin-bottom">Mobile Number</label>
          <div className="select-search__value" style={{display:'flex'}}>
          <div className="countryCode" style={{width:50}}>
             {code}
          </div>
         
           
              <input type="number" onChange={handleChangef} name="mobileno" class="form-control input-login"></input>
              
          </div>
          <div className="errorMsg ">{errors.mobileno}</div>
      </div>
      </div>
    </div>
  );
}
