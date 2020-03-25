const allSuppliers = [
  {
    name: 'Airon',
    address: '751 North Dr STE 6, Melbourne, FL 32934',
    website: 'https://aironusa.com',
    numbers: {
      main: '+1 321 821 9433',
      USA: '+1 321 821 9433'
    },
    email: 'support@AironUSA.com',
  }, {
    name: 'Allied Healthcare',
    address: '1720 Sublette Ave, St. Louis, MO 63110',
    website: 'http://www.alliedhpi.com',
    numbers: {
      main: '+1 314 771 2400',
      USA: '+1 800 444 3940',
      International: '+1 800 446 0552'
    },
    email: 'techsupport@alliedhpi.com',
  }, {
    name: 'Beckton Dickinson',
    address: '1 Becton Drive, Franklin Lakes, NJ 07417',
    website: 'https://www.bd.com',
    numbers: {
      main: '+1 201 847 6800',
      USA: '+1 201 847 6800',
      International: '+44 0800 917 8776'
    },
    email: 'TriPathCustomerService@bd.com',
  }, {
    name: 'BemesEast',
    address: '111 Leuning Street Unit A, South Hackensack, NJ 07606',
    website: 'https://www.bemesonline.com',
    numbers: {
      main: '+1 718 535 7638',
      USA: '+1 866 490 1609',
    },
    email: 'sales@bemeseast.com'
  }, {
    name: 'Bio-Med Devices',
    address: '61 Soundview Rd, Guilford, CT 06437',
    website: 'http://www.biomeddevices.com',
    numbers: {
      main: '+1 203 458 0202',
      USA: '+1 203 458 0202',
      International: '+1 203 458 0202'
    },
    email: 'custserv@biomeddevices.com',
  }, {
    name: 'Bunnell',
    address: '436 Lawndale Dr, South Salt Lake, UT 84115',
    website: 'https://www.bunl.com',
    numbers: {
      main: '+1 801 467 0800',
      USA: '+1 800 800 4358'
    },
    email: 'info@bunl.com'
  }, {
    name: 'Cardinal Health',
    address: '7000 Cardinal Place, Dublin, OH 43017',
    website: 'https://www.cardinalhealth.com/en.html',
    numbers: {
      main: '+1 614 757 5000',
      USA: '+1 800 326 6457',
      International: '+44 0203 795 9970'
    },
    email: 'bradley.luchene@cardinalhelath.com'
  }, {
    name: 'Draeger',
    address: '3135 Quarry Road, Telford, PA 18969',
    website: 'https://www.draeger.com',
    numbers: {
      main: '+1 800 437 2437',
      USA: '+1 800 437 2437',
    },
    email: 'US-Medical@draeger.com'
  }, {
    name: 'eVent Medical',
    address: '60 Empire Drive, Lake Forest, CA 92630',
    website: 'https://event-medical.com',
    numbers: {
      main: '+1 949 900 1917',
      USA: '+1 949 900 1917',
    },
    email: ''
  }, {
    name: 'Flight Medical',
    address: 'Beit Kodak 7 Kiryat Arieh Petach, Tikva, 49510 Israel',
    website: 'https://www.flight-medical.com',
    numbers: {
      main: '+972 03 925 4040',
      International: '+972 03 925 4040'
    },
    email: 'sales.usa@flight-medical.com'
  }, {
    name: 'GE Healthcare',
    address: '3000 N Grandview Blvd, Waukesha, WI 53188',
    website: 'https://www.gehealthcare.com',
    numbers: {
      main: '+1 866 281 7545',
      USA: '+1 866 281 7545'
    },
    email: '@gehealthcare'
  }, {
    name: 'Hartwell Medical',
    address: '6354 Corte Del Abeto # F, Carlsbad, CA 92011',
    website: 'https://www.hartwellmedical.com',
    numbers: {
      main: '+1 800 633 5900',
      USA: '+1 760 438 5500'
    },
    email: 'marketing@hartwellmedical.com'
  }, {
    name: 'Hillrom',
    address: '130 E. Randolph St. Suite 1000, Chicago, IL 60601',
    website: 'https://hillrom.com/en-us',
    numbers: {
      main: '+1 312 819 7200',
      USA: '+1 800 426 4224',
      International: '+31 020 301 1000'
    },
    email: 'technical.support@hill-rom.com'
  }, {
    name: 'Medtronic',
    address: '710 Medtronic Parkway, Minneapolis, MN 55432',
    website: 'https://www.medtronic.com/us-en',
    numbers: {
      main: '+1 763 514 4000',
      USA: '+1 800 633 8766',
      International: '+7 495 580 7377'
    },
    email: 'connect@medtronic.com'
  }, {
    name: 'O-Two Medical',
    address: '45A Armthorpe Rd, Brampton, ON L6T 5M4',
    website: 'https://otwo.com',
    numbers: {
      main: '+1 905 792 6896',
      USA: '+1 800 387 3405',
    },
    email: 'resuscitation@otwo.com'
  }, {
    name: 'Oceanic Medical',
    address: '8005 Industrial Park Ln, Atchison, KS 66002',
    website: 'http://oceanicmedical.com',
    numbers: {
      main: '+1 913 874 2000',
      USA: '+1 913 874 2000',
    },
    email: 'info@oceanicmedical.com'
  }, {
    name: 'Oricare',
    address: '1900 AM Drive, Quakertown, PA 18951',
    website: 'oricaremed.com',
    numbers: {
      main: '+1 215 538 2470',
      USA: '+1 215 538 2470',
    },
    email: 'info@oricaremed.com'
  }, {
    name: 'Penlon / BPL Medical',
    address: '11th KM Arakere Bannerghatta Road, Bangalore, India 560 076',
    website: 'https://www.bplmedicaltechnologies.com',
    numbers: {
      main: '+91 080 2468 4350',
      USA: '+1 800 425 2355',
      International: '+91 080 2468 4388'
    },
    email: 'sales.medical@bpl.in'
  }, {
    name: 'Percussionaire',
    address: '130 McGhee Rd. Suite 109, Sandpoint, ID 83864',
    website: 'http://percussionaire.com/support/dealer-locator',
    numbers: {
      main: '+1 208 263 2549',
      USA: '+1 636 343 0000',
    },
    email: 'customerservice@percussionaire.com'
  }, {
    name: 'Philips Healthcare',
    address: '2 Canal Park, Cambridge, MA 02141',
    website: 'https://www.usa.philips.com',
    numbers: {
      main: '+1 617 613 2402',
      USA: '+1 800 229 6417',
    },
    email: 'aedsupport@philips.com'
  }, {
    name: 'PMT Partners',
    address: '1920 Hallandale Beach Boulevard Suite 905, Hallandale, FL 33009',
    website: 'https://www.powrsyringe.com',
    numbers: {
      main: '+1 954 534 9345',
      USA: '+1 954 534 9345',
    },
    email: 'larry@bacinc.info'
  }, {
    name: 'Sechrist',
    address: '4225 E. La Palma Ave, Anaheim, CA 92807',
    website: 'https://sechristusa.com',
    numbers: {
      main: '+1 714 579 8400',
      USA: '+1 800 732 4747',
      International: '+32 2 732 6003'
    },
    email: 'WebInfoRequest@sechristusa.com'
  }, {
    name: 'Smiths Medical',
    address: '5200 Upper Metro Place Suite 200, Dublin, OH 43017',
    website: 'https://www.smiths-medical.com',
    numbers: {
      main: '+1 614 210 7300',
      USA: '+1 800 258 5361',
    },
    email: 'ics@smiths-medical.com'
  }, {
    name: 'Spacelabs Healthcare',
    address: '12525 Chadron Avenue, Hawthorne, CA 90250',
    website: 'https://www.osi-systems.com',
    numbers: {
      main: '+1 310 978 0516',
      USA: '+1 425 396 3300',
      International: '+44 01992 507777'
    },
    email: 'SLCanadaCustomerService@spacelabs.com'
  }, {
    name: 'Tyco / Mindflow Design',
    address: '2036 Corte Del Nogal, Carlsbad, CA 92011',
    website: 'https://www.mindflowdesign.com',
    numbers: {
      main: '+1 760 930 9285',
      USA: '+1 760 930 9285',
    },
    email: 'info@mindflowdesign.com'
  }, {
    name: 'United Hayek Industries',
    address: 'Unit 12 Northfields Prospect Business Centre, Northfields, London SW18 1PE',
    website: 'https://www.hayekmedical.com',
    numbers: {
      main: '+1 855 243 8228',
      USA: '+1 855 243 8228',
      International: '+44 08444 157888'
    },
    email: 'info@hayekmedical.com'
  }, {
    name: 'Vyaire',
    address: '22745 Savi Ranch Pkwy, Yorba Linda, CA 92877',
    website: 'https://www.vyaire.com',
    numbers: {
      main: '1 714 283 2228',
      USA: '1 800 231 2466'
    },
    email: 'rcorders@vyaire.com'
  }, {
    name: 'Zoll Medical',
    address: '269 Mill Road, Chelmsford, MA 01824',
    website: 'https://www.zoll.com',
    numbers: {
      main: '+1 978 421 9655',
      USA: '+1 800 348 9011',
    },
    email: 'esales@zoll.com'
  },
  /* Please add new info below
{
  name: 'Cardinal Health',
  address: '',
  website: '',
  numbers: {
    main: '',
    USA: '',
    International: ''
  },
  email: ''
},

*/  
]
export default allSuppliers;
