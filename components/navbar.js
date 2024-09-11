class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 40px 200px;
        }

        nav .link ul {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            list-style: none;
        }

        nav .link ul a {
            text-decoration: none;
            color: white;
            font-weight: 600;
            font-size: 20px;
            transition: all 500ms ease-in-out;
        }

        ul a .active {
            color: #1E90FF;
        }

        nav .link ul a:hover {
            color: #1E90FF;
        }
        
        nav .logo a {
            font-size: 40px;
            text-decoration: none;
            color: white;
            font-weight: 600;
            transition: all 500ms ease-in-out;
        }
        nav .logo h1 {
            transition: all 600ms ease-in-out;
        }
        h1 .active {
            color: #1E90FF;
        }

        nav .logo h1:hover {
            color: #1E90FF;
        }
        </style>
        <nav>
            <div class="logo">
                <a href="index.html" target="_self" class="active"><h1>Dylan Ngo</h1></a>
            </div>
            <div class="link">
                <ul>
                    <li><a href="about.html" target="_self" class="active">About</a></li>
                    <li><a href="https://github.com/den09879" target="_blank">Projects</a></li>
                    <li><a href="webgames.html" target="_self" class="active">Web Games</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
      `;
    }
  }
  
  customElements.define('nav-bar', Header);