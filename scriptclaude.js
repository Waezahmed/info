const cursor = document.querySelector('.cursor-glow');

window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 125 + 'px';
    cursor.style.top = e.clientY - 125 + 'px';
});


// ═══════════════════════════════════════════════════════════════════════════════
//  DATA STRUCTURE
//  Each batch is keyed by year (16..25).
//  Each student entry: { name, whatsapp, facebook }
//  Roll numbers are derived: year + "13" + padded slot  (e.g. 25 → 2513001)
//  Slots run 001..061 for batch 25, 001..060 for batches 16-24.
//
//  HOW TO ADD / FILL OLDER BATCHES (16-23):
//  Find the object for that batch year below and fill in name/whatsapp/facebook
//  for each slot. Unfilled slots default to "NOT FOUND" / placeholder links.
// ═══════════════════════════════════════════════════════════════════════════════

// Helper: build a roll string from year + slot
function makeRoll(year, slot) {
    return `${year}13${String(slot).padStart(3, '0')}`;
}

// Helper: build a blank student record
function blank(name = "NOT FOUND") {
    return { name, whatsapp: "YOUR_WHATSAPP_LINK", facebook: "YOUR_FACEBOOK_LINK" };
}

// ─── BATCH 25  (slots 001-061) ────────────────────────────────────────────────
const batch25 = {
    "001": { name: "SYED AIMAN HOQ",              whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/189BUwsx17/" },
    "002": { name: "ADNAN SAMI",                   whatsapp: "https://wa.me/8801932782902",   facebook: "https://www.facebook.com/share/1AvojMCvJ4/" },
    "003": { name: "PROTASHA BISWAS",              whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/1DxcKGuiHt/" },
    "004": { name: "MD. TAMJID SIAM MAHIR",        whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/1AKoxxd5kN/" },
    "005": { name: "MAHIN ZAMAN AHON",             whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/1KY2sXuxME/" },
    "006": { name: "MARIA RUBYAT",                 whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/1CGbT6URX7/" },
    "007": { name: "MD. MIRAJ ALI",                whatsapp: "https://wa.me/8801794132561",   facebook: "https://www.facebook.com/share/1Dh1ToBrjc/" },
    "008": { name: "MD MUNTASIR HASAN SOHAN",      whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/1asf2EfxZF/" },
    "009": { name: "MD. MAHIR LABIB",              whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/18V7spsKzi/" },
    "010": { name: "NILOY CHOWDHURY",              whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/1JL8nP7axK/" },
    "011": { name: "SHADMAN SHADAB SHIRSHO",       whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/1DXs3S7yhw/" },
    "012": { name: "MISHKAT NOOR",                 whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/1AX75F2dEc/" },
    "013": { name: "MD SALMAN SABIT",              whatsapp: "https://wa.me/8801871308283",   facebook: "https://www.facebook.com/share/1B2mk3x544/" },
    "014": { name: "SANJIDA JANNAT PRITY",         whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/1BMkXvzXhh/" },
    "015": { name: "MAHBUBA ISLAM",                whatsapp: "https://wa.me/8801827573175",   facebook: "https://www.facebook.com/share/17VvxRPHvs/" },
    "016": { name: "S.M. TAHMIDUR RAHMAN",         whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/18pQJwAyyn/" },
    "017": { name: "RAHUL SAHA",                   whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/1BBYr71X4R/" },
    "018": { name: "SOURAV KUMAR JOY",             whatsapp: "https://wa.me/8801312885708",   facebook: "https://www.facebook.com/share/1BCsVR2BWP/" },
    "019": { name: "ISHTIAK HOSSAIN NOMAN",        whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "YOUR_FACEBOOK_LINK" },
    "020": { name: "SHIHAB",                       whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/18sYFCSEfu/" },
    "021": { name: "AHNAF ZARIF",                  whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/1HAJC1yoer/" },
    "022": { name: "MD. ASRAFUL ISLAM NIROB",      whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/1as4C7y684/" },
    "023": { name: "MAHIA TABASSUM BORSHA",        whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/1EeBDj9VpU/" },
    "024": { name: "MD. WASIR SHIKDER RATUL",      whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/169TTtKZx6/" },
    "025": { name: "ARIFUL ISLAM",                 whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/1J5yhigaaJ/" },
    "026": { name: "SHEIKH MOHAMMAD MAHADI HASAN", whatsapp: "https://wa.me/8801835468579",   facebook: "https://www.facebook.com/mdrba2" },
    "027": { name: "MD. SALAH UDDIN MIKDAD",       whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/17Q94EnugP/" },
    "028": { name: "SK. MOFSIN TAMIM",             whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "YOUR_FACEBOOK_LINK" },
    "029": { name: "ABU JAR GIFARI AKAND",         whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/1GwcALFMPc/" },
    "030": { name: "MUTTAKIN FUAD",                whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/1aNgMFN36i/" },
    "031": { name: "JAMINUR RAHMAN",               whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/17qrRC8QC8/" },
    "032": { name: "MD. RIAD ISLAM",               whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/1E3McNYanY/" },
    "033": { name: "PRATTOY BANIK",                whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/1CmTCuPdQF/" },
    "034": { name: "JUNAYED BUGDADI DIPTA",        whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "YOUR_FACEBOOK_LINK" },
    "035": { name: "MD. ISHAK RAHMAN",             whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "YOUR_FACEBOOK_LINK" },
    "036": { name: "MD. NIAMUL HASAN",             whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/1DyfZU9tHr/" },
    "037": { name: "SHOUVIK BASAK SHOSHI",         whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/tunarzin.tarmi" },
    "038": { name: "MEHEDI AL HASAN SIAM",         whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/1G6gJqvnM3/" },
    "039": { name: "MD. SAIFUR RAHMAN SIAM",       whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "YOUR_FACEBOOK_LINK" },
    "040": { name: "MD IMAM HASAN JEWEL",          whatsapp: "https://wa.me/8801792524674",   facebook: "https://www.facebook.com/share/18bepKQKnG/" },
    "041": { name: "SAWCHA PODDER",                whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/1A86VKHdrd/" },
    "042": { name: "ROFAT ROYAN",                  whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/18VwGqboq3/" },
    "043": { name: "MAISUN MEHAJABIN",             whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "YOUR_FACEBOOK_LINK" },
    "044": { name: "SIYAM AHMED",                  whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/18rs2HwqnB/" },
    "045": { name: "MD. MUBTASIM SAROWAR RIHAN",   whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/1FtTzm3ZVv/" },
    "046": { name: "RIGWAN MUSTAFA",               whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/1BKXipyrDU/" },
    "047": { name: "AFNAN AMJAD",                  whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "YOUR_FACEBOOK_LINK" },
    "048": { name: "MD. ASHIQUR RAHMAN MOZUMDER",  whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/share/1CHvsn3uUo/" },
    "049": { name: "ZUANA TASHRIN",                whatsapp: "https://wa.me/8801306522570",   facebook: "https://www.facebook.com/share/1B8DUtDXTj/" },
    "050": { name: "SAJID BIN MAIN",               whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "YOUR_FACEBOOK_LINK" },
    "051": { name: "MD. RIFAT NABIL SIDDIQUE",     whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/choton.deb.nath.2005.2025" },
    "052": { name: "SABBIR AHMED",                 whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "YOUR_FACEBOOK_LINK" },
    "053": { name: "KAYES MAHMUD SHAKKHOR",        whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/md.mehedi.hasan.931440" },
    "054": { name: "MD. RAQUIB AHSAN TAMZID",      whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/tanim.mahmud.35728" },
    "055": { name: "MD. TANIM HOSSEN",             whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/mubtasim.foad.siam" },
    "056": { name: "UTSHA BHOWMIK",                whatsapp: "https://wa.me/8801713540059",   facebook: "https://www.facebook.com/sadman.sajid.483999" },
    "057": { name: "MD. HASIBUL HASAN",            whatsapp: "https://wa.me/8801877142168",   facebook: "https://www.facebook.com/waezahmedrumman.zar" },
    "058": { name: "MST. MODINA MONAWARA",         whatsapp: "https://wa.me/8801891983291",   facebook: "https://www.facebook.com/manzarul.hasan.chowdhury" },
    "059": { name: "SOHAN ALAHI SUNNY",            whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "YOUR_FACEBOOK_LINK" },
    "060": { name: "MD. HANIF",                    whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "https://www.facebook.com/rudro.kundu.37" },
    "061": { name: "SABAHAT MUSTARIN",             whatsapp: "YOUR_WHATSAPP_LINK",           facebook: "YOUR_FACEBOOK_LINK" },
};

// ─── BATCH 24  (slots 001-060) ────────────────────────────────────────────────
// These were stored as rollmates' "name" in the old script.
const batch24 = {
    "001": { name: "SHIHABUDDIN MAMUN",    whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/189BUwsx17/" },
    "002": { name: "FAHIM MANMUD",         whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1AvojMCvJ4/" },
    "003": { name: "NIBIR NANDI PARTHO",   whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1DxcKGuiHt/" },
    "004": { name: "SAAD JIM",             whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1AKoxxd5kN/" },
    "005": { name: "DEBOJIT DEBNATH",      whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1KY2sXuxME/" },
    "006": { name: "JAWAD",                whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1CGbT6URX7/" },
    "007": { name: "ABID HASSAN",          whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1Dh1ToBrjc/" },
    "008": { name: "MARAJ ISLAM",          whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1asf2EfxZF/" },
    "009": { name: "ARMAN HOSSAIN NAYON",  whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/18V7spsKzi/" },
    "010": { name: "ADILAH ULFAT",         whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1JL8nP7axK/" },
    "011": { name: "TAHMIDUR RAHMAN",      whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1DXs3S7yhw/" },
    "012": { name: "ABDULLAH AL KAFI",     whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1AX75F2dEc/" },
    "013": { name: "JIHAD SAYEM",          whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1B2mk3x544/" },
    "014": { name: "TOUFIQUE IMROSE",      whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1BMkXvzXhh/" },
    "015": { name: "MD MONIRUZZAMAN",      whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/17VvxRPHvs/" },
    "016": { name: "ATAHAR ISHTIYAK",      whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/18pQJwAyyn/" },
    "017": { name: "MUSTAKIM SIFAT",       whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1BBYr71X4R/" },
    "018": { name: "AHMAD MUNIM KHAN",     whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1BCsVR2BWP/" },
    "019": { name: "NOT FOUND",            whatsapp: "YOUR_WHATSAPP_LINK", facebook: "YOUR_FACEBOOK_LINK" },
    "020": { name: "SARWAR HOSSAIN SHIHAB",whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/18sYFCSEfu/" },
    "021": { name: "TANJID KABIR",         whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1HAJC1yoer/" },
    "022": { name: "SHAHRIAR SOFOL",       whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1as4C7y684/" },
    "023": { name: "TAMANNA TULI",         whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1EeBDj9VpU/" },
    "024": { name: "SIGMA ADIB SINTHI",    whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/169TTtKZx6/" },
    "025": { name: "ISMAIL HOSEN",         whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1J5yhigaaJ/" },
    "026": { name: "RAFID BIN AKHTER",     whatsapp: "https://wa.me/8801835468579", facebook: "https://www.facebook.com/mdrba2" },
    "027": { name: "MURSALIN AHMED SIYAM", whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/17Q94EnugP/" },
    "028": { name: "NOT FOUND",            whatsapp: "YOUR_WHATSAPP_LINK", facebook: "YOUR_FACEBOOK_LINK" },
    "029": { name: "MD. ABU RAIHAN",       whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1GwcALFMPc/" },
    "030": { name: "SHAMIUL ISLAM SHIAM",  whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1aNgMFN36i/" },
    "031": { name: "MUHAMMAD RIDOY",       whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/17qrRC8QC8/" },
    "032": { name: "TAMIM SERAJ",          whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1E3McNYanY/" },
    "033": { name: "SAUROV BANIK",         whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1CmTCuPdQF/" },
    "034": { name: "NOT FOUND",            whatsapp: "YOUR_WHATSAPP_LINK", facebook: "YOUR_FACEBOOK_LINK" },
    "035": { name: "NOT FOUND",            whatsapp: "YOUR_WHATSAPP_LINK", facebook: "YOUR_FACEBOOK_LINK" },
    "036": { name: "TAMIM BILLAH",         whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1DyfZU9tHr/" },
    "037": { name: "TUNARZIN TARMI",       whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/tunarzin.tarmi" },
    "038": { name: "SHUVO SARKAR",         whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1G6gJqvnM3/" },
    "039": { name: "NOT FOUND",            whatsapp: "YOUR_WHATSAPP_LINK", facebook: "YOUR_FACEBOOK_LINK" },
    "040": { name: "SURJOTOPA ROY SRAYA",  whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/18bepKQKnG/" },
    "041": { name: "FATIN NEHAL",          whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1A86VKHdrd/" },
    "042": { name: "MOHAMMED GIASH UDDIN", whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/18VwGqboq3/" },
    "043": { name: "NOT FOUND",            whatsapp: "YOUR_WHATSAPP_LINK", facebook: "YOUR_FACEBOOK_LINK" },
    "044": { name: "ISHMA RAHMAN",         whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/18rs2HwqnB/" },
    "045": { name: "TASFIQUR RAHMAN OVI",  whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1FtTzm3ZVv/" },
    "046": { name: "BAYZID FAHIM",         whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1BKXipyrDU/" },
    "047": { name: "NOT FOUND",            whatsapp: "YOUR_WHATSAPP_LINK", facebook: "YOUR_FACEBOOK_LINK" },
    "048": { name: "MD TAYBE HOSSAIN JONY",whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/share/1CHvsn3uUo/" },
    "049": { name: "RIAL BISWAS",          whatsapp: "https://wa.me/8801306522570", facebook: "https://www.facebook.com/share/1B8DUtDXTj/" },
    "050": { name: "NOT FOUND",            whatsapp: "YOUR_WHATSAPP_LINK", facebook: "YOUR_FACEBOOK_LINK" },
    "051": { name: "CHOTON DEBNATH",       whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/choton.deb.nath.2005.2025" },
    "052": { name: "NOT FOUND",            whatsapp: "YOUR_WHATSAPP_LINK", facebook: "YOUR_FACEBOOK_LINK" },
    "053": { name: "MEHEDI HASAN",         whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/md.mehedi.hasan.931440" },
    "054": { name: "TANIM MAHMUD",         whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/tanim.mahmud.35728" },
    "055": { name: "MUBTASIM FUAD SIAM",   whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/mubtasim.foad.siam" },
    "056": { name: "SADMAN SAJID SPORSHO", whatsapp: "https://wa.me/8801713540059", facebook: "https://www.facebook.com/sadman.sajid.483999" },
    "057": { name: "WAEZ AHMED RUMMAN",    whatsapp: "https://wa.me/8801877142168", facebook: "https://www.facebook.com/waezahmedrumman.zar" },
    "058": { name: "MANZARUL CHOWDHURY",   whatsapp: "https://wa.me/8801891983291", facebook: "https://www.facebook.com/manzarul.hasan.chowdhury" },
    "059": { name: "NOT FOUND",            whatsapp: "YOUR_WHATSAPP_LINK", facebook: "YOUR_FACEBOOK_LINK" },
    "060": { name: "RUDRO KUNDU",          whatsapp: "YOUR_WHATSAPP_LINK", facebook: "https://www.facebook.com/rudro.kundu.37" },
};

// ─── BATCHES 16-23  ───────────────────────────────────────────────────────────
// Fill in names/links as you collect data. Slots 001-060 for each.
// Format: "slot": { name: "FULL NAME", whatsapp: "...", facebook: "..." }

const batch23 = {
    // Add 001-060 here as you collect data
    // Example:
    // "001": { name: "NAME HERE", whatsapp: "YOUR_WHATSAPP_LINK", facebook: "YOUR_FACEBOOK_LINK" },
};

const batch22 = {};
const batch21 = {};
const batch20 = {};
const batch19 = {};
const batch18 = {};
const batch17 = {};
const batch16 = {};


// ═══════════════════════════════════════════════════════════════════════════════
//  MASTER INDEX
//  Maps batch year → { slotData, maxSlot }
// ═══════════════════════════════════════════════════════════════════════════════

const allBatches = {
    25: { data: batch25, maxSlot: 61 },
    24: { data: batch24, maxSlot: 60 },
    23: { data: batch23, maxSlot: 60 },
    22: { data: batch22, maxSlot: 60 },
    21: { data: batch21, maxSlot: 60 },
    20: { data: batch20, maxSlot: 60 },
    19: { data: batch19, maxSlot: 60 },
    18: { data: batch18, maxSlot: 60 },
    17: { data: batch17, maxSlot: 60 },
    16: { data: batch16, maxSlot: 60 },
};

// Parse a roll string → { year, slot } or null
function parseRoll(roll) {
    roll = roll.trim();
    // Expected format: YYSS13NNN  where YY=2 digits year, SS=13(dept), NNN=slot
    const m = roll.match(/^(\d{2})13(\d{3})$/);
    if (!m) return null;
    const year = parseInt(m[1]);
    const slot  = m[2]; // keep as zero-padded string
    if (!allBatches[year]) return null;
    return { year, slot };
}

// Get a student record from a specific batch+slot (may be placeholder if not filled)
function getStudent(year, slot) {
    const batchData = allBatches[year]?.data;
    if (!batchData) return null;
    const slotNum = parseInt(slot);
    if (slotNum < 1 || slotNum > allBatches[year].maxSlot) return null;
    return batchData[slot] || { name: "NOT FOUND", whatsapp: "YOUR_WHATSAPP_LINK", facebook: "YOUR_FACEBOOK_LINK" };
}

// All batch years in descending order (25 → 16)
const BATCH_YEARS = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16];


// ═══════════════════════════════════════════════════════════════════════════════
//  TABLE BUILDER  –  multi-batch roll search
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Build the full rollmate table for a searched roll.
 *
 * Layout:
 *  Row 1 (highlighted): Searched person's own info — full roll, name, WhatsApp, Facebook
 *  Rows 2-N: Each other batch that has this slot, newest first (25→16),
 *             skipping the searched batch.
 *             These rows show: Roll | Name | WhatsApp | Facebook
 *             (the "Your Name / Rollmate" columns from the first row are not repeated)
 */
function buildRollmateTable(searchedYear, slot) {
    const self = getStudent(searchedYear, slot);
    const selfRoll = makeRoll(searchedYear, slot);

    // First row: the person who searched
    let rows = `
        <tr class="self-row">
            <td><strong>${selfRoll}</strong></td>
            <td><strong>${self ? self.name : "NOT FOUND"}</strong></td>
            <td>Your Batch (${searchedYear})</td>
            <td>—</td>
            <td>${self && !self.whatsapp.includes('YOUR') ? `<a href="${self.whatsapp}" target="_blank">Chat</a>` : '<span style="color:#888">—</span>'}</td>
            <td>${self && !self.facebook.includes('YOUR') ? `<a href="${self.facebook}" target="_blank">Profile</a>` : '<span style="color:#888">—</span>'}</td>
        </tr>
    `;

    // Subsequent rows: all other batches (descending, skip searched year)
    for (const yr of BATCH_YEARS) {
        if (yr === searchedYear) continue;
        const batchInfo = allBatches[yr];
        const slotNum = parseInt(slot);
        if (slotNum > batchInfo.maxSlot) continue; // slot doesn't exist in this batch

        const student = getStudent(yr, slot);
        const roll = makeRoll(yr, slot);

        rows += `
            <tr>
                <td>${roll}</td>
                <td>${student ? student.name : "NOT FOUND"}</td>
                <td>Batch ${yr}</td>
                <td>—</td>
                <td>${student && !student.whatsapp.includes('YOUR') ? `<a href="${student.whatsapp}" target="_blank">Chat</a>` : '<span style="color:#888">—</span>'}</td>
                <td>${student && !student.facebook.includes('YOUR') ? `<a href="${student.facebook}" target="_blank">Profile</a>` : '<span style="color:#888">—</span>'}</td>
            </tr>
        `;
    }

    return `
        <div class="result-card">
            <p style="color:#72dfff;margin-bottom:16px;font-size:14px;letter-spacing:1px;">
                Showing rollmates for slot <strong>${parseInt(slot)}</strong> across all batches
            </p>
            <table>
                <tr>
                    <th>Roll</th>
                    <th>Name</th>
                    <th>Batch</th>
                    <th>&nbsp;</th>
                    <th>WhatsApp</th>
                    <th>Facebook</th>
                </tr>
                ${rows}
            </table>
        </div>
    `;
}


// ═══════════════════════════════════════════════════════════════════════════════
//  SEARCH BY ROLL
// ═══════════════════════════════════════════════════════════════════════════════

function searchRoll() {
    const input = document.getElementById('rollInput').value.trim();
    const result = document.getElementById('result');

    const parsed = parseRoll(input);

    if (!parsed) {
        result.innerHTML = `<div class="error">Invalid roll number. Try format: 2513057</div>`;
        return;
    }

    const { year, slot } = parsed;
    const self = getStudent(year, slot);

    if (!self) {
        result.innerHTML = `<div class="error">Roll number not found in any batch.</div>`;
        return;
    }

    result.innerHTML = buildRollmateTable(year, slot);
}

document.getElementById('rollInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') searchRoll();
});


// ═══════════════════════════════════════════════════════════════════════════════
//  SEARCH BY NAME  –  searches ALL batches (16-25)
// ═══════════════════════════════════════════════════════════════════════════════

function searchSenior() {
    const query = document.getElementById('seniorInput').value.trim().toLowerCase();
    const resultDiv = document.getElementById('seniorResult');

    if (!query) {
        resultDiv.innerHTML = `<div class="error">Please enter a name to search.</div>`;
        return;
    }

    const matches = []; // { roll, name, year, whatsapp, facebook }

    for (const yr of BATCH_YEARS) {
        const batchObj = allBatches[yr];
        for (let i = 1; i <= batchObj.maxSlot; i++) {
            const slot = String(i).padStart(3, '0');
            const student = batchObj.data[slot];
            if (!student) continue;
            if (student.name && student.name !== "NOT FOUND" && student.name.toLowerCase().includes(query)) {
                matches.push({
                    roll: makeRoll(yr, slot),
                    name: student.name,
                    year: yr,
                    whatsapp: student.whatsapp,
                    facebook: student.facebook
                });
            }
        }
    }

    if (matches.length === 0) {
        resultDiv.innerHTML = `<div class="error">No matching name found across any batch.</div>`;
        resultDiv.style.display = 'block';
        return;
    }

    const rows = matches.map(m => `
        <tr>
            <td>${m.roll}</td>
            <td>${m.name}</td>
            <td>Batch ${m.year}</td>
            <td>${!m.whatsapp.includes('YOUR') ? `<a href="${m.whatsapp}" target="_blank">Chat</a>` : '<span style="color:#888">—</span>'}</td>
            <td>${!m.facebook.includes('YOUR') ? `<a href="${m.facebook}" target="_blank">Profile</a>` : '<span style="color:#888">—</span>'}</td>
        </tr>
    `).join('');

    resultDiv.innerHTML = `
        <div class="result-card">
            <table>
                <tr>
                    <th>Roll</th>
                    <th>Name</th>
                    <th>Batch</th>
                    <th>WhatsApp</th>
                    <th>Facebook</th>
                </tr>
                ${rows}
            </table>
        </div>
    `;
    resultDiv.style.display = 'block';
}

document.getElementById('seniorInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') searchSenior();
});
