import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Player extends React.Component{
        constructor(props){
            super(props);

            this.state = {
                y: 32,
                x: 32,
            };
        }
        render(){
            let style = {
                position: 'absolute',
                top: this.state.y+'px',
                left: this.state.x+'px'
            };

            return (
                <div style={style} className='player'></div>
            );
        }
    }

    class Level extends React.Component{
        render(){
            return (
                <section className='game' >
                    <div className='board'>
                        <Player/>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='floor'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                        <div className='wall'></div>
                    </div>
                </section>
            )
        }
    }

    class App extends React.Component{
        render(){
            return (
                <div>
                    <h1>~ Underground Adventure ~</h1>
                    <Level/>
                </div>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});
