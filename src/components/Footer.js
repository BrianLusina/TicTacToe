import React,{ Component } from 'react'
import '../styles/footer.css';

export default class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="row">
                    <div className="small-12 columns">
                        <p>Made by 
                            <a href="http://thelusina.surge.sh" target="_blank"> The Lusina  </a>
                            #Gamer
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}

