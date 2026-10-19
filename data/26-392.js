/*
 * FOIA Request 26-392: City of Beaufort Police Department / Flock Safety
 *
 * Citation syntax used in every text field: [[DOC:PAGE]], e.g. [[03:13]].
 * The site turns each one into a link that opens that document at that page.
 * To add a new request, copy this file, change the id, and add a <script> tag in index.html.
 */
window.FOIA = window.FOIA || { requests: [] };
window.FOIA.requests.push({
  id: "26-392",
  agency: "City of Beaufort Police Department (SC)",
  vendor: "Flock Group, Inc. (Flock Safety)",
  received: "2026-10-19",
  base: "requests/26-392/",
  summary:
    "Released records cover Beaufort PD's Flock Safety program from the first sales quote in August 2023 through a self-audit memo in September 2026: five vendor quotes, a Master Services Agreement, three order forms or amendments, one purchase order, and one audit memo.",

  documents: [
    { id: "01", date: "2023-08-04", type: "Quote", pages: 4, file: "01_2023-08-04_quote-Q-41267",
      title: "Budgetary Quote Q-41267: 12 Falcon LPR cameras",
      original: "Quote_20230804_192324.pdf",
      summary: "Opening sales quote for 12 fixed plate-reader cameras: $36,000/yr plus $7,800 installation, 24-month term, $79,800 contract total. Lists nationwide and statewide plate lookup, private 'Community Cameras' access, and Vehicle Fingerprint search." },
    { id: "02", date: "2023-08-25", type: "Quote", pages: 4, file: "02_2023-08-25_quote-Q-41267-rev-raven",
      title: "Revised Quote Q-41267: adds Raven audio detection",
      original: "Quote_20230825_152352.pdf",
      summary: "Same quote number re-issued three weeks later with a Flock 'Raven' audio detection device (1/2-mile) added, raising the recurring cost to $56,000/yr and the contract total to $119,800." },
    { id: "03", date: "2024-08-05", type: "Contract", pages: 30, file: "03_2024-08-05_master-services-agreement",
      title: "Proposal, Order Form (Exhibit A) and Master Services Agreement",
      original: "SC - Beaufort PD - Law Enforcement Agreement.pdf",
      summary: "The governing contract. City Manager Scott M. Marshall signed it 8/5/2024 for 9 Falcon and 3 Solar Falcon LR plate readers: $36,000/yr, $44,100 in year one, $80,100 over 24 months, auto-renewing in 24-month terms. Includes the MSA terms on data, disclosure, liability and insurance." },
    { id: "04", date: "2024-08-26", type: "Order Form", pages: 5, file: "04_2024-08-26_order-form-falcon-flex",
      title: "Order Form: 1 Falcon Flex portable LPR camera",
      original: "SC - Beaufort PD - Law Enforcement Agreement -  (1).pdf",
      summary: "Add-on order for one portable, self-installed plate reader at $3,500/yr ($7,000 over the term). Signed by the City Manager 8/26/2024. Accounts-payable email is sprice@townofbluffton.com." },
    { id: "05", date: "2024-09-26", type: "Order Form", pages: 5, file: "05_2024-09-26_order-form-wing-video",
      title: "Order Form: FlockOS Advanced + Wing video gateways (56 streams)",
      original: "SC - Beaufort PD - Law Enforcement Agreement -  (2).pdf",
      summary: "Adds 'FlockOS Advanced', which pulls third-party live video cameras into Flock's video system, plus three 8-stream and one 32-stream Wing gateways: $9,400/yr, $20,800 over the term. Signed by the City Manager 9/26/2024. Accounts-payable email is again @townofbluffton.com." },
    { id: "06", date: "2024-12-11", type: "Quote", pages: 4, file: "06_2024-12-11_quote-Q-115992-condor-ptz",
      title: "Budgetary Quote Q-115992: 3 Condor PTZ live-stream cameras + Falcon Flex",
      original: "Quote_20241211_143107.pdf",
      summary: "Quote for three pan-tilt-zoom live-streaming video cameras with LTE, plus Falcon Flex: $12,500/yr, $27,250 total. No signed order for this quote appears in the release." },
    { id: "07", date: "2025-07-02", type: "Quote", pages: 4, file: "07_2025-07-02_quote-Q-149607-solar-video-x3",
      title: "Budgetary Quote Q-149607: 3 Solar Video Cameras",
      original: "Quote_20250702_162016.pdf",
      summary: "Quote for three solar-powered fixed video cameras added to existing plate-reader poles: $500 per camera per year plus $150 install each." },
    { id: "08", date: "2025-09-02", type: "Quote", pages: 4, file: "08_2025-09-02_quote-Q-149607-solar-video-x7",
      title: "Re-issued Quote Q-149607: 7 Solar Video Cameras",
      original: "Quote_20250902_151750.pdf",
      summary: "Same quote number re-issued with seven cameras ($3,500/yr, $8,050 total). The quote's expiration date (08/01/2025) is a month before its creation date (09/02/2025)." },
    { id: "09", date: "2025-09-11", type: "Purchase Order", pages: 4, file: "09_2025-09-11_purchase-order-00260037",
      title: "City Purchase Order 00260037 + signed Order Form: 5 Solar Video Cameras",
      original: "20250917155018058 (1).pdf", scanned: true,
      summary: "City PO for 5 solar video cameras at $1,150 each ($5,750), noting an annual recurring fee that is never quantified. The attached Flock order form has no pricing or quantity page. Chief Stephenie Price signed it 09/09/2025 and wrote in PO number 260037, two days before the PO's own date." },
    { id: "10", date: "2025-09-24", type: "Amendment", pages: 2, file: "10_2025-09-24_amendment-flex-to-falcon",
      title: "Amendment: swap Falcon Flex for fixed Falcon LPR",
      original: "quote.pdf", scanned: true,
      summary: "Replaces the portable Falcon Flex with a permanent fixed Falcon camera (net -$500/yr, plus $650 install). It amends an agreement 'dated 10/01/24' that isn't in the release. Signed only by Chief Price; Flock's signature block is blank." },
    { id: "11", date: "2026-09-07", type: "Audit", pages: 1, file: "11_2026-09-07_audit-memo",
      title: "Memo: 'Biannual Flock Audit'",
      original: "Audit Memo Sept 2026.pdf", scanned: true,
      summary: "A one-paragraph memo from Captain Joseph Dobbins to Chief Price saying he audited the Flock program on September 7, 2026 (Labor Day) and found 'no discrepancies or irregularities.' It gives no method, scope, search counts or findings." }
  ],

  findings: [
    {
      severity: "critical",
      title: "Beaufort's Flock billing was routed to a Town of Bluffton email address",
      body: "The Master Services Agreement lists the accounts-payable contact as sprice@cityofbeaufort.org [[03:7]]. The next two Beaufort PD order forms switch it to <b>sprice@townofbluffton.com</b>, an address on a different municipality's domain [[04:2]] [[05:2]]. Invoices and account notices for Beaufort's surveillance contract were addressed to an outside government's mail system. The MSA's own terms require users to create accounts with 'Customer-issued email addresses' [[03:16]].",
      ask: "Request every Flock invoice, account notice and FlockOS user list, and any record of who controlled the townofbluffton.com mailbox while it received Beaufort's Flock correspondence."
    },
    {
      severity: "critical",
      title: "A plate-reader contract quietly grew into a live-video surveillance network",
      body: "The 2023 quotes and the 2024 MSA order were for license plate readers only [[01:2]] [[03:7]]. Seven weeks after signing, the City added 'FlockOS Advanced', which brings <b>third-party live video cameras</b> into Flock's video system, along with gateways for <b>56 video streams</b> (3 × 8 + 1 × 32) [[05:2]] [[05:4]]. Quotes for live-streaming PTZ cameras [[06:2]] and solar video cameras followed [[07:2]] [[08:2]], ending in a purchase order for five video cameras [[09:1]]. Each step went in as an add-on order form under the original terms, with no new agreement [[05:5]] [[09:4]].",
      ask: "Whose cameras feed the 56 Wing streams (city, school, private business, HOA)? Was the expansion to video ever presented to City Council?"
    },
    {
      severity: "critical",
      title: "We investigated ourselves and found nothing wrong",
      body: "The only oversight record released is Beaufort PD auditing itself. A captain reports to the chief that he audited the program and found 'no discrepancies or irregularities,' and the chief signs it 'Noted' [[11:1]]. That chief, Stephenie Price, personally signed the 2025 video-camera order and the 2025 amendment [[09:4]] [[10:2]], so the program's own signer reviewed and accepted the audit of it. No independent auditor, city official or council member appears anywhere in the review. The memo cites no method, no number of searches reviewed, no stated search reasons, no check of outside-agency access, and no user list, even though the contract's own analytics include 'user and network audits' [[03:9]]. It is dated September 7, 2026, which was Labor Day. The system ran from August 2024, yet no earlier audit is in this release.",
      ask: "Request the underlying Flock audit-log export reviewed for this memo, the written audit procedure, and every prior audit. Push for an independent audit by someone outside the department's chain of command."
    },
    {
      severity: "high",
      title: "'Permitted Purpose' is narrow in one place and wide open in another",
      body: "The recitals limit use 'solely' to crime prevention, prosecution and law-enforcement investigations [[03:11]]. The binding definition in §1.13 expands this to 'legitimate public safety and/or <b>business purpose</b>' including 'prevention of <b>commercial harm</b>' [[03:13]]. The service-suspension and usage clauses enforce the definition, not the recital [[03:15]] [[03:18]].",
      ask: "Does Beaufort PD have a written ALPR policy that narrows permitted use? If so, why wasn't it attached to the contract?"
    },
    {
      severity: "high",
      title: "Your plates are searchable nationwide, and private cameras feed in",
      body: "Every Beaufort package includes Nationwide and State network lookup, advertising '10 billion additional plate reads per month', plus <b>Community Network Access</b> to 'privately owned' cameras in 'neighborhoods, schools, and businesses' and Law Enforcement Network Access to agencies 'outside of your jurisdiction' [[03:9]] [[04:4]]. Nothing released shows which agencies Beaufort shares data with, or whether federal agencies can search it.",
      ask: "Request the current FlockOS sharing settings: the list of agencies with access to Beaufort cameras and the list Beaufort can search."
    },
    {
      severity: "high",
      title: "Audio surveillance (Raven) was quoted and is built into the contract's definitions",
      body: "Three weeks after the first quote, Flock re-issued it with a <b>Raven audio detection device</b> that alerts police 'based on programmed audio events' [[02:2]] [[02:4]]. Raven doesn't appear in any signed order in this release. But the MSA defines the services as including 'audio detection' and 'Footage' as including audio [[03:12]] [[03:13]], and the recitals describe capturing 'audio, video, image, and recording data' [[03:11]].",
      ask: "Was Raven or any other audio device ever deployed, trialed or piloted in Beaufort?"
    },
    {
      severity: "medium",
      title: "The 2025 video-camera purchase has paperwork out of order",
      body: "The Chief signed the Flock order form on <b>09/09/2025</b> and wrote in PO number 260037 [[09:4]], but the City's PO 00260037 is dated <b>09/11/2025</b> [[09:1]]. The order form released has no quantity, price or term page [[09:3]]. The PO says the cameras 'come with an annual recurring fee' but never states the amount [[09:1]]. Quantities moved from 3 [[07:2]] to 7 [[08:2]] to 5 [[09:1]], and the quote for 7 expired before it was created [[08:1]].",
      ask: "Request the complete executed order form for PO 00260037 (with pricing), requisition PR 43, and all invoices for the solar video cameras."
    },
    {
      severity: "medium",
      title: "Signing authority shifted from the City Manager to the Police Chief",
      body: "Every 2024 contract document was signed by City Manager Scott Marshall [[03:10]] [[04:5]] [[05:5]]. The 2025 video order and the 2025 amendment were signed by Chief Price alone [[09:4]] [[10:2]]. The amendment amends an agreement 'dated 10/01/24' that doesn't appear in the release [[10:1]], and Flock never countersigned it [[10:2]].",
      ask: "Request the City's delegation-of-signature-authority policy, and the 10/01/2024 agreement the amendment references."
    },
    {
      severity: "medium",
      title: "Flock keeps a perpetual right to your data for AI training and can disclose footage on its own judgment",
      body: "§4.3 grants Flock a 'worldwide, <b>perpetual</b>' right to use 'Anonymized Data' to train 'machine learning algorithms' and for 'other Flock offerings' [[03:17]]. §5.3 lets Flock disclose Footage to 'third parties' whenever it has a 'good faith belief' that disclosure is reasonably necessary, with no requirement to notify the City [[03:18]]. Vehicle Fingerprint also catalogs <b>bumper stickers and decals</b>, which can be political or religious expression [[03:3]] [[03:9]].",
      ask: "Has Flock ever disclosed Beaufort data under §5.3? Request any notices and any data-processing addendum."
    },
    {
      severity: "medium",
      title: "The contract auto-renews and caps Flock's liability, even for bad data",
      body: "Terms auto-renew for 24 months unless the City gives notice at least 30 days before the term ends [[03:7]] [[03:20]]. Flock isn't liable for 'incomplete, corrupt, or inaccurate data' (for example, a misread plate that leads to a wrongful stop), and total liability is capped at 12 months of fees [[03:22]] [[03:23]]. Flock also reserves the right to change the platform whenever it deems an update 'necessary or useful,' including for its own 'competitive strength' [[03:14]].",
      ask: "When does the current term end, and what is the City's deadline to give non-renewal notice?"
    },
    {
      severity: "low",
      title: "Blank fields and missing exhibits in the governing contract",
      body: "The Customer notices address is entirely blank [[03:28]]. The City Manager's title is blank on the signature block [[03:10]]. Exhibit C, the 'Customer Implementation Guide' that sets the City's extra installation costs, is referenced but not attached [[03:24]]. A $12,000 'discount' is listed, but the contract total ($80,100) is simply year-one cost plus one renewal year, so it's unclear what the discount was applied to [[03:7]] [[03:8]].",
      ask: "Request Exhibit C and the deployment plan with camera locations (§10.2)."
    },
    {
      severity: "low",
      title: "The vendor offers to lobby your City Council for you",
      body: "Flock's proposal advertises 'Government Affairs' support to help educate 'city councils and other governing bodies' and a 'Media Relations' team to publicize solved crimes [[03:6]]. Its headline crime-reduction claim rests on a single 2019 police-department study [[03:2]].",
      ask: "Request any communications between Flock and City Council members or staff about the program."
    }
  ],

  narrative: [
    { heading: "The pitch (August 2023)",
      text: "Flock's sales rep, Taylor Ellison, first quoted Beaufort PD twelve fixed license-plate-reader cameras at $36,000 a year [[01:2]]. Every package bundled more than local cameras: nationwide and statewide plate lookups, access to privately owned cameras, and 'Vehicle Fingerprint' search that identifies cars by make, color, roof racks and bumper stickers even without a readable plate [[01:4]]. Three weeks later the same quote number came back with an audio-surveillance device, Raven, added at $20,000 more per year [[02:2]]." },
    { heading: "The contract (August 2024)",
      text: "A year later, City Manager Scott Marshall signed the Master Services Agreement and its first order: 9 standard and 3 long-range solar plate readers, $44,100 in year one and $80,100 over the 24-month term, renewing automatically [[03:7]] [[03:10]]. The agreement gives the City ownership of its data but grants Flock a perpetual license to anonymized data for machine-learning training [[03:17]]. It lets Flock disclose footage to third parties on its own 'good faith belief' [[03:18]], and its binding definition of 'Permitted Purpose' covers 'business purpose' and 'commercial harm' [[03:13]]." },
    { heading: "The quiet expansion (Aug 2024 to Sep 2025)",
      text: "Three weeks later, a portable Falcon Flex camera was added [[04:2]]. A month after that, a $20,800 order brought in FlockOS Advanced and gateways for 56 live-video streams from third-party cameras [[05:2]] [[05:4]]. Both forms sent billing to a Town of Bluffton email address [[04:2]] [[05:2]]. Flock then quoted live-streaming PTZ cameras [[06:2]] and solar video cameras [[07:2]] [[08:2]]. In September 2025 the Chief signed for five video cameras, dating the order form two days before the City's purchase order existed [[09:1]] [[09:4]]. Two weeks later she signed an amendment converting the portable camera to a permanent one, which Flock never countersigned [[10:1]] [[10:2]]." },
    { heading: "The oversight (September 2026)",
      text: "After roughly two years of operation, the only oversight record released is a one-paragraph memo. A captain told the chief he had audited the program on a single day, Labor Day, and found nothing wrong [[11:1]]. It doesn't say what was reviewed, how many searches were run, or who outside Beaufort has access." },
    { heading: "What it adds up to",
      text: "From these documents alone, Beaufort committed roughly $114,000 over the initial terms (year one ≈ $65,400) and about $48,400 a year in recurring fees, plus an unstated annual fee for the five video cameras [[03:7]] [[04:2]] [[05:2]] [[09:1]] [[10:1]]. The program went from 12 plate readers to 13 plate readers, 5 video cameras, and capacity for 56 third-party live-video streams, all under a contract written for plate readers." }
  ],

  money: [
    { item: "MSA Order: 9 Falcon + 3 Solar Falcon LR", cite: "03:7", year1: 44100, recurring: 36000, term: 80100 },
    { item: "Order Form: 1 Falcon Flex", cite: "04:2", year1: 3500, recurring: 3500, term: 7000 },
    { item: "Order Form: FlockOS Advanced + 4 Wing gateways", cite: "05:2", year1: 11400, recurring: 9400, term: 20800 },
    { item: "PO 00260037: 5 Solar Video Cameras", cite: "09:1", year1: 5750, recurring: null, term: 5750, note: "annual fee not stated" },
    { item: "Amendment: Flex → fixed Falcon", cite: "10:1", year1: 650, recurring: -500, term: 150, note: "net change; Flock did not countersign" }
  ],

  missing: [
    "Beaufort PD's written ALPR / Flock use policy or general order",
    "Flock search audit logs (each search, user and stated reason) and the data behind the Sept 2026 audit memo",
    "Every prior Flock audit since the August 2024 go-live",
    "FlockOS sharing settings: agencies Beaufort shares with and networks Beaufort searches",
    "Camera locations and the Deployment Plan (MSA §10.2)",
    "Sources of the 56 Wing video streams (whose cameras?)",
    "City Council agendas, minutes or votes approving the contract and each expansion",
    "All Flock invoices and City payments, and the unstated annual fee for the solar video cameras",
    "The agreement 'dated 10/01/24' cited in the amendment",
    "Exhibit C: Customer Implementation Guide",
    "Any record of Raven (audio) deployment or trial",
    "Correspondence sent to or from sprice@townofbluffton.com about the Beaufort Flock account"
  ]
});
