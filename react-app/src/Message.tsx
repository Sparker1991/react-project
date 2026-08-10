//Always pascal casing
function Message(){
    const name = 'Scott';

    if(name)
        return <h1>Hello {name}</h1>;
    return <h1>else statement</h1>;
}

export default Message;