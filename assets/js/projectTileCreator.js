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