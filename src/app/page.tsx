import Image from "next/image";
import styles from "@/styles/Home.module.scss";

import { IoTimeOutline } from "react-icons/io5";

import Comment from "@/components/Comment";

const comments = [
  {
    id: 1,
    user: "Travisstraped836",
    date: "July 17, 2023",
    comment: (
      <p>
        Has anyone seen this girl? {"I’m"} hoping {"she’s"} real{" "}
        <a href="https://www.eurogirlsescort.com/escort/ally/59726323/?list=aso9v7">
          https://www.eurogirlsescort.com/escort/ally/59726323/?list=aso9v7
        </a>
        and{" "}
        <a href="https://m.happyescorts.com/ally-e149249">
          https://m.happyescorts.com/ally-e149249
        </a>{" "}
        she also has a website{" "}
        <a href="https://russian-beauty.vercel.app">
          https://russian-beauty.vercel.app
        </a>
        , I asked for more information but she is new in Barcelona and no
        reviews on sexomercadobcn or here
      </p>
    ),
  },
  {
    id: 2,
    user: "pastfuntimes538",
    date: "July 18th, 2023",
    comment: <p>Se preguntaba la misma jaja</p>,
  },
  {
    id: 3,
    user: "specialservicecollector6917",
    date: "July 19th, 2023",
    comment: (
      <p>
        I remember when texting her she mentioned that she will add reviews soon
        on her website which will probably help out more since she is new to
        this xaxa
      </p>
    ),
  },
  {
    id: 4,
    user: "messifan82",
    date: "July 21th, 2023",
    comment: (
      <p>
        Great risk comes with great reward! I had the pleasure of meeting this
        russian beauty and gentlemen she is definitely for real. She is far more
        sexy in person, intuitive, charming and sexy. {"She’s"} very intelligent
        and does art almost fulltime I guess you could say she is an artist on
        paper and in bed! If you treat her with respect you will not be
        disappointed. Drug free, 100% clean, she is passionate kisser, her
        demeanor and desire to be a compassionate lover/companion overcame the
        obstacle of sex without condom which I was hoping. For me Ally is the
        ultimate package.
      </p>
    ),
  },
  {
    id: 5,
    user: "Travisstraped836",
    date: "July 21th, 2023",
    comment: (
      <p>
        Wow thanks for the review! Just saw she posted on{" "}
        <a href="https://en.devozki.com/escorts/spain/">
          https://en.devozki.com/escorts/spain/
        </a>{" "}
        as well so was curious why she
        {"didn’t"} have any intel but she is new here from Russia as of 10 days
        ago
      </p>
    ),
    reply: 4,
  },
  {
    id: 6,
    user: "lavishlover538",
    date: "July 22th, 2023",
    comment: (
      <p>Lo probaré este fin de semana y te diré si estoy de acuerdo con</p>
    ),
    reply: 4,
  },
  {
    id: 7,
    user: "piemuncher0187",
    date: "July 22th, 2023",
    comment: (
      <p>
        Sorry english not so good but i saw her for 1 hour, she is real deal i
        can confirm
      </p>
    ),
  },
  {
    id: 8,
    user: "loosygoosy5391",
    date: "July 25th, 2023",
    comment: (
      <p>
        She just added reviews section on her website so it should solve this
        issue
      </p>
    ),
  },
  {
    id: 9,
    user: "pastfuntimes3",
    date: "July 26th, 2023",
    comment: (
      <p>
        muy real, pronto estaré arruinado financieramente tal vez no debería
        haber mantenido los ojos abiertos
      </p>
    ),
  },
  {
    id: 10,
    user: "distantstar9",
    date: "July 27th, 2023",
    comment: (
      <p>
        She is indeed legit. Her website{" "}
        <a href="https://russian-beauty.vercel.app">
          https://russian-beauty.vercel.app
        </a>{" "}
        is very easy to navigate through. She made me feel like I was the only
        man in the world and I had her undivided attention and adoration for the
        entire session. She took pride in making sure I was satisfied with the
        session. Also, she has a Russian accent which is super sexy when she
        started talking dirty to me. The rest of the story: What can I say? She
        is awesome.Her blowjob was to die for. Bottom line is that she is sweet,
        beautiful, young and a skilled provider. Contact and communication was
        easy . Donation discussion was very straightforward with deposit. Venue
        was safe and clean. Greeted at the door in lingerie and one look and I
        knew I was in for a great session. Shower is mandatory , so is mouthwash
        . She joined me in the shower and we connected right away . Conversation
        flowed nicely and it never felt awkward despite this being our first
        visit together. Damn, she is so gorgeous dry or wet. After the shower,
        on to the bedroom for the massage and play . She knows how to tease and
        excite a man . She understands where the erogenous zones were located on
        me ! Session was safe and not rushed. And she is young, flexible,
        energetic and adorable. If I {"didn’t"} live in Madrid, I would visit
        her on a regular basis. I left a review on her website as well to help
        her start up, {"she’s"} a very sweet gal. Sad she is leaving Spain so
        soon.
      </p>
    ),
  },
  {
    id: 11,
    user: "diddlysenior",
    date: "July 27th, 2023",
    comment: (
      <p>
        Yup she is real but very expensive, unfortunately will not be able to
        afford her
      </p>
    ),
    reply: 1,
  },
  {
    id: 12,
    user: "salvadorianpirate0854",
    date: "July 27th, 2023",
    comment: (
      <p>Todavía esperando su respuesta en WhatsApp parece muy ocupada</p>
    ),
  },
  {
    id: 13,
    user: "Travisstraped836",
    date: "July 28th, 2023",
    comment: (
      <p>
        Just saw her for a 30 minute session to get my feet wet, she did live up
        to your review especially with her blowjob
      </p>
    ),
    reply: 10,
  },
  {
    id: 14,
    user: "spannishmugger6293",
    date: "August 10th, 2023",
    comment: (
      <p>
        Oficialmente amo a las chicas rusas, ella es muy cariñosa y flexible por
        decir lo menos!!
      </p>
    ),
  },
  {
    id: 15,
    user: "spannishmugger6293",
    date: "August 11th, 2023",
    comment: (
      <p>
        She used to have instagram but I think she deactivated it {":("} but I
        follow her art page
      </p>
    ),
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.title}>
        <h1>Russian Beauty 3992</h1>
        <div className={styles.time}>
          <IoTimeOutline />
          <p>July 17, 2023</p>
        </div>
      </section>
      <section className={styles.comments}>
        {comments.map((comment, i) => (
          <Comment id={i} key={i} />
        ))}
      </section>
    </main>
  );
}
