export default function VariableSpacer(props){
    let spaceHeight = "10vh";
    if (props.spaceHeight){spaceHeight = props.spaceHeight};
    return(
        <div style={{height:spaceHeight}}> </div>
    );
}