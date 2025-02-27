import Slot2 from './slot2'; 
import ReactDOM from 'react-dom';
import styles from '../../../styles/slot2.module.css';

class Slot2Component extends HTMLElement {
    constructor() {
        super();
        // Shadow DOM 생성
        this.attachShadow({ mode: 'open' });
        const styleEl = document.createElement('style');
      styleEl.textContent = styles;
      this.shadowRoot.appendChild(styleEl);
        this.shadowRoot.innerHTML += `<div id="slot2-root"></div>`;
      }

      renderReactComponent() {
        let ComponentToRender = Slot2;
        const root = ReactDOM.createRoot(this.shadowRoot.querySelector('#slot2-root'));
        root.render(<ComponentToRender/>);
      }
  
      connectedCallback() {
        this.renderReactComponent();
      }
    

}

export default Slot2Component;
