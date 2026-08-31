/* ------------------------------------------------------------------
   Image sources.

   ⚠️  PLACEHOLDER IMAGERY — these are hot-linked Unsplash photos used
   only so the layout reads correctly during development. Replace every
   entry with real UrbanRaise photography before launch. Keeping them
   in one file makes that a find-and-replace job.

   <SmartImage> degrades any broken/blocked URL to a branded gradient,
   so a missing photo never breaks the layout.
------------------------------------------------------------------ */

const U = 'https://images.unsplash.com/'

/** Build a sized Unsplash URL. */
const img = (id, w = 1600) =>
  `${U}${id}?auto=format&fit=crop&w=${w}&q=70`

export const images = {
  // Hero / large architectural
  heroBuild: img('photo-1503387762-592deb58ef4e', 2000),
  heroResidence: img('photo-1512917774080-9991f1c4c750', 2000),
  darkArchitecture: img('photo-1486406146926-c627a92ad1ab', 2000),
  blueprintDesk: img('photo-1487017159836-4e23ece2e4cf', 1600),
  siteMeeting: img('photo-1600880292203-757bb62b4baf', 1600),
  onSite: img('photo-1504307651254-35680f356dfd', 1600),
  craneSky: img('photo-1541976590-713941681591', 1600),

  // Services
  services: {
    residential: img('photo-1568605114967-8130f3a36994', 1400),
    apartments: img('photo-1481253127861-534498168948', 1400),
    renovations: img('photo-1618221195710-dd6b41faaea6', 1400),
    design: img('photo-1503387837-b154d5074bd2', 1400),
    projectManagement: img('photo-1581094794329-c8112a89af12', 1400),
    structural: img('photo-1621905251189-08b45d6a269e', 1400),
  },

  // Project portfolio (sample)
  projects: {
    modern4bed: [
      img('photo-1512917774080-9991f1c4c750', 1600),
      img('photo-1600585154340-be6161a56a0c', 1600),
      img('photo-1600607687939-ce8a6c25118c', 1600),
      img('photo-1600566753086-00f18fb6b3ea', 1600),
    ],
    hillsideResidence: [
      img('photo-1564013799919-ab600027ffc6', 1600),
      img('photo-1600596542815-ffad4c1539a9', 1600),
      img('photo-1600210492486-724fe5c67fb0', 1600),
    ],
    courtyardApartments: [
      img('photo-1487958449943-2429e8be8625', 1600),
      img('photo-1449157291145-7efd050a4d0e', 1600),
      img('photo-1481253127861-534498168948', 1600),
    ],
    heritageRenovation: [
      img('photo-1618221195710-dd6b41faaea6', 1600),
      img('photo-1600891964092-4316c288032e', 1600),
      img('photo-1600047509807-ba8f99d2cdde', 1600),
    ],
    parkLaneDuplex: [
      img('photo-1570129477492-45c003edd2be', 1600),
      img('photo-1600585152220-90363fe7e115', 1600),
      img('photo-1615529182904-14819c35db37', 1600),
    ],
    familyHomeExtension: [
      img('photo-1416339306562-f3d12fefd36f', 1600),
      img('photo-1502005229762-cf1b2da7c5d6', 1600),
      img('photo-1600607687920-4e2a09cf159d', 1600),
    ],
    ridgeviewApartments: [
      img('photo-1541976590-713941681591', 1600),
      img('photo-1486406146926-c627a92ad1ab', 1600),
      img('photo-1523217582562-09d0def993a6', 1600),
    ],
    lakesideResidence: [
      img('photo-1580587771525-78b9dba3b914', 1600),
      img('photo-1503328427499-d92d1ac3d174', 1600),
      img('photo-1494203484021-3c454daf695d', 1600),
    ],
    cityInfillHome: [
      img('photo-1502005229762-cf1b2da7c5d6', 1600),
      img('photo-1460472178825-e5240623afd5', 1600),
      img('photo-1600566752355-35792bedcfea', 1600),
    ],
  },
}

export { img }
