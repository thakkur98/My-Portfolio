(()=>{var e={};e.id=636,e.ids=[636],e.modules={979:()=>{},2015:e=>{"use strict";e.exports=require("react")},2183:(e,r,i)=>{"use strict";i.r(r),i.d(r,{default:()=>j});var o=i(8732);i(979);var n=i(2015),t=i(2770),s=i.n(t);let l=s().nav`
  width: 100%;
  padding: 16px 32px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 12px 20px;
  }
`,a=s().p`
  font-size: 20px;
  font-weight: bold;
  color: #4f46e5;
  cursor: pointer;
`,d=s().ul`
  display: flex;
  gap: 64px;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;

  button {
    padding: 10px 20px;
    color: #fff;
    background-color: #4f46e5;
    border: 1px solid transparent;
    cursor: pointer;
  }

  button:hover {
    color: #4f46e5;
    background-color: #fff;
    border: 1px solid #4f46e5;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background: white;
    position: absolute;
    top: 53px;
    left: 0;
    width: 100%;
    padding: 20px 0;
    gap: 20px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    display: ${({isOpen:e})=>e?"flex":"none"};
  }
`,p=s().li`
  cursor: pointer;
  font-weight: 500;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #4f46e5;
  }
`,x=s().div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #4f46e5;
    margin: 5px 0;
    transition: 0.4s;
  }
`,c=()=>{let[e,r]=(0,n.useState)(!1),i=(e,i)=>{let o=window.innerWidth<=768;window.scrollTo({top:o?i:e,behavior:"smooth"}),r(!1)};return(0,o.jsxs)(l,{children:[(0,o.jsx)(a,{onClick:()=>i(0,0),children:"MOHIT PORTFOLIO"}),(0,o.jsxs)(x,{onClick:()=>r(!e),children:[(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{})]}),(0,o.jsxs)(d,{isOpen:e,children:[(0,o.jsx)(p,{onClick:()=>i(700,1200),children:"About"}),(0,o.jsx)(p,{onClick:()=>i(1600,2500),children:"Experience"}),(0,o.jsx)(p,{onClick:()=>i(2500,3800),children:"Acheivement"}),(0,o.jsx)(p,{onClick:()=>i(3300,4e3),children:"Contact"}),(0,o.jsx)("button",{onClick:()=>window.open("/pdf/MohitBisht.pdf","_blank"),children:"Resume"})]})]})};var h=i(503);let f=s().footer`
  padding: 32px 20px;
  background-color: #f3f4f6;
  text-align: center;
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`,u=s().p`
  margin: 0;
  font-size: 16px;
`,g=s().a`
  color: #4f46e5;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s ease;

  &:hover {
    color: #3730a3;
  }
`,m=s().div`
  display: flex;
  gap: 24px;
  margin-top: 8px;

  a {
    font-size: 20px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`,b=()=>(0,o.jsxs)(f,{children:[(0,o.jsxs)(u,{children:["\uD83D\uDE80 Built with passion by"," ",(0,o.jsx)(g,{href:"https://github.com/thakkur98/My-Portfolio",target:"_blank",rel:"noopener noreferrer",children:"Mohit Bisht"})]}),(0,o.jsxs)(m,{children:[(0,o.jsxs)(g,{href:"https://github.com/thakkur98/My-Portfolio",target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)(h.hL4,{})," GitHub"]}),(0,o.jsxs)(g,{href:"https://www.linkedin.com/in/your-linkedin",target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)(h.QEs,{})," LinkedIn"]})]}),(0,o.jsxs)(u,{children:["\xa9 ",new Date().getFullYear()," Mohit Bisht. All rights reserved."]})]});function j({Component:e,pageProps:r}){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(e,{...r}),";",(0,o.jsx)(b,{})]})}},2770:e=>{"use strict";e.exports=require("styled-components")},8732:e=>{"use strict";e.exports=require("react/jsx-runtime")}};var r=require("../webpack-runtime.js");r.C(e);var i=e=>r(r.s=e),o=r.X(0,[503],()=>i(2183));module.exports=o})();