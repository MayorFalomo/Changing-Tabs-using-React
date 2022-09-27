import './App.css';
import Tabs from "./components/Tabs"
import { useState } from 'react'
import { FaAngleDoubleRight } from "react-icons/fa"

function App() {

      const [members, setMembers] = useState([
    
        {
            id: 1,
            position: "Full Stack Web Developer",
            name: "TOMMY",
            Date: "December 2015 - Present",
            firstComment: "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
            secondComment: "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
          thirdComment: "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",
            category: "Web-Dev",
        },
        {
            id: 2,
            position: "Front-End Engineer",
            name: "BIGDROP",
            Date: "May 2015 - December 2015",
            firstComment: "Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.",
            secondComment: "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester",
            thirdComment: "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
          fourthComment:  " Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1"
        },
        {
            id: 3,
            position: "Engineering Intern",
            name: "CUKER",
            Date: "May 2014 - September 2015",
            firstComment: "I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.",
            secondComment: "YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.",
          thirdComment: "Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism.",
            category: "intern",
        },
    ])

  const [current, setCurrent] = useState(0)  //To Keep track of the current member displaying
  const [active, setActive] = useState(0)   // To keep track of which index is active presently

  let newArray = members[current]

  const handleClick = (param) => {
    setCurrent(param)
        setActive(!active)
  }
 

  return (
    <div className="App">


      <div className='flexItem'>
        <Tabs newArray={newArray} current={current} active={active} handleClick={handleClick} />
        </div>
    </div>
  );
}

export default App;
