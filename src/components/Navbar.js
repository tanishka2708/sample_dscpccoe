import React from 'react';
import Image from '../download.png';


export const itemClick = (e) => {
    console.log("clicked");
  }
  
  export const menuData = [
    {
      color: "#F4B400",
      icon: "fa-paper-plane",
      content : "Connect",
      click: itemClick
    },{
      color: "#DB4437",
      icon: "fa-chart-bar",
      content : 'Projects',
      click: itemClick
    },{
      color: "#F4B400",
      icon: "fa-users",
      content : 'The Team',
      click: itemClick
    },{
      color: "#0F9D58",
      icon: "fa-tags",
      content : 'Events',
      click: itemClick
    },{
      color: "#4285F4",
      icon: "fa-home",
      content : 'Home',
      click: itemClick
    },
    {
      color: "#DB4437",
      icon: "fa-play-circle",
      content : 'Videos',
      click: itemClick
    },
  ];

  
class Navbar extends React.Component {
    constructor(props) {
      super(props);
  
  this.getInitialState = this.getInitialState.bind(this);
  this.componentWillMount = this.componentWillMount.bind(this);
  this.makeMenu = this.makeMenu.bind(this);
  this.toggleMenu = this.toggleMenu.bind(this);
  this.animateButtons = this.animateButtons.bind(this);
      
  }
  
  
    getInitialState () {
      return {
        menuOpen: false,
      };
    }
    
    componentWillMount () {
      this.makeMenu(menuData);
    }
    makeMenu (menuConfig) {
      const angle = 360 / menuConfig.length;
      let rotation = 0;
      let menuItems = [];
      
      menuConfig.forEach(({
        color,
        content, 
        icon, 
        click
      }) => {
        menuItems.push({
          color,
          icon,
          content,
          click,
          rotation,
          angle,
          show: false
        });
        rotation += angle;
      }); 
      
      this.setState({
        menuItems: menuItems
      });
    }
  
    toggleMenu () {
  
      this.setState({
        menuOpen: !this.state.menuOpen
      });
    }
  
    animateButtons () {
      const length = this.state.menuItems.length;
      
      const stagger = (i) => {
        if (i < length) {
            setTimeout(() => {
            let items = this.state.menuItems;
            let showing = this.state.menuItems[i].show;
            
            this.setState({
              menuItems: [
                ...items.slice(0, i),
                Object.assign({}, items[i], {
                  show: !showing
                }),
                ...items.slice(i + 1)
              ]
            });
            
            stagger(i + 1);
            
          },60);
        }
      };
      
      stagger(0); 
    }
  
    render() {
      return (
        <div className="">
          
          <MenuToggle 
            
            toggle={this.toggleMenu}
            open={this.state.menuOpen}
            animateButtons={this.animateButtons}
          />
          
          
          
          <Menu
            size={18}
            items={this.state.menuItems} 
            open={this.state.menuOpen}
          />
        
          <div className=" pl-3 pt-1 text-secondary" style={{display:"flex", flexDirection:"row"}}>
            <img src={Image} className="" alt="img" style={{width:"75px", height:"75px"}}/>
          <div className="mx-3 mt-4 ">
          <h3>DSC PCCOE</h3>
          
          </div>
            
          </div>
          </div>
      )}
}

const Menu = ({
    size, 
    items, 
    toggle, 
    open
  }) => (
    <div className={open 
          ? "menu-wrapper-open" 
          : "menu-wrapper-closed"}
    >
      <div className={"menu-background"}>
        <MenuItems
          size={size}
          items={items} 
          open={open}
        />
      </div>
    </div>
  );
  
  const MenuItems = ({
    size, 
    items, 
    open
  }) => {
    const buttons = items.map((item) => {
      const styling = {
        transform:
          `rotate(${item.rotation}deg) 
           translate(${size/2}em) 
           rotate(${-(item.rotation)}deg)`,
        backgroundColor: item.color,
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center"
      };
      
      return (
        <div 
          className={item.show 
            ? "menu-item item-show" 
            : "menu-item item-hide"}
          style={styling}
          onClick={item.click}
        >
          
          <i style={{display:"block"}} className={"fa " + item.icon}
             aria-hidden="true"
          ></i>
          <p  className="text-white content">{item.content}</p>
        </div>
      );
    });
    
    return (
      <div 
        className={open 
          ? "button-bg animate-menu" 
          : "button-bg"}
      > {buttons}
      </div>
    ); 
  }
  
  const MenuToggle = ({
    toggle, 
    open, 
    animateButtons
  }) => (
    <button 
      className={open 
        ? "menu-toggle toggle-open" 
        : "menu-toggle toggle-closed"}
      onClick={() => {
        toggle(); 
        setTimeout(
          animateButtons, 
          120
        );
      }}
    > <i className={open 
           ? "fa fa-times"
           : "fa fa-bars"}
         aria-hidden="true"
      ></i>
    </button>
  );
  export default Navbar;