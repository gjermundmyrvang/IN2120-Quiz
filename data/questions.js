export const questions = {
  quizTitle: "IN2120 - Informasjonssikkerhet Quiz",
  description: "Test din kunnskap om sentrale konsepter fra IN2120-kurset!",
  questions: [
    {
      id: 1,
      question: "Hva er hovedmålet med informasjonssikkerhet?",
      options: [
        { id: "a", text: "Å forhindre alle typer sikkerhetsbrudd." },
        { id: "b", text: "Å eliminere alle trusler mot digitale systemer." },
        {
          id: "c",
          text: "Å oppnå en optimal balanse mellom sikkerhetsrisiko og sikkerhetstiltak.",
        },
        {
          id: "d",
          text: "Å garantere 100% konfidensialitet, integritet og tilgjengelighet for all informasjon.",
        },
      ],
      correctAnswer: "c",
      explanation:
        "Informasjonssikkerhet handler om å finne en god balanse mellom risiko og tiltak, da det er umulig å eliminere all risiko.",
    },
    {
      id: 2,
      question:
        "Hvilken av følgende er IKKE en anbefalt metode for å beskytte hemmelige krypteringsnøkler?",
      options: [
        { id: "a", text: "Lagring i en offentlig tilgjengelig database." },
        {
          id: "b",
          text: "Bruk av hierarkisk nøkkelstruktur med sesjonsnøkler.",
        },
        { id: "c", text: "Oppbevaring i manipuleringssikre enheter." },
        { id: "d", text: "Beskyttelse med sterke passord." },
      ],
      correctAnswer: "a",
      explanation:
        "Hemmelige nøkler skal aldri lagres ubeskyttet eller i offentlig tilgjengelige områder.",
    },
    {
      id: 3,
      question: "Hva er hovedformålet med en PKI (Public Key Infrastructure)?",
      options: [
        { id: "a", text: "Å kryptere all kommunikasjon på internett." },
        {
          id: "b",
          text: "Å garantere autentisitet av offentlige nøkler og forenkle nøkkeldistribusjon.",
        },
        { id: "c", text: "Å forhindre alle former for phishing-angrep." },
        { id: "d", text: "Å erstatte behovet for passord." },
      ],
      correctAnswer: "b",
      explanation:
        "PKI sikrer at offentlige nøkler er autentiske og kan distribueres på en sikker måte.",
    },
    {
      id: 4,
      question:
        "Hvilken type angrep utnytter svakheter i applikasjonskode for å manipulere database-spørringer?",
      options: [
        { id: "a", text: "Phishing" },
        { id: "b", text: "SQL injection" },
        { id: "c", text: "Drive-by-angrep" },
        { id: "d", text: "Deepfake" },
      ],
      correctAnswer: "b",
      explanation:
        "SQL injection angrep injiserer ondsinnet kode i database-spørringer for å få uautorisert tilgang.",
    },
    {
      id: 5,
      question:
        "Hvilket sikkerhetsmålsetting handler om å sikre at informasjon er tilgjengelig når det trengs?",
      options: [
        { id: "a", text: "Konfidensialitet" },
        { id: "b", text: "Integritet" },
        { id: "c", text: "Tilgjengelighet" },
        { id: "d", text: "Sporbarhet" },
      ],
      correctAnswer: "c",
      explanation:
        "Tilgjengelighet sikrer at autoriserte brukere har tilgang til informasjonen når de trenger det.",
    },
    {
      id: 6,
      question:
        "Hvilken av følgende er et eksempel på en 'kunnskapsbasert' autentikator?",
      options: [
        { id: "a", text: "Passord" },
        { id: "b", text: "Fingeravtrykksskanner" },
        { id: "c", text: "BankID-brikke" },
        { id: "d", text: "Adgangskort" },
      ],
      correctAnswer: "a",
      explanation:
        "Kunnskapsbaserte autentikatorer er basert på noe brukeren vet, som et passord.",
    },
    {
      id: 7,
      question: "Hvilket rammeverk for e-autentisering brukes i EU og Norge?",
      options: [
        { id: "a", text: "OAuth" },
        { id: "b", text: "OIDC" },
        { id: "c", text: "eIDAS" },
        { id: "d", text: "FEIDE" },
      ],
      correctAnswer: "c",
      explanation:
        "eIDAS er rammeverket som definerer ulike nivåer av sikkerhet for elektronisk identifikasjon og tillitstjenester.",
    },
    {
      id: 8,
      question: "Hvilken av følgende er IKKE en fase i 'cyber kill chain'?",
      options: [
        { id: "a", text: "Rekognosering" },
        { id: "b", text: "Kryptering" },
        { id: "c", text: "Overlevering" },
        { id: "d", text: "Utførelse" },
      ],
      correctAnswer: "b",
      explanation:
        "'Cyber kill chain' beskriver fasene i et cyberangrep, og kryptering er en sikkerhetsmekanisme, ikke en del av angrepsprosessen.",
    },
    {
      id: 9,
      question:
        "Hvilken type brannmur inspiserer pakkehoder og innhold for å ta beslutninger om trafikkflyt?",
      options: [
        { id: "a", text: "Tilstandsløs brannmur" },
        { id: "b", text: "Tilstandsfull brannmur" },
        { id: "c", text: "Applikasjonsbrannmur" },
        { id: "d", text: "Pakkefilterbrannmur" },
      ],
      correctAnswer: "b",
      explanation:
        "Tilstandsfulle brannmurer overvåker tilstanden til nettverksforbindelser og tar beslutninger basert på kontekst.",
    },
    {
      id: 10,
      question:
        "Hvilken av følgende er en viktig faktor for å styrke ansattes integritet i en organisasjon?",
      options: [
        { id: "a", text: "Overvåking av all ansattes aktivitet." },
        {
          id: "b",
          text: "Begrenset tilgang til informasjon for alle ansatte.",
        },
        {
          id: "c",
          text: "Etablering av en klar policy og retningslinjer for informasjonssikkerhet.",
        },
        {
          id: "d",
          text: "Hyppige sikkerhetsgjennomganger og trusler om straff for brudd.",
        },
      ],
      correctAnswer: "c",
      explanation:
        "En tydelig policy og retningslinjer skaper et rammeverk for forventet adferd og ansvarlighet.",
    },
    {
      id: 11,
      question: "Hva er 'kryptoperiode' i nøkkelhåndtering?",
      options: [
        { id: "a", text: "Tiden det tar å generere en ny krypteringsnøkkel." },
        {
          id: "b",
          text: "Tidsrommet en nøkkel er aktivt i bruk, fra kryptering til dekryptering.",
        },
        { id: "c", text: "Levetiden til et digitalt sertifikat." },
        { id: "d", text: "Tiden det tar å knekke en krypteringsnøkkel." },
      ],
      correctAnswer: "b",
      explanation:
        "Kryptoperioden omfatter både tiden nøkkelen brukes til å beskytte informasjon (kryptering/signering) og tiden den brukes til å prosessere informasjonen (dekryptering/verifisering). [1]",
    },
    {
      id: 12,
      question: "Hva er 'foroversikkerhet' (forward secrecy) i kryptografi?",
      options: [
        {
          id: "a",
          text: "At krypterte data forblir sikre selv om fremtidige krypteringsalgoritmer blir kompromittert.",
        },
        {
          id: "b",
          text: "At tidligere øktnøkler forblir sikre selv om en langsiktig nøkkel kompromitteres i fremtiden.",
        },
        {
          id: "c",
          text: "At en kompromittert nøkkel automatisk erstattes med en ny, sikker nøkkel.",
        },
        {
          id: "d",
          text: "At all kryptert kommunikasjon er beskyttet mot fremtidige kvantedatamaskiner.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "Foroversikkerhet er en viktig egenskap for å begrense skaden ved nøkkelkompromittering. [2]",
    },
    {
      id: 13,
      question: "Hva er forskjellen på et 'rootkit' og en 'trojaner'?",
      options: [
        {
          id: "a",
          text: "Et rootkit er mer avansert og vanskeligere å oppdage enn en trojaner.",
        },
        {
          id: "b",
          text: "En trojaner er designet for å gi uautorisert tilgang, mens et rootkit skjuler sin tilstedeværelse i systemet.",
        },
        {
          id: "c",
          text: "Et rootkit sprer seg automatisk over nettverket, mens en trojaner må installeres manuelt.",
        },
        {
          id: "d",
          text: "Det er ingen vesentlig forskjell, begrepene brukes ofte om hverandre.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "Hovedforskjellen ligger i formålet: en trojaner utfører en handling, mens et rootkit primært fokuserer på å forbli uoppdaget. [3, 4]",
    },
    {
      id: 14,
      question: "Hva er et 'buffer overflow' angrep?",
      options: [
        {
          id: "a",
          text: "Et angrep som overbelaster en server med trafikk for å gjøre den utilgjengelig.",
        },
        {
          id: "b",
          text: "Et angrep som utnytter en svakhet i minne-håndtering for å kjøre ondsinnet kode.",
        },
        {
          id: "c",
          text: "Et angrep som stjeler passord ved å overvåke tastetrykk.",
        },
        {
          id: "d",
          text: "Et angrep som bruker falske identiteter for å få tilgang til sensitive systemer.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "Ved å overskrive minne-buffere kan angripere manipulere programflyten og potensielt få kontroll over systemet. [5]",
    },
    {
      id: 15,
      question: "Hva er 'fuzzing' i sikkerhetstesting?",
      options: [
        {
          id: "a",
          text: "En teknikk for å skjule ondsinnet kode i tilsynelatende uskyldige filer.",
        },
        {
          id: "b",
          text: "En metode for å identifisere sårbarheter ved å sende tilfeldige eller ugyldige data til et system.",
        },
        {
          id: "c",
          text: "En type sosial manipulering der man bruker falske identiteter for å få tilgang til informasjon.",
        },
        {
          id: "d",
          text: "En krypteringsalgoritme som bruker tilfeldige nøkler for å sikre kommunikasjon.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "Fuzzing er en effektiv måte å avdekke uventede feil og potensielle sikkerhetshull i programvare. [6]",
    },
    {
      id: 16,
      question:
        "Hvilken metode for risikohåndtering innebærer å stoppe aktiviteten som forårsaker risikoen?",
      options: [
        { id: "a", text: "Risikoreduksjon" },
        { id: "b", text: "Risikooverføring" },
        { id: "c", text: "Risikoaksept" },
        { id: "d", text: "Risikounngåelse" },
      ],
      correctAnswer: "d",
      explanation:
        "Risikounngåelse er den mest drastiske metoden, men kan være nødvendig hvis risikoen er uakseptabelt høy. [7]",
    },
    {
      id: 17,
      question: "Hva er hovedformålet med en 'honeypot'?",
      options: [
        {
          id: "a",
          text: "Å tiltrekke og analysere angripere for å lære om deres taktikker.",
        },
        {
          id: "b",
          text: "Å distribuere falsk informasjon for å villede angripere.",
        },
        {
          id: "c",
          text: "Å kryptere sensitiv informasjon for å beskytte den mot angripere.",
        },
        {
          id: "d",
          text: "Å blokkere all nettverkstrafikk fra mistenkelige IP-adresser.",
        },
      ],
      correctAnswer: "a",
      explanation:
        "En honeypot fungerer som en felle for angripere, og gir verdifull innsikt i deres metoder og mål. [8]",
    },
    {
      id: 18,
      question: "Hva beskriver 'Detection Maturity Level' (DML) modellen?",
      options: [
        {
          id: "a",
          text: "En skala for å vurdere modenheten til sikkerhetsprogramvare.",
        },
        {
          id: "b",
          text: "Et rammeverk for å evaluere en organisasjons evne til å oppdage cybertrusler.",
        },
        {
          id: "c",
          text: "En metode for å beregne økonomisk tap forårsaket av cyberangrep.",
        },
        {
          id: "d",
          text: "En standard for klassifisering av sikkerhetshendelser.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "DML-modellen hjelper organisasjoner å forstå hvor effektive de er til å identifisere og analysere cybertrusler. [9]",
    },
    {
      id: 19,
      question: "Hva er 'MITRE ATT&CK' matrisen?",
      options: [
        { id: "a", text: "En database over kjente sårbarheter i programvare." },
        {
          id: "b",
          text: "En samling av beste praksis for sikkerhetskonfigurering.",
        },
        {
          id: "c",
          text: "En kunnskapsbase som beskriver taktikker og teknikker brukt i cyberangrep.",
        },
        {
          id: "d",
          text: "En standard for kryptering og autentisering av nettverkstrafikk.",
        },
      ],
      correctAnswer: "c",
      explanation:
        "MITRE ATT&CK er et verdifullt verktøy for å forstå og forsvare seg mot et bredt spekter av cybertrusler. [10]",
    },
    {
      id: 20,
      question:
        "Hvilken fargekode i 'Traffic Light Protocol' (TLP) indikerer informasjon som kan deles fritt?",
      options: [
        { id: "a", text: "Rød" },
        { id: "b", text: "Gul" },
        { id: "c", text: "Grønn" },
        { id: "d", text: "Hvit" },
      ],
      correctAnswer: "d",
      explanation:
        "TLP brukes for å klassifisere sensitiviteten til informasjon, og hvit indikerer ingen begrensninger for deling. [11]",
    },
    {
      id: 21,
      question:
        "Hvilken type brannmur holder oversikt over tilstanden til nettverksforbindelser?",
      options: [
        { id: "a", text: "Pakkefiltrerende brannmur" },
        { id: "b", text: "Applikasjonsbrannmur" },
        { id: "c", text: "Tilstandsbasert brannmur" },
        { id: "d", text: "Proxy-brannmur" },
      ],
      correctAnswer: "c",
      explanation:
        "En tilstandsbasert brannmur kan inspisere og kontrollere trafikk basert på konteksten til en pågående forbindelse.",
    },
    {
      id: 22,
      question: "Hva er et 'drive-by-angrep'?",
      options: [
        {
          id: "a",
          text: "Et angrep som utnytter fysisk nærhet til et trådløst nettverk.",
        },
        {
          id: "b",
          text: "Et angrep som infiserer en datamaskin uten brukerinteraksjon.",
        },
        {
          id: "c",
          text: "Et angrep som bruker stjålne brukernavn og passord.",
        },
        { id: "d", text: "Et angrep som overbelaster en server med trafikk." },
      ],
      correctAnswer: "b",
      explanation:
        "Drive-by-angrep skjer ofte via infiserte nettsider eller skadelige annonser.",
    },
    {
      id: 23,
      question:
        "Hvilken type phishing-angrep er rettet mot spesifikke individer eller organisasjoner?",
      options: [
        { id: "a", text: "Masse-phishing" },
        { id: "b", text: "Spyd-phishing" },
        { id: "c", text: "Klone-phishing" },
        { id: "d", text: "Direktørsvindel" },
      ],
      correctAnswer: "b",
      explanation:
        "Spyd-phishing bruker ofte personlig informasjon for å øke troverdigheten til angrepet.",
    },
    {
      id: 24,
      question: "Hva er 'lateral movement' i et cyberangrep?",
      options: [
        {
          id: "a",
          text: "Angriperens evne til å skjule sin tilstedeværelse i et nettverk.",
        },
        {
          id: "b",
          text: "Angriperens bevegelse fra en kompromittert datamaskin til andre systemer i nettverket.",
        },
        {
          id: "c",
          text: "Angriperens bruk av kryptering for å beskytte kommunikasjon.",
        },
        { id: "d", text: "Angriperens evne til å slette spor etter angrepet." },
      ],
      correctAnswer: "b",
      explanation:
        "Lateral movement er en vanlig taktikk for å få tilgang til verdifulle ressurser i et nettverk.",
    },
    {
      id: 25,
      question:
        "Hva er hovedformålet med 'Address Space Layout Randomization' (ASLR)?",
      options: [
        { id: "a", text: "Å kryptere sensitiv informasjon i minnet." },
        { id: "b", text: "Å forhindre buffer overflow-angrep." },
        { id: "c", text: "Å oppdage og blokkere skadelig programvare." },
        {
          id: "d",
          text: "Å overvåke nettverkstrafikk for mistenkelig aktivitet.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "ASLR gjør det vanskeligere for angripere å utnytte sårbarheter i minne-håndtering.",
    },
    {
      id: 26,
      question: "Hvilket verktøy kan brukes til å kartlegge et datanettverk?",
      options: [
        { id: "a", text: "Wireshark" },
        { id: "b", text: "Nmap" },
        { id: "c", text: "Metasploit" },
        { id: "d", text: "John the Ripper" },
      ],
      correctAnswer: "b",
      explanation:
        "Nmap kan brukes til å identifisere aktive verter og tjenester på et nettverk.",
    },
    {
      id: 27,
      question: "Hva er en 'nulldagssårbarhet'?",
      options: [
        { id: "a", text: "En sårbarhet som har eksistert i mer enn ett år." },
        {
          id: "b",
          text: "En sårbarhet som ikke er kjent av programvareleverandøren.",
        },
        { id: "c", text: "En sårbarhet som er enkel å utnytte." },
        { id: "d", text: "En sårbarhet som ikke kan utnyttes." },
      ],
      correctAnswer: "b",
      explanation:
        "Nulldagssårbarheter er spesielt farlige fordi det ikke finnes noen oppdateringer for å fikse dem.",
    },
    {
      id: 28,
      question: "Hva er et 'Sikkerhetsoperasjonssenter' (SOC)?",
      options: [
        {
          id: "a",
          text: "Et fysisk sikkert område for lagring av sensitive data.",
        },
        {
          id: "b",
          text: "Et team som overvåker og responderer på sikkerhetshendelser.",
        },
        {
          id: "c",
          text: "Et program som oppdager og blokkerer skadelig programvare.",
        },
        { id: "d", text: "En database over kjente cybertrusler." },
      ],
      correctAnswer: "b",
      explanation: "Et SOC er en viktig del av en organisasjons cyberforsvar.",
    },
    {
      id: 29,
      question: "Hva er hensikten med 'Cyber Kill Chain' modellen?",
      options: [
        { id: "a", text: "Å beskrive stadiene i et cyberangrep." },
        { id: "b", text: "Å beregne økonomisk tap forårsaket av cyberangrep." },
        { id: "c", text: "Å klassifisere ulike typer cybertrusler." },
        {
          id: "d",
          text: "Å utvikle sikkerhetsløsninger for å forhindre cyberangrep.",
        },
      ],
      correctAnswer: "a",
      explanation:
        "Cyber Kill Chain hjelper organisasjoner å forstå og forhindre cyberangrep.",
    },
    {
      id: 30,
      question:
        "Hvilken teknikk brukes for å manipulere et offer ved å appellere til deres følelse av forpliktelse?",
      options: [
        { id: "a", text: "Autoritet" },
        { id: "b", text: "Forpliktelseskryp" },
        { id: "c", text: "Gjensidighet" },
        { id: "d", text: "Sosial validering" },
      ],
      correctAnswer: "b",
      explanation:
        "Forpliktelseskryp utnytter menneskelig psykologi for å få offeret til å utføre handlinger de ellers ikke ville gjort.",
    },
    {
      id: 31,
      question: "Hva er hovedmålet med styring av informasjonssikkerhet?",
      options: [
        { id: "a", text: "Å eliminere all risiko for cyberangrep." },
        { id: "b", text: "Å minimere kostnadene for sikkerhetstiltak." },
        {
          id: "c",
          text: "Å oppnå en balansert tilnærming til sikkerhet og forretningsdrift.",
        },
        { id: "d", text: "Å overholde alle relevante lover og regler." },
      ],
      correctAnswer: "c",
      explanation:
        "Informasjonssikkerhet handler om å finne en balanse mellom sikkerhetsrisiko og sikkerhetstiltak, slik at man beskytter viktige verdier uten å hindre forretningsdriften. [1, 2]",
    },
    {
      id: 32,
      question:
        "Hvilket av følgende er IKKE en anbefalt strategi for risikohåndtering?",
      options: [
        { id: "a", text: "Risikoreduksjon" },
        { id: "b", text: "Risikooverføring" },
        { id: "c", text: "Risikoignorering" },
        { id: "d", text: "Risikounngåelse" },
      ],
      correctAnswer: "c",
      explanation:
        "Risikoignorering er sjelden en forsvarlig strategi, med mindre risikonivået er ekstremt lavt. Man bør vurdere andre strategier som risikoreduksjon, risikooverføring eller risikounngåelse. [3, 4]",
    },
    {
      id: 33,
      question: "Hva er en 'sårbarhet' i kontekst av informasjonssikkerhet?",
      options: [
        { id: "a", text: "En svakhet som kan utnyttes av en trussel." },
        { id: "b", text: "En person med onde hensikter." },
        { id: "c", text: "En hendelse som forårsaker skade." },
        {
          id: "d",
          text: "Et sikkerhetstiltak som ikke fungerer som det skal.",
        },
      ],
      correctAnswer: "a",
      explanation:
        "En sårbarhet er en svakhet eller et hull i sikkerheten som kan utnyttes av en trussel for å forårsake skade. [5]",
    },
    {
      id: 34,
      question: "Hva er en 'risikomatrise'?",
      options: [
        { id: "a", text: "Et verktøy for å visualisere nettverkstopologi." },
        {
          id: "b",
          text: "Et diagram som viser sammenhengen mellom trusler og sårbarheter.",
        },
        {
          id: "c",
          text: "En tabell som brukes til å beregne og kategorisere risikonivåer.",
        },
        { id: "d", text: "En liste over alle kjente cybertrusler." },
      ],
      correctAnswer: "c",
      explanation:
        "En risikomatrise er en tabell som kombinerer sannsynlighet og konsekvens for å beregne og kategorisere risikonivåer. [6]",
    },
    {
      id: 35,
      question: "Hva er 'risikoappetitt'?",
      options: [
        { id: "a", text: "En persons toleranse for risiko." },
        { id: "b", text: "En organisasjons vilje til å akseptere risiko." },
        { id: "c", text: "Sannsynligheten for at en hendelse skal inntreffe." },
        { id: "d", text: "Konsekvensen av en sikkerhetshendelse." },
      ],
      correctAnswer: "b",
      explanation:
        "Risikoappetitt beskriver hvor mye risiko en organisasjon er villig til å akseptere, ofte som en avveining mot kostnadene for risikoreduksjon. [4]",
    },
    {
      id: 36,
      question:
        "Hvilken krypteringsmetode krever at nøkkelen deles i hemmelighet mellom alle autoriserte parter?",
      options: [
        { id: "a", text: "Asymmetrisk kryptering" },
        { id: "b", text: "Symmetrisk kryptering" },
        { id: "c", text: "Hashing" },
        { id: "d", text: "Offentlig nøkkelinfrastruktur (PKI)" },
      ],
      correctAnswer: "b",
      explanation:
        "Symmetrisk kryptering bruker samme nøkkel for både kryptering og dekryptering, og denne nøkkelen må holdes hemmelig. [1]",
    },
    {
      id: 37,
      question: "Hva er hovedformålet med en 'kryptoperiode'?",
      options: [
        {
          id: "a",
          text: "Å sikre at krypteringsalgoritmer oppdateres regelmessig.",
        },
        {
          id: "b",
          text: "Å begrense mengden data som er beskyttet av en gitt nøkkel.",
        },
        {
          id: "c",
          text: "Å gjøre det vanskeligere for angripere å knekke kryptering.",
        },
        { id: "d", text: "Å forbedre ytelsen til kryptografiske operasjoner." },
      ],
      correctAnswer: "b",
      explanation:
        "En kryptoperiode begrenser tidsrommet en nøkkel er gyldig, og dermed mengden data som er beskyttet av den. Dette reduserer risikoen ved kompromittering. [2]",
    },
    {
      id: 38,
      question: "Hvilken type nøkkel krever autentisitetsbeskyttelse i en PKI?",
      options: [
        { id: "a", text: "Privat nøkkel" },
        { id: "b", text: "Offentlig nøkkel" },
        { id: "c", text: "Symmetrisk nøkkel" },
        { id: "d", text: "Session nøkkel" },
      ],
      correctAnswer: "b",
      explanation:
        "Forfalskning av en offentlig nøkkel kan føre til at gyldige digitale signaturer avvises, og at meldinger kan leses av uvedkommende. [3]",
    },
    {
      id: 39,
      question: "Hva er et X.509-sertifikat?",
      options: [
        { id: "a", text: "En type krypteringsalgoritme." },
        {
          id: "b",
          text: "En digital fil som binder en offentlig nøkkel til en identitet.",
        },
        { id: "c", text: "Et passord som brukes til å autentisere brukere." },
        {
          id: "d",
          text: "Et sikkerhetstiltak for å forhindre phishing-angrep.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "Et X.509-sertifikat brukes til å bekrefte autensiteten til en offentlig nøkkel og knytte den til en bestemt person eller organisasjon. [4]",
    },
    {
      id: 40,
      question:
        "Hvilken av følgende er en fordel med et enkelt hierarki i en PKI?",
      options: [
        { id: "a", text: "Skalerer godt til åpne nettverk." },
        { id: "b", text: "Enkel tillitsstruktur." },
        { id: "c", text: "Robust mot kompromittering av rot-CA." },
        {
          id: "d",
          text: "Tillater fleksible tillitsforhold mellom organisasjoner.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "I et enkelt hierarki er det en klar kjede av tillit fra rot-CA ned til alle subjektsertifikater. [5]",
    },
    {
      id: 41,
      question:
        "Hvilket angrep utnytter tillitsforholdet mellom en virksomhet og dens leverandører?",
      options: [
        { id: "a", text: "Phishing-angrep" },
        { id: "b", text: "DoS-angrep" },
        { id: "c", text: "Leveransekjedeangrep" },
        { id: "d", text: "SQL injection-angrep" },
      ],
      correctAnswer: "c",
      explanation:
        "Leveransekjedeangrep utnytter sårbarheter i produkter eller tjenester fra leverandører for å få tilgang til virksomhetens systemer. [6]",
    },
    {
      id: 42,
      question:
        "Hvilken type skadevare sprer seg automatisk til andre maskiner i nettverket?",
      options: [
        { id: "a", text: "Virus" },
        { id: "b", text: "Trojaner" },
        { id: "c", text: "Dataorm" },
        { id: "d", text: "Rootkit" },
      ],
      correctAnswer: "c",
      explanation:
        "Dataormer replikerer seg selv og sprer seg til andre maskiner uten brukerinteraksjon. [7, 8]",
    },
    {
      id: 43,
      question:
        "Hvilken sikkerhetsmekanisme brukes til å forhindre at skadelig kode kjører i minnet?",
      options: [
        { id: "a", text: "Brannmur" },
        { id: "b", text: "Antivirusprogramvare" },
        { id: "c", text: "Data Execution Prevention (DEP)" },
        { id: "d", text: "Address Space Layout Randomization (ASLR)" },
      ],
      correctAnswer: "c",
      explanation:
        "DEP markerer områder i minnet som ikke-eksekverbare, slik at skadelig kode ikke kan kjøre der. [9]",
    },
    {
      id: 44,
      question: "Hva er en 'hypervisor' i kontekst av virtualisering?",
      options: [
        { id: "a", text: "En type operativsystem." },
        { id: "b", text: "En programvare som styrer virtuelle maskiner." },
        { id: "c", text: "Et sikkerhetstiltak for å forhindre DoS-angrep." },
        { id: "d", text: "En protokoll for sikker kommunikasjon." },
      ],
      correctAnswer: "b",
      explanation:
        "Hypervisoren er programvaren som administrerer og isolerer virtuelle maskiner på en fysisk maskin. [9]",
    },
    {
      id: 45,
      question:
        "Hvilket angrep utnytter en uautorisert kommunikasjonskanal i et system?",
      options: [
        { id: "a", text: "Sidekanalangrep" },
        { id: "b", text: "Skjult kanalangrep" },
        { id: "c", text: "DoS-angrep" },
        { id: "d", text: "Man-in-the-middle-angrep" },
      ],
      correctAnswer: "b",
      explanation:
        "En skjult kanal er en utilsiktet kommunikasjonsvei som kan brukes til å lekke sensitiv informasjon. [10]",
    },
    {
      id: 46,
      question:
        "Hvilken type pentest gir pentesteren ingen forhåndsinformasjon om målsystemet?",
      options: [
        { id: "a", text: "Hvitboks-testing" },
        { id: "b", text: "Svartboks-testing" },
        { id: "c", text: "Gråboks-testing" },
        { id: "d", text: "Rødboks-testing" },
      ],
      correctAnswer: "b",
      explanation:
        "I svartboks-testing simulerer pentesteren et reelt angrep uten forkunnskaper om systemet. [11]",
    },
    {
      id: 47,
      question: "Hva er 'fuzzing' i kontekst av sikkerhetstesting?",
      options: [
        {
          id: "a",
          text: "Å bruke et ukjent program for å teste systemets stabilitet.",
        },
        {
          id: "b",
          text: "Å sende tilfeldige eller ugyldige data til et system for å finne feil.",
        },
        {
          id: "c",
          text: "Å overvåke nettverkstrafikk for å oppdage mistenkelig aktivitet.",
        },
        {
          id: "d",
          text: "Å analysere kildekoden til et program for å finne sårbarheter.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "Fuzzing brukes til å provosere frem feilmeldinger eller uventet oppførsel i et system ved å sende inn uforutsigbare data. [12]",
    },
    {
      id: 48,
      question:
        "Hvilken type angrep kan en angriper utføre ved å kompromittere en domenekontroller i et Windows-nettverk?",
      options: [
        { id: "a", text: "DoS-angrep" },
        { id: "b", text: "Phishing-angrep" },
        { id: "c", text: "Lateral movement" },
        { id: "d", text: "SQL injection-angrep" },
      ],
      correctAnswer: "c",
      explanation:
        "En kompromittert domenekontroller gir angriperen tilgang til alle brukerkontoer i domenet, og dermed mulighet til å bevege seg sideveis i nettverket. [Lateral movement fra forrige samtale]",
    },
    {
      id: 49,
      question: "Hva er 'prinsippet om minste privilegium'?",
      options: [
        { id: "a", text: "Å gi alle brukere samme tilgangsnivå." },
        {
          id: "b",
          text: "Å begrense brukertilgang til kun det som er nødvendig for jobben.",
        },
        { id: "c", text: "Å bruke komplekse passord for alle kontoer." },
        {
          id: "d",
          text: "Å segmentere nettverket for å isolere sensitive systemer.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "Prinsippet om minste privilegium reduserer skadepotensialet ved å begrense brukertilgang til kun det som er strengt nødvendig. [Lateral movement fra forrige samtale]",
    },
    {
      id: 50,
      question:
        "Hva er et 'honningkrukke' (honeypot) i kontekst av cybersikkerhet?",
      options: [
        {
          id: "a",
          text: "Et system designet for å tiltrekke seg og fange angripere.",
        },
        { id: "b", text: "En type krypteringsalgoritme." },
        { id: "c", text: "En sikkerhetsprotokoll for e-postkommunikasjon." },
        { id: "d", text: "Et program for å oppdage og fjerne virus." },
      ],
      correctAnswer: "a",
      explanation:
        "Honningkrukker brukes til å overvåke angriperes oppførsel og samle informasjon om angrepsteknikker. [13]",
    },
    {
      id: 51,
      question:
        "Hva er hovedoppgaven til et 'sikkerhetsoperasjonssenter' (SOC)?",
      options: [
        { id: "a", text: "Å utvikle sikkerhetsprogramvare." },
        { id: "b", text: "Å gi opplæring i informasjonssikkerhet." },
        {
          id: "c",
          text: "Å overvåke, analysere og respondere på sikkerhetshendelser.",
        },
        { id: "d", text: "Å utføre pentesting av systemer." },
      ],
      correctAnswer: "c",
      explanation:
        "Et SOC fungerer som et sentralt knutepunkt for håndtering av sikkerhetshendelser i en organisasjon. [13]",
    },
    {
      id: 52,
      question:
        "Hvilken modell beskriver trinnene i et avansert, målrettet cyberangrep?",
      options: [
        { id: "a", text: "OSI-modellen" },
        { id: "b", text: "Cyber Kill Chain" },
        { id: "c", text: "Diamond Model of Intrusion Analysis" },
        { id: "d", text: "MITRE ATT&CK Framework" },
      ],
      correctAnswer: "b",
      explanation:
        "Cyber Kill Chain-modellen identifiserer syv faser i et cyberangrep, fra rekognosering til måloppnåelse. [14]",
    },
    {
      id: 53,
      question:
        "Hvilken fase i Cyber Kill Chain handler om å samle informasjon om målet?",
      options: [
        { id: "a", text: "Rekognosering" },
        { id: "b", text: "Bevæpning" },
        { id: "c", text: "Overlevering" },
        { id: "d", text: "Utførelse" },
      ],
      correctAnswer: "a",
      explanation:
        "I rekognoseringsfasen kartlegger angriperen målet og identifiserer potensielle sårbarheter. [15]",
    },
    {
      id: 54,
      question:
        "Hvilken fargekode i Trafikklysprotokollen (TLP) indikerer at informasjon er strengt konfidensiell?",
      options: [
        { id: "a", text: "Rød" },
        { id: "b", text: "Gul" },
        { id: "c", text: "Grønn" },
        { id: "d", text: "Hvit" },
      ],
      correctAnswer: "a",
      explanation:
        "TLP-RØD brukes for informasjon som kun skal deles med et begrenset antall navngitte mottakere. [16]",
    },
    {
      id: 55,
      question:
        "Hvilken type cyberoperasjon fokuserer på å samle inn sensitiv informasjon fra et mål?",
      options: [
        { id: "a", text: "Cyberkrigføring" },
        { id: "b", text: "Cyberspionasje" },
        { id: "c", text: "Cyberkriminalitet" },
        { id: "d", text: "Cyberaktivisme" },
      ],
      correctAnswer: "b",
      explanation:
        "Cyberspionasje handler om å bruke digitale metoder for å tilegne seg hemmelig informasjon. [17]",
    },
    {
      id: 56,
      question:
        "Hvilket begrep beskriver et individs evne til å motstå fristelser til å misbruke tilgangsprivilegier?",
      options: [
        { id: "a", text: "Sikkerhetskultur" },
        { id: "b", text: "Personlig integritet" },
        { id: "c", text: "Sosial manipulering" },
        { id: "d", text: "Risikostyring" },
      ],
      correctAnswer: "b",
      explanation:
        "Personlig integritet handler om å handle etisk og i samsvar med organisasjonens retningslinjer, selv når det er muligheter for å gjøre noe galt. [1]",
    },
    {
      id: 57,
      question:
        "Hvilken type phishing-angrep retter seg mot spesifikke individer eller selskaper?",
      options: [
        { id: "a", text: "Massephishing" },
        { id: "b", text: "Spyd-phishing" },
        { id: "c", text: "Direktørsvindel" },
        { id: "d", text: "Klone-phishing" },
      ],
      correctAnswer: "b",
      explanation:
        "Spyd-phishing bruker målrettet informasjon for å lure offeret til å tro at meldingen er legitim. [2]",
    },
    {
      id: 58,
      question:
        "Hvilken sosial manipuleringsteknikk utnytter menneskers tendens til å adlyde autoriteter?",
      options: [
        { id: "a", text: "Bygge tillit" },
        { id: "b", text: "Indusere emosjoner" },
        { id: "c", text: "Fordreining av plikt og ansvar" },
        { id: "d", text: "Autoritet" },
      ],
      correctAnswer: "d",
      explanation:
        "Angripere kan utgi seg for å være autoritetspersoner for å lure offeret til å gi fra seg informasjon eller utføre handlinger. [3]",
    },
    {
      id: 59,
      question:
        "Hvilket prinsipp handler om å gi brukere minst mulig tilgang til systemer og data?",
      options: [
        { id: "a", text: "Prinsippet om minste privilegium" },
        { id: "b", text: "Prinsippet om separasjon av plikter" },
        { id: "c", text: "Prinsippet om forsvar i dybden" },
        { id: "d", text: "Prinsippet om sikkerhetskultur" },
      ],
      correctAnswer: "a",
      explanation:
        "Prinsippet om minste privilegium begrenser skadepotensialet ved å gi brukere kun tilgang til det som er strengt nødvendig for jobben. [4]",
    },
    {
      id: 60,
      question:
        "Hvilken standard definerer et rammeverk for styring av informasjonssikkerhet (ISMS)?",
      options: [
        { id: "a", text: "ISO/IEC 27001" },
        { id: "b", text: "ISO/IEC 27002" },
        { id: "c", text: "NIST Cybersecurity Framework" },
        { id: "d", text: "CIS Controls" },
      ],
      correctAnswer: "a",
      explanation:
        "ISO/IEC 27001 gir retningslinjer for etablering, implementering, vedlikehold og kontinuerlig forbedring av et ISMS. [5]",
    },
    {
      id: 61,
      question:
        "Hvilken standard gir en samling av sikkerhetstiltak for informasjonssikkerhet?",
      options: [
        { id: "a", text: "ISO/IEC 27001" },
        { id: "b", text: "ISO/IEC 27002" },
        { id: "c", text: "NIST Cybersecurity Framework" },
        { id: "d", text: "CIS Controls" },
      ],
      correctAnswer: "b",
      explanation:
        "ISO/IEC 27002 beskriver et bredt spekter av sikkerhetstiltak som organisasjoner kan vurdere å implementere. [5]",
    },
    {
      id: 62,
      question:
        "Hva er et 'Statement of Applicability' (SoA) i kontekst av ISO/IEC 27001?",
      options: [
        {
          id: "a",
          text: "En beskrivelse av organisasjonens sikkerhetspolicy.",
        },
        { id: "b", text: "En liste over identifiserte risikoer og tiltak." },
        {
          id: "c",
          text: "En erklæring om hvilke sikkerhetstiltak som er implementert.",
        },
        { id: "d", text: "En rapport fra en sikkerhetsrevisjon." },
      ],
      correctAnswer: "c",
      explanation:
        "En SoA dokumenterer hvilke tiltak fra ISO/IEC 27002 som er relevante for organisasjonen, og om de er implementert. [6]",
    },
    {
      id: 63,
      question:
        "Hvilken modell beskriver modenhetsnivåer for styring av informasjonssikkerhet?",
      options: [
        { id: "a", text: "CMMI (Capability Maturity Model Integration)" },
        { id: "b", text: "Cyber Kill Chain" },
        { id: "c", text: "Diamond Model of Intrusion Analysis" },
        { id: "d", text: "MITRE ATT&CK Framework" },
      ],
      correctAnswer: "a",
      explanation:
        "CMMI definerer fem modenhetsnivåer for styring av prosesser, inkludert informasjonssikkerhet. [7]",
    },
    {
      id: 64,
      question:
        "Hvilken av følgende er IKKE en del av risikostyringsprosessen?",
      options: [
        { id: "a", text: "Risikovurdering" },
        { id: "b", text: "Risikohåndtering" },
        { id: "c", text: "Sikkerhetsrevisjon" },
        { id: "d", text: "Risikokommunikasjon" },
      ],
      correctAnswer: "c",
      explanation:
        "Mens sikkerhetsrevisjon er viktig for informasjonssikkerhet, er det ikke en del av kjernen i risikostyringsprosessen. [8]",
    },
    {
      id: 65,
      question:
        "Hvilken faktor er IKKE en del av den detaljerte risikomodellen?",
      options: [
        { id: "a", text: "Trusselaktørstyrke" },
        { id: "b", text: "Sårbarhet for trusselscenario" },
        { id: "c", text: "Sannsynlighet for hendelse" },
        { id: "d", text: "Kostnad for sikkerhetstiltak" },
      ],
      correctAnswer: "d",
      explanation:
        "Den detaljerte risikomodellen fokuserer på faktorer som bidrar til risiko, men tar ikke direkte hensyn til kostnader ved tiltak. [9]",
    },
    {
      id: 66,
      question: "Hva er et 'sårbarhetsskanner'?",
      options: [
        { id: "a", text: "Et program for å fjerne virus fra datamaskiner." },
        {
          id: "b",
          text: "Et verktøy for å oppdage kjente sikkerhetshull i systemer.",
        },
        { id: "c", text: "En teknikk for å teste passordstyrke." },
        { id: "d", text: "En metode for å kryptere sensitive data." },
      ],
      correctAnswer: "b",
      explanation:
        "Sårbarhetsskannere automatiserer prosessen med å finne kjente svakheter i programvare og nettverk. [10]",
    },
    {
      id: 67,
      question: "Hvilken av følgende er en kvalitativ risikostyringsteknikk?",
      options: [
        { id: "a", text: "Risikomatrise" },
        { id: "b", text: "Monte Carlo-simulering" },
        { id: "c", text: "Kost-nytte-analyse" },
        { id: "d", text: "Verdisikkerhetsberegning" },
      ],
      correctAnswer: "a",
      explanation:
        "En risikomatrise bruker kategoriske beskrivelser for å vurdere sannsynlighet og konsekvens, og gir et kvalitativt risikonivå. [11]",
    },
    {
      id: 68,
      question:
        "Hvilken teknikk brukes for å visualisere risikoer i et diagram?",
      options: [
        { id: "a", text: "Gantt-diagram" },
        { id: "b", text: "Boblediagram" },
        { id: "c", text: "Flytdiagram" },
        { id: "d", text: "Histogram" },
      ],
      correctAnswer: "b",
      explanation:
        "Et boblediagram kan vise risikoer med bobler av ulik størrelse og farge, basert på sannsynlighet, konsekvens og andre faktorer. [12]",
    },
    {
      id: 69,
      question:
        "Hvilket av følgende er IKKE et aspekt ved helhetlig beslutningstaking om risiko?",
      options: [
        { id: "a", text: "Økonomi" },
        { id: "b", text: "Etikk" },
        { id: "c", text: "Jus" },
        { id: "d", text: "Teknologi" },
      ],
      correctAnswer: "d",
      explanation:
        "Mens teknologi er relevant for risikovurdering, er det ikke en primær dimensjon i den helhetlige beslutningsmodellen. [13]",
    },
    {
      id: 70,
      question:
        "Hva er viktig å gjøre etter at tiltak for risikostyring er implementert?",
      options: [
        { id: "a", text: "Ignorere risikoene, da de nå er håndtert." },
        { id: "b", text: "Fortsette å overvåke og evaluere tiltakene." },
        {
          id: "c",
          text: "Redusere sikkerhetsbudsjettet, da risikoen er lavere.",
        },
        { id: "d", text: "Fokusere utelukkende på nye teknologiske trusler." },
      ],
      correctAnswer: "b",
      explanation:
        "Risikoer og trusler endrer seg over tid, så det er avgjørende å kontinuerlig vurdere effektiviteten av tiltak. [13]",
    },
    {
      id: 71,
      question:
        "Hvilken av følgende er IKKE en god praksis for sikkerhetskopiering?",
      options: [
        {
          id: "a",
          text: "Lag regelmessige sikkerhetskopier av viktige data.",
        },
        {
          id: "b",
          text: "Oppbevar sikkerhetskopier på samme sted som originaldataene.",
        },
        {
          id: "c",
          text: "Test sikkerhetskopiene regelmessig for å sikre at de kan gjenopprettes.",
        },
        {
          id: "d",
          text: "Krypter sikkerhetskopiene for å beskytte sensitive data.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "Sikkerhetskopier bør oppbevares separat fra originaldataene for å beskytte mot tap i tilfelle en hendelse som påvirker det primære lagringsstedet.",
    },
    {
      id: 72,
      question:
        "Hva er hensikten med en 'honningkrukke' (honeypot) i et datanettverk?",
      options: [
        {
          id: "a",
          text: "Å tiltrekke seg angripere og overvåke deres aktiviteter.",
        },
        {
          id: "b",
          text: "Å lagre sensitive data på en sikker måte.",
        },
        {
          id: "c",
          text: "Å blokkere uautorisert tilgang til nettverket.",
        },
        {
          id: "d",
          text: "Å kryptere all nettverkstrafikk.",
        },
      ],
      correctAnswer: "a",
      explanation:
        "En honningkrukke er et falskt mål som er designet for å tiltrekke seg angripere. Ved å overvåke aktiviteten på honningkrukken, kan man lære om angripernes taktikker og teknikker.",
    },
    {
      id: 73,
      question:
        "Hvilket av følgende er et eksempel på et 'presentasjonsangrep' mot et biometrisk system?",
      options: [
        {
          id: "a",
          text: "Å bruke et stjålet passord for å få tilgang til et system.",
        },
        {
          id: "b",
          text: "Å utnytte en sårbarhet i programvaren for å omgå autentisering.",
        },
        {
          id: "c",
          text: "Å bruke et falskt fingeravtrykk for å lure en fingeravtrykksskanner.",
        },
        {
          id: "d",
          text: "Å installere skadevare på et system for å stjele data.",
        },
      ],
      correctAnswer: "c",
      explanation:
        "Et presentasjonsangrep er et angrep der en angriper prøver å lure et biometrisk system ved å presentere en falsk biometrisk prøve, for eksempel et falskt fingeravtrykk.",
    },
    {
      id: 74,
      question:
        "Hvilken av følgende er IKKE et prinsipp for god sikkerhetskultur?",
      options: [
        {
          id: "a",
          text: "Å skape en atmosfære av åpenhet og tillit.",
        },
        {
          id: "b",
          text: "Å straffe ansatte hardt for sikkerhetsbrudd.",
        },
        {
          id: "c",
          text: "Å oppmuntre til rapportering av sikkerhetshendelser.",
        },
        {
          id: "d",
          text: "Å gi regelmessig sikkerhetsopplæring til ansatte.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "Å straffe ansatte hardt for sikkerhetsbrudd kan føre til at ansatte skjuler hendelser, noe som kan forverre sikkerhetsproblemer. En positiv og støttende tilnærming er mer effektiv for å bygge en god sikkerhetskultur.",
    },
    {
      id: 75,
      question:
        "Hva er formålet med en 'SoA' (Statement of Applicability) i henhold til ISO/IEC 27001?",
      options: [
        {
          id: "a",
          text: "Å dokumentere hvilke sikkerhetstiltak som er implementert i organisasjonen.",
        },
        {
          id: "b",
          text: "Å beskrive organisasjonens sikkerhetspolicy.",
        },
        {
          id: "c",
          text: "Å identifisere alle risikoer som organisasjonen er utsatt for.",
        },
        {
          id: "d",
          text: "Å definere organisasjonens sikkerhetsmål.",
        },
      ],
      correctAnswer: "a",
      explanation:
        "En SoA er en erklæring som dokumenterer hvilke sikkerhetstiltak fra ISO/IEC 27002 som er relevante for organisasjonen og om de er implementert.",
    },
    {
      id: 76,
      question:
        "Hva er hovedforskjellen mellom 'styring av informasjonssikkerhet' og 'ledelse av informasjonssikkerhet'?",
      options: [
        {
          id: "a",
          text: "Styring handler om strategiske mål, mens ledelse handler om den daglige driften.",
        },
        {
          id: "b",
          text: "Styring er et teknisk fagfelt, mens ledelse er et administrativt fagfelt.",
        },
        {
          id: "c",
          text: "Styring er ansvarlig for å identifisere risikoer, mens ledelse er ansvarlig for å håndtere risikoer.",
        },
        {
          id: "d",
          text: "Det er ingen forskjell, begrepene brukes om hverandre.",
        },
      ],
      correctAnswer: "a",
      explanation:
        "Styring av informasjonssikkerhet handler om å definere strategiske målsettinger, mens ledelse av informasjonssikkerhet handler om å implementere og drifte tiltak for å oppnå disse målene.",
    },
    {
      id: 77,
      question:
        "Hvilken av følgende er IKKE et kjennetegn på god sikkerhetsstyring?",
      options: [
        {
          id: "a",
          text: "Ledelsen er godt informert om sikkerhetsrisikoer.",
        },
        {
          id: "b",
          text: "Sikkerhetstiltak er implementert uten hensyn til kostnader.",
        },
        {
          id: "c",
          text: "Roller og ansvarsområder for sikkerhet er tydelig definert.",
        },
        {
          id: "d",
          text: "Risikoer prioriteres basert på sannsynlighet og konsekvens.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "God sikkerhetsstyring handler om å finne en optimal balanse mellom sikkerhet og kostnader. Det er ikke bærekraftig å implementere alle mulige sikkerhetstiltak.",
    },
    {
      id: 78,
      question:
        "Hva er formålet med et ISMS (Information Security Management System)?",
      options: [
        {
          id: "a",
          text: "Å etablere et sett med regler for bruk av IT-systemer.",
        },
        {
          id: "b",
          text: "Å gi en oversikt over alle sikkerhetshendelser i organisasjonen.",
        },
        {
          id: "c",
          text: "Å definere organisasjonens sikkerhetsstrategi.",
        },
        {
          id: "d",
          text: "Å etablere et system for å styre og forbedre informasjonssikkerheten.",
        },
      ],
      correctAnswer: "d",
      explanation:
        "Et ISMS er et system for å styre og forbedre informasjonssikkerheten i en organisasjon. Det definerer prosesser for risikovurdering, risikohåndtering, implementering av sikkerhetstiltak, og evaluering av sikkerhetsarbeidet.",
    },
    {
      id: 79,
      question: "Hva er hensikten med ISO/IEC 27002?",
      options: [
        {
          id: "a",
          text: "Å definere et rammeverk for risikostyring.",
        },
        {
          id: "b",
          text: "Å gi en oversikt over beste praksis for informasjonssikkerhet.",
        },
        {
          id: "c",
          text: "Å sertifisere organisasjoner for god informasjonssikkerhet.",
        },
        {
          id: "d",
          text: "Å definere krav til et ISMS.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "ISO/IEC 27002 er en tiltaksbank for informasjonssikkerhet. Den beskriver et bredt spekter av sikkerhetstiltak som organisasjoner kan vurdere å implementere.",
    },
    {
      id: 80,
      question:
        "Hvilken av følgende er IKKE et av de fire abstrakte temaene som sikkerhetstiltakene i ISO/IEC 27002 er kategorisert under?",
      options: [
        {
          id: "a",
          text: "Organisatoriske tiltak",
        },
        {
          id: "b",
          text: "Personellsikkerhet",
        },
        {
          id: "c",
          text: "Fysiske tiltak",
        },
        {
          id: "d",
          text: "Juridiske tiltak",
        },
      ],
      correctAnswer: "d",
      explanation:
        "De fire abstrakte temaene i ISO/IEC 27002 er organisatoriske tiltak, personellsikkerhet, fysiske tiltak og teknologiske tiltak.",
    },
    {
      id: 81,
      question:
        "Hva er hensikten med attributtene som er knyttet til hvert sikkerhetstiltak i ISO/IEC 27002:2022?",
      options: [
        {
          id: "a",
          text: "Å gi en detaljert beskrivelse av hvordan tiltaket skal implementeres.",
        },
        {
          id: "b",
          text: "Å identifisere kostnadene ved å implementere tiltaket.",
        },
        {
          id: "c",
          text: "Å klassifisere tiltaket i henhold til ulike kategorier og egenskaper.",
        },
        {
          id: "d",
          text: "Å vurdere effektiviteten av tiltaket.",
        },
      ],
      correctAnswer: "c",
      explanation:
        "Attributtene i ISO/IEC 27002:2022 brukes til å klassifisere sikkerhetstiltak i henhold til ulike kategorier, for eksempel om tiltaket er forebyggende, oppdagende eller korrigerende, og hvilke informasjonssikkerhetsegenskaper tiltaket støtter.",
    },
    {
      id: 82,
      question:
        "Hvilken av følgende er en viktig forskjell mellom NIST Cybersecurity Framework og NSMs grunnprinsipper for IKT-sikkerhet?",
      options: [
        {
          id: "a",
          text: "NIST CSF fokuserer på amerikanske myndigheter, mens NSMs grunnprinsipper fokuserer på norske virksomheter.",
        },
        {
          id: "b",
          text: "NIST CSF er en standard, mens NSMs grunnprinsipper er en veileder.",
        },
        {
          id: "c",
          text: "NIST CSF definerer et sett med sikkerhetstiltak, mens NSMs grunnprinsipper definerer et sett med sikkerhetsfunksjoner.",
        },
        {
          id: "d",
          text: "NIST CSF er et rammeverk for risikostyring, mens NSMs grunnprinsipper er et rammeverk for sikkerhetsstyring.",
        },
      ],
      correctAnswer: "a",
      explanation:
        "NIST CSF er utviklet for amerikanske myndigheter, men brukes av virksomheter i mange land. NSMs grunnprinsipper er utviklet for norske virksomheter. Begge rammeverkene definerer sikkerhetsfunksjoner og tiltak.",
    },
    {
      id: 83,
      question:
        "Hva er hensikten med å kategorisere sikkerhetstiltak etter sikkerhetsfunksjoner?",
      options: [
        {
          id: "a",
          text: "Å gjøre det enklere å velge de mest kostnadseffektive tiltakene.",
        },
        {
          id: "b",
          text: "Å gruppere tiltak som støtter samme målsetting for informasjonssikkerhet.",
        },
        {
          id: "c",
          text: "Å identifisere hvilke tiltak som er mest relevante for en gitt type virksomhet.",
        },
        {
          id: "d",
          text: "Å vurdere modenheten til organisasjonens sikkerhetsstyring.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "Sikkerhetsfunksjoner representerer ulike målsettinger for informasjonssikkerhet. Ved å kategorisere tiltak etter sikkerhetsfunksjoner, kan man identifisere hvilke tiltak som bidrar til å oppnå de ulike målene.",
    },
    {
      id: 84,
      question:
        "Hvilken prioriteringsgruppe i NSMs grunnprinsipper for IKT-sikkerhet bør implementeres først?",
      options: [
        {
          id: "a",
          text: "Gruppe 1",
        },
        {
          id: "b",
          text: "Gruppe 2",
        },
        {
          id: "c",
          text: "Gruppe 3",
        },
        {
          id: "d",
          text: "Alle gruppene bør implementeres samtidig.",
        },
      ],
      correctAnswer: "a",
      explanation:
        "NSM anbefaler å implementere tiltakene i prioriteringsgruppe 1 først, da disse tiltakene anses som mest effektive for å redusere risiko for sikkerhetshendelser.",
    },
    {
      id: 85,
      question:
        "Hva er en 'utro tjener' (insider threat) i informasjonssikkerhetssammenheng?",
      options: [
        {
          id: "a",
          text: "En ekstern angriper som har fått tilgang til organisasjonens systemer.",
        },
        {
          id: "b",
          text: "En person med autorisert tilgang som misbruker denne tilgangen.",
        },
        {
          id: "c",
          text: "En sikkerhetshendelse som skyldes en teknisk feil.",
        },
        {
          id: "d",
          text: "En type skadevare som er designet for å stjele data.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "En utro tjener er en person som har autorisert tilgang til organisasjonens systemer eller data, men som misbruker denne tilgangen til å skade organisasjonen.",
    },
    {
      id: 86,
      question:
        "Hvordan kan en organisasjon styrke ansattes integritet og redusere risikoen for innsidetrusler?",
      options: [
        {
          id: "a",
          text: "Ved å overvåke all ansattes aktivitet nøye.",
        },
        {
          id: "b",
          text: "Ved å gi regelmessig opplæring om sikkerhetspolicy og etiske retningslinjer.",
        },
        {
          id: "c",
          text: "Ved å begrense ansattes tilgang til sensitive data til et minimum.",
        },
        {
          id: "d",
          text: "Ved å installere programvare som overvåker ansattes e-post og nettleseraktivitet.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "Opplæring om sikkerhetspolicy og etiske retningslinjer kan bidra til å øke ansattes bevissthet om sikkerhetsrisikoer og konsekvensene av sikkerhetsbrudd.",
    },
    {
      id: 87,
      question:
        "Hva er viktig å gjøre når en ansatt slutter i en organisasjon for å beskytte informasjonssikkerheten?",
      options: [
        {
          id: "a",
          text: "Å slette alle den tidligere ansattes brukerkontoer og tilganger.",
        },
        {
          id: "b",
          text: "Å gi den tidligere ansatte en kopi av alle data de har jobbet med.",
        },
        {
          id: "c",
          text: "Å endre passordene til alle systemer som den tidligere ansatte hadde tilgang til.",
        },
        {
          id: "d",
          text: "Å be den tidligere ansatte om å signere en taushetserklæring.",
        },
      ],
      correctAnswer: "a",
      explanation:
        "Når en ansatt slutter, er det viktig å slette alle deres brukerkontoer og tilganger for å forhindre uautorisert tilgang til organisasjonens systemer og data.",
    },
    {
      id: 88,
      question: "Hva er 'forpliktelseskryp' i sosial manipulering?",
      options: [
        {
          id: "a",
          text: "Å true offeret til å utføre handlinger.",
        },
        {
          id: "b",
          text: "Å utnytte offerets frykt for autoriteter.",
        },
        {
          id: "c",
          text: "Å få offeret til å utføre en rekke stadig mer alvorlige handlinger.",
        },
        {
          id: "d",
          text: "Å tilby offeret en belønning for å utføre handlinger.",
        },
      ],
      correctAnswer: "c",
      explanation:
        "Forpliktelseskryp er en taktikk der en angriper først får offeret til å utføre en liten, ufarlig handling, og deretter gradvis eskalerer forespørslene til mer alvorlige handlinger.",
    },
    {
      id: 89,
      question: "Hva er 'gjenytelse' i sosial manipulering?",
      options: [
        {
          id: "a",
          text: "Å tilby offeret en tjeneste for å få dem til å føle seg forpliktet til å gi noe tilbake.",
        },
        {
          id: "b",
          text: "Å late som om man er en venn eller kollega for å vinne offerets tillit.",
        },
        {
          id: "c",
          text: "Å utnytte offerets frykt for å bli straffet.",
        },
        {
          id: "d",
          text: "Å bruke tekniske midler for å lure offeret.",
        },
      ],
      correctAnswer: "a",
      explanation:
        "Gjenytelse er en taktikk der en angriper utnytter det menneskelige instinktet til å ville gjengjelde tjenester. Ved å tilby offeret en tjeneste, kan angriperen få dem til å føle seg forpliktet til å gi noe tilbake, noe som kan utnyttes til å få dem til å utføre handlinger som er skadelige for informasjonssikkerheten.",
    },
    {
      id: 90,
      question:
        "Hva er hensikten med å bruke 'fordreining av plikt og ansvar' i sosial manipulering?",
      options: [
        {
          id: "a",
          text: "Å få offeret til å føle seg ansvarlig for angriperens handlinger.",
        },
        {
          id: "b",
          text: "Å få offeret til å tro at det er greit å bryte sikkerhetsregler.",
        },
        {
          id: "c",
          text: "Å få offeret til å frykte konsekvensene av å ikke adlyde angriperen.",
        },
        {
          id: "d",
          text: "Å få offeret til å tvile på sin egen dømmekraft.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "Ved å forvrenge offerets oppfatning av plikt og ansvar, kan angriperen få dem til å tro at det er greit å bryte sikkerhetsregler, noe som kan gjøre det lettere å manipulere dem til å utføre handlinger som er skadelige for informasjonssikkerheten.",
    },
    {
      id: 91,
      question:
        "Hvilket av følgende er et eksempel på et sikkerhetstiltak som støtter konfidensialitet?",
      options: [
        { id: "a", text: "Sikkerhetskopiering av data" },
        { id: "b", text: "Kryptering av data" },
        { id: "c", text: "Redundante servere" },
        { id: "d", text: "Brannmur" },
      ],
      correctAnswer: "b",
      explanation:
        "Kryptering av data sikrer at kun autoriserte personer med riktig nøkkel kan få tilgang til informasjonen, og dermed ivareta konfidensialitet. [1]",
    },
    {
      id: 92,
      question:
        "Hva er hovedformålet med å implementere tilgangskontroll i et system?",
      options: [
        { id: "a", text: "Å forhindre alle typer systemfeil." },
        {
          id: "b",
          text: "Å begrense tilgangen til systemet til autoriserte brukere.",
        },
        { id: "c", text: "Å garantere at systemet alltid er tilgjengelig." },
        { id: "d", text: "Å sikre at data ikke kan endres eller slettes." },
      ],
      correctAnswer: "b",
      explanation:
        "Tilgangskontroll begrenser tilgangen til systemet til autoriserte brukere, og forhindrer uautorisert tilgang til sensitiv informasjon og funksjonalitet. [2]",
    },
    {
      id: 93,
      question:
        "Hvilket sikkerhetsmål fokuserer på å forhindre uautorisert endring eller sletting av data?",
      options: [
        { id: "a", text: "Konfidensialitet" },
        { id: "b", text: "Integritet" },
        { id: "c", text: "Tilgjengelighet" },
        { id: "d", text: "Autentisitet" },
      ],
      correctAnswer: "b",
      explanation:
        "Integritet som sikkerhetsmål fokuserer på å sikre at data ikke endres eller slettes uten autorisasjon. [3]",
    },
    {
      id: 94,
      question:
        "Hvilken type skadevare beskrives som kode innebygd i et legitimt program som aktiveres under bestemte betingelser?",
      options: [
        { id: "a", text: "Virus" },
        { id: "b", text: "Trojansk hest" },
        { id: "c", text: "Orm" },
        { id: "d", text: "Logisk bombe" },
      ],
      correctAnswer: "d",
      explanation:
        "En logisk bombe er en type skadevare som er innebygd i et legitimt program og aktiveres når bestemte betingelser er oppfylt. [4]",
    },
    {
      id: 95,
      question:
        "Hva er hensikten med å bruke en kryptoperiode for nøkler i kryptografi?",
      options: [
        { id: "a", text: "Å gjøre det vanskeligere å gjette nøkkelen" },
        {
          id: "b",
          text: "Å redusere datamengden som er beskyttet av en nøkkel",
        },
        { id: "c", text: "Å øke kompleksiteten til krypteringsalgoritmen" },
        { id: "d", text: "Å forhindre bruk av svake krypteringsalgoritmer" },
      ],
      correctAnswer: "b",
      explanation:
        "Kryptoperioden begrenser datamengden som er beskyttet av en gitt nøkkel, og reduserer risikoen for at en kompromittert nøkkel kan brukes til å dekryptere store mengder data. [5]",
    },
    {
      id: 96,
      question: "Hva er en X.509 sertifikatsti?",
      options: [
        {
          id: "a",
          text: "En liste over alle sertifikater utstedt av en sertifiseringsinstans.",
        },
        {
          id: "b",
          text: "Kjeden av sertifikater fra rotsertifikatet til subjektets sertifikat.",
        },
        {
          id: "c",
          text: "En samling av kryptografiske nøkler brukt til å signere og verifisere sertifikater.",
        },
        {
          id: "d",
          text: "En protokoll for sikker kommunikasjon mellom nettlesere og webservere.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "En X.509 sertifikatsti er kjeden av sertifikater som starter fra rotsertifikatet og ender med subjektets sertifikat, og brukes til å verifisere autentisiteten til sertifikatet. [6]",
    },
    {
      id: 97,
      question:
        "Hvilken type sosial manipulering utnytter folks generelle hjelpsomhet for å få tilgang til sensitiv informasjon?",
      options: [
        { id: "a", text: "Phishing" },
        { id: "b", text: "Pretexting" },
        { id: "c", text: "Baiting" },
        { id: "d", text: "Quid pro quo" },
      ],
      correctAnswer: "a",
      explanation:
        "Phishing-angrep utnytter folks hjelpsomhet ved å lure dem til å gi ut sensitiv informasjon, ofte gjennom falske e-poster eller nettsteder. [7]",
    },
    {
      id: 98,
      question: "Hva er SQL injection?",
      options: [
        { id: "a", text: "En teknikk for å kryptere data i en database." },
        {
          id: "b",
          text: "En type angrep som utnytter sårbarheter i webapplikasjoner for å få tilgang til databaser.",
        },
        {
          id: "c",
          text: "En metode for å sikkerhetskopiere data i en database.",
        },
        {
          id: "d",
          text: "En protokoll for sikker kommunikasjon med databaser.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "SQL injection er et angrep som utnytter sårbarheter i webapplikasjoner for å injisere ondsinnet SQL-kode og få tilgang til eller manipulere data i databasen. [8]",
    },
    {
      id: 99,
      question: "Hva er et leveransekjedeangrep?",
      options: [
        {
          id: "a",
          text: "Et angrep som retter seg mot transport av fysiske varer.",
        },
        {
          id: "b",
          text: "Et angrep som utnytter sårbarheter hos en partner eller leverandør for å få tilgang til et målsystem.",
        },
        {
          id: "c",
          text: "Et angrep som forhindrer levering av tjenester til brukere.",
        },
        {
          id: "d",
          text: "Et angrep som bruker skadevare til å stjele sensitiv informasjon.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "Et leveransekjedeangrep utnytter sårbarheter i leveransekjeden, for eksempel hos en partner eller leverandør, for å få tilgang til et målsystem. [9]",
    },
    {
      id: 100,
      question: "Hva er en skjult kanal i informasjonssikkerhet?",
      options: [
        {
          id: "a",
          text: "En kryptert kommunikasjonskanal som brukes til å skjule dataoverføringer.",
        },
        {
          id: "b",
          text: "En uautorisert kommunikasjonskanal som brukes til å omgå sikkerhetstiltak.",
        },
        {
          id: "c",
          text: "En kommunikasjonskanal som ikke er designet for dataoverføring, men som kan misbrukes til å lekke sensitiv informasjon.",
        },
        {
          id: "d",
          text: "En sikker kommunikasjonskanal som brukes til å beskytte data mot uautorisert tilgang.",
        },
      ],
      correctAnswer: "c",
      explanation:
        "En skjult kanal er en kommunikasjonskanal som ikke er ment for dataoverføring, men som kan misbrukes til å lekke sensitiv informasjon uten at det er tilsiktet. [10]",
    },
    {
      id: 101,
      question:
        "Hva er hovedforskjellen mellom symmetrisk og asymmetrisk kryptering?",
      options: [
        {
          id: "a",
          text: "Symmetrisk kryptering bruker samme nøkkel for kryptering og dekryptering, mens asymmetrisk kryptering bruker et nøkkelpar.",
        },
        {
          id: "b",
          text: "Symmetrisk kryptering er raskere, mens asymmetrisk kryptering er sikrere.",
        },
        {
          id: "c",
          text: "Symmetrisk kryptering brukes til å beskytte data i ro, mens asymmetrisk kryptering brukes til å beskytte data i bevegelse.",
        },
        {
          id: "d",
          text: "Symmetrisk kryptering er mer kompleks, mens asymmetrisk kryptering er enklere å implementere.",
        },
      ],
      correctAnswer: "a",
      explanation:
        "Den viktigste forskjellen ligger i bruken av nøkler. Symmetrisk kryptering bruker samme nøkkel for både kryptering og dekryptering, mens asymmetrisk kryptering bruker separate nøkler for disse operasjonene. [1]",
    },
    {
      id: 102,
      question: "Hva er hovedformålet med en hashfunksjon i kryptografi?",
      options: [
        {
          id: "a",
          text: "Å kryptere data slik at kun autoriserte personer kan lese dem.",
        },
        {
          id: "b",
          text: "Å generere en unik og fast lengde representasjon av data for å verifisere integritet.",
        },
        { id: "c", text: "Å komprimere data for å redusere lagringsbehovet." },
        { id: "d", text: "Å skjule sensitiv informasjon i en melding." },
      ],
      correctAnswer: "b",
      explanation:
        'En hashfunksjon lager en unik "fingeravtrykk" av dataene, slik at man kan verifisere at dataene ikke er endret. [2]',
    },
    {
      id: 103,
      question:
        "Hvilken type angrep forsøker å tvinge et system til å bruke en svakere krypteringsalgoritme?",
      options: [
        { id: "a", text: "Man-in-the-middle-angrep" },
        { id: "b", text: "Brute-force-angrep" },
        { id: "c", text: "Downgrade-angrep" },
        { id: "d", text: "DDoS-angrep" },
      ],
      correctAnswer: "c",
      explanation:
        "Et downgrade-angrep tvinger kommunikasjon til å bruke en svakere krypteringsalgoritme som er lettere å knekke. [3]",
    },
    {
      id: 104,
      question: "Hva er hovedformålet med en brannmur i et nettverk?",
      options: [
        { id: "a", text: "Å kryptere all nettverkstrafikk." },
        {
          id: "b",
          text: "Å kontrollere og filtrere nettverkstrafikk basert på forhåndsdefinerte regler.",
        },
        { id: "c", text: "Å forhindre alle typer nettverksangrep." },
        { id: "d", text: "Å overvåke og logge all nettverksaktivitet." },
      ],
      correctAnswer: "b",
      explanation:
        "En brannmur fungerer som en barriere mellom nettverk og filtrerer trafikk basert på regler for å tillate eller blokkere tilgang. [4]",
    },
    {
      id: 105,
      question: "Hva er et botnett?",
      options: [
        {
          id: "a",
          text: "Et nettverk av servere som brukes til å lagre og distribuere data.",
        },
        {
          id: "b",
          text: "En samling av kompromitterte datamaskiner som styres av en angriper.",
        },
        {
          id: "c",
          text: "Et trådløst nettverk som brukes til å koble til internett.",
        },
        {
          id: "d",
          text: "Et nettverk av datamaskiner som brukes til å kjøre komplekse beregninger.",
        },
      ],
      correctAnswer: "b",
      explanation:
        'Et botnett er et nettverk av infiserte datamaskiner, ofte kalt "bots" eller "zombier", som kan kontrolleres av en angriper. [5]',
    },
    {
      id: 106,
      question: "Hva er hovedformålet med pentesting?",
      options: [
        { id: "a", text: "Å utvikle sikker programvare." },
        {
          id: "b",
          text: "Å identifisere og utnytte sårbarheter i et system for å forbedre sikkerheten.",
        },
        {
          id: "c",
          text: "Å overvåke og logge all systemavtivitet for å oppdage angrep.",
        },
        { id: "d", text: "Å installere og konfigurere sikkerhetsprogramvare." },
      ],
      correctAnswer: "b",
      explanation:
        "Pentesting (penetration testing) simulerer angrep for å avdekke svakheter i et system og gi anbefalinger for å forbedre sikkerheten. [6]",
    },
    {
      id: 107,
      question:
        "Hvilket av følgende er et eksempel på et fysisk sikkerhetstiltak?",
      options: [
        { id: "a", text: "Brannmur" },
        { id: "b", text: "Tilgangskontrollsystem" },
        { id: "c", text: "Overvåkningskamera" },
        { id: "d", text: "Antivirusprogramvare" },
      ],
      correctAnswer: "c",
      explanation:
        "Et overvåkningskamera er et fysisk sikkerhetstiltak som brukes til å overvåke og registrere aktivitet i et område. [7]",
    },
    {
      id: 108,
      question: "Hva er hovedforskjellen mellom autentisering og autorisasjon?",
      options: [
        {
          id: "a",
          text: "Autentisering verifiserer identiteten til en bruker, mens autorisasjon bestemmer hvilke rettigheter en bruker har.",
        },
        {
          id: "b",
          text: "Autentisering gir tilgang til et system, mens autorisasjon beskytter data mot uautorisert tilgang.",
        },
        {
          id: "c",
          text: "Autentisering bruker passord, mens autorisasjon bruker digitale sertifikater.",
        },
        {
          id: "d",
          text: "Autentisering er et teknisk sikkerhetstiltak, mens autorisasjon er et administrativt sikkerhetstiltak.",
        },
      ],
      correctAnswer: "a",
      explanation:
        "Autentisering bekrefter hvem brukeren er, mens autorisasjon definerer hva brukeren har lov til å gjøre i systemet. [8]",
    },
    {
      id: 109,
      question: "Hva er et buffer overflow-angrep?",
      options: [
        {
          id: "a",
          text: "Et angrep som overbelaster et system med for mye trafikk.",
        },
        {
          id: "b",
          text: "Et angrep som utnytter en svakhet i programvare for å skrive data utenfor en tildelt buffer.",
        },
        {
          id: "c",
          text: "Et angrep som bruker skadevare til å stjele sensitiv informasjon.",
        },
        {
          id: "d",
          text: "Et angrep som forhindrer tilgang til et system eller en tjeneste.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "Ved et buffer overflow-angrep sendes mer data enn en buffer kan håndtere, noe som kan føre til at ondsinnet kode kjøres. [9]",
    },
    {
      id: 110,
      question:
        "Hva er hovedformålet med å implementere et sikkerhetsstyringssystem (ISMS)?",
      options: [
        {
          id: "a",
          text: "Å eliminere all risiko forbundet med informasjonssikkerhet.",
        },
        {
          id: "b",
          text: "Å etablere et rammeverk for å styre og forbedre informasjonssikkerheten i en organisasjon.",
        },
        { id: "c", text: "Å garantere at alle systemer er 100% sikre." },
        {
          id: "d",
          text: "Å redusere kostnadene forbundet med informasjonssikkerhet.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "Et ISMS gir en strukturert tilnærming til å håndtere og forbedre informasjonssikkerheten. [10]",
    },
    {
      id: 111,
      question:
        "Hvilken type risiko er knyttet til muligheten for at en låntaker ikke kan betale tilbake et lån?",
      options: [
        { id: "a", text: "Markedsrisiko" },
        { id: "b", text: "Operasjonell risiko" },
        { id: "c", text: "Kredittrisiko" },
        { id: "d", text: "Systemisk risiko" },
      ],
      correctAnswer: "c",
      explanation:
        "Kredittrisiko er risikoen for tap på grunn av manglende betalingsevne hos en låntaker. [11]",
    },
    {
      id: 112,
      question: "Hva er hovedformålet med risikohåndtering?",
      options: [
        { id: "a", text: "Å identifisere og eliminere alle risikoer." },
        { id: "b", text: "Å redusere risiko til et akseptabelt nivå." },
        {
          id: "c",
          text: "Å ignorere risikoer som er for vanskelige å håndtere.",
        },
        { id: "d", text: "Å overføre all risiko til en tredjepart." },
      ],
      correctAnswer: "b",
      explanation:
        "Risikohåndtering handler om å identifisere, vurdere og implementere tiltak for å redusere risiko til et nivå som er akseptabelt for organisasjonen. [12]",
    },
    {
      id: 113,
      question: "Hva er en risikoanalyse?",
      options: [
        {
          id: "a",
          text: "En prosess for å identifisere og vurdere potensielle trusler og sårbarheter.",
        },
        { id: "b", text: "En metode for å implementere sikkerhetstiltak." },
        { id: "c", text: "En plan for å håndtere sikkerhetshendelser." },
        {
          id: "d",
          text: "En evaluering av effektiviteten av eksisterende sikkerhetstiltak.",
        },
      ],
      correctAnswer: "a",
      explanation:
        "Risikoanalyse innebærer å identifisere og analysere potensielle trusler og sårbarheter for å vurdere risiko. [13]",
    },
    {
      id: 114,
      question: "Hvilken av følgende er en vanlig metode for risikohåndtering?",
      options: [
        { id: "a", text: "Risikoreduksjon" },
        { id: "b", text: "Risikoaksept" },
        { id: "c", text: "Risikooverføring" },
        { id: "d", text: "Alle de ovennevnte" },
      ],
      correctAnswer: "d",
      explanation:
        "Vanlige metoder for risikohåndtering inkluderer risikoreduksjon, risikoaksept og risikooverføring. [12]",
    },
    {
      id: 115,
      question: "Hva er en sikkerhetshendelse?",
      options: [
        {
          id: "a",
          text: "Enhver hendelse som kan påvirke sikkerheten til et system.",
        },
        { id: "b", text: "Et vellykket angrep på et system." },
        {
          id: "c",
          text: "En mistenkelig aktivitet som kan indikere et angrep.",
        },
        {
          id: "d",
          text: "En feil i et system som kan utnyttes av en angriper.",
        },
      ],
      correctAnswer: "a",
      explanation:
        "En sikkerhetshendelse kan være et faktisk angrep, et forsøk på angrep, eller en annen hendelse som kan true sikkerheten. [13]",
    },
    {
      id: 116,
      question: "Hva er hovedformålet med en hendelseshåndteringsplan?",
      options: [
        { id: "a", text: "Å forhindre alle sikkerhetshendelser." },
        {
          id: "b",
          text: "Å definere prosedyrer for å håndtere sikkerhetshendelser effektivt.",
        },
        { id: "c", text: "Å garantere at alle systemer er 100% sikre." },
        {
          id: "d",
          text: "Å redusere kostnadene forbundet med sikkerhetshendelser.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "En hendelseshåndteringsplan gir en strukturert tilnærming til å håndtere sikkerhetshendelser, inkludert identifisering, analyse, inneslutning og gjenoppretting. [14]",
    },
    {
      id: 117,
      question: "Hva er en sårbarhetsskanner?",
      options: [
        {
          id: "a",
          text: "En programvare som brukes til å identifisere kjente sårbarheter i et system.",
        },
        {
          id: "b",
          text: "En enhet som brukes til å beskytte et nettverk mot angrep.",
        },
        {
          id: "c",
          text: "En metode for å kryptere data for å beskytte dem mot uautorisert tilgang.",
        },
        {
          id: "d",
          text: "En tjeneste som gir informasjon om nye trusler og sårbarheter.",
        },
      ],
      correctAnswer: "a",
      explanation:
        "En sårbarhetsskanner brukes til å søke etter kjente svakheter i systemer og programvare, for eksempel OpenVAS. [15]",
    },
    {
      id: 118,
      question: "Hva er cyber threat intelligence (CTI)?",
      options: [
        { id: "a", text: "Informasjon om potensielle cybertrusler." },
        { id: "b", text: "En metode for å forhindre cyberangrep." },
        {
          id: "c",
          text: "En programvare som brukes til å beskytte nettverk mot angrep.",
        },
        { id: "d", text: "En tjeneste som gir opplæring i cybersikkerhet." },
      ],
      correctAnswer: "a",
      explanation:
        "Cyber threat intelligence er informasjon om trusler som kan brukes til å forstå og forberede seg på cyberangrep. [16]",
    },
    {
      id: 119,
      question: "Hva er hovedformålet med sikkerhetsbevissthetstrening?",
      options: [
        {
          id: "a",
          text: "Å lære ansatte å bruke komplekse sikkerhetssystemer.",
        },
        {
          id: "b",
          text: "Å øke ansattes forståelse av sikkerhetsrisikoer og -praksis.",
        },
        {
          id: "c",
          text: "Å eliminere all risiko forbundet med menneskelige feil.",
        },
        {
          id: "d",
          text: "Å redusere kostnadene forbundet med sikkerhetsopplæring.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "Sikkerhetsbevissthetstrening har som mål å gi ansatte kunnskap og ferdigheter for å ta gode sikkerhetsvalg og redusere risiko. [17]",
    },
    {
      id: 120,
      question: "Hva er et eksempel på en god praksis for passordsikkerhet?",
      options: [
        { id: "a", text: "Bruke samme passord for flere kontoer." },
        { id: "b", text: "Bruke et enkelt passord som er lett å huske." },
        { id: "c", text: "Skrive ned passord på en lapp." },
        { id: "d", text: "Bruke et sterkt og unikt passord for hver konto." },
      ],
      correctAnswer: "d",
      explanation:
        "Å bruke sterke og unike passord for hver konto reduserer risikoen for at en kompromittert konto kan gi tilgang til andre kontoer. [18]",
    },
    {
      id: 121,
      question: "Hva er en 'utro tjener' i kontekst av informasjonssikkerhet?",
      options: [
        {
          id: "a",
          text: "En ansatt som utilsiktet lekker sensitiv informasjon.",
        },
        { id: "b", text: "En ekstern hacker som bryter seg inn i et system." },
        {
          id: "c",
          text: "En ansatt som bevisst misbruker sin tilgang til å skade organisasjonen.",
        },
        {
          id: "d",
          text: "En programvarefeil som gjør systemet sårbart for angrep.",
        },
      ],
      correctAnswer: "c",
      explanation:
        "En utro tjener er en person med autorisert tilgang til et system som misbruker denne tilgangen til å forårsake skade. [1]",
    },
    {
      id: 122,
      question:
        "Hvilke tiltak kan en organisasjon iverksette for å styrke ansattes integritet og redusere risikoen for innsidetrusler?",
      options: [
        {
          id: "a",
          text: "Ignorere problemet, da det er usannsynlig at ansatte vil skade organisasjonen.",
        },
        {
          id: "b",
          text: "Gi alle ansatte tilgang til all informasjon for å fremme tillit.",
        },
        {
          id: "c",
          text: "Implementere strenge tilgangsbegrensninger og overvåke all ansattaktivitet.",
        },
        {
          id: "d",
          text: "Gjennomføre bevissthetstrening, tydelige policyer og gi støtte til ansatte i vanskelige situasjoner.",
        },
      ],
      correctAnswer: "d",
      explanation:
        "En kombinasjon av bevissthetstrening, tydelige retningslinjer og støtte til ansatte kan bidra til å forhindre innsidetrusler. [2]",
    },
    {
      id: 123,
      question:
        "Hvordan bør en organisasjon håndtere ansatte som slutter, for å minimere risikoen for at de tar med seg sensitiv informasjon eller misbruker sin tidligere tilgang?",
      options: [
        {
          id: "a",
          text: "La de ansatte beholde tilgangen til systemene i en periode etter at de har sluttet.",
        },
        {
          id: "b",
          text: "Slette all tilgang umiddelbart og eskortere den ansatte ut av bygningen.",
        },
        {
          id: "c",
          text: "Ha en veldefinert prosess for å avslutte tilgang, gjennomgå avtaler og gi nødvendig oppfølging.",
        },
        {
          id: "d",
          text: "Tillate ansatte å ta med seg kopier av all informasjon de har jobbet med.",
        },
      ],
      correctAnswer: "c",
      explanation:
        "En klar prosess for tilgangsstyring ved oppsigelse er viktig for å sikre informasjonssikkerheten. [3, 4]",
    },
    {
      id: 124,
      question:
        "Hva er NLP (Nevro Lingvistisk Programmering) i kontekst av sosial manipulering?",
      options: [
        {
          id: "a",
          text: "En metode for å forbedre kommunikasjon og forståelse mellom mennesker.",
        },
        {
          id: "b",
          text: "En teknikk for å manipulere andres tanker og handlinger gjennom språk og kroppsspråk.",
        },
        {
          id: "c",
          text: "En type programvare som brukes til å analysere og behandle språkdata.",
        },
        {
          id: "d",
          text: "En form for kunstig intelligens som brukes til å simulere menneskelig samtale.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "I kontekst av sosial manipulering kan NLP brukes til å påvirke offeret gjennom underbevisste signaler. [5]",
    },
    {
      id: 125,
      question: "Hva er formålet med å bygge tillit i sosial manipulering?",
      options: [
        {
          id: "a",
          text: "For å skape et genuin og positivt forhold til offeret.",
        },
        {
          id: "b",
          text: "For å utnytte offerets naturlige hjelpsomhet og tillitsfullhet til å oppnå et mål.",
        },
        {
          id: "c",
          text: "For å få offeret til å føle seg trygge og komfortable med å dele personlig informasjon.",
        },
        {
          id: "d",
          text: "For å overbevise offeret om å delta i ulovlige eller uetiske handlinger.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "Angripere bygger ofte tillit for å senke offerets forsvar og gjøre dem mer mottakelige for manipulasjon. [5]",
    },
    {
      id: 126,
      question: "Hva er 'dobbel uenighet' i sosial manipulering?",
      options: [
        {
          id: "a",
          text: "Å presentere to motstridende argumenter for å forvirre offeret.",
        },
        {
          id: "b",
          text: "Å be om to tjenester, for så å trekke tilbake den ene for å øke sjansen for å få ja til den andre.",
        },
        {
          id: "c",
          text: "Å late som om man er uenig med offeret for å vinne deres tillit.",
        },
        {
          id: "d",
          text: "Å skape en situasjon der offeret føler seg forpliktet til å gjøre to tjenester.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "Dobbel uenighet er en taktikk som utnytter offerets følelse av forpliktelse. [6]",
    },
    {
      id: 127,
      question:
        "Hvordan kan en angriper utnytte 'forpliktelseskryp' i sosial manipulering?",
      options: [
        {
          id: "a",
          text: "Ved å gradvis øke alvorlighetsgraden av forespørsler til offeret føler seg tvunget til å fortsette.",
        },
        {
          id: "b",
          text: "Ved å true offeret med negative konsekvenser hvis de ikke oppfyller forespørslene.",
        },
        {
          id: "c",
          text: "Ved å love offeret belønninger eller fordeler hvis de oppfyller forespørslene.",
        },
        {
          id: "d",
          text: "Ved å appellere til offerets følelse av lojalitet eller plikt.",
        },
      ],
      correctAnswer: "a",
      explanation:
        "Forpliktelseskryp er en gradvis prosess der offeret ledes inn i mer og mer kompromitterende handlinger. [7]",
    },
    {
      id: 128,
      question:
        "Hvilken taktikk bruker en angriper som utgir seg for å ha autoritet for å manipulere et offer?",
      options: [
        { id: "a", text: "Intimidering" },
        { id: "b", text: "Smiger" },
        { id: "c", text: "Gjenytelse" },
        { id: "d", text: "Autoritet" },
      ],
      correctAnswer: "d",
      explanation:
        "Ved å fremstå som en autoritetsfigur kan en angriper utnytte offerets tendens til å adlyde ordre. [8]",
    },
    {
      id: 129,
      question:
        "Hvilket av følgende er IKKE en del av NSMs fem-trinns modell for å bygge en sikkerhetskultur?",
      options: [
        { id: "a", text: "Fundament" },
        { id: "b", text: "Styring" },
        { id: "c", text: "Forsterkning" },
        { id: "d", text: "Deteksjon" },
      ],
      correctAnswer: "b",
      explanation:
        "NSMs modell består av Fundament, Bevissthet, Forsterket trening, Opprettholdelse og Deteksjon. [9]",
    },
    {
      id: 130,
      question:
        "Hva er et av hovedmålene med god sikkerhetsstyring i en organisasjon?",
      options: [
        { id: "a", text: "Å eliminere all risiko forbundet med virksomheten." },
        {
          id: "b",
          text: "Å skape en optimal balanse mellom ressursbruk og reduksjon av risiko.",
        },
        {
          id: "c",
          text: "Å implementere alle tilgjengelige sikkerhetstiltak, uavhengig av kostnad.",
        },
        {
          id: "d",
          text: "Å fokusere utelukkende på tekniske sikkerhetsløsninger.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "God sikkerhetsstyring handler om å finne en kostnadseffektiv måte å håndtere risiko på. [10]",
    },
    {
      id: 131,
      question:
        "Hvilket av følgende er IKKE et kjennetegn på god sikkerhetsstyring i en organisasjon?",
      options: [
        { id: "a", text: "Ledelsen er godt informert om sikkerhetsrisikoer." },
        {
          id: "b",
          text: "Sikkerhetstiltak implementeres uten hensyn til kostnader.",
        },
        { id: "c", text: "Risikoer prioriteres basert på en grundig analyse." },
        {
          id: "d",
          text: "Roller og ansvarsområder for sikkerhet er tydelig definert.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "Kostnadseffektivitet er en viktig del av god sikkerhetsstyring. [11]",
    },
    {
      id: 132,
      question: "Hva er formålet med ISO/IEC 27002?",
      options: [
        {
          id: "a",
          text: "Å definere et sertifiseringsprogram for informasjonssikkerhet.",
        },
        {
          id: "b",
          text: "Å gi en detaljert beskrivelse av et spesifikt sikkerhetstiltak.",
        },
        {
          id: "c",
          text: "Å tilby en omfattende samling av sikkerhetstiltak med implementeringsveiledning.",
        },
        {
          id: "d",
          text: "Å erstatte behovet for risikovurderinger i organisasjoner.",
        },
      ],
      correctAnswer: "c",
      explanation:
        "ISO/IEC 27002 er en tiltaksbank som kan brukes til å velge passende sikkerhetstiltak for en organisasjon. [12]",
    },
    {
      id: 133,
      question:
        "Hva er en SoA (Statement of Applicability) i forbindelse med ISO/IEC 27001?",
      options: [
        {
          id: "a",
          text: "En erklæring som bekrefter at organisasjonen har implementert alle tiltak i ISO/IEC 27002.",
        },
        {
          id: "b",
          text: "En oversikt over hvilke tiltak fra ISO/IEC 27002 som er relevante for organisasjonen og hvorfor.",
        },
        {
          id: "c",
          text: "En detaljert beskrivelse av organisasjonens sikkerhetspolicyer og prosedyrer.",
        },
        {
          id: "d",
          text: "En rapport som dokumenterer resultatene av en sikkerhetsrevisjon.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "En SoA er en viktig del av et ISMS basert på ISO/IEC 27001 og viser hvilke tiltak som er implementert. [13]",
    },
    {
      id: 134,
      question:
        "Hvilke fire abstrakte temaer kategoriseres sikkerhetstiltakene i ISO/IEC 27002 under?",
      options: [
        { id: "a", text: "Styring, Risiko, Overvåking, Respons" },
        { id: "b", text: "Organisatorisk, Personell, Fysisk, Teknologisk" },
        {
          id: "c",
          text: "Konfidensialitet, Integritet, Tilgjengelighet, Sporbarhet",
        },
        {
          id: "d",
          text: "Identifisering, Beskyttelse, Deteksjon, Gjenoppretting",
        },
      ],
      correctAnswer: "b",
      explanation:
        "ISO/IEC 27002 bruker en firedelt kategorisering for å strukturere sikkerhetstiltakene. [13]",
    },
    {
      id: 135,
      question: "Hva er hovedformålet med NIST Cybersecurity Framework?",
      options: [
        {
          id: "a",
          text: "Å etablere et obligatorisk sett med sikkerhetsregler for alle amerikanske bedrifter.",
        },
        {
          id: "b",
          text: "Å gi et rammeverk for å vurdere og forbedre cybersikkerhetspraksis i organisasjoner.",
        },
        { id: "c", text: "Å utvikle nye og innovative sikkerhetsteknologier." },
        {
          id: "d",
          text: "Å erstatte behovet for andre sikkerhetsstandarder og rammeverk.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "NIST CSF er et fleksibelt rammeverk som kan tilpasses ulike organisasjoner og bransjer. [14]",
    },
    {
      id: 136,
      question:
        "Hvilke seks sikkerhetsfunksjoner inngår i NIST Cybersecurity Framework?",
      options: [
        {
          id: "a",
          text: "Planlegge, Implementere, Overvåke, Evaluere, Forbedre, Rapportere",
        },
        {
          id: "b",
          text: "Styre, Identifisere, Beskytte, Detektere, Respondere, Gjenopprette",
        },
        {
          id: "c",
          text: "Autentisering, Autorisasjon, Regnskapsføring, Revisjon, Ikke-avvisning, Tilgjengelighet",
        },
        {
          id: "d",
          text: "Trusselmodellering, Risikovurdering, Tiltaksvalg, Implementering, Evaluering, Vedlikehold",
        },
      ],
      correctAnswer: "b",
      explanation:
        "NIST CSFs seks funksjoner dekker hele spekteret av cybersikkerhetsaktiviteter. [14]",
    },
    {
      id: 137,
      question:
        "Hva er hovedforskjellen mellom NIST Cybersecurity Framework og NSMs Grunnprinsipper for IKT-sikkerhet?",
      options: [
        {
          id: "a",
          text: "NIST CSF er et amerikansk rammeverk, mens NSMs Grunnprinsipper er et norsk rammeverk.",
        },
        {
          id: "b",
          text: "NIST CSF fokuserer på store organisasjoner, mens NSMs Grunnprinsipper er rettet mot små og mellomstore bedrifter.",
        },
        {
          id: "c",
          text: "NIST CSF er mer detaljert og omfattende enn NSMs Grunnprinsipper.",
        },
        {
          id: "d",
          text: "NIST CSF er et kommersielt produkt, mens NSMs Grunnprinsipper er fritt tilgjengelig.",
        },
      ],
      correctAnswer: "a",
      explanation:
        "Begge rammeverkene har likheter i struktur og innhold, men er utviklet for ulike nasjonale kontekster. [15]",
    },
    {
      id: 138,
      question:
        "Hva menes med 'modenhet' i styring og ledelse av informasjonssikkerhet?",
      options: [
        {
          id: "a",
          text: "Hvor lenge organisasjonen har hatt et formelt ISMS på plass.",
        },
        {
          id: "b",
          text: "Hvor effektivt organisasjonen håndterer og reduserer risiko.",
        },
        {
          id: "c",
          text: "Hvor mye penger organisasjonen bruker på sikkerhetstiltak.",
        },
        {
          id: "d",
          text: "Hvor mange sertifiseringer organisasjonen har oppnådd innen informasjonssikkerhet.",
        },
      ],
      correctAnswer: "b",
      explanation:
        "Modenhet i informasjonssikkerhet handler om organisasjonens evne til å systematisk styre og forbedre sikkerhetspraksis. [16]",
    },
    {
      id: 139,
      question:
        "Hvilken av følgende er den mest modne tilnærmingen til risikostyring i henhold til CMMI-modellen?",
      options: [
        { id: "a", text: "Fraværende" },
        { id: "b", text: "Tilfeldig" },
        { id: "c", text: "Systematisert" },
        { id: "d", text: "Formalisert" },
      ],
      correctAnswer: "c",
      explanation:
        "CMMI-modellen beskriver en stige med økende modenhet, der 'Systematisert' representerer et høyt nivå av risikostyringspraksis. [17]",
    },
    {
      id: 140,
      question: "Hva er definisjonen på 'risiko' i henhold til ISO 31000?",
      options: [
        {
          id: "a",
          text: "Sannsynligheten for at en uønsket hendelse skal inntreffe.",
        },
        { id: "b", text: "De negative konsekvensene av en uønsket hendelse." },
        { id: "c", text: "Effekten av usikkerhet på mål." },
        { id: "d", text: "Enhver trussel mot en organisasjons verdier." },
      ],
      correctAnswer: "c",
      explanation:
        "ISO 31000 definerer risiko bredt som effekten av usikkerhet på målsettinger. [18]",
    },
  ],
};
