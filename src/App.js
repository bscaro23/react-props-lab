import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import Nav from './components/Nav/Nav.jsx'
// import pics
import homer from './homer.jpg'
import bart from './bart.png'
import lisa from './lisa.png'
import maggie from './maggie.png'
import marge from './marge.png'

const simpsons = [
  {
    name: 'Homer Simpson',
    emailAddress: 'homer.simpson@yahoo.com',
    pic: homer,
    about: "Homer Simpson, the bumbling yet lovable father from The Simpsons, works at a nuclear power plant and is known for his love of donuts and beer. Despite his frequent mishaps, he always tries to do right by his family.",
  },
  {
    name: 'Marge Simpson',
    emailAddress: 'marge.simpson@yahoo.com',
    pic: marge,
    about: "Marge Simpson, the caring and patient matriarch of The Simpsons, is known for her iconic blue beehive hair and unwavering dedication to her family. She’s the voice of reason in the Simpson household, balancing Homer’s antics with her kindness and wisdom.",
  },
  {
    name: 'Bart Simpson',
    emailAddress: 'bart.simpson@yahoo.com',
    pic: bart,
    about: "Bart Simpson, the mischievous 10-year-old son in The Simpsons, is known for his rebellious attitude, prankster spirit, and catchphrase, 'Eat my shorts!' Despite his troublemaking, he has a good heart and often shows surprising moments of loyalty and compassion.",
  },
  {
    name: 'Lisa Simpson',
    emailAddress: 'lisa.simpson@yahoo.com',
    pic: lisa,
    about: "Lisa Simpson, the intelligent and socially conscious 8-year-old of The Simpsons, stands out for her love of reading, jazz music, and activism. Though often the voice of reason in her chaotic family, she’s also a dreamer with big ambitions to change the world.",
  },
  {
    name: 'Maggie Simpson',
    emailAddress: 'maggie.simpson@yahoo.com',
    pic: maggie,
    about: "Maggie Simpson, the quiet but observant baby of The Simpsons, is known for her ever-present pacifier and expressive eyes. Though she rarely speaks, her actions often reveal surprising cleverness and courage beyond her years.",
  },
]

function App() {
  return (
    <div>
      <Nav />
      <section className="blog-items team-cards">
        <div className="inner-wrapper">
          <div className="blog-container">
            {
              simpsons.map((simpson, index) => {
                return (
                  <ProfileCard
                key={index}
                name={simpson.name}
                emailAddress={simpson.emailAddress}
                pic={simpson.pic}
                about={simpson.about}
                />
                )
              })
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
