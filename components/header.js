const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<style>
    nav {
    height: 40px;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:  #0a0a23;
    }

    ul {
        padding: 0;
    }
    
    ul li {
        list-style: none;
        display: inline;
    }
    
    a {
        font-weight: 700;
        margin: 0 25px;
        color: #fff;
        text-decoration: none;
    }
    
    a:hover {
        padding-bottom: 5px;
        box-shadow: inset 0 -2px 0 0 #fff;
    }
</style>
<header>
    <nav>
    <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="about.html">Nosotros</a></li>
        <li><a href="work.html">Servicios</a></li>
        <li><a href="contact.html">Contacto</a></li>
    </ul>
    </nav>
</header>
`;

class Header extends HTMLElement {
constructor() {
    super();
}

connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
}
}

customElements.define('header-component', Header);

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}