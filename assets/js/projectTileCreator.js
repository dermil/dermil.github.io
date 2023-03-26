import { projectDetails } from "./data";

class ProjectTile extends React.Component {   
    render() {
        return (
            <article class={"style"+this.props.style}>
                <span class="image">
                    <img src={this.props.img} alt="" />
                </span>
                <a href={this.props.link} target="_blank">
                    <h2>{this.props.title}</h2>
                    <div class="content">
                        <p>{this.props.description}</p>
                    </div>
                </a>
            </article>
        )
    }
}

export default class TileCreator extends React.Component {

    render() {
        let tilePad;
        tilePad = projectDetails.map((tileObj, i, tileInfoArr) => {
            return (
                <ProjectTile 
                    link={tileInfoArr[i].link}
                    style={tileInfoArr[i].styleNumber}
                    title={tileInfoArr[i].title}
                    image={tileInfoArr[i].img}
                    description={tileInfoArr[i].description}
                />
            )
        })

        return <section class="tiles"> {tilePad} </section>
    }
}

const root = reactDOM.createRoot(document.getElementById('tileRender'));
root.render(
    <React.StrictMode>
        <TileCreator />
    </React.StrictMode>
)