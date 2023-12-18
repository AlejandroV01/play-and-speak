export interface ILanguage {
  language: string
  country: string
  countryCode: string
  img: string
}
export interface ILanguagesData {
  languages: ILanguage[]
}
const languagesData: ILanguagesData = {
  languages: [
    {
      language: 'Mandarin Chinese',
      country: 'China',
      countryCode: 'CN',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg',
    },
    {
      language: 'Spanish',
      country: 'Spain',
      countryCode: 'ES',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ES.svg',
    },
    {
      language: 'English',
      country: 'United Kingdom',
      countryCode: 'GB',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg',
    },
    {
      language: 'Hindi',
      country: 'India',
      countryCode: 'IN',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg',
    },
    {
      language: 'Arabic',
      country: 'Saudi Arabia',
      countryCode: 'SA',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SA.svg',
    },
    {
      language: 'Bengali',
      country: 'Bangladesh',
      countryCode: 'BD',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BD.svg',
    },
    {
      language: 'Portuguese',
      country: 'Portugal',
      countryCode: 'PT',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PT.svg',
    },
    {
      language: 'Russian',
      country: 'Russia',
      countryCode: 'RU',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RU.svg',
    },
    {
      language: 'Urdu',
      country: 'Pakistan',
      countryCode: 'PK',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg',
    },
    {
      language: 'Indonesian',
      country: 'Indonesia',
      countryCode: 'ID',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg',
    },
    {
      language: 'French',
      country: 'France',
      countryCode: 'FR',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg',
    },
    {
      language: 'German',
      country: 'Germany',
      countryCode: 'DE',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg',
    },
    {
      language: 'Japanese',
      country: 'Japan',
      countryCode: 'JP',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JP.svg',
    },
    {
      language: 'Swahili',
      country: 'Tanzania',
      countryCode: 'TZ',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TZ.svg',
    },
    {
      language: 'Telugu',
      country: 'India',
      countryCode: 'IN',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg',
    },
    {
      language: 'Marathi',
      country: 'India',
      countryCode: 'IN',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg',
    },
    {
      language: 'Turkish',
      country: 'Turkey',
      countryCode: 'TR',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg',
    },
    {
      language: 'Tamil',
      country: 'India',
      countryCode: 'IN',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg',
    },
    {
      language: 'Vietnamese',
      country: 'Vietnam',
      countryCode: 'VN',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg',
    },
    {
      language: 'Yoruba',
      country: 'Nigeria',
      countryCode: 'NG',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg',
    },
    {
      language: 'Italian',
      country: 'Italy',
      countryCode: 'IT',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IT.svg',
    },
    {
      language: 'Thai',
      country: 'Thailand',
      countryCode: 'TH',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TH.svg',
    },
    {
      language: 'Gujarati',
      country: 'India',
      countryCode: 'IN',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg',
    },
    {
      language: 'Javanese',
      country: 'Indonesia',
      countryCode: 'ID',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg',
    },
    {
      language: 'Korean',
      country: 'South Korea',
      countryCode: 'KR',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KR.svg',
    },
    {
      language: 'Polish',
      country: 'Poland',
      countryCode: 'PL',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PL.svg',
    },
    {
      language: 'Malayalam',
      country: 'India',
      countryCode: 'IN',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg',
    },
    {
      language: 'Odia',
      country: 'India',
      countryCode: 'IN',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg',
    },
    {
      language: 'Maithili',
      country: 'India',
      countryCode: 'IN',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg',
    },
    {
      language: 'Burmese',
      country: 'Myanmar',
      countryCode: 'MM',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MM.svg',
    },
    {
      language: 'Ukrainian',
      country: 'Ukraine',
      countryCode: 'UA',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UA.svg',
    },
    {
      language: 'Bhojpuri',
      country: 'India',
      countryCode: 'IN',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg',
    },
    {
      language: 'Tagalog',
      country: 'Philippines',
      countryCode: 'PH',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PH.svg',
    },
    {
      language: 'Farsi',
      country: 'Iran',
      countryCode: 'IR',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IR.svg',
    },
    {
      language: 'Sunni Muslim',
      country: 'Iraq',
      countryCode: 'IQ',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IQ.svg',
    },
    {
      language: 'Sindhi',
      country: 'Pakistan',
      countryCode: 'PK',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg',
    },
    {
      language: 'Hausa',
      country: 'Nigeria',
      countryCode: 'NG',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg',
    },
    {
      language: 'Burmese',
      country: 'Myanmar',
      countryCode: 'MM',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MM.svg',
    },
    {
      language: 'Amharic',
      country: 'Ethiopia',
      countryCode: 'ET',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ET.svg',
    },
    {
      language: 'Serbo-Croatian',
      country: 'Serbia',
      countryCode: 'RS',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RS.svg',
    },
    {
      language: 'Kurdish',
      country: 'Iraq',
      countryCode: 'IQ',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IQ.svg',
    },
    {
      language: 'Gan',
      country: 'China',
      countryCode: 'CN',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg',
    },
    {
      language: 'Saraiki',
      country: 'Pakistan',
      countryCode: 'PK',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg',
    },
    {
      language: 'Nepali',
      country: 'Nepal',
      countryCode: 'NP',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NP.svg',
    },
    {
      language: 'Sinhalese',
      country: 'Sri Lanka',
      countryCode: 'LK',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LK.svg',
    },
    {
      language: 'Kinyarwanda',
      country: 'Rwanda',
      countryCode: 'RW',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RW.svg',
    },
    {
      language: 'Zulu',
      country: 'South Africa',
      countryCode: 'ZA',
      img: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZA.svg',
    },
  ],
}

export default languagesData
