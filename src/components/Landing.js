export default function Landing(props){
    let align = "center";
    let topSpace = "0";
    let textColor = "#ffffff";
    let titleType = "landing-title";
    let subtitleType = "landing-subtitle";
    let gradient = "linear-gradient(rgba(75, 75, 75, 0.6), rgba(82, 37, 0, 0.6))"
    let bgPosY = "center";
    let totalHeight = "93vh";
    let textAlign = "left";
    if (props.textAlign){textAlign = props.textAlign}
    if (props.align){align = props.align}
    if (props.topSpace){topSpace = props.topSpace}
    if (props.textColor){textColor = props.textColor}
    if (props.titleType){titleType = props.titleType}
    if (props.subtitleType){subtitleType = props.subtitleType}
    if (props.gradient){gradient = props.gradient}
    if (props.bgPosY){bgPosY = props.bgPosY}
    if (props.totalHeight){totalHeight = props.totalHeight}
    let landingStyle = {
        height: totalHeight,
        position: "relative",
        backgroundImage: gradient + ", url(" + props.image + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: bgPosY,
        backgroundPositionX: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: align
    }
    let textStyle = {
        paddingTop: topSpace,
        color: textColor,
        textAlign: textAlign,
    }
    return(
        <div className="landing" style={landingStyle}>
            <div className="landing-text" style={textStyle}>
                {props.title ? <h1 className={titleType}>{props.title}</h1> : <h1 className={titleType}>{props.title}</h1>}
                {props.subtitle ? <h2 className={subtitleType}>{props.subtitle}</h2> : null}
            </div>
            {props.arrow ? <h2 className="landing-arrow">⌄</h2> : null}
        </div>
    );
}