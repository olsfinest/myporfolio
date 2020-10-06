class Prices extends React.Component {
    
    render() {
        return (
            <div>
                <ul>
                    <li>Bitcoin Rate for {this.props.bpi.USD.description} : {this.props.bpi.USD.code}                   
                    <strong>{this.props.bpi.USD.rate}</strong></li>
                </ul>
            </div>
        );
    }

}

export default Prices;