import Slider from "./Tools/Slider";
export default function Speaking(){
    const TM=[
        {
            image:['/Speaker/TM/Sp1.jpg','/Speaker/TM/Sp2.jpg','/Speaker/TM/Sp3.jpg','/Speaker/TM/Sp4.jpg','/Speaker/TM/Sp5.jpg',],
            text: 'Prepared Speeches Awards'
        },
        {
            image:['/Speaker/TM/TT1.jpg','/Speaker/TM/TT2.jpg','/Speaker/TM/TT3.jpg',],
            text:'Table Topics Awards'
        },
        {
            image:['/Speaker/TM/Ev8.jpg','/Speaker/TM/Ev7.jpg','/Speaker/TM/Ev6.jpg','/Speaker/TM/Ev5.jpg','/Speaker/TM/Ev4.jpg','/Speaker/TM/Ev3.jpg','/Speaker/TM/Ev2.jpg','/Speaker/TM/Ev1.jpg'],
            text:'Evaluation Awards'
        }
    ];
    const DBPS=[
        {
            image:['/Speaker/DBPS/Jabali.jpg','/Speaker/DBPS/Cert1.jpg','/Speaker/DBPS/Cert2.jpg','/Speaker/DBPS/Cert3.jpg','/Speaker/DBPS/Cert4.jpg','/Speaker/DBPS/Cert5.jpg',],
            text:'Speaking Awards and Certs'
        },
        {
            image:['/Speaker/DBPS/Illouwa.jpg','/Speaker/DBPS/Tag1.jpg','/Speaker/DBPS/Tag2.jpg','/Speaker/DBPS/Tag3.jpg',],
            text:'Adjudication Awards and Roles'
        }
    ]
    return(
        <>
        <section className="speakingIntro">
            <h3>Background</h3>
            <p>Despite a childhood of endless student leadership, my speaking and debating journey only truly begun to take shape in campus through the debate club and Toastmasters, JKUAT Gavel</p>
        </section>
        <section className="toastmasters">
            <h3>Toastmasters</h3>
            <p>
                I joined in 2022 in my third year. Though a little late I made it a goal to finish the competent communicator manual before completing school. It's a goal I fell a little short of(I managed 8 out of the 10 speeches) but the journey to that point left me transformed. Both as a speaker and as a speech evaluator.
            </p>
            <Slider slides={TM}/>
        </section>
        <section className="debatePS">
            <h3>The Debate Club</h3>
            <p>Joined in 2022(Magical year that one). In it a found a home for the boy in me that loved to think. The boy that had so many thoughts about so many things. I found a place where I learned to organize those thoughts. To present them to my peers in a convincing manner. In a lot of ways I learned to think. To consider different perspectives, to consider different priorities, to consider the impact and practicality of things. Safe to say, I wouldn't be the strcutured thinker I am today without them. Through it I got opportunities to train and adjudicate future debators and public speakers.</p>
            <Slider slides={DBPS}/>
        </section>
        </>
    );
}