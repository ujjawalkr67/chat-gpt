import React from 'react';
import './App.css';
import './normal.css'
import {AiOutlineSend,AiFillGithub} from 'react-icons/ai'
import {BsFillTrashFill ,BsDiscord} from 'react-icons/bs'
import {FaKey} from 'react-icons/fa'


// import aside from './components/aside'

const App = () => {
    return (
      <div className="App">
        <aside className="sidemenu"> 
          <div className='side-menu-button'>
            <span>+</span>
            New Conversation
          </div>

            <hr className='horizontal-line'/>
          <div className='sidemenu-2'>

            
            <div className='side-menu-button-trash'>
              <span><BsFillTrashFill/></span>
              Clear Conversation
            </div>
            <div className='side-menu-button-key'>
              <span><FaKey/></span>
              App Key
            </div>
          
            <div className='dark-mode'>
              Dark Mode
            </div>
            <div className='gpt-text'>
              <AiFillGithub/><span>freegpt-webui-chimera</span>
            </div>
            <div className='chimera'>
              <BsDiscord/> <span>ChimeraGPT</span>
            </div>
          </div>
        </aside>



        <section className='chatbox'>
         <div className='chat-input-holder'>
          <div className='textarea-wrapper'>
            <textarea className='chat-input-textarea'
            rows="1">
            </textarea>
            <button> <AiOutlineSend /></button>
            </div>
          </div>
          <div className='last-section'>
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            <button>default</button>
            <button>wow</button>
          </div>
        </section>
      </div>
    );
  }


export default App;
