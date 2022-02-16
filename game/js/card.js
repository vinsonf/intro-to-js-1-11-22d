export class Card {
    constructor(text, suit){
        this.text = text;
        this.suit = suit;
        this.element = document.createElement('div');
    
        
      

        this.element.innerHTML = `
        <div class="card ${getColor(suit)}">
            <div>${this.text}</div>
            <div class="suit">${getUniCode(suit)}</div>
            <div class="bottom-text">${this.text}</div>
        </div>
        `;
    }

    display() {
        document.body.appendChild(this.element);
    }
}


function getUniCode(suit) {
    return suit === 'heart' ? '♥' : suit === 'diamond' ? '♦' : suit === 'spade' ? '♠' : '♣';
}












function getColor(suit) {
    return suit === 'heart' || suit === 'diamond' ? 'red' : 'black'
}