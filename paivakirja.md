# Mobiiliohjelmointi opintojakson lopputyön päiväkirja

Tämä dokumentti on päiväkirja/raportti mobiiliohjelmointi lopputyön kehittämisprosessista.

## Aiheen valinta ja sovelluksen suunnittelu

Valitsin mobiilisovelluksen aiheeksi itseäni kiinnostavan aiheen jonka alasta minulla on käytännön kokemusta. Olen itse fysioterapeutti ja harrastan aktiivisesti voimaharjoittelua. Lähipiirissäni on yrittäjä, joka toimii fysioterapeuttina ja valmentajana ja suunnittelee ja myy itse tekemiään online-valmennuksia ja yksillöllisiä harjoitusohjelmia. Ideana on tehdä sovellus, jota yrittäjä voi käyttää sekä valmiiden online-ohjelmien suunnitteluun ja jakamiseen asiakkaidensa kanssa sekä yksillöllisten harjoitusohjelmien tekemiseen.

### Suunnittelu ja omat tavoitteet

Aloitin suunnittelun laatimalla listan sovelluksen vaatimuksista. Jaoin vaatimukset "asiakkaani" kanssa ja sain hänen hyväksynnän. Vaatimukset ja alustava tietokantamalli löytyvät [täältä](README.md). Tavoitteet, jotka halusin omalta kannalta saavuttaa:

- Kokonaisen mobiilisovelluksen (React Native) suunnittelu ja kehitys
- React:in ominaisuuksien kertaus
- Panostaminen järjestelmälliseen kansiorakenteeseen ja selkeään koodiin
- NoSQL-tietokantaosaamisen kertaaminen ja syventäminen hyödyntämällä Firestorea (datan hakeminen kantaan ja datan hakeminen kannasta)
- Tiedon jakaminen komponenttien välillä (useContext & createContext)
- Sellaisen navigaation rakentaminen, joka reagoi käyttäjän rooliin (sama sovellus sekä valmentajalle että asiakkaalle)
- Firebase authentication:iin perehtyminen ja soveltaminen käytännössä
- Yksillöllisen kalenterinäkymän rakentaminen asiakkaalle

### Rajaus

Melko nopeasti huomasin, että valitsemani aihealue on erittäin laaja. Olin lähtenyt rakentamaan sovellusta, jonka kehittämiseen työelämässä varmasti tarvittaisiin usean henkilön pidempiaikainen työpanos. Työn alussa keskityin luomaan perus komponentteja ja screenejä ja onnistuin ensin luomaan toimivan useContextin, jolla navigaationäkymä vaihtui aktiivisen käyttäjän roolin perusteella. Käytin ensin kovakoodattua demodataa. Tämän jälkeen perehdyin Firestoreen ja onnistuin luomaan sinne yhteyden, muutin käyttäjätietoja käyttävän useContextin käyttämään kantaan suoraan tallennettuja käyttäjiä. Loin vielä toisen useContextin, jolla haetaan kaikki tallennettut sessiot. Tässä kohtaa aloin huomata, miten laaja aihe oli, ja etten tulisi ehtimään tekemään kaikkia toiminnallisuuksia. Päätin jättää yksillöllisen kalenterinäkymän tekemisen pois ja keskittyä autentikointiin.

### Firebase Autentikointi

Sain asennettua autentikointiin tarvittavan kirjaston ja luotua firebasen dokumentatoinnin perusteella konfiguraatiotiedoston ja apufunktioita. Valitettavasti sovellukseen kehitykseen käytössä ollut aika väheni merkittävästi, kun jouduin hoitamaan sairaita lapsiani... En saanut autentikointia toimimaan, mutta en myöskään ehtinyt rauhassa perehtyä dokumentaatiioon ja esim katsoa heidän tekemiä tutoriaaliviedoita. Jotain ilmeisesti tarvittavaa osaa en saanut ladattua jonkun versioiden yhteensopivuusongelman vuoksi mutta en ehtinyt selvittää ongelmaa tarkemmin. Jätin autentikointiyritykset develop-haaraan ja jatkoin sovelluksen loppuun kehittämistä ilman sitä.

## Saavutukset, joihin olen tyytyväinen

Sain luotua sovelluksen, jolla valmentaja voi lisätä sessioita ja harjoitteita sekä tarkastella asiakkaiden harjoitustietoja.
Asiakas voi tarkastella tulevia sessioita harjoituksineen sekä avata yksittäisen session laajemmat tiedot, kommentoida harjoituksia ja tallentaa sessioita. Erityisen tyytyväinen olen toimiviin SessionContext ja UserContext hookeihin, joiden avulla dataa jaetaan sekä roolin perusteella vaihtuvaan navigaatioon. Olen myös tyytyväinen, että samalla tuli perehdyttyä TypeScriptiin ja että sain luotua omia tyyppejä ja hyödynnettyä niitä. Huomasin miten helposti NoSQL-tietokantaan voi tallentaa vääränlaista dataa mutta tyyppejä käyttämällä tämä ongelma voidaan minimoida. En koskaan ole pitänyt JavaScriptistä koska se on Javaan verrattuna jotenkin sekava ja liian joustava kieli omaan makuuni. TypeScriptin ominaisuuksissa on vielä paljon opittavaa, mutta tämän opintojakson jälkeen sitä uskaltaa alkaa käyttää.

## Mitä jäi puuttumaan

Sovellus ei ole läheskään siinä kunnossa, kun mihin ajattelin voivani pystyä. Kehitysprosessin aikana tuli realiteetit vastaan, ja ymmärsin miten paljon aikaa kaikki suunnittelemani toiminnallisuudet tulevat viemään. Turhauttavaa oli, kun en saanut autentikointia toimimaan ja käytin siihen jonkun verran aikaa.
