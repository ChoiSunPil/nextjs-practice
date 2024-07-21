import Slot1 from './slot1'; 
import ReactDOM from 'react-dom';
import styles from '../../../styles/slot1.module.css';

class Slot1Component extends HTMLElement {
    constructor() {
        super();
        // Shadow DOM 생성
        this.attachShadow({ mode: 'open' });
        const styleEl = document.createElement('style');
      styleEl.textContent = styles;
      this.shadowRoot.appendChild(styleEl);
        this.shadowRoot.innerHTML += `
        <div id="slot1-root"></div>`;
      }

      renderReactComponent() {
        let ComponentToRender = Slot1;
        const root = ReactDOM.createRoot(this.shadowRoot.querySelector('#slot1-root'));
        root.render(<ComponentToRender/>);
      }
  
      connectedCallback() {
        this.renderReactComponent();
      }
    

}

export default Slot1Component;
