const projectDetails = [
    /* template setup
    {
        id: 0,
        category: "site",
        img: "", 
        title: "",
        description: '',
        link: '', //link to where the project is hosted
        styleNumber: ''//the founding project for this has various styles that seem to change the color so i guess pick one or make it a random range
    }
    */
    {
        id: 4,
        category: "site",
        img: "images/eCommerceReact.png", 
        title: "eCommerce Store Mock-Up",
        description: "A Full, React-based e-commerce site mock up. I made it to learn a bit of how to connect APIs and manage retail data",
        link: 'https://ecommerce-store-example.netlify.app/', 
        styleNumber: '6'
    },
    {
        id: 5,
        category: "app",
        img: "images/reactCalculator.png", 
        title: "Calculator App",
        description: "A React-based fully functional calculator! This was fun to make and super challenging for me!",
        link: 'https://codepen.io/dermil/full/poaGVzr', 
        styleNumber: '4'
    },
    {
        id: 6,
        category: "app",
        img: "images/drums.png", 
        title: "Drum Machine",
        description: "A react-based Drum Machine made as part of the Free Code Camp Bootcamp",
        link: 'https://codepen.io/dermil/full/rNdjaqO', 
        styleNumber: '5'
    },
    {
        id: 7,
        category: "app",
        img: "images/timer.png", 
        title: "Hobbies Survey Form",
        description: "A Pomodoro Timer made as part of the FCC Bootcamp! Doing this after the calculator was a breeze lol.",
        link: 'https://codepen.io/dermil/full/xxzVYay', 
        styleNumber: '3'
    },
    {
        id: 1,
        category: "site",
        img: "images/manual.png", 
        title: "Technical Documentation",
        description: 'A mock-up Technical Documentation manual made from scratch with CSS and HTML.',
        link: 'https://codepen.io/dermil/full/powGNqb', 
        styleNumber: '1'
    },
    {
        id: 2,
        category: "Site",
        img: "images/productlanding.png", 
        title: "Product Landing Page",
        description: 'A simple, reactive Product Landing Page mock-up made with CSS and HTML.',
        link: 'https://codepen.io/dermil/full/WNORWYM', 
        styleNumber: '2'
    },
    {
        id: 3,
        category: "site",
        img: "images/survey.png", 
        title: "Hobbies Survey Form",
        description: "A quick and easy survey form about people's hobbies.",
        link: 'https://codepen.io/dermil/full/zYzYBmj', 
        styleNumber: '3'
    },
    {
        id: 4,
        category: "site",
        img: "images/tribute.png", 
        title: "History of Videogames",
        description: 'An abridged History of Modern videogaming!',
        link: 'https://codepen.io/dermil/full/JjNqVey', 
        styleNumber: '4'
    }
    
]
'use strict';
const e = React.createElement;

class ProjectTile extends React.Component {   
    constructor(props){
        super(props)
    }

    render() {
        const {img, styleNumber, title, link, description} = this.props.productInfo;
        return (
            <article class={"style"+styleNumber}>
                <span class="image">
                    <img src={img} alt="" />
                </span>
                <a href={link} target="_blank">
                    <h2>{title}</h2>
                    <div class="content">
                        <p>{description}</p>
                    </div>
                </a>
            </article>
        );
    }
}

class TileCreator extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
            return projectDetails.map((productInfo) => {
                return <ProjectTile 
                    productInfo={productInfo}
                />
            
            });
    }
}

const domContainer = document.querySelector('.tiles');
const root = ReactDOM.createRoot(domContainer);
root.render(e(TileCreator));