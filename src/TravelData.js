import Card from "./components/Card";

const TRAVEL_DATA = [
  {
    id: 1,
    country: "Germany",
    map: "https://goo.gl/maps/aS9HXp4Xdx7GpQZw8",
    location: "Hamburg",
    date: "1st November, 2021 - 12th Mar, 2022",
    description: `Hamburg, a major port city in northern Germany, 
        is connected to the North Sea by the Elbe River. 
        It's crossed by hundreds of canals, and also contains large areas of parkland.
        Near its core, Inner Alster lake is dotted with boats and surrounded by cafes.
        The city's central Jungfernstieg boulevard connects the Neustadt (new town) with 
        the Altstadt (old town), home to landmarks like 18th-century St. Michael’s Church. `,
    img: "hamburg.jpg",
  },

  {
    id: 2,
    country: "Germany",
    map: "https://goo.gl/maps/6TYPyrg6yZSGyfbr6",
    location: "Berlin",
    date: "20th December, 2021",
    description: `Berlin, Germany’s capital, dates to the 13th century. 
            Reminders of the city's turbulent 20th-century history include its Holocaust 
            memorial and the Berlin Wall's graffitied remains. Divided during the Cold War, 
            its 18th-century Brandenburg Gate has become a symbol of reunification. The city's 
            also known for its art scene and modern landmarks like the gold-colored, swoop-roofed 
            Berliner Philharmonie, built in 1963.`,
    img: "berlin.jpg",
  },

  {
    id: 3,
    country: "United Kingdom",
    map: "https://goo.gl/maps/VQNzknhcu8c22YtW7",
    location: "Liverpool",
    date: "4th June, 2021",
    description: `Liverpool is a maritime city in northwest England, where the River Mersey meets the Irish Sea. A key trade and migration port from the 18th to the early 20th centuries, it's also, 
        famously, the hometown of The Beatles. Ferries cruise the waterfront, where the iconic mercantile buildings known as the 'Three Graces' – Royal Liver Building, Cunard Building and Port of Liverpool Building – stand on the Pier Head.`,
    img: "liverpool.jpg",
  },

  {
    id: 4,
    country: "United Kingdom",
    map: "https://goo.gl/maps/T9BW8zLZU3Pm8mWE8",
    location: "London",
    date: "20th July, 2020",
    description: `London, the capital of England and the United Kingdom, 
        is a 21st-century city with history stretching back to Roman times. 
        At its centre stand the imposing Houses of Parliament, the iconic 
        ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch 
        coronations. Across the Thames River, the London Eye observation wheel 
        provides panoramic views of the South Bank cultural complex, and the entire city.`,
    img: "london.jpg",
  },
];

const CARD_DATA = TRAVEL_DATA.map((travel) => {
  return <Card key={travel.id} {...travel} />;
});

export { CARD_DATA };
