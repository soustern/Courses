// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const formatedFlights = flights.split(`+`).map((flight) => {
    // let cleanedFlight = flight.replace(/[_;]/g, " ");

    // // PadStart must receive as a first argument the total size of the string that is to be modified
    // // Plus the size of the fill string that is to be added
    // if (/delayed/i.test(cleanedFlight)) cleanedFlight = cleanedFlight.padStart(cleanedFlight.length + 2, `🔴 `);
    // else cleanedFlight = cleanedFlight.padStart(cleanedFlight.length + 10, " ");
    
    // The regex here, by merit of using the () syntax
    // is capturing a snapshot of the resulting string of the operation
    // We can, then, access and use this snapshot by using $1 (to match the first snapshot)
    // cleanedFlight = cleanedFlight.replace(/(\d{2}:\d{2})/, "($1)")
    // cleanedFlight = cleanedFlight.replace(/(undefined|\d+ )/ig, ` `);
    // cleanedFlight = cleanedFlight.replace(/( \w{3} )/g, (match1, match2, match3) => {
    //     match1 = match1.toUpperCase();
    //     match2 = match2.toUpperCase();
    //     match3 = match3.toUpperCase();

    //     return match1, match2, match3;
    // });

    // REFACTORING 
    const [typeStr, fromCode, toCode, timeStr] = flight.split(`;`);

    const type = `${typeStr.startsWith(`_Delayed`) ? `🔴` : ``} ${typeStr.replaceAll(`_`, ` `)}`.trim();
    const from = fromCode.slice(0, 3).toUpperCase().trim();
    const to = toCode.slice(0, 3).toUpperCase().trim();
    const time = `(${timeStr})`.trim();

    return `${type.startsWith( `🔴`) ? type : type.padStart(20)} from ${from} to ${to} ${time}`;
});

for (const flight of formatedFlights) {
    console.log(flight);
}