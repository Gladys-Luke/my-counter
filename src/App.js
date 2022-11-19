
import React, { Component } from 'react'
import './App.css';

export default class CounterAppClass extends Component {

    constructor(props) {
        super();
        this.state = {
            count: 0
        }
    }

    handleIncrease() {
        this.setState({
            count: this.state.count + 1
        })
    }
    handleDecrease() {
        this.setState({
            count: this.state.count - 1
        })
    }
    handleReset() {
        this.setState({
            count: this.state.count = 0
        })
    }

    render() {
      return (
            <div className='bg-white h-screen flex flex-col justify-center items-center gap-50'>
                <div className=' bg-teal-300 p-20 rounded-md shadow-2xl'>
                   <div>
                   <h1 className='text-5xl  text-center mb-10' >Counter App</h1>
                   </div>
                   <div  className='text-7xl rounded-full text-center'>
                   {this.state.count}
                   </div>
                   <div  className='flex flex-col justify-center items-center gap-6 sm:flex-row mt-10'>
                   <button className='bg-green-500 hover:bg-sky-700 text-white w-48 rounded-md shadow-2xl p-2' onClick={this.handleIncrease.bind(this)}>Increase</button>
                    <button className='bg-red-500 hover:bg-sky-700 text-white w-48 rounded-md shadow-2xl p-2' onClick={this.handleDecrease.bind(this)}>Decrease</button>
                   </div>
                    <div className='flex flex-col justify-center items-center'>
                    <button className='bg-yellow-500 hover:bg-sky-700 text-white w-24 rounded-md shadow-2xl p-2 mt-10' onClick={this.handleReset.bind(this)}>Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}









