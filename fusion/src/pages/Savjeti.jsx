import React, { useContext } from "react";
import TempSlika from "../assets/hero-image.jpg";
import { ProductContext } from "../context/ProductContext";
import Product from "../components/Product";

const Savjeti = () => {
  return (
    <section id="productsSection" className="py-20">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold  mt-10 text-center">
          Savjeti i informacije
        </h1>
        <p className="text-1xl mb-10 mt-10 text-center">
          Ispod pročitajte najbitnije informacije i savjete o našim proizvodima
          i uslugama
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between mx-4 lg:mx-20 mt-8 lg:mt-20 space-y-4 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-45 text-left text-lg mb-8 lg:mb-0">
          <p className="text-gray-700 leading-relaxed">
            Seksualnost osjetljivo je područje ljudskog života, posebno kada se
            pojave problemi. U Bosni I Hercegovini, zajedno ima oko 600.000
            ljudi koji pate od erektilne disfunkcije. Međutim, danas se može o
            tome otvoreno razgovarati, pa time i pomoć može biti učinkovitija.
            To je djelimično plod dolaska Kamagra proizvoda na tržište. U
            nastavku možete dobiti puno informacija o najaktualnijim pitanjima
            seksualnosti.
          </p>
        </div>
        <div className="w-full lg:w-1/2 relative flex gap-4">
          <img
            className="flex-1 h-64 lg:h-350 object-cover rounded-lg shadow-lg"
            alt="img"
            src="https://kamagra-balkan.com/wp-content/uploads/2022/12/black-widow.jpg"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between mx-4 lg:mx-20 mt-8 lg:mt-20 space-y-4 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/2 relative flex gap-4">
          <img
            className="flex-1 h-64 lg:h-350 object-cover rounded-lg shadow-lg"
            alt="img"
            src={TempSlika}
          />
        </div>
        <div className="w-full lg:w-45 text-left text-lg mb-8 lg:mb-0">
          <h2 className="font-semibold mb-4">Erektilna disfunkcija</h2>
          <p className="text-gray-700 leading-relaxed">
            U Bosni i Hercegovini, jedan od pet muškaraca ima probleme s
            erekcijom, što znači 320.000 ljudi. Time ima problema 10% muškaraca
            između 18. i 50. godine starosti, a čak više od 50% muškaraca
            starijih od 50 godina. U svijetu, trenutno ima probleme s erekcijom
            više od 150 milijuna ljudi. Probleme s erekcijom ima svaki šesti
            muškarac između 20. i 75. godine starosti, a već svaki drugi čovjek
            između 40. i 70. godine. S obzirom na procjenu starenja stanovništva
            do 2025. godine u svijetu će više od 320 milijuna ljudi imati
            poremećaj erekcije.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between mx-4 lg:mx-20 mt-8 lg:mt-20 space-y-4 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-45 text-left text-lg mb-8 lg:mb-0">
          <h2 className="font-semibold mb-4">
            UZROCI PROBLEMA S POTENCIJOM - KAMAGRA
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Uzroci problema s potencijom svestrani su. Do erektilne disfunkcije
            uglavnom dolazi zbog hrjedećih zdravstvenih problema: ateroskleroza,
            dijabetes, bolesti srca i krvotoka, problemi bubrega i jetre,
            bolesti živčanog sustava, hormonski poremećaji, prekomjerna ili
            prehraba funkcija štitnjače, depresija i hrično.
          </p>
        </div>
        <div className="w-full lg:w-1/2 relative flex gap-4">
          <img
            className="flex-1 h-64 lg:h-350 object-cover rounded-lg shadow-lg"
            alt="img"
            src="https://kamagra.ba/wp-content/uploads/2023/09/kamagra-oral-jelly-1.jpg"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between mx-4 lg:mx-20 mt-8 lg:mt-20 space-y-4 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/2 relative flex gap-4">
          <img
            className="flex-1 h-64 lg:h-350 object-cover rounded-lg shadow-lg"
            alt="img"
            src="https://www.livemint.com/lm-img/img/2023/07/30/1600x900/It-is-a-noble-profession-but-becoming-a-doctor-is-_1690736586642.jpg"
          />
        </div>
        <div className="w-full lg:w-45 text-left text-lg mb-8 lg:mb-0">
          <h2 className="font-semibold mb-4">
            TO JE EREKTILNA DISFUNKCIJA ODNOSNO POREMEĆAJ EREKCIJE?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Erektilna disfunkcija seksualni je poremećaj , zbog kojeg čovjek ne
            može postići ili održavati dovoljno jake erekcije penisa za uspješan
            spolni odnos. Poremećaj erekcije može utjecati na život ljubavnih
            partnera, pogotovo ako se izbjegava razgovor o tom problemu.
            Poremećaj erekcije ne znači da je čovjek neplodan, ili da nije u
            stanju postići orgazam. To znači da otvrdnuće penisa nije dovoljno i
            ne traje dovoljno dugo da bi omogućilo uspješan početak i završetak
            seksualnog čina.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between mx-4 lg:mx-20 mt-8 lg:mt-20 space-y-4 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-45 text-left text-lg mb-8 lg:mb-0">
          <h2 className="font-semibold mb-4">
            RJEŠENJE JE KORIŠTENJE KAMAGRA PROIZVODA I JE LI DOKAZANO DA KAMAGRA
            PROIZVODI ZAISTA IMAJU UČINAK?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Jedno od brzih i dugoročnih rješenja za erektilnu disfunkciju,
            odnosno poremećaj erekcije, je korištenje Kamagra proizvoda. Kamagra
            je svakako trenutačno najbolje rješenje! Kamagra gel i Kamagra
            tablete in ostale tablete za potenciju sadrže sildenafil citrat,
            koji je odavno poznat kao jedna od najučinkovitiji tvari u liječenju
            erektilne disfunkcije. Osim toga, u cijelom svijetu, sildenafil je
            prepoznat kao tvar koja može izliječiti erektilnu disfunkciju i u
            kratkom vremenu povećati seksualnu snagu. Učinkovitost Kamagre
            dokazana je kliničkim studijama i potvrđena brojnim pregledima
            bolesnika koji koriste Kamagro i kojima se seksualni život poboljšao
            i sada se osjećaju kao pravi muškarci.
          </p>
        </div>
        <div className="w-full lg:w-1/2 relative flex gap-4">
          <img
            className="flex-1 h-64 lg:h-350 object-cover rounded-lg shadow-lg"
            alt="img"
            src="https://kamagra.ba/wp-content/uploads/2021/02/kamagra-gold.jpg"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between mx-4 lg:mx-20 mt-8 lg:mt-20 space-y-4 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/2 relative flex gap-4">
          <img
            className="flex-1 h-64 lg:h-350 object-cover rounded-lg shadow-lg"
            alt="img"
            src="https://kamagrabosna.ba/wp-content/uploads/2020/11/kamagrasumecetablets.jpg"
          />
        </div>
        <div className="w-full lg:w-45 text-left text-lg mb-8 lg:mb-0">
          <h2 className="font-semibold mb-4">
            NA KAKAV NAČIN DJELUJE KAMAGRA?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Jedno od brzih i dugoročnih rješenja za erektilnu disfunkciju,
            odnosno poremećaj erekcije, je uporaba Kamagra proizvodov. Kamagra
            je svakako trenutačno najbolje rješenje! Preuranjena ejakulacija ili
            na latinskom ejaculatio praecox jedan je od najčešćih problema u
            muškaraca. Time se suočava oko 30% muškaraca. Ni ovaj poremećaj nije
            povezan s dobi. Javlja se u svim dobnim skupinama. Preuranjena
            ejakulacija i erektilna disfunkcija često se pojavljaju istovremeno.
            Dijagnoza prerane ejakulacije često sakriva erektilnu disfunkciju i
            ne prepoznaje se ako liječnik ne uzima u obzir detaljnu seksualnu
            anamnezu.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between mx-4 lg:mx-20 mt-8 lg:mt-20 space-y-4 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-45 text-left text-lg mb-8 lg:mb-0">
          <h2 className="font-semibold mb-4">
            KAKO ZNAMO DA SE RADI O PRERANOJ EJAKULACIJI?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            O preranom izljevu radi se kad se javlja bez prethodne stimulacije
            ili samo s minimalnom stimulacijom odnosno odmah nakon penetracije,
            a prije nego bih to muškarac želio, a muškarac nema ili ima jedino
            minimalnu kontrolu, što veoma smeta pogođenom ili partneru. O
            preuranjenoj ejakulaciji radi se, ako vrijeme između penetracije i
            ejakulacije iznosi manje od dvije minute.
          </p>
        </div>
        <div className="w-full lg:w-1/2 relative flex gap-4">
          <img
            className="flex-1 h-64 lg:h-350 object-cover rounded-lg shadow-lg"
            alt="img"
            src="https://www.kamagraofficialsrbija.rs/wp-content/uploads/2023/05/Macun-Med-Kesice-72grama.webp"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between mx-4 lg:mx-20 mt-8 lg:mt-20 space-y-4 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/2 relative flex gap-4">
          <img
            className="flex-1 h-64 lg:h-350 object-cover rounded-lg shadow-lg"
            alt="img"
            src="https://kamagra.hr/wp-content/uploads/2019/07/Cenforce-200.jpg"
          />
        </div>
        <div className="w-full lg:w-45 text-left text-lg mb-8 lg:mb-0">
          <h2 className="font-semibold mb-4">
            UZROCI PREURANJENE EJAKULACIJE | KAMAGRA I RJEŠENJE JE KORIŠTENJE
            KAMAGRA PROIZVODA
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Čak i neke bolesti mogu biti uzrok prerane ejakulacije (depresije,
            fobije, upale prostate, multipla skleroza). To je često kod mladih
            ljudi, posebno u prvih pokušaja seksualnog života. U tom hručaju,
            problem se obično rješava s vremenom. To mogu uzrokovati i neke
            droge (psihostimulansi, kokain) i lijekovi (vazoaktivni amini).Jedno
            od brzih i dugoročnih rješenja za erektilnu disfunkciju, odnosno
            poremećaj erekcije, je korištenje Kamagra proizvoda. Kamagra je
            svakako trenutačno najbolje rješenje!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Savjeti;
